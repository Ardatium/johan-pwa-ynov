import { api } from 'boot/axios'

export function getAllTasks () {
  return api.get('/tasks')
}
export function changeStatus (task) {
  return api.put('/tasks/' + task._id, {
    status: !task.status
  })
}
