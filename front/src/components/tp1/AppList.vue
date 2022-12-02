<template>
  <div class="card-list" id="">
    <div class="card-top">
      <p>{{listName}}</p>
    </div>
    <div class="card-body">
      <div v-for="(task, index) in tasks" :key="index">
        <div v-if="(isTaskInList(task.list))">
          <input type="checkbox" id="checkbox{{index}}" v-model="task.status" @click="changeStatus(task)"/>
          <label for="checkbox{{index}}">{{task.title}}</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getAllTasks, changeStatus } from '../../services/tasks'

const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
})

const listId = ref(props.id)
const listName = ref(props.name)
const tasks = ref([]);

(async () => {
  const { data } = await getAllTasks()
  tasks.value = data
})()

function isTaskInList (id) {
  return (id === listId.value)
}
</script>
<style scoped>
  .card-list{
    margin-bottom: 2em;
    border: 2px solid #DDDDDD;
    border-radius : 5px;
  }
  .card-top {
    background-color: #DDDDDD;
    padding-left: 5px;
    font-size: medium²;
  }
  .card-body {
    padding: 5px
  }
  label {
    margin-left: 1em;
  }
</style>
