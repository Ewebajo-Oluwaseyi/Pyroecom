<template>
  <div class="bg-white shadow-sm w-fit">
    <div class="flex justify-between items-center p-3">
      <h1 class="text-2xl font-semibold">Chat</h1>
    </div>
    <hr />
    <div id="talkjs-container" class="h-96 p-2">
      <i>Loading chat...</i>
    </div>
  </div>
</template>

<script>
import Talk from "talkjs";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
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
    const profile = this.profile;
    console.log(profile);
    Talk.ready.then(function () {
      var me = new Talk.User({
        id: `${profile.email}_${profile.id}`,
        name: profile.firstname,
        email: profile.email,
        welcomeMessage: "Hey there! How are you? :-)",
        role: "default",
      });
      console.log(me);
      if (!window.talkSession) {
        window.talkSession = new Talk.Session({
          appId: "taOMwb44",
          me: me,
        });
      }
      var other = new Talk.User({
        id: "654321",
        name: "Sebastian",
        email: "Sebastian@example.com",
        photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
        welcomeMessage: "Hey, how can I help?",
        role: "default",
      });
      var conversation = window.talkSession.getOrCreateConversation(
        Talk.oneOnOneId(me, other)
      );
      conversation.setParticipant(me);
      conversation.setParticipant(other);
      const chatbox = window.talkSession.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(document.getElementById("talkjs-container"));
    });
  },
};
</script>
