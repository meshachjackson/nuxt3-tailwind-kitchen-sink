<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <hr />
    <h2>{{ name }}</h2>
    <p>Address: {{ address }}, {{ city }}</p>
    <p>Phone: {{ phone }}</p>
    <p>Rating: {{ rating }} ({{ reviews }} reviews)</p>
    <p>Price Range: {{ price }}</p>
    <slot />
  </div>
</template>
