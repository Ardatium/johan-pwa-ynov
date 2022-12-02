import Task from '#components/task/task-model.js'
import Joi from 'joi'

export async function index (ctx) {
    try {
        const tasks = await Task.find({})
        ctx.ok(tasks)
    } catch(e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function id (ctx) {
    try {
        const tasks = await Task.findById(ctx.params.id)
        ctx.ok(tasks)
    } catch(e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function create (ctx) {
    try {
        console.log(ctx.request.body)
        const taskValidationSchema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string(),
            list: Joi.string().required(),
            status: Joi.boolean()
        })

        const { error, value } = taskValidationSchema.validate(ctx.request.body)
        if(error) throw new Error(error)
        console.log('No error found continuing the process', value);
        const newTask = await Task.create(value)
        ctx.ok(newTask)
    } catch(e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function update (ctx) {
    try {
        console.log(ctx.request.body)
        const taskValidationSchema = Joi.object({
            title: Joi.string(),
            description: Joi.string(),
            list: Joi.string(),
            status: Joi.boolean()
        })

        const { error, value } = taskValidationSchema.validate(ctx.request.body)
        if(error) throw new Error(error)
        console.log('No error found continuing the process', value);
        // deux manières de faire
        //***** premiere option *****//
        //const task = await Task.findById(ctx.params.id)
        //task.set(value)
        //await task.save();

        //***** seconde option *****//
        const task = await Task.findByIdAndUpdate(ctx.params.id, value, { runValidators: true, new: true})

        ctx.ok(task)
    } catch(e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function del (ctx) {
    try {
        if(error) throw new Error(error)
        console.log('No error found continuing the process', value);
        //***** seconde option *****//
        const task = await Task.findByIdAndDelete(ctx.params.id)
        ctx.ok(task)
    } catch(e) {
        ctx.badRequest({ message: e.message })
    }
}
