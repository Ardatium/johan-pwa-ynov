import { defineStore } from 'pinia'
import { Notify } from 'quasar'
import { getAllLists, createList, deleteList, getList } from '../../services/tp1/lists'
import { getAllTasks, createTask, changeStatus, deleteTask, getTask } from 'src/services/tp1/tasks'
import { ref } from 'vue'

export const useAppStore = defineStore('appstore', {
  state: () => ({
    lists: [],
    tasks: [],
    currentList: ref(),
    currentTask: ref()
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
    async handleDeleteTask (task) {
      try {
        console.log('Deleting list...')
        await deleteTask(task)
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
    },
    async loadListFromId (id) {
      try {
        const { data } = await getList(id)
        this.currentList = data
      } catch (error) {
        Notify.create({
          message: 'Error while loading lists',
          type: 'negative'
        })
      }
    },
    async loadTaskFromId (id) {
      try {
        const { data } = await getTask(id)
        this.currentTask = data
      } catch (error) {
        Notify.create({
          message: 'Error while loading lists',
          type: 'negative'
        })
      }
    }
  }
})
