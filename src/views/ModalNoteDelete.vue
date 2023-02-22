<script>
export default {
  data() {
    let notes = [];
    const jsonData = localStorage.getItem("notes") || "[]";

    try {
      notes = JSON.parse(jsonData);
    } catch {}

    return {
      selectedNote: notes.find(
        (note) => note.id === +this.$route.params.id.slice(1)
      ),
      notes,
      varning: false,
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
  },
};
</script>

<template>
  <div className="modal is-active">
    <div className="modal-background" />

    <div class="modal-card">
      <div class="dialog">
        <h1 class="dialog__title">Are you shure?</h1>

        <div class="dialog__body">
          <RouterLink to="/">
            <button class="button is-danger is-outlined" @click="deleteNote()">
              <span>Delete</span>
              <span class="icon is-small">
                <i class="fas fa-times"></i>
              </span>
            </button>
          </RouterLink>

          <p class="control" @click="this.$router.go(-1)">
            <button class="button">Cancel</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
