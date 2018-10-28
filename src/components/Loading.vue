<template>
  <div>
    <div class="progress" :style="{
      width: `${percent}%`,
      height: height,
      opacity: show ? 1 : 0,
      'background-color': canSuccess ? color : failedColor
    }"/>
    <!--<div :class="show ? 'loading-container visible active' : ''">
      <div class="loading">
        <div class="spinner spinner-ios">
          <svg viewBox="0 0 64 64">
            <g stroke-width="4" stroke-linecap="round">
              <line y1="17" y2="29" transform="translate(32,32) rotate(180)">
                <animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
              </line>
              <line y1="17" y2="29" transform="translate(32,32) rotate(210)">
                <animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate>
              </line>
              <line y1="17" y2="29" transform="translate(32,32) rotate(240)">
                <animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate>
              </line>
              <line y1="17" y2="29" transform="translate(32,32) rotate(270)">
                <animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate>
              </line>
              <line y1="17" y2="29" transform="translate(32,32) rotate(300)">
                <animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate>
              </line>
              <line y1="17" y2="29" transform="translate(32,32) rotate(330)">
                <animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate>
              </line>
              <line y1="17" y2="29" transform="translate(32,32) rotate(0)">
                <animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate>
              </line>
              <line y1="17" y2="29" transform="translate(32,32) rotate(30)">
                <animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate>
              </line>
              <line y1="17" y2="29" transform="translate(32,32) rotate(60)">
                <animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate>
              </line>
              <line y1="17" y2="29" transform="translate(32,32) rotate(90)">
                <animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate>
              </line>
              <line y1="17" y2="29" transform="translate(32,32) rotate(120)">
                <animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate>
              </line>
              <line y1="17" y2="29" transform="translate(32,32) rotate(150)">
                <animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate>
              </line>
            </g>
          </svg>
        </div>
        <span class="tips">Загрузка</span>
      </div>
    </div>-->
  </div>
</template>

<script>
// https://github.com/nuxt/nuxt.js/blob/master/lib/app/components/nuxt-loading.vue
export default {
  data: () => ({
    percent: 0,
    show: false,
    canSuccess: true,
    duration: 3000,
    height: '2px',
    color: '#2196F3',
    failedColor: 'red'
  }),

  methods: {
    start () {
      this.show = true
      this.canSuccess = true
      if (this._timer) {
        clearInterval(this._timer)
        this.percent = 0
      }
      this._cut = 10000 / Math.floor(this.duration)
      this._timer = setInterval(() => {
        this.increase(this._cut * Math.random())
        if (this.percent > 95) {
          this.finish()
        }
      }, 100)
      return this
    },
    set (num) {
      this.show = true
      this.canSuccess = true
      this.percent = Math.floor(num)
      return this
    },
    get () {
      return Math.floor(this.percent)
    },
    increase (num) {
      this.percent = this.percent + Math.floor(num)
      return this
    },
    decrease (num) {
      this.percent = this.percent - Math.floor(num)
      return this
    },
    finish () {
      this.percent = 100
      this.hide()
      return this
    },
    pause () {
      clearInterval(this._timer)
      return this
    },
    hide () {
      clearInterval(this._timer)
      this._timer = null
      setTimeout(() => {
        this.show = false
        this.$nextTick(() => {
          setTimeout(() => {
            this.percent = 0
          }, 200)
        })
      }, 500)
      return this
    },
    fail () {
      this.canSuccess = false
      return this
    }
  }
}
</script>

<style scoped>
.progress {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 20px;
  width: 0%;
  transition: width 0.2s, opacity 0.4s;
  opacity: 1;
  background-color: #efc14e;
  z-index: 999999;
}
</style>
