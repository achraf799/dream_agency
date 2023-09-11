<template>
  <section id="Home">
    <nav class="nav1">
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#AboutUs">About Us</a>
        </li>
        <li>
          <a href="#Work">Services</a>
        </li>
        <li>
          <a href="#Contact">Contact Us</a>
        </li>
      </ul>
      <h1>Dream Agency</h1>
      <div class="socialmedia">
        <img src="../assets/images/facebook.png" data-aos="fade-left" />
        <img src="../assets/images/linkedin.png" data-aos="fade-left" />
        <img src="../assets/images/instagram.png" data-aos="fade-left" />
      </div>
    </nav>
    <h1 class="title-res">Dream Agency</h1>
    <nav class="navlist" :class="{ open: menuOpen }">
      <ul id="menuList">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#AboutUs">About Us</a>
        </li>
        <li>
          <a href="#Work">Services</a>
        </li>
        <li>
          <a href="#Contact">Contact Us</a>
        </li>
      </ul>
    </nav>
    <div class="bx bx-menu" id="menu-icon" @click="toggleMenu()">
      <img src="../assets/images/menuIcon.png" alt />
    </div>
    <div class="home-texte" data-aos="fade-right">
      <div class="title">
        <h1 class="span0">We Help you</h1>
        <h1 class="span1">to grow your</h1>
        <h1 class="span2">Business</h1>
      </div>
      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <button class="btn">
        <span>GET STARTED</span>
      </button>
    </div>
    <div class="home-img">
      <img src="../assets/images/homeimg.png" data-aos="fade-down-left" />
    </div>
  </section>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  },
  mounted() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll("nav ul li a");
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
      if (menuItem[i].href === currentLocation) {
        menuItem[i].classList.add("active");
      }
    }
  }
};
</script>

<style src="../assets/style/Style.css"></style>