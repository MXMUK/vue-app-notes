<script>
import TodoList from "../components/TodoList.vue";

export default {
  components: {
    TodoList,
  },

  data() {
    return {
      noteTitle: "",
      todoTitle: "",
      todos: [],
    };
  },

  methods: {
    getNewId(data) {
      if (data.length === 0) {
        return 1;
      }

      return Math.max(...data.map((item) => +item.id)) + 1;
    },

    deleteTodo(index) {
      this.todos.splice(index, 1);
    },

    handleSubmitTodo() {
      this.todos.push({
        id: this.getNewId(this.todos),
        completed: false,
        name: this.todoTitle,
      });

      this.todoTitle = "";
    },

    handleSubmit() {
      let notes = [];
      const jsonData = localStorage.getItem("notes") || "[]";

      try {
        notes = JSON.parse(jsonData);
      } catch {}

      const newNote = {
        id: this.getNewId(notes),
        title: this.noteTitle,
        todos: this.todos,
      };

      if (!this.noteTitle) {
        return;
      }

      localStorage.setItem("notes", JSON.stringify([...notes, newNote]));

      this.noteTitle = "";
      this.todoTitle = "";
      this.todos = [];
      this.$router.go(-1);
    },
  },
};
</script>

<template>
  <div className="modal is-active" data-cy="modal">
    <div className="modal-background" />

    <div className="modal-card">
      <header className="modal-card-head is-justify-content-space-between">
        <RouterLink to="/">
          <button
            class="button is-success"
            @click="handleSubmit"
          >
            <span class="icon is-small">
              <i class="fas fa-check"></i>
            </span>
            <span>Save</span>
          </button>
        </RouterLink>

        <RouterLink to="/">
          <p class="control">
            <button class="button">Cancel</button>
          </p>
        </RouterLink>
      </header>

      <div class="modal-card-body">
        <div class="noteapp__content">
          <form @submit.prevent="handleSubmit">
            <header className="modal-card-head">
              <div className="modal-card-title has-text-weight-medium">
                <input
                  type="text"
                  ref="{newTodoField}"
                  class="noteapp__new-todo"
                  placeholder="Enter a name of note"
                  required
                  v-model="noteTitle"
                />
              </div>
            </header>

            <div class="oteapp__content">
              <TodoList :todos="todos" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
