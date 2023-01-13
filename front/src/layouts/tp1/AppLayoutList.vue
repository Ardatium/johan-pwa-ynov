<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="app-header">
      <q-toolbar>
        <q-toolbar-title class="title">
          <q-icon name="back-arrow" size="xl" @click="backToDashboard"/>
          Liste
        </q-toolbar-title>
        <q-avatar
          v-for="size in ['xl']"
          :key="size"
          :size="size"
          color="primary"
          text-color="white"
          icon="person"
        />
      </q-toolbar>
    </q-header>
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
    <q-footer class="app-footer q-py-sm">
      <div class="flex justify-between">
        <q-btn
          icon="sort"
          flat
          text-color="grey-6"
          @click="printClick"
        />
        <q-btn
          icon="add"
          round
          unelaveted
          text-color="white"
          color="purple"
          @click="addTaskModalToggle"
        />
        <q-btn
          icon="person"
          flat
          text-color="grey-6"
          @click="printClick"
        />
      </div>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref } from 'vue'
import { useAppStore } from '../../stores/tp1/tdl-store'
import { useRouter } from 'vue-router'

const addTaskModalOpen = ref(false)
const appStore = useAppStore()
const routerV = useRouter()

function addTaskModalToggle () {
  addTaskModalOpen.value = !addTaskModalOpen.value
}
function backToDashboard () {
  routerV.replace('/tp1/dashboard')
}
</script>
<style scoped>
  .title{
    color: black;
  }
  .app-header{
    background-color: rgb(255, 255, 255);
    box-shadow: 0px -2px 10px rgba(0,0,0,1);
  }
  .app-footer{
    background-color: rgb(255, 255, 255);
    box-shadow: 0px -2px 10px rgba(0,0,0,1);
  }
</style>
