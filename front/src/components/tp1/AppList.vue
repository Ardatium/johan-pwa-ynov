<template>
  <div class="card-list" id="">
    <div class="card-top">
      {{listName}}
      <div class="param-list">
        <q-icon class="list-info" name="menu" size="xs" @click="gotoList(listId)"/>
        <q-icon name="close" @click="appStore.handleDeleteList(listId)"/>
      </div>
    </div>
    <div class="card-body">
      <div v-for="(task, index) in tasks" :key="index">
        <div class="card-item" v-if="(isTaskInList(task.list))">
          <input type="checkbox"
            name={{task._id}}
            v-model="task.status"
            @click="appStore.handleChangeStatusTask(task)"/>
          <label for={{task._id}}>{{task.title}}</label>
          <q-icon class="delete-task" name="close" @click="appStore.handleDeleteTask(task)"/>
        </div>
      </div>
      <q-icon name="add" size="sm" @click="addTaskModalToggle"/>
    </div>
    <div class="card-bottom">
      <div class="goto" @click="gotoList(listId)"> Voir plus </div>
    </div>
  </div>
  <q-dialog v-model="addTaskModalOpen">
    <q-card>
      <q-card-section>
        <div class="text-h6" align="center">Créer une nouvelle tache</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input filled v-model="taskName" label="Nouvelle tache" placeholder="Ex: Films à voir" />
        <q-input filled v-model="taskDesc" label="Description" placeholder="Description de la tache..." />
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          unelevated label="Créer" color="primary" v-close-popup
          @click="appStore.handleCreateTask(taskName, taskDesc, listId)"/>
        <q-btn flat label="Annuler" color="" @click="addTaskModalToggle" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
// import router from 'src/router';
import { ref, computed } from 'vue'
import { useAppStore } from '../../stores/tp1/tdl-store'
import { useRouter } from 'vue-router'

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

// const routeV = useRoute()
const routerV = useRouter()
const listId = ref(props.id)
const listName = ref(props.name)
const addTaskModalOpen = ref(false)

const appStore = useAppStore()
appStore.loadTasks()
const tasks = computed(() => appStore.tasks)

function isTaskInList (id) {
  return (id === listId.value)
}
function addTaskModalToggle () {
  addTaskModalOpen.value = !addTaskModalOpen.value
}
function gotoList (id) {
  appStore.loadListFromId(listId.value)
  routerV.replace(`list/${id}`)
}
</script>
<style lang="css" scoped>
  .card-list{
    margin-bottom: 2em;
    border: 2px solid #DDDDDD;
    border-radius : 5px;
  }
  .card-top {
    background-color: #DDDDDD;
    padding-left: 5px;
    font-size: medium²;
    display: flex;
  }
  .card-body {
    padding: 5px
  }
  .card-item {
    display: flex;
  }
  .param-list {
    margin-top: 0.2em;
    margin-left: auto;
  }
  .delete-task {
    margin-top: 0.2em;
    margin-left: auto;
  }
  .list-info{
    margin-left: auto;
  }
  label {
    margin-left: 1em;
  }
</style>
