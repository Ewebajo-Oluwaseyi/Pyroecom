<template>
  <div class="bg-cream">
    <sidebar />
    <div
      :class="`absolute top-0 h-full duration-1000 ease-in-out ${
        sidebar ? 'left-56 w-10/12' : 'left-0 w-full'
      }`"
    >
      <top-nav />
      <section class="py-8 px-5 flex justify-center content-center">
        <div class="w-11/12 xl:w-full bg-grey shadow-sm">
          <div
            class="flex justify-between content-center border px-6 py-4 text-gray-dark"
          >
            <div class="font-bold text-2xl">Transaction Table</div>
            <div class="mt-2 flex items-center cursor-pointer">
              <div class="mx-2">
                <div
                  :class="`flex items-center justify-center ${
                    openSearch ? 'block' : 'hidden'
                  }`"
                >
                  <input
                    placeholder="search.."
                    class="bg-gray-300 rounded-l-lg border-none outline-none px-2 py-1"
                  />
                  <div
                    class="bg-gray-300 px-2 py-2 rounded-r-lg"
                    @click="openSearch = !openSearch"
                  >
                    <span class="iconify" data-icon="fa-solid:search"></span>
                  </div>
                </div>
                <div
                  @click="openSearch = !openSearch"
                  :class="`flex ${openSearch ? 'hidden' : 'block'}`"
                >
                  <span class="iconify" data-icon="fa-solid:search"></span>
                </div>
              </div>
              <div class="mx-2">
                <span class="iconify" data-icon="mdi:filter"></span>
              </div>
            </div>
          </div>
          <table class="table-auto w-full boarder-collapse">
            <thead class="border"></thead>
            <thead class="border bg-gray-200">
              <tr>
                <th class="border-b w-10 text-gray-dark"></th>
                <th class="border-b px-2 py-2 w-10 text-gray-dark">Id</th>
                <th class="border-b px-2 py-2 text-gray-dark">Student</th>
                <th class="border-b px-2 py-2 text-gray-dark">Amount($)</th>
                <th class="border-b px-2 py-2 text-gray-dark">Withdrawal($)</th>
                <th class="border-b px-2 py-2 text-gray-dark">Paid_Date</th>
              </tr>
            </thead>
            <tbody class="border">
              <tr v-for="(table, index) in tables" :key="index">
                <td class="border-b px-2 py-2 w-10 text-center text-gray-500">
                  <span class="iconify" data-icon="ep:arrow-right"></span>
                </td>
                <td class="border-b px-2 py-2 w-10 text-center">
                  {{ parseInt(index + 1) }}
                </td>
                <td class="border-b px-2 py-2 text-center">
                  {{ table.student }}
                </td>
                <td class="border-b px-2 py-2 text-center">
                  {{ table.amount }}
                </td>
                <td class="border-b px-2 py-2 text-center">
                  {{ table.withdrawal }}
                </td>
                <td class="border-b px-2 py-2 text-center">{{ table.date }}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-end border px-6 py-2 text-gray-dark">
            <div>1-10 of 1</div>
            <div class="flex mt-1 mx-2 cursor-pointer">
              <span class="iconify" data-icon="ep:arrow-left"></span>
              <span class="iconify" data-icon="ep:arrow-right"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/Side bar/SideBar.vue";
import Nav from "@/components/Inside/Nav.vue";

export default {
  components: {
    sidebar,
    "top-nav": Nav,
  },
  data() {
    return {
      openSearch: false,
      tables: [
        {
          id: "1",
          amount: 20,
          student: "John",
          date: "23/12/2021",
          withdrawal: "30",
        },
        {
          id: "2",
          amount: 40,
          student: "Sam",
          date: "23/12/2021",
          withdrawal: "10",
        },
        {
          id: "1",
          amount: 50,
          student: "Sarah",
          date: "23/12/2021",
          withdrawal: "60",
        },
        {
          id: "1",
          amount: 90,
          student: "ben",
          date: "23/12/2021",
          withdrawal: "80",
        },
        {
          id: "1",
          amount: 20,
          student: "John",
          date: "23/12/2021",
          withdrawal: "30",
        },
        {
          id: "2",
          amount: 40,
          student: "Sam",
          date: "23/12/2021",
          withdrawal: "40",
        },
        {
          id: "1",
          amount: 50,
          student: "Sarah",
          date: "23/12/2021",
          withdrawal: "20",
        },
        {
          id: "1",
          amount: 90,
          student: "ben",
          date: "23/12/2021",
          withdrawal: "50",
        },
        {
          id: "1",
          amount: 50,
          student: "Sarah",
          date: "23/12/2021",
          withdrawal: "20",
        },
        {
          id: "1",
          amount: 90,
          student: "ben",
          date: "23/12/2021",
          withdrawal: "10",
        },
      ],
    };
  },
  computed: {
    sidebar() {
      return this.$store.state.sidebar;
    },
  },
};
</script>
