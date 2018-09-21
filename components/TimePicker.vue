<template>
  <div>
    <input type="hidden" v-model="calculatedTime">
    <div :class="selectClass + ' hours'">
      <select v-model="hours">
        <option v-for="h in 12" :key="`hour-${h}`">
          {{ h &lt; 10 ? '0' + h : h }}
        </option>
      </select>
    </div>

    <div :class="selectClass + ' minutes'">
      <select v-model="minutes">
        <option>00</option>
        <option v-for="m in 60" :key="`minute-${m}`">
          {{ m &lt; 10 ? '0' + m : m }}
        </option>
      </select>
    </div>

    <div :class="selectClass">
      <select v-model="amPm">
        <option>AM</option>
        <option>PM</option>
      </select>
    </div>

    <!-- <button class="button" type="button" @click="showCalculatedTime">Show Calculated Time</button> -->
  </div>
</template>

<script>
export default {
  props: {
    inputClass: {
      type: String,
      required: true
    },
    selectClass: {
      type: String,
      required: true
    },
    defaultTime: {
      type: String,
      required: false
    }
  },

  created () {
    if (this.defaultTime) {
      this.hours = this.defaultTime.slice(0, 2)
      this.minutes = this.defaultTime.slice(3, 5)

      if (this.hours >= 12) {
        this.amPm = 'PM'

        if (this.hours > 12) {
          this.hours = parseInt(this.hours) - 12
        }

        if (this.hours < 10) {
          this.hours = '0' + this.hours.toString()
        } else {
          this.hours = this.hours.toString()
        }
      }
    }
  },

  data () {
    return {
      hours: '12',
      minutes: '00',
      amPm: 'PM'
    }
  },

  computed: {
    time () {
      if (this.hours) {
        return this.hours + ':' + this.minutes + ' ' + this.amPm
      }
    },

    calculatedTime () {
      if (this.amPm === 'PM' && parseInt(this.hours) !== 12) {
        return parseInt(this.hours) + 12 + ':' + this.minutes
      } else if (this.amPm === 'AM' && parseInt(this.hours) === 12) {
        return '00:' + this.minutes
      } else {
        return this.hours + ':' + this.minutes
      }
    }
  },

  methods: {
    showCalculatedTime () {
      alert(this.calculatedTime)
    }
  }
}
</script>

<style scoped>
.hours,
.minutes {
  margin-right: 0.5rem;
}
</style>
