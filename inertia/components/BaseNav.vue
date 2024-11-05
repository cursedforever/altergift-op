<script setup lang="ts">
</script>

<template>
  <div>
    <header>
      <nav class="flex items-center justify-between p-6 lg:px-8">
        <Link href="/" class="-m-1.5 p-1.5">
        <span class="text-lg font-medium leading-6"> Alter Gifts </span>
        </Link>

        <div class="flex flex-1 justify-end gap-4">
          <!-- <Link href="/login">
          <span>Se connecter</span>
          </Link> -->

          <Link href="/#">
          <!-- <span>Panier</span> -->
          </Link>
        </div>

      </nav>
    </header>
    <slot />
  </div>
</template>