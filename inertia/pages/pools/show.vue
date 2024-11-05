<script setup lang="ts">
import PoolDto from '#dtos/pool';
import { formatPrice } from '#utils/formatter';
import { Icon } from "@iconify/vue";
import { toast } from 'vue-sonner';
import { Tabs } from '~/components/ui/tabs';


type Props = {
  pool: PoolDto,
}
const props = defineProps<Props>()

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href)
  toast('Lien copié', {
    position: 'top-right',
    description: 'Vous pouvez maintenant partager le lien de la cagnotte.',
  })
}

</script>

<template>

  <img v-if="pool.imageUrl" class="w-full h-64 object-cover" :src="pool.imageUrl" />

  <div class="grid grid-cols-1 gap-2 container">
    <div class="mt-6 grid gap-4">
      <h1 class="text-3xl font-semibold tracking-tight">{{ pool.name }}</h1>

      <h2 class="flex gap-2 items-center">
        <span class="text-2xl font-bold tracking-tight">{{
          formatPrice(pool.$extras.totalGiftAmount) }}
        </span>
        <span class="font-light">récoltés</span>
      </h2>

      <div class="flex gap-2 items-center">
        <Icon icon="lucide:users" />
        <p class="font-light text-sm">{{ pool.numberOfParticipants }} Participations</p>
      </div>

      <Separator />
    </div>

    <div class="grid gap-2 py-6">

      <Link :href="`/pools/${pool.slug}/participate`">
      <Button class="w-full text-lg font-semibold tracking-wide py-7">
        Participer
      </Button>
      </Link>

      <Button variant="outline" class="w-full text-md font-semibold tracking-wide py-7" @click="copyLink">
        <Icon icon="lucide:link" class="w-6 h-6" />
        <span>Copier le lien</span>
      </Button>

    </div>

    <Tabs default-value="description" class="w-full">
      <TabsList class="w-full">
        <TabsTrigger class="w-full" value="description">Description</TabsTrigger>
        <TabsTrigger class="w-full" value="participations">Participations</TabsTrigger>
        <TabsTrigger class="w-full" value="messages">Messages</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <DescriptionTab :pool="pool" />
      </TabsContent>
      <TabsContent value="participations">
        <ParticipationsTab :pool="pool" />
      </TabsContent>
      <TabsContent value="messages">
        <ParticipationMessagesTab :pool="pool" />
      </TabsContent>
    </Tabs>

  </div>

</template>