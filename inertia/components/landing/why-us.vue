<script setup lang="ts">

import Autoplay from 'embla-carousel-autoplay';
import CardHeader from '../ui/card/CardHeader.vue';
import CardTitle from '../ui/card/CardTitle.vue';

const plugin = Autoplay({
  delay: 3000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

const steps = [
  {
    step: 1,
    title: 'Organiser un cadeau sans galère!',
    description: [
      'Fini les discussions sans fin! Ici, chacun peut indiquer ce qu’il compte donner. En un clin d’œil, tout le monde a une idée du budget total!',
    ]
  },
  {
    step: 2,
    title: 'Budgetiser sans casser la tirelire!',
    description: ["Tu veux participer mais tu sais pas trop combien mettre ? Pas de souci, tu dis ce que tu peux et on fait le compte ensemble.",]
  },
  {
    step: 3,
    title: 'Modifier quand tu veux!',
    description: ["Modifies ta particpation quand tu veux : la vie, c'est fait pour changer d'avis !",]
  },
  {
    step: 4,
    title: 'Transparence  totale',
    description: [
      "Chaque participant peut suivre en temps réel l'avancement de la collecte et savoir exactement combien a été donné",
    ]
  },
]

</script>

<template>
  <div class="flex flex-col gap-4 w-full max-w-sm mx-auto">
    <h1 class="text-xl font-medium tracking-tight text-primary text-center">Pourquoi utiliser notre plateforme?
    </h1>

    <Carousel class="relative" :plugins="[plugin]" @mouseenter="plugin.stop"
      @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')];">
      <CarouselContent>
        <CarouselItem v-for="(step, index) in steps" :key="index">
          <div class="p-1">
            <Card class="border-0">
              <CardHeader>
                <CardTitle>
                  {{ step.title }}
                </CardTitle>
              </CardHeader>
              <CardContent class="grid gap-2">
                <!-- <h2 class="text-xl text-justify">{{ step.title }}</h2> -->
                <p v-for="description in step.description">{{ description }}</p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="hidden lg:flex" />
      <CarouselNext class="hidden lg:flex" />

      <!-- 
      <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        <div v-for="(_, index) in steps" :key="index" class="size-2  rounded-full border border-muted-foreground">
        </div>
      </div> 
      -->

    </Carousel>
  </div>

</template>