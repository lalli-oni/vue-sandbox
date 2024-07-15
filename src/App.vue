<script setup lang="ts">
import { type Reactive, reactive, type Ref, ref } from "vue";
import axios from "axios";

import { User } from "./types/user";

const PAGE_TITLE = "Data Fetching Example";
const API_HOSTNAME = "https://api.example.com";

let isLoading: Ref<boolean> = ref(false);
let data: Reactive<Array<User>> = reactive([]);

const fetchData = async () => {
  try {
    isLoading.value = true;
    const response = await axios.get(API_HOSTNAME + "/data");
    data = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div>
    <h1>{{ PAGE_TITLE }}</h1>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="isLoading">Loading...</div>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>