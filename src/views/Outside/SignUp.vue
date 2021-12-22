<template>
  <div>
    <section class="bg-blueDark pb-16">
      <top-nav />
      <div
        class="text-white max-w-6xl w-11/12 mx-auto mt-12 md:flex flex-row-reverse gap-12"
      >
        <div
          class="w-1/2 h-48 mx-auto border-amber border-2 flex-grow mb-8"
        ></div>

        <div class="md:w-3/4 text-center md:text-left">
          <h1 class="text-3xl font-bold">Register on Pyroecom, today!</h1>
          <p class="mt-8">
            Hi, I'm here to help you set up a strong profile, so brands will
            want to collaborate with you. What is an influencer? Easy! A
            blogger, a social media rock star, your neighbor. We could go on. If
            anybody listens to you, then you're an influencer!
          </p>

          <router-link to="/registration">
            <button
              class="bg-amber text-pale-green text-xl px-6 py-2.5 mt-9 rounded-sm"
            >
              Register As An Influencer!
            </button></router-link
          >
        </div>
      </div>
    </section>
    <section class="py-12 max-w-6xl w-11/12 mx-auto">
      <h1 class="text-3xl text-center">
        Register and get free products or cash for your reviews!
      </h1>
      <div class="text-center md:text-left md:w-5/12">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="my-10 lg:flex gap-8"
        >
          <div class="w-24 h-24 border-2 border-amber mx-auto md:mx-0"></div>
          <div>
            <h1 class="text-2xl font-semibold my-4 lg:mt-0">
              {{ benefit.title }}
            </h1>
            <p class="text-lg">{{ benefit.note }}</p>
          </div>
        </div>
        <router-link to="/registration"
          ><button class="bg-amber text-xl px-6 py-2.5 mt-9 rounded-sm">
            Register As An Influencer!
          </button></router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import nav from "@/components/Nav.vue";
export default {
  components: {
    "top-nav": nav,
  },
  data() {
    return {
      benefits: [
        {
          title: "Promote Yourself",
          note: "Complete your profile so relevant brands can find you based on your experience and interests (think of it as a mashup of your resume and a dating profile).",
        },
        {
          title: "Get Compensated",
          note: "Brands will reach out with offers of free products or cash. You can also apply to campaigns you qualify for in our Marketplace.",
        },
        {
          title: "Share Your Thoughts",
          note: "Once you've tried out the product or service, share an honest review with your followers to fulfill your agreement - that's all there is to it!",
        },
      ],
    };
  },
};
</script>
