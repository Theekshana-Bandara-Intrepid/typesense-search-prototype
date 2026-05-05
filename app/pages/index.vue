<!-- /pages/search.vue -->

<script setup lang="ts">
import { useSearch } from '../composables/useSearch'

const query = ref('')
const results = ref<any[]>([])

const { search } = useSearch()

const handleSearch = async () => {
    const res = await search(query.value)
    results.value = (res.grouped_hits || []).map((group: any) => {
        return group.hits[0]
    })
}
</script>

<template>
    <div>
        <h1>Typesense Search POC</h1>

        <input v-model="query" placeholder="Search trips..." />
        <button @click="handleSearch">Search</button>

        <div v-for="hit in results" :key="hit.document.id">
            <h3>{{ hit.document.name }}</h3>
            <p>{{ hit.document.primaryCountry }}</p>
        </div>
    </div>
</template>