import list from '#components/list/list-model.js'
import Joi from 'joi'

export async function index (ctx) {
    try {
        const lists = await list.find({})
        ctx.ok(lists)
    } catch(e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function id (ctx) {
    try {
        const lists = await list.findById(ctx.params.id)
        ctx.ok(lists)
    } catch(e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function create (ctx) {
    try {
        console.log(ctx.request.body)
        const listValidationSchema = Joi.object({
            title: Joi.string().required(),
        })

        const { error, value } = listValidationSchema.validate(ctx.request.body)
        if(error) throw new Error(error)
        console.log('No error found continuing the process', value);
        const newlist = await list.create(value)
        ctx.ok(newlist)
    } catch(e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function update (ctx) {
    try {
        console.log(ctx.request.body)
        const listValidationSchema = Joi.object({
            title: Joi.string().required(),
            description: Joi.string(),
            status: Joi.boolean()
        })

        const { error, value } = listValidationSchema.validate(ctx.request.body)
        if(error) throw new Error(error)
        console.log('No error found continuing the process', value);
        // deux manières de faire
        //***** premiere option *****//
        // const list = await list.findById(ctx.params.id)
        // list.set(value)
        // await list.save();

        //***** seconde option *****//
        const lists = await list.findById(ctx.params.id, value, { runValidators: true, new: true})

        ctx.ok(lists)
    } catch(e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function del (ctx) {
    try {
        const lists = await list.findByIdAndDelete(ctx.params.id)
        ctx.ok(lists)
    } catch(e) {
        ctx.badRequest({ message: e.message })
    }
}