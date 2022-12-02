<template>
  <div class="q-pa-xl">
    <appList v-for="(list, index) in lists" :key="index" :id="list._id" :name="list.title"/>
  </div>
</template>
<script setup>
import appList from 'components/tp1/AppList.vue'
import { getAllLists } from '../../services/lists'
import { ref } from 'vue'

const lists = ref([]);

(async () => {
  const { data } = await getAllLists()
  lists.value = data
})()
</script>
