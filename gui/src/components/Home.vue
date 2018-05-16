<template>
  <v-container>
    <v-layout row wrap align-center>

      <v-flex xs12>
        <v-card class="text-xs-center ma-2 pa-2">
          <span class="display-1">{{title}}</span><br>
          <img src="../assets/paul_logo.png" height="200px" alt="">
        </v-card>
      </v-flex>

      <v-flex>
        <v-card class="ma-2">
          <v-card-title><h1>Tasks</h1></v-card-title>
          <v-card-text class="px-5">
            <span v-for="(task, index) in tasks" v-bind:key="task">
                <span class="title">{{index+1}}. {{task}}</span>
                <v-btn color="red" fab small dark
                       v-on:click="deleteHandler(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
                <br>
            </span>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex>
        <v-card class="text-xs-center ma-2">
          <v-card-title>
            <h1>Add Task</h1>
          </v-card-title>
          <v-card-text class="px-5">
            <v-text-field v-model="inputText" label="new task"></v-text-field>
            <v-btn color="primary" v-on:click="clickAddButton">Add</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: 'One way data-binding',
      tasks: ['Learn Python and Flask', 'Learn Javascript and Vue', 'Learn Embedded Circuits and Cpp', 'Do Something Amazing'],
      inputText: ''
    }
  },
  methods: {
    clickAddButton () {
      this.tasks.push(this.inputText)
    },
    deleteHandler (index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
