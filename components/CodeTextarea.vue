<template>
    <textarea class="border h-full w-full rounded-xl focus:outline-gray-800 p-4" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"></textarea>
    </template>
  
<script setup>
    defineProps(['modelValue'])
    defineEmits(['update:modelValue'])
</script>