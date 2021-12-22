<template>
  <div
    v-if="sidebar"
    class="bg-blueDark w-56 min-h-screen float-left sticky top-0"
  >
    <h1 class="text-amber text-2xl font-bold text-center p-3">Pyroecom</h1>

    <div class="w-12 h-12 rounded-full border-2 border-amber mt-9"></div>
    <h1 class="text-white">Firstname</h1>

    <ul class="text-white text-lg mt-8 font-bold">
      <router-link to="/dashboard"
        ><li class="px-4 py-4 hover:bg-blue-300 duration-150 cursor-pointer">
          Dashboard
        </li></router-link
      >
      <router-link to="/profile">
        <li class="px-4 py-4 hover:bg-blue-300 duration-150 cursor-pointer">
          Profile
        </li></router-link
      >
      <li class="px-4 py-4 hover:bg-blue-300 duration-150 cursor-pointer">
        Payout
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    sidebar() {
      return this.$store.state.sidebar;
    },
  },
};
</script>
