<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { AlertCircle, Loader } from 'lucide-vue-next';

import AuthLayout from '~/components/layouts/AuthLayout.vue';
import CardFooter from '~/components/ui/card/CardFooter.vue';

defineOptions({
  layout: AuthLayout
})

defineProps<{
  exceptions: Record<string, string>
}>()

const form = useForm({
  email: "",
  password: "",
  remember: false,
})


let submit = () => {
  form.post('/login', {
    preserveScroll: true,
  })
}

</script>

<template>
  <AppHead title="Connexion" description="Se connecter sur Instant Gourmand" />

  <div class="flex flex-col justify-center items-center space-y-6 h-[calc(100vh-120px)]">
    <Card class="w-[420px]">
      <CardHeader>
        <CardTitle>Se connecter</CardTitle>
        <!-- <CardDescription>
          <Link href="/register">
          Vous n’avez pas de compte ? Créez un compte
          </Link>
        </CardDescription> -->
        <Alert v-if="exceptions.E_INVALID_CREDENTIALS" variant="destructive">
          <AlertCircle class="w-4 h-4" />
          <AlertTitle>Erreur</AlertTitle>
          <AlertDescription>Email ou mot de passe incorrect</AlertDescription>
        </Alert>

      </CardHeader>
      <form class="" @submit.prevent="submit">

        <CardContent>
          <div class="grid gap-4">
            <!-- email -->
            <FormInput id="email" label="Email" type="email" v-model="form.email" :error="form.errors.email"
              :disabled="form.processing" />

            <!-- password -->
            <FormInput label="Mot de passe" type="password" v-model="form.password" :error="form.errors.password"
              :disabled="form.processing" />

          </div>
        </CardContent>

        <CardFooter>
          <!-- submit -->
          <Button type="submit" class="w-full" :disabled="form.processing">
            <Loader v-if="form.processing" class="mr-2 w-4 h-4 animate-spin" />
            Se connecter
          </Button>
        </CardFooter>

      </form>
    </Card>
    <!-- <p class="text-sm text-muted-foreground text-end hover:text-accent-foreground">
      <Link href="/forgot-password">Mot de passe oublié?</Link>
    </p> -->
  </div>

</template>