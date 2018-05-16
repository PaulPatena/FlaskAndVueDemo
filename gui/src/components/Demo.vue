<template>
  <v-container>
    <v-layout row wrap align-center>

      <v-flex xs12>
        <v-card class="text-xs-center ma-2 pa-2">
          <span class="display-1">{{title}}</span><br>
          <img src="../assets/paul_logo.png" height="200px" alt="">
        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-card class="text-xs-center ma-2">
          <v-card-title><h1>Students</h1></v-card-title>
          <v-card-text class="px-5">
            <span v-for="(student, index) in students" v-bind:key="student.name">
                <span class="display-1">{{student.name}}</span><br>
                <v-btn color="green" fab small dark
                       v-on:click="updateScore(index, 1)">
                  <v-icon>add</v-icon>
                </v-btn>

                <span class="subheading">Score: {{student.score}}</span>

                <v-btn color="red" fab small dark
                       v-on:click="updateScore(index, -1)">
                  <v-icon>remove</v-icon>
                </v-btn>

                <br>
                <v-divider v-if="index < students.length - 1"
                class="my-2"/>
            </span>

          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 class="text-xs-center">
        <v-btn color="primary" large
               v-bind:disabled="!requireSave"
               v-on:click="saveToServer">SAVE</v-btn>

        <v-btn color="primary" large
               v-bind:disabled="!requireSave"
               v-on:click="loadFromServer">RELOAD</v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: 'Connecting to Backend',
      students: [],
      inputText: '',
      requireSave: false
    }
  },
  methods: {
    clickAddButton () {
      // this.tasks.push(this.inputText)
    },
    updateScore (index, value) {
      this.students[index].score += value
      this.requireSave = true
    },
    loadFromServer () {
      this.$http.get('/students')
        .then(
          resp => {
            this.students = resp.data
            this.requireSave = false
          }
        )
        .catch(
          error => {
            console.log(`Error in request\n ${error}`)
          }
        )
    },
    saveToServer () {
      this.$http.post('/students', this.students)
        .then(
          resp => {
            this.requireSave = false
          }
        )
    }
  },
  created () {
    this.loadFromServer()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
