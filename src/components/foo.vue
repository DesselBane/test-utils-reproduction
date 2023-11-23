<template>
  <h1>Hello there {{ maybe }}</h1>
</template>

<script setup lang="ts">

export interface Props {
  maybe?: string
}

withDefaults(defineProps<Props>(), {
  maybe: 'default'
})

</script>
