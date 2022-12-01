import Router from '@koa/router'
import * as taskControllers from '#components/task/task-controllers.js'

const tasks = new Router()

tasks.get('/', taskControllers.index)
tasks.get('/:id', taskControllers.id)
tasks.post('/', taskControllers.create)
tasks.put('/:id', taskControllers.update)
tasks.del('/:id', taskControllers.del)

export default tasks