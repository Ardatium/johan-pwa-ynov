import { api } from 'boot/axios'

export function getAllLists () {
  return api.get('/lists')
}
export function createList (listName) {
  return api.post('/lists', {
    title: listName
  })
}
export function deleteList (listId) {
  return api.delete(`/lists/${listId}`)
}
