<script>
export default {
  data() {
    let notes = [];
    const jsonData = localStorage.getItem("notes") || "[]";

    try {
      notes = JSON.parse(jsonData);
    } catch {}

    return {
      notes,
    };
  },

  methods: {
    todosPreview(todos) {
      return todos.slice(0, 3);
    },
  },
};
</script>

<template>
  <div class="noteapp">
    <RouterLink :to="`/create/`"><div class="noteapp__new">+</div></RouterLink>

    <h1 class="noteapp__title">Notes</h1>

    <div v-for="note of notes" v-bind:key="note.id" class="box noteapp__box">
      <RouterLink :to="`/edit/:${note.id}`">
        <div class="noteapp__edit">✎</div>
      </RouterLink>

      <RouterLink :to="`/delete/:${note.id}`">
        <div class="noteapp__delete">🗑</div>
      </RouterLink>

      <h1 class="content is-large">{{ note.title }}</h1>

      <p class="noteapp__todo" v-if="note.todos.length">
        <strong>Todo:</strong>
      </p>

      <div class="noteapp__content">
        <section
          class="noteapp__main"
          v-for="todo of todosPreview(note.todos)"
          :key="todo.id"
        >
          <div class="note" :class="{ completed: todo.completed }">
            <label class="note__status-label">
              <input type="checkbox" class="note__status" defaultChecked />
            </label>

            <span class="note__title">{{ todo.name }}</span>
          </div>
        </section>
      </div>

      <div v-if="note.todos.length > 3" class="columns is-centered is-size-1">
        ...
      </div>
    </div>
  </div>
</template>
