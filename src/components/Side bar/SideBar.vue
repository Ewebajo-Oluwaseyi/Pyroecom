<template>
  <div
    :class="`sidebar bg-blueDark w-56 min-h-screen float-left fixed top-0 duration-1000 ease-in-out ${
      sidebar ? 'left-0' : '-left-56'
    }`"
  >
    <div></div>
    <h1 class="text-amber text-2xl font-bold text-center p-3">Pyro</h1>
    <div class="ml-4 mt-4">
      <div class="w-12 h-12 ml-6">
        <img
          src="@/assets/images/avatar-1.jpg"
          alt=""
          class="rounded-full border-2 border-amber"
        />
      </div>
      <h1 class="text-white ml-6 mt-2">{{ profile.firstname }}</h1>
    </div>

    <ul class="text-white text-lg mt-8 font-bold">
      <router-link to="/"
        ><li
          class="flex items-center px-4 py-4 hover:bg-blue-300 duration-150 cursor-pointer"
        >
          <span class="iconify" data-icon="ci:dashboard"></span>
          <div class="ml-2">Dashboard</div>
        </li></router-link
      >
      <router-link to="/profile">
        <li
          class="flex items-center px-4 py-4 hover:bg-blue-300 duration-150 cursor-pointer"
        >
          <span class="iconify" data-icon="vs:profile"></span>
          <div class="ml-2">Profile</div>
        </li></router-link
      >
      <router-link to="/payout">
        <li
          class="flex items-center px-4 py-4 hover:bg-blue-300 duration-150 cursor-pointer"
        >
          <span class="iconify" data-icon="grommet-icons:transaction"></span>
          <div class="ml-2">Transactions</div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    sidebar() {
      return this.$store.state.sidebar;
    },
    ...mapGetters({
      profile: "profile",
    }),
  },
  methods: {
    ...mapActions({
      getProfile: "getProfile",
    }),
  },
  async created() {
    await this.getProfile();
  },
};
</script>

<style scope>
.sidebar {
  z-index: 10000;
}
</style>
