<script>
import TodoList from "../components/TodoList.vue";

export default {
  components: {
    TodoList,
  },

  data() {
    let notes = [];
    const jsonData = localStorage.getItem("notes") || "[]";

    try {
      notes = JSON.parse(jsonData);
    } catch {}

    const selectedNote = notes.find(
      (note) => note.id === +this.$route.params.id.slice(1)
    );

    return {
      selectedNote,
      notes,
      newNoteTitle: selectedNote.title,
      newTodoTitle: "",
      editingNote: false,
    };
  },

  methods: {
    deleteNote() {
      localStorage.setItem(
        "notes",
        JSON.stringify(
          this.notes.filter((note) => note.id !== this.selectedNote.id)
        )
      );
    },

    rename() {
      this.selectedNote.title = this.newNoteTitle;
      this.editingNote = false;
    },

    saveChanges() {
      const newNotes = this.notes.filter(
        (note) => note.id !== this.selectedNote.id
      );
      newNotes.unshift(this.selectedNote);

      localStorage.setItem("notes", JSON.stringify(newNotes));

      this.$router.go(-1);
    },

    edit() {
      this.newNoteTitle = this.selectedNote.title;
      this.editingNote = true;
      this.$nextTick(() => {
        this.$refs["title-field"].focus();
      });
    },
  },
};
</script>

<template>
  <div className="modal is-active">
    <div className="modal-background" />

    <div className="modal-card">
      <header className="modal-card-head is-justify-content-space-between">
        <button class="button is-success" @click="saveChanges()">
          <span class="icon is-small">
            <i class="fas fa-check"></i>
          </span>
          <span>Save</span>
        </button>

        <RouterLink :to="`/delete/:${selectedNote.id}`">
          <button class="button is-danger is-outlined">
            <span>Delete</span>
            <span class="icon is-small">
              <i class="fas fa-times"></i>
            </span>
          </button>
        </RouterLink>

        <RouterLink to="/">
          <p class="control">
            <button class="button">Cancel</button>
          </p>
        </RouterLink>
      </header>

      <div className="modal-card-body">
        <form v-if="editingNote" @submit.prevent="rename">
          <input
            type="text"
            class="note__title-field"
            placeholder="Empty todo will be deleted"
            v-model="newNoteTitle"
            ref="title-field"
            @keyup.esc="editingNote = false"
          />
        </form>

        <h1 v-else class="content is-large" @dblclick="editingNote = true">
          {{ selectedNote.title }}
        </h1>

        <p class="noteapp__todo"><strong>Todo:</strong></p>

        <div class="noteapp__content">
          <TodoList :todos="selectedNote.todos" />
        </div>
      </div>
    </div>
  </div>
</template>
