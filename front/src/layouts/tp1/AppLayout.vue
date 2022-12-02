<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="app-header">
      <q-toolbar>
        <q-toolbar-title class="title">
          Dashboard
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
    <q-dialog v-model="addListModalOpen">
      <q-card>
        <q-card-section>
          <div class="text-h6" align="center">Créer une nouvelle liste</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input filled v-model="listName" label="Nouvelle liste" placeholder="Ex: Films à voir" />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn
            unelevated label="Créer" color="primary" v-close-popup
            @click="createList(listName)"/>
          <q-btn flat label="Annuler" color="" @click="addListModalToggle" />
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
          @click="addListModalToggle"
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
<script setup>
import { ref } from 'vue'
import { createList } from '../../services/lists'
const addListModalOpen = ref(false)

function addListModalToggle () {
  addListModalOpen.value = !addListModalOpen.value
}
</script>
