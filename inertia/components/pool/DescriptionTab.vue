<script setup lang="ts">
import PoolDto from '#dtos/pool';

type Props = {
  pool: PoolDto
}

defineProps<Props>()

</script>

<template>

  <div class="pt-6">
    <p>{{ pool.description }}</p>
  </div>
</template>