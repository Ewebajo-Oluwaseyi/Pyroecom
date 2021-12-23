<template>
  <div class="bg-cream overflow-x-scroll">
    <sidebar />

    <div
      :class="`absolute top-0 h-full duration-1000 ease-in-out ${
        sidebar ? 'left-56 w-10/12' : 'left-0 w-full'
      }`"
    >
      <top-nav />
      <section class="flex items-center flex-wrap bg-white shadow-sm">
        <Transactions class="w-80 flex-grow" />
        <MarketPlace class="w-80 flex-grow" />
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

          <div class="my-8 flex flex-wrap gap-8">
            <RecentTransactions class="flex-grow" />
          </div>
        </section>

        <aside class="bg-white mx-5 xl:w-1/3 h-96">
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

import RecentTransactions from "@/components/Inside/RecentTransactions.vue";

import Chat from "@/components/Inside/Chat.vue";

export default {
  components: {
    "top-nav": Nav,
    Transactions,
    MarketPlace,
    Earnings,
    Info,
    SocialAccounts,
    RecentTransactions,
    Chat,
    sidebar,
  },
  computed: {
    sidebar() {
      return this.$store.state.sidebar;
    },
  },
};
</script>

<style scope>
.w-lg {
  width: 78%;
}
</style>
