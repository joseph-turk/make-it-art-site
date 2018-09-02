<template>
  <div>
    <section class="hero is-large is-primary">
      <div class="hero-body">
        <div class="container welcome-container has-text-centered">
          <h1 class="title is-1">Welcome</h1>
          <h3 class="subtitle is-3">This section will have a message to greet site visitors and draw them in</h3>
        </div>
      </div>
    </section>

    <section class="section is-medium">
      <div class="container">
        <h2 class="title is-2">Discover</h2>

        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="~/assets/img/classroom.jpg">
                </figure>
              </div>

              <footer class="card-footer">
                <nuxt-link class="card-footer-item is-size-4" to="/in-the-classroom">Lessons for the Classroom</nuxt-link>
              </footer>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="~/assets/img/art-studio.jpg">
                </figure>
              </div>

              <footer class="card-footer">
                <nuxt-link class="card-footer-item is-size-4" to="/together">Events in the Studio</nuxt-link>
              </footer>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="~/assets/img/home-craft.jpg">
                </figure>
              </div>

              <footer class="card-footer">
                <nuxt-link class="card-footer-item is-size-4" to="/at-home">Projects for Home</nuxt-link>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-medium has-background-warning">
      <div class="container">
        <h2 class="title is-2">What's New</h2>

        <div class="columns">
          <div class="column">
            <div class="card">
              <header class="card-header">
                <h3 class="card-header-title is-size-4">Next Event</h3>
              </header>

              <div class="card-content">
                <div class="content">
                  <h4>Event Title</h4>
                  
                  <p>Description of the next event.</p>
                </div>
              </div>

              <footer class="card-footer">
                <nuxt-link class="card-footer-item is-size-5" to="/">Sign Up</nuxt-link>
              </footer>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <header class="card-header">
                <h3 class="card-header-title is-size-4">Latest Project</h3>
              </header>

              <div class="card-content">
                <div class="content">
                  <h4>Project Title</h4>
                  
                  <p>Description of the project.</p>
                </div>
              </div>

              <footer class="card-footer">
                <nuxt-link class="card-footer-item is-size-5" to="/">Make It</nuxt-link>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.welcome-container {
  max-width: 680px;
}
</style>
