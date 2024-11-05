<script setup lang="ts">
import PoolDto from '#dtos/pool';
import { Icon } from "@iconify/vue";
import { useForm } from '@inertiajs/vue3';
import { Separator } from '~/components/ui/separator';
import { Switch } from '~/components/ui/switch';

type Props = {
  pool: PoolDto
}
const props = defineProps<Props>()

const form = useForm({
  username: '',
  email: '',
  message: '',
  amount: 0,
  isAnonymous: false,
  isAmountHidden: false,
  poolId: props.pool.id,
})

const submit = () => {
  // console.log(form.data())
  form.post(`/gifts`, { preserveState: true, preserveScroll: true })
}

const goBack = () => {
  window.history.back()
}
</script>

<template>
  <div class="container">
    <div class="pb-4">
      <Icon icon="lucide:move-left" class="w-6 h-6 my-4" @click="goBack" />
      <h2 class="text-lg tracking-tight text-muted-foreground">Participer à la cagnotte</h2>
      <h1 class="text-3xl font-semibold tracking-tight">{{ pool.name }}</h1>
    </div>

    <form class="mt-6 grid gap-4 w-full" @submit.prevent="submit">

      <Label class="grid gap-1">
        <span>Ma Participation</span>
        <Input type="number" class="text-center font-bold text-xl py-2 h-fit" v-model="form.amount"
          :disable="form.processing" />
        <div v-if="form.errors.amount">
          <span class="text-red-500 text-sm">{{ form.errors.amount }}</span>
        </div>
      </Label>

      <!-- Hide ammount -->
      <Label class="flex justify-between gap-2">
        <div>
          <p>Masquer le montant</p>
          <p class="text-xs font-light text-muted-foreground">Votre montant ne sera pas vu par les autres participants
          </p>
        </div>
        <Switch v-model="form.isAmountHidden" @update:checked="form.isAmountHidden = !form.isAmountHidden"
          :disable="form.processing" />
      </Label>

      <!-- Hide name -->
      <Label class="flex justify-between gap-2">
        <div>
          <p>Participer anonymement</p>
          <p class="text-xs font-light text-muted-foreground">Votre nom sera remplacé par “Anonyme” sur la cagnotte</p>
        </div>
        <Switch v-model="form.isAnonymous" @update:checked="form.isAnonymous = !form.isAnonymous"
          :disable="form.processing" />
      </Label>

      <Separator class="my-6" />

      <Label class="grid gap-1">
        <span>Nom</span>
        <Input type="text" v-model="form.username" :disable="form.processing" />
        <div v-if="form.errors.username">
          <span class="text-red-500 text-sm">{{ form.errors.username }}</span>
        </div>
      </Label>

      <Label class="grid gap-1">
        <span>Email</span>
        <Input type="email" v-model="form.email" :disable="form.processing" />
        <div v-if="form.errors.email">
          <span class="text-red-500 text-sm">{{ form.errors.email }}</span>
        </div>
      </Label>


      <Label class="grid gap-1">
        <span>Message</span>
        <Textarea type="text" v-model="form.message" :disable="form.processing" />
        <div v-if="form.errors.message">
          <span class="text-red-500 text-sm">{{ form.errors.message }}</span>
        </div>
      </Label>

      <Button type="submit" size="lg" class="w-full text-lg font-semibold py-7"
        :disable="form.processing">Participer</Button>
    </form>
  </div>
</template>