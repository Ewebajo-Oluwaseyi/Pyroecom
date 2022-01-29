<template>
  <div class="bg-cream overflow-x-scroll">
    <sidebar />

    <div
      :class="`absolute top-0 h-full duration-1000 ease-in-out ${
        sidebar ? 'left-56 w-10/12' : 'left-0 w-full'
      }`"
    >
      <top-nav />
      <div class="fixed top-5 right-36 m-6" v-if="!stripeId">
        <Transition name="slide-fade">
          <div
            class="bg-red-200 text-red-900 rounded-lg shadow-md p-4 pr-10"
            style="min-width: 240px"
            v-if="open"
          >
            <button
              class="opacity-75 cursor-pointer absolute top-0 right-0 py-2 px-3 hover:opacity-100"
              @click="open = !open"
            >
              ×
            </button>
            <div class="flex items-center">Add stripe id to accept payment</div>
          </div>
        </Transition>
      </div>
      <section class="flex items-center flex-wrap bg-white shadow-sm">
        <Transactions :dashboardData="dashboardData" class="w-80 flex-grow" />
        <MarketPlace :dashboardData="dashboardData" class="w-80 flex-grow" />
        <Earnings class="w-80 flex-grow" />
      </section>

      <main class="mt-12 xl:flex">
        <section class="mx-5 xl:w-2/3 flex-grow">
          <div class="bg-white shadow-sm">
            <info />
          </div>
          <div class="mt-8 bg-white shadow-sm">
            <SocialAccounts />
          </div>
        </section>

        <aside class="bg-white mx-5 lg:w-1/2 xl:w-1/3 mb-4">
          <Chat />
        </aside>
      </main>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/Side bar/SideBar.vue";

import Nav from "@/components/Inside/Nav.vue";
import Transactions from "@/components/Inside/Transactions.vue";
import MarketPlace from "@/components/Inside/MarketPlace.vue";
import Earnings from "@/components/Inside/Earnings.vue";

import Info from "@/components/Inside/Info.vue";
import SocialAccounts from "@/components/Inside/SocialAccounts.vue";

//import RecentTransactions from "@/components/Inside/RecentTransactions.vue";

import Chat from "@/components/Inside/Chat.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      open: true,
    };
  },
  components: {
    "top-nav": Nav,
    Transactions,
    MarketPlace,
    Earnings,
    Info,
    SocialAccounts,
    Chat,
    sidebar,
  },
  computed: {
    ...mapGetters({
      dashboardData: "dashboardData",
      stripeId: "stripeId",
    }),
    sidebar() {
      return this.$store.state.sidebar;
    },
  },
  methods: {
    ...mapActions({
      getDashboardData: "getDashboardData",
      getProfile: "getProfile",
    }),
  },
  async created() {
    await this.getDashboardData();
    await this.getProfile();
  },
};
</script>

<style scope>
.w-lg {
  width: 78%;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(400px);
  opacity: 0;
}
</style>
