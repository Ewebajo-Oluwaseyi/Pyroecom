<template>
  <div class="bg-cream">
    <sidebar />
    <div
      :class="`absolute top-0 h-full duration-1000 ease-in-out ${
        sidebar ? 'left-56 w-10/12' : 'left-0 w-full'
      }`"
    >
      <top-nav />
      <section class="w-full py-8 px-5">
        <div class="bg-white shadow-sm">
          <table class="table-auto w-full boarder-collapse">
            <thead class="border">
              <tr>
                <td class="border-b px-2 py-2 text-gray-dark">Payout Table</td>
              </tr>
            </thead>
            <thead class="border bg-gray-300">
              <tr>
                <th class="border-b px-2 py-2 text-gray-dark">Id</th>
                <th class="border-b px-2 py-2 text-gray-dark">Amount</th>
                <th class="border-b px-2 py-2 text-gray-dark">Student</th>
                <th class="border-b px-2 py-2 text-gray-dark">Paid_Date</th>
              </tr>
            </thead>
            <tbody class="border">
              <tr v-for="(table, index) in tables" :key="index">
                <td class="border-b px-2 py-2 text-center">
                  {{ parseInt(index + 1) }}
                </td>
                <td class="border-b px-2 py-2 text-center">
                  {{ table.amount }}
                </td>
                <td class="border-b px-2 py-2 text-center">
                  {{ table.student }}
                </td>
                <td class="border-b px-2 py-2 text-center">{{ table.date }}</td>
              </tr>
            </tbody>
          </table>
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
      tables: [
        {
          id: "1",
          amount: 20,
          student: "John",
          date: "23/12/2021",
        },
        {
          id: "2",
          amount: 40,
          student: "Sam",
          date: "23/12/2021",
        },
        {
          id: "1",
          amount: 50,
          student: "Sarah",
          date: "23/12/2021",
        },
        {
          id: "1",
          amount: 90,
          student: "ben",
          date: "23/12/2021",
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
