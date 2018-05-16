<template>
  <div>
    <v-btn :color="leftButtonColor" @click.native="leftButtonCallback"
           leica_id="leftButton-4c32abba-e520-4c69-be66-5efc75f59330">{{leftButtonText}}
    </v-btn>
    <v-btn :color="rightButtonColor" @click.native="rightButtonCallback"
           leica_id="rightButton-d32a7674-98df-46a1-9272-1d4558838991">{{rightButtonText}}
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
