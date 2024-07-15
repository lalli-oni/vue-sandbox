<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const pageTitle = "Data Fetching Example";
const isLoading = ref(false);
const data = ref([]);

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