<template>
  <div class="">
    <div class="py-5 border">
      <div class="flex items-center justify-between w-11/12 mx-auto">
        <h1 class="font-bold text-2xl">Transactions</h1>
        <div class="flex items-center">
          <p class="mr-2 text-sm">Last 30 days</p>
          <span
            class="iconify"
            data-icon="bx:bx-caret-down"
            data-width="14"
          ></span>
        </div>
      </div>
      <hr class="my-5" />
      <div class="flex justify-between w-11/12 mx-auto">
        <div>
          <h1 class="text-gray-500 uppercase text-sm font-bold">
            Total Payouts
          </h1>
          <h1 class="text-4xl font-bold text-blueMid">
            {{ payouts.length}}
          </h1>
        </div>

        <div>
          <h1 class="text-gray-500 uppercase text-sm font-bold">Withdrawal</h1>
          <h1 class="text-4xl font-bold text-blueMid">
            {{ dashboardData.withdrawal }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["dashboardData"],
    methods: {
    ...mapActions({
      getPayouts: "getPayouts",
    }),
  },
  computed: {
    ...mapGetters({
      payouts: "payout"
    })
  },
};
</script>
