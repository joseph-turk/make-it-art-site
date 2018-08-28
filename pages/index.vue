<template>
  <main>
    <div class="welcome">
      <app-container>
        <h1>Welcome</h1>

        <p>This is the text that will go on the home page. It will be a short introduction to what this site is all about.</p>

        <div class="overlap">
          <h2>Transition</h2>

          <p>Some sort of call to action goes here.</p>
        </div>
      </app-container>
    </div>

    <div class="overview">
      <app-container class="container">
        <h2>Overview</h2>

        <p>A quick description of what this site is about.</p>
      </app-container>

      <div class="features">
        <div>
          <div class="placeholder-img"></div>

          <h3>Lessons</h3>

          <p>Things you can use in your classroom</p>
        </div>

        <div>
          <div class="placeholder-img"></div>

          <h3>Events</h3>

          <p>Art workshops that you can attend</p>
        </div>

        <div>
          <div class="placeholder-img"></div>

          <h3>Artwork</h3>

          <p>Custom pieces of art you can buy</p>
        </div>
      </div>
    </div>

    <div class="call-to-action">
      <app-container>
        <h2>Come Join Us!</h2>

        <p>Check out what we have to offer</p>
      </app-container>
    </div>
  </main>
</template>

<style scoped>
h1 {
  font-size: 5rem;
  font-weight: 700;
  color: whitesmoke;
  text-align: center;
  margin: 4rem 0;
}
h2 {
  margin-bottom: 1rem;
}
.welcome {
  background-color: seagreen;
  min-height: 50vh;
  display: flex;
  align-items: center;
  color: whitesmoke;
  position: relative;
  padding-bottom: 7rem;
}
.overlap {
  background-color: whitesmoke;
  color: #333;
  min-width: 480px;
  max-width: 700px;
  padding: 2rem;
  border: 4px solid darkslategray;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  text-align: center;
}
.overview {
  padding-top: 7rem;
  padding-bottom: 3rem;
}
.call-to-action {
  padding: 3rem 0 5rem;
}
.features {
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  text-align: center;
}
.placeholder-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: darkslategray;
  margin: 1rem auto 2rem;
}
.overview > .container > p {
  margin-bottom: 3rem;
}
.overview h2 {
  margin-top: 2rem;
}
h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
h2 {
  font-size: 3rem;
}
</style>