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
      <div class="button-container">
        <div v-if="editor" class="buttons-editor">
          <button
            @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor.isActive('bold') }"
          >
            <strong>Ж</strong>
          </button>
          <button
            @click="editor.chain().focus().toggleItalic().run()"
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editor.isActive('italic') }"
          >
            <i>К</i>
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          >
            Заголовок 1
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          >
            Заголовок 2
          </button>
          <button
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          >
            Заголовок 3
          </button>
          <button
            @click="editor.chain().focus().toggleBulletList().run()"
            :class="{ 'is-active': editor.isActive('bulletList') }"
          >
            Список
          </button>
          <button
            @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{ 'is-active': editor.isActive('orderedList') }"
          >
            Нумерованный список
          </button>
          <button @click="editor.chain().focus().setHorizontalRule().run()">
            Горизонтальная линия
          </button>
          <button @click="editor.chain().focus().setHardBreak().run()">Разрыв строки</button>
          <button
            @click="editor.chain().focus().setTextAlign('left').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
          >
            <img src="../assets/img/textLeft.svg" class="btn-admin-menu-editor" alt="" />
          </button>
          <button
            @click="editor.chain().focus().setTextAlign('center').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
          >
            <img src="../assets/img/textCenter.svg" class="btn-admin-menu-editor" alt="" />
          </button>
          <button
            @click="editor.chain().focus().setTextAlign('right').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
          >
            <img src="../assets/img/textRight.svg" class="btn-admin-menu-editor" alt="" />
          </button>
        </div>
      </div>
      <editor-content :editor="editor" />
      <hr />
      <div class="button-container">
        <div v-if="editorEng" class="buttons-editor">
          <button
            @click="editorEng.chain().focus().toggleBold().run()"
            :disabled="!editorEng.can().chain().focus().toggleBold().run()"
            :class="{ 'is-active': editorEng.isActive('bold') }"
          >
            <strong>Ж</strong>
          </button>
          <button
            @click="editorEng.chain().focus().toggleItalic().run()"
            :disabled="!editorEng.can().chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editorEng.isActive('italic') }"
          >
            <i>К</i>
          </button>
          <button
            @click="editorEng.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': editorEng.isActive('heading', { level: 1 }) }"
          >
            Заголовок 1
          </button>
          <button
            @click="editorEng.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': editorEng.isActive('heading', { level: 2 }) }"
          >
            Заголовок 2
          </button>
          <button
            @click="editorEng.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'is-active': editorEng.isActive('heading', { level: 3 }) }"
          >
            Заголовок 3
          </button>
          <button
            @click="editorEng.chain().focus().toggleBulletList().run()"
            :class="{ 'is-active': editorEng.isActive('bulletList') }"
          >
            Список
          </button>
          <button
            @click="editorEng.chain().focus().toggleOrderedList().run()"
            :class="{ 'is-active': editorEng.isActive('orderedList') }"
          >
            Нумерованный список
          </button>
          <button @click="editorEng.chain().focus().setHorizontalRule().run()">
            Горизонтальная линия
          </button>
          <button @click="editorEng.chain().focus().setHardBreak().run()">Разрыв строки</button>
          <button
            @click="editorEng.chain().focus().setTextAlign('left').run()"
            :class="{ 'is-active': editorEng.isActive({ textAlign: 'left' }) }"
          >
            <img src="../assets/img/textLeft.svg" alt="" />
          </button>
          <button
            @click="editorEng.chain().focus().setTextAlign('center').run()"
            :class="{ 'is-active': editorEng.isActive({ textAlign: 'center' }) }"
          >
            <img src="../assets/img/textCenter.svg" alt="" />
          </button>
          <button
            @click="editorEng.chain().focus().setTextAlign('right').run()"
            :class="{ 'is-active': editorEng.isActive({ textAlign: 'right' }) }"
          >
            <img src="../assets/img/textRight.svg" alt="" />
          </button>
        </div>
      </div>
      <editor-content :editor="editorEng" />

      <button class="btn btn-primary admin__btn-save" @click="saveLegalCenter">Сохранить</button>
    </section>
  </div>
</template>
<script>
import Image from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';
import { Editor, EditorContent } from '@tiptap/vue-3';
// eslint-disable-next-line import/no-extraneous-dependencies
import TextAlign from '@tiptap/extension-text-align';
import HeaderSlot from '@/components/HeaderSlot.vue';
import AdminMenu from '@/components/AdminMenu.vue';
import axiosClient from '@/axios';

export default {
  components: {
    EditorContent,
    HeaderSlot,
    AdminMenu,
  },

  data() {
    return {
      editorEngeditor: null,
      editorEng: null,
      adminAdvocatData: [],
    };
  },

  methods: {
    saveData() {
      this.legalCenterData.text.rus = this.editor.getHTML();
      this.legalCenterData.text.eng = this.editorEng.getHTML();
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
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        TextAlign,
        Image,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        Image.configure({
          HTMLAttributes: {
            class: 'tip-img',
          },
        }),
      ],
      content: this.legalCenterData.text.rus,
    });
    this.editorEng = new Editor({
      extensions: [
        StarterKit,
        TextAlign,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
      ],
      type: 'doc',
      content: this.legalCenterData.text.eng,
    });
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
