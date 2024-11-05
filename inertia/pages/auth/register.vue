<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import AuthLayout from '~/components/layouts/AuthLayout.vue';

defineOptions({
  layout: AuthLayout
})

const props = defineProps<{
  exceptions: Record<string, string>,
  email?: string
}>()

const form = useForm({
  email: props.email ?? null,
  password: null,
  passwordConfirmation: null,
  firstName: null,
  lastName: null,
  phoneNumber: null,
})

let submit = () => {
  form.post('/register')
}
</script>

<template>
  <AppHead title="Inscription" description="Créer un compte sur Instant Gourmand" />

  <div class="flex flex-col justify-center items-center space-y-6 h-[calc(100vh-120px)]">

    <Card class="w-[420px]">
      <CardHeader>
        <CardTitle>Créer un compte</CardTitle>
        <CardDescription>
          <Link href="/login">Vous avez déjà un compte ? Se connecter</Link>
        </CardDescription>
      </CardHeader>
      <form @submit.prevent="submit">

        <CardContent>
          <div class="grid gap-4">
            <!-- email -->
            <FormInput id="email" label="Email" type="email" v-model="form.email" :error="form.errors.email"
              :disabled="email" />

            <div class="flex gap-2">
              <div class="w-full">
                <FormInput label="Prénom" type="text" v-model="form.firstName" :error="form.errors.firstName" />
              </div>
              <div class="w-full">
                <FormInput label="Nom" type="text" v-model="form.lastName" :error="form.errors.lastName" />
              </div>
            </div>

            <!-- Phone number -->
            <!-- <FormInput label="Téléphone" type="tel" v-model="form.phoneNumber" :error="form.errors.phoneNumber" /> -->

            <!-- password -->
            <FormInput label="Mot de passe" type="password" v-model="form.password" :error="form.errors.password" />

            <!-- confirm password -->
            <FormInput label="Confirmer mot de passe" type="password" v-model="form.passwordConfirmation"
              :error="form.errors.passwordConfirmation" />

          </div>
        </CardContent>

        <CardFooter>
          <!-- submit -->
          <Button type="submit" class="w-full" :disabled="form.processing">Créer mon compte</Button>
        </CardFooter>

      </form>

    </Card>
  </div>
</template>