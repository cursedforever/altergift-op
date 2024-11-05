<script setup lang="ts">
import PoolDto from '#dtos/pool';
import { formatPrice } from '#utils/formatter';
import { Icon } from "@iconify/vue";


type Props = {
  pool: PoolDto
}

defineProps<Props>()

</script>

<template>
  <Table>
    <!-- <TableCaption>Merci pour votre participation</TableCaption> -->
    <!-- <TableHeader>
      <TableRow>

      </TableRow>
    </TableHeader> -->
    <TableBody v-for="gift in pool.gifts">
      <TableRow>
        <TableCell class="flex items-center gap-4">
          <!-- <Avatar>
            <AvatarFallback class="text-md font-semibold">{{ gift.username.substring(0, 2).toUpperCase() }}
            </AvatarFallback>
          </Avatar> -->
          <Icon icon="lucide:user" class="w-6 h-6" />
          <span class="text-lg font-medium text-xl">
            {{ gift.isAnonymous ? 'Anonyme' : gift.username }}
          </span>
        </TableCell>
        <TableCell class="text-right font-bold text-xl">
          {{ gift.isAmountHidden ? 'Masqué' : formatPrice(gift.amount / 100) }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>