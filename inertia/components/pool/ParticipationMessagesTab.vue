<script setup lang="ts">
import PoolDto from '#dtos/pool';
import { computeTimeSince } from '#utils/formatter';

type Props = {
  pool: PoolDto
}

defineProps<Props>()

</script>

<template>
  <div class="grid gap-4">
    <div v-for="gift in pool.gifts" :key="gift.id" class="flex flex-col gap-2">
      <div>
        <h2 class="text-lg font-semibold">{{ gift.isAnonymous ? 'Anonyme' : gift.username }}</h2>
        <p class="text-xs text-muted-foreground">{{ computeTimeSince(gift.createdAt) }}</p>
      </div>
      <p>{{ gift.message }}</p>
    </div>
  </div>
</template>