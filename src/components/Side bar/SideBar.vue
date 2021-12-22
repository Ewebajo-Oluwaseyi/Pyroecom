<template>
  <div
    v-if="sidebar"
    class="sidebar bg-blueDark w-56 min-h-screen float-left sticky top-0 transform transition duration-200 ease-in-out"
  >
    <div></div>
    <h1 class="text-amber text-2xl font-bold text-center p-3">Pyroecom</h1>
    <div class="ml-4 mt-4">
      <div class="w-12 h-12 ml-6">
        <img
          src="@/assets/images/avatar-1.jpg"
          alt=""
          class="rounded-full border-2 border-amber"
        />
      </div>
      <h1 class="text-white ml-6 mt-2">Firstname</h1>
    </div>

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

<style scoped>
.transit {
  transition: width 1s ease-in;
}
</style>
