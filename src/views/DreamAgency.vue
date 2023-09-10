<template>
  <div>
    <Home />
    <Business />
    <AboutUs />
    <Work />
    <Testimonials />
    <Contact></Contact>
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import Business from "../components/Business.vue";
import AboutUs from "../components/AboutUs.vue";
import Work from "../components/Work.vue";
import Contact from "../components/Contact.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  name: "HomeView",
  components: {
    Home,
    Business,
    AboutUs,
    Work,
    Testimonials,
    Contact
  }
};
</script>
<style src="../assets/style/Style.css"></style>