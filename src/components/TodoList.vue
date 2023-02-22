<script>
export default {
  props: ["todos"],

  data() {
    return {
      title: "",
    };
  },

  methods: {
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },

    getNewId() {
      return Math.max(...this.todos.map((todo) => todo.id)) + 1;
    },

    handleSubmit() {
      this.todos.push({
        id: this.getNewId(),
        completed: false,
        name: this.title,
      });

      this.title = "";
    },
  },
};
</script>

<template>
  <div class="noteapp__content">
    <header class="noteapp__header">
      <form @submit.prevent="handleSubmit">
        <input
          type="text"
          ref="{newTodoField}"
          class="noteapp__new-todo"
          placeholder="What needs to be done?"
          v-model="title"
        />
      </form>
    </header>

    <section
      class="noteapp__main"
      v-if="todos.length"
      v-for="(todo, index) of todos"
      :key="todo.id"
    >
      <div class="note" :class="{ completed: todo.completed }">
        <label class="note__status-label">
          <input
            type="checkbox"
            class="note__status"
            v-model="todo.completed"
          />
        </label>

        <span class="note__title">{{ todo.name }}</span>
        <button type="button" class="note__remove" @click="deleteTodo(index)">
          ×
        </button>
      </div>
    </section>
  </div>
</template>
