<template>
  <div class="h-full flex flex-col gap-6">
    <div class="flex w-full gap-6 h-full">
      <section class="w-full h-full overflow-y-auto">
        <h2 class="font-bold text-2xl mb-6 border-l-8 pl-3 mt-5 border-zinc-800 font-cairo">Subscribers</h2>
        <UTable :columns="columns" :rows="people" :sort="{ column: 'title' }" class="border rounded-xl" />
      </section>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    colorMode: 'light',
    middleware: 'auth',
    layout: 'dashboard'
  })   

  const columns = [{
    key: 'id',
    label: 'ID'
  }, {
    key: 'name',
    label: 'Name',
    sortable: true
  }, {
    key: 'email',
    label: 'Email',
    sortable: true,
    direction: 'desc'
  }, {
    key: 'role',
    label: 'Date'
  }]

const people = [{
  id: 1,
  name: 'Lindsay Walton',
  email: 'lindsay.walton@example.com',
  role: 'Member'
}, {
  id: 2,
  name: 'Courtney Henry',
  email: 'courtney.henry@example.com',
  role: 'Admin'
}, {
  id: 3,
  name: 'Tom Cook',
  title: 'Director of Product',
  email: 'tom.cook@example.com',
  role: 'Member'
}, {
  id: 4,
  name: 'Whitney Francis',
  title: 'Copywriter',
  email: 'whitney.francis@example.com',
  role: 'Admin'
}, {
  id: 5,
  name: 'Leonard Krasner',
  title: 'Senior Designer',
  email: 'leonard.krasner@example.com',
  role: 'Owner'
}, {
  id: 6,
  name: 'Floyd Miles',
  title: 'Principal Designer',
  email: 'floyd.miles@example.com',
  role: 'Member'
}]
</script>

<style>

</style>

