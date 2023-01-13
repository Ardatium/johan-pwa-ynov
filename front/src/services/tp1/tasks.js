import { api } from 'boot/axios'

export function getAllTasks () {
  return api.get('/tasks')
}
export function createTask (taskName, taskDesc, listId) {
  return api.post('/tasks', {
    title: taskName,
    description: taskDesc,
    list: listId
  })
}
export function changeStatus (task) {
  return api.put(`/tasks/${task._id}`, {
    status: !task.status
  })
}
export function deleteTask (task) {
  return api.delete(`/tasks/${task._id}`)
}
export function getTask (taskId) {
  return api.get(`/tasks/${taskId}`)
}
export function getTasksFromList (listId) {
  return api.get(`/tasks/list/${listId}`)
}
