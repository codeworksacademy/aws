<template>
  <section>
    <nav>
      <img
        src="https://bcw.blob.core.windows.net/public/img/9977764104160066"
        alt="codeworks logo"
        class="logo d-mobile "
      >
      <img
        class="logo d-large"
        src="https://codeworks.blob.core.windows.net/public/assets/img/cw-logo.png"
        alt="codeworks logo"
      >
      <LoginButton style="margin:0 1em" />
    </nav>

    <main>
      <section class="hero">
        <div class="bg-gradient p-5">
          <img
            src="https://bcw.blob.core.windows.net/public/img/8600856373152463"
            loading="lazy"
            alt="codeworks"
            class="company-logo"
          >
          <div class="hero-title mb-5">
            <div class="fs-2">
              INTRODUCING...
            </div>
            <h1>
              {{ course.title }}
            </h1>
          </div>

          <div class="d-flex gap-5 course-details">
            <!-- COURSE CTA -->
            <div class="hero-text">
              <p class="mb-4">
                {{ course.tagline }}
              </p>
              <br>
              <p class="mb-3">
                <strong>
                  {{ course.goal }}
                </strong>
              </p>
              <button
                class="cta-btn"
                @click="login"
              >
                Get Started
              </button>
            </div>

            <!-- COURSE MEDIA -->
            <div class="hero-media">
              <img
                :src="course.img"
                alt="course image"
                loading="lazy"
              >
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      made with 💖 by CodeWorks
    </footer>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { webFoundations } from '../../../data/courses.js';
import { AuthWrapper } from '../../services/AuthService.js';


let AuthService = null
const course = webFoundations


onMounted(async() => {
  AuthService = await AuthWrapper()
})

async function login() {
  AuthService.loginWithRedirect();
}

</script>


<style scoped lang="scss">
.d-mobile {
  display: none;
}

.d-large {
  display: block;
}

footer {
  margin-top: 1em;
  text-align: center;
  padding: 1em;
  font-size: 1.2em;
}

nav{
  background-color: #0f141e;
}


@media screen and (max-width: 1210px) {
  .course-details {
    flex-direction: column-reverse;
  }

  .d-mobile {
    display: block;
  }

  .d-large {
    display: none;
  }
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
}

.logo {
  object-fit: contain;
  height: 55px;
}

section {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.hero {
  padding: clamp(10px, 50px, 2vw);

  .company-logo {
    max-width: 130px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .hero-title {
    h1 {
      font-size: clamp(35px, 7.5vw, 100px);
      font-weight: 800;
      line-height: 1em;
    }
  }

  .hero-text {
    max-width: clamp(40vw, 80vw, 500px);
    margin: 40px 0;
    line-height: 1.5em;
    font-size: clamp(25px, 1.8vw, 42px);
  }

  .hero-media {
    max-width: clamp(40vw, 80vw, 500px);
    margin: 40px auto;
    flex-grow: 1;

    img,
    iframe,
    video {
      width: 100%;
      height: 100%;
    }
  }

  .cta-btn {
    box-shadow: 0 0 0 0 rgba(247, 181, 62, 1);
    animation: pulse 1.25s infinite;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(90deg, #f7b53e 0%, #f9a826 100%);
    background-position: 0%;
    background-size: 200%;
    border-radius: 50px;
    width: 100%;
    max-width: 511px;
    max-height: 96px;
    padding: 36px;
    font-family: Manrope, sans-serif;
    font-size: 30px;
    font-weight: 700;
    line-height: .8em;
    transition: all .3s;
    display: inline-block;

    &:hover {
      background-color: #f9a826;
      transform: scale(1.05);
    }
  }

  @keyframes pulse {
    to {
      box-shadow: 0 0 0 15px rgba(247, 181, 62, 0);
    }
  }


}


main {
  flex-grow: 1;
}
</style>