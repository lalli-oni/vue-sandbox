<script setup lang="ts">
import { type Ref, ref } from "vue";
import axios from "axios";

import { User } from "./types/user";

const pageTitle = "Data Fetching Example";
let isLoading = ref(false);
let data: Ref<Array<User>> = ref([]);

const fetchData = async () => {
  try {
    isLoading.value = true;
    const response = await axios.get("https://api.example.com/data");
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
    <h1>{{ pageTitle }}</h1>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="isLoading">Loading...</div>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>