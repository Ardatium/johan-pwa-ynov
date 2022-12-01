<template>
  <div id="">
    <h1>Exemple de counter</h1>
    <h2>{{counter}}</h2>
    <q-btn label="more" @click="inc" />
    <q-btn label="less" @click="dec" />
    <hr>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 2
  }
})

const emit = defineEmits(['incremented'])

const counter = ref(props.count)
const inc = () => {
  counter.value = counter.value + 1
  emit('incremented', counter.value)
}
const dec = () => { counter.value = counter.value - 1 }
</script>
<style lang="scss" scoped>
</style>
