<template>
  <h4> {{list.title}} </h4>
  <div v-for="(task, index) in tasks" :key="index">
      <div class="task-card" v-if="(isTaskInList(task.list))">
        <div class="card-content">
          <input type="checkbox"
            name={{task._id}}
            v-model="task.status"
            @click="appStore.handleChangeStatusTask(task)"/>
          <label for={{task._id}}>{{task.title}}</label>
          <div class="card-desc">
              {{task.description}}
          </div>
          <q-icon class="delete-task" name="close" @click="appStore.handleDeleteTask(task)"/>
        </div>
      </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { useAppStore } from '../../stores/tp1/tdl-store'
import { useRoute } from 'vue-router'

const route = useRoute()
const appStore = useAppStore()
appStore.loadListFromId(route.params.id)
appStore.loadTasks()
const tasks = computed(() => appStore.tasks)
const list = computed(() => appStore.currentList)

function isTaskInList (id) {
  return (id === route.params.id)
}
</script>
<style lang="css" scoped>
  .task-card {
    margin-bottom: 2em;
    margin-left: 2em;
    margin-right: 2em;
    border: 2px solid #DDDDDD;
    border-radius : 5px;
  }
  .card-desc {
    margin-left: 1em;
    margin-top: 0.2em;
    color: #AAAAAA;
  }
  .card-content {
    display: flex;
  }
  .delete-task {
    margin-top: 0.2em;
    margin-left: auto;
  }
  label {
    margin-left: 1em;
  }
</style>
