<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Toaster } from '~/components/ui/sonner';
import Separator from '../ui/separator/Separator.vue';


</script>

<template>
  <div>
    <header>
      <nav class="flex items-center justify-between h-[52px] px-6 lg:px-8 ">
        <Link href="/" class="-mx-1.5 px-1.5 flex items-center gap-2">
        <Icon icon="lucide:gift" class="w-5 h-5" />
        <span class="text-lg font-medium leading-6"> Alter Gifts </span>
        </Link>

        <div class="flex flex-1 justify-end gap-4">
        </div>

      </nav>
      <Separator />
    </header>
    <div>
      <slot />
      <Toaster />
    </div>
  </div>
</template>