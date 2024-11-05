<script setup lang="ts">
import UserDto from '#dtos/user';
import { Icon } from '@iconify/vue';
import { router } from '@inertiajs/vue3';


type Props = {
  user: UserDto
}

const props = defineProps<Props>()

const avatarInitials = props.user.firstName.slice(0, 1) + props.user.lastName.slice(0, 1)

const signOut = () => {
  router.post('/logout')
}

</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="relative h-8 w-8 rounded-full">
        <Avatar class="h-9 w-9">
          <!-- <AvatarImage src="/avatars/03.png" alt="@shadcn" /> -->
          <AvatarFallback class="font-medium">{{ avatarInitials }}</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56" align="end">
      <DropdownMenuLabel class="font-normal flex">
        <div class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">
            {{ props.user.firstName }} {{ props.user.lastName }}
          </p>
          <p class="text-xs leading-none text-muted-foreground">
            {{ props.user.email }}
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon icon="lucide:user" class="w-4 h-4 mr-2" />
          Profile
          <!-- <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> -->
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="lucide:settings" class="w-4 h-4 mr-2" />
          Paramètres
          <!-- <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> -->
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="signOut()">
        <Icon icon="lucide:log-out" class="w-4 h-4 mr-2" />
        Déconnexion
        <!-- <DropdownMenuShortcut">⇧⌘Q</DropdownMenuShortcut> -->
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>