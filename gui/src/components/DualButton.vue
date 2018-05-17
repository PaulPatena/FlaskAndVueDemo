<template>
  <div>
    <v-btn :color="leftButtonColor" @click.native="leftButtonCallback">
      {{leftButtonText}}
    </v-btn>
    <v-btn :color="rightButtonColor" @click.native="rightButtonCallback">
      {{rightButtonText}}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'dual-button',
  props: {
    leftButtonText: { type: String, default: 'Ok' },
    rightButtonText: { type: String, default: 'Cancel' },
    leftButtonCallback: { type: Function, default: function () { console.log('leftButton Pressed') } },
    rightButtonCallback: { type: Function, default: function () { console.log('rightButton Pressed') } },
    leftButtonColor: {type: String, default: 'secondary'},
    rightButtonColor: {type: String, default: 'primary'}
  }
}
</script>

<style scoped>

</style>
