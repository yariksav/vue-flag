<template>
  <span class="flag"
    :title="title"
    :class="flagIconClass"/>
</template>
<script>
import './flags.scss'

export default {
  props: {
    code: {
      type: String,
      default: 'ua'
    },
    title: String,
    size: String
  },
  computed: {
    flagIconClass () {
      return {
        ['flag-size-' + this.size]: Boolean(this.size),
        ['flag-' + (this.code || '').toLowerCase()]: Boolean(this.code)
      }
    }
  }
}
</script>
