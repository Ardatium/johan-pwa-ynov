<template>
  <div class="q-pa-xl">
    <appList v-for="(list, index) in lists" :key="index" :id="list._id" :name="list.title"/>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import appList from 'components/tp1/AppList.vue'
import { useAppStore } from '../../stores/tp1/app-store'

const appStore = useAppStore()
appStore.loadLists()
const lists = computed(() => appStore.lists)
</script>
