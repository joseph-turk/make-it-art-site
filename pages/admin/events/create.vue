<template>
  <div>
    <section class="section">
      <div class="container">
        <h2 class="title is-2">Add New Event</h2>

        <form @submit.prevent="handleSubmit">
          <div class="field">
            <label for="eventName" class="label">Name</label>
            <input type="text" class="input" id="eventName">
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
