<script setup lang="ts">
import { computed } from 'vue';
import { Textarea } from '~/components/ui/textarea';

const props = withDefaults(defineProps<{
  label?: string
  id?: string
  type?: string
  modelValue: string | number | null
  placeholder?: string
  error?: string
  disabled?: boolean
  required?: boolean
}>(), {
  type: 'text'
})

const emit = defineEmits(['update:modelValue'])

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <div class="grid gap-1">
    <Label class="grid gap-2">
      <span v-if="label">{{ label }}</span>
      <Textarea :id="id" :type="type" v-model="internalValue" :placeholder="placeholder" :disabled="disabled"
        :required="required" />
      <p v-if="error" class="text-destructive text-xs">{{ error }}</p>
    </Label>
  </div>
</template>