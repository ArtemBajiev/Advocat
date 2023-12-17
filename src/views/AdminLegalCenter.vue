<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <HeaderSlot></HeaderSlot>
  <div class="container">
    <section name="admin-legal-center">
      <AdminMenu></AdminMenu>
      <div class="admin-legal-center__header">
      <label for=""
        >rus
        <textarea name="" id="" v-model="legalCenterData.header.rus"
         class="form-control" cols="100" rows="2"></textarea>
      </label>
      <label for=""
        >eng
        <textarea name="" id="" v-model="legalCenterData.header.eng"
         class="form-control" cols="100" rows="2"></textarea>
      </label>
    </div>
      <TextEditor ref="textEditorRus" :content="legalCenterData.text.rus"></TextEditor>
      <hr />
      <TextEditor ref="textEditorEng" :content="legalCenterData.text.eng"></TextEditor>
      <button class="btn btn-primary admin__btn-save" @click="saveLegalCenter">Сохранить</button>
    </section>
  </div>
</template>
<script>
import TextEditor from '@/components/TextEditor.vue';
import HeaderSlot from '@/components/HeaderSlot.vue';
import AdminMenu from '@/components/AdminMenu.vue';
import axiosClient from '@/axios';

export default {
  components: {
    TextEditor,
    HeaderSlot,
    AdminMenu,
  },

  data() {
    return {
    };
  },

  methods: {
    saveData() {
      this.legalCenterData.text.rus = this.$refs.textEditorRus.editor.getHTML();
      this.legalCenterData.text.eng = this.$refs.textEditorEng.editor.getHTML();
    },
    saveLegalCenter() {
      this.saveData();
      axiosClient
        .post(`${this.$store.state.URL__DATA}api/update`, {
          arrayName: 'LegalCenter',
          id: null,
          data: JSON.stringify(this.legalCenterData),
        })
        .then(() => {
          alert('Данные обновлены');
          this.$store.dispatch('GetData');
        })
        .catch((response) => alert(`Ошибка при выполнении запроса. Код ошибки: ${response.response.status}`));
    },
  },
  computed: {
    legalCenterData() {
      return this.$store.state.receivedData.LegalCenter;
    },
  },
  beforeUnmount() {
    // this.editor.destroy();
  },
};
</script>

<style lang="scss" scoped>
.admin-legal-center__header
{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
.is-active {
  background-color: rgba(150, 150, 150, 0.329) !important;
}
.buttons-editor button {
  border: 0px;
  padding: 7px;
  border-left: 1px solid #0000001f;
  border-right: 1px solid #0000001f;
  margin: 0px 3px;
  background-color: transparent;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.363);
}
.img-admin {
  max-height: 300px;
}
.tiptap {
  max-width: 1226px;
  padding: 0px 12px;
  margin: 0px auto;
  min-height: 600px !important;
  border: 1px solid rgb(0, 0, 0);
}
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }
  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
}
.tip-img {
  float: left;
  max-height: 300px;
}
</style>
