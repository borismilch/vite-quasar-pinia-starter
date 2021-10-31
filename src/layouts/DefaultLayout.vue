
<template>
  <q-layout view="hhr lpR ffr">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="flex justify-center items-center">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          {{count}}
          <q-button @click="add(15)">click</q-button>
          <q-button @click="reset">reset</q-button>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="flex flex-center">

        <router-view/>

      </q-page>
    </q-page-container>

  </q-layout>
</template>

<style>

</style>

<script setup lang="ts">
  import { useMainStore } from '../store/index'
  import { ref } from '@vue/reactivity'
  import axios from 'axios'
  import { storeToRefs } from 'pinia'

  const { count, doubleCount } = storeToRefs(useMainStore())
  const store = useMainStore()
  let data = ref([])

  const { inc } = useMainStore()

  async function getData() {
    const  response =  await axios.get('https://jsonplaceholder.typicode.com/posts')
    data.value = response.data
  }

  function toggleLeftDrawer () {

  }

  function reset () {
    store.$reset()
  }

  function add (n: number) {
    store.$patch({
      count: count.value + n
    })
  }

  getData()

  const form = ref({
    name: '',
    email: '',
    password: ''
  })
  
</script>
