import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import { getAllLists, createList, deleteList } from '../../services/lists'
import { getAllTasks, createTask, changeStatus, deleteTask } from 'src/services/tasks'

export const useAppStore = defineStore('appstore', {
  state: () => ({
    lists: [],
    tasks: []
  }),
  actions: {
    async loadLists () {
      try {
        const { data } = await getAllLists()
        this.lists = data
      } catch (error) {
        Notify.create({
          message: 'Error while loading lists',
          type: 'negative'
        })
      }
    },
    async loadTasks () {
      try {
        const { data } = await getAllTasks()
        this.tasks = data
      } catch (error) {
        Notify.create({
          message: 'Error while loading lists',
          type: 'negative'
        })
      }
    },
    async handleCreateList (listName) {
      try {
        console.log('Creating list...')
        await createList(listName)
        this.loadLists()
      } catch (error) {
        throw new Error(error)
      }
    },
    async handleCreateTask (taskName, taskDesc, listId) {
      try {
        console.log('Creating list...')
        await createTask(taskName, taskDesc, listId)
        this.loadTasks()
      } catch (error) {
        throw new Error(error)
      }
    },
    async handleDeleteList (listId) {
      try {
        console.log('Deleting list...')
        await deleteList(listId)
        this.loadLists()
      } catch (error) {
        throw new Error(error)
      }
    },
    async handleDeleteTask (taskId) {
      try {
        console.log('Deleting list...')
        await deleteTask(taskId)
        this.loadTasks()
      } catch (error) {
        throw new Error(error)
      }
    },
    async handleChangeStatusTask (task) {
      try {
        await changeStatus(task)
        this.loadTasks()
      } catch (error) {
        throw new Error(error)
      }
    }
  }
})
