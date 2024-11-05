<script setup lang="ts">
import { Check, Circle, Dot } from 'lucide-vue-next';


const steps = [
  {
    step: 1,
    title: 'Exprimes ton intention',
    description: [
      'Dis-nous combien tu compte mettre pour cet évènement. Pas de pression, c\'est juste pour s\'organiser, et sans obligation pour toi !',
    ]
  },
  {
    step: 2,
    title: 'Reçois ton récap',
    description: ['Une fois ton intention de participation enregistrée, tu reçois un petit récap’ par email, c’est tout !',]
  },
  {
    step: 3,
    title: 'On te tient au courant',
    description: [
      'On te fera un signe avant l’événement, juste pour te rappeler. Tu choisis si et quand tu veux participer pour de vrai !',
    ]
  },
]

</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-xl font-medium tracking-tight text-primary text-center">Comment ça marche?</h1>

    <Stepper orientation="vertical" class="mx-auto flex w-full max-w-md flex-col justify-start gap-10">
      <StepperItem v-for="step in steps" :key="step.step" v-slot="{ state }"
        class="relative flex w-full items-start gap-6" :step="step.step">
        <StepperSeparator v-if="step.step !== steps[steps.length - 1].step"
          class="absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" />

        <StepperTrigger as-child>
          <Button :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'" size="icon"
            class="z-10 rounded-full shrink-0"
            :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']">
            <Check v-if="state === 'completed'" class="size-5" />
            <Circle v-if="state === 'active'" />
            <Dot v-if="state === 'inactive'" />
          </Button>
        </StepperTrigger>

        <div class="flex flex-col gap-1">
          <StepperTitle :class="[state === 'active' && 'text-primary']"
            class="text-sm font-semibold transition lg:text-base">
            {{ step.title }}
          </StepperTitle>
          <StepperDescription :class="[state === 'active' && 'text-primary']"
            class="text-xs text-muted-foreground text-justify transition md:not-sr-only lg:text-sm pr-4">
            <p v-for="description in step.description"> {{ description }}</p>
          </StepperDescription>
        </div>
      </StepperItem>
    </Stepper>

  </div>
</template>