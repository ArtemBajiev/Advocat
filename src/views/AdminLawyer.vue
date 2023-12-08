<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <section name="admin-lawyer">
    <HeaderSlot></HeaderSlot>
    <AdminMenu></AdminMenu>
    <div class="container">
      <fieldset class="admin__lawyer-info">
      <label for=""
        >ФИО рус<input class="form-control"
         name="nameRus" type="text" v-model="getAdvocatInfo.name.rus"
      /></label>
      <label for=""
        >ФИО eng<input class="form-control"
         name="nameRus" type="text" v-model="getAdvocatInfo.name.eng"
      /></label>
      <label for=""
        >Полное ФИО рус<input class="form-control"
         name="fullNameRus" type="text" v-model="getAdvocatInfo.fullName.rus"
      /></label>
      <label for=""
        >Полное ФИО eng<input class="form-control"
         name="fullNameRus" type="text" v-model="getAdvocatInfo.fullName.eng"
      /></label>
    </fieldset>
      <div class="admin__lawyer-img">
        <img v-if="getAdvocatInfo.img"
          width="300" :src="require(`@/assets/img/${getAdvocatInfo.img}`)"
         alt="">
         <form class="admin-lawyer__form-img">
            <label for=""><input  type="file" /></label>
            <button type="submit" class="btn btn-light">Заменить</button>
         </form>
      </div>
      <p>РУС</p>
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
            Горизонтальная линия</button>
          <button @click="editor.chain().focus().setHardBreak().run()">Разрыв строки</button>
          <button
            @click="editor.chain().focus().setTextAlign('left').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
          >
            <img src="../assets/img/textLeft.svg" class="btn-admin-menu-editor" alt="">
          </button>
          <button
            @click="editor.chain().focus().setTextAlign('center').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
          >
          <img src="../assets/img/textCenter.svg" class="btn-admin-menu-editor" alt="">
          </button>
          <button
            @click="editor.chain().focus().setTextAlign('right').run()"
            :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
          >
          <img src="../assets/img/textRight.svg" class="btn-admin-menu-editor" alt="">
          </button>
        </div>
      </div>
    <editor-content :editor="editor" />
    <hr>
    <p>ENG</p>
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
          <img src="../assets/img/textLeft.svg" class="btn-admin-menu-editor" alt="">
          </button>
          <button
            @click="editorEng.chain().focus().setTextAlign('center').run()"
            :class="{ 'is-active': editorEng.isActive({ textAlign: 'center' }) }"
          >
          <img src="../assets/img/textCenter.svg" class="btn-admin-menu-editor" alt="">
          </button>
          <button
            @click="editorEng.chain().focus().setTextAlign('right').run()"
            :class="{ 'is-active': editorEng.isActive({ textAlign: 'right' }) }"
          >
          <img src="../assets/img/textRight.svg" class="btn-admin-menu-editor" alt="">
          </button>
            </div>
      </div>
    <editor-content :editor="editorEng" />
    <section name="contacts">
      <fieldset class="admin__lawyer__contacts">
        <div class="admin__lawyer__contacts__inputs">
        <label for="">Номер телефона
          <input class="form-control" type="number" v-model="getAdvocatInfo.telLink" /></label>
        <label for="">Email
          <input class="form-control" type="text" v-model="getAdvocatInfo.email" /></label>
        <label for="">Адресс
          <input class="form-control" type="text" v-model="getAdvocatInfo.address.rus" /></label>
          </div>
          <div class="admin__lawyer__contacts__inputs">
        <label for="">Адресс eng
          <input class="form-control" type="text" v-model="getAdvocatInfo.address.eng" /></label>
        <label for="">WhatsApp
          <input class="form-control" type="number" v-model="getAdvocatInfo.address" /></label>
        <label for="">telegram
          <input class="form-control" type="number" v-model="getAdvocatInfo.address" /></label>
          </div>
      </fieldset>
    </section>
    <form @submit.prevent="">
      <a href="">загруженный файл</a>
      <br>
      <label for="">Статьи<br><input type="file"></label>
      <br>
      <button type="submit" class="btn btn-light" >заменить</button>
    </form>
    <button class="btn btn-primary admin__btn-save" @click="Post()">Сохранить</button>
    </div>
  </section>
</template>
<script>
import StarterKit from '@tiptap/starter-kit';
import { Editor, EditorContent } from '@tiptap/vue-3';
import TextAlign from '@tiptap/extension-text-align';
import HeaderSlot from '@/components/HeaderSlot.vue';
import AdminMenu from '@/components/AdminMenu.vue';

export default {
  components: {
    EditorContent,
    HeaderSlot,
    AdminMenu,
  },

  data() {
    return {
      editor: null,
      editorEng: null,
      adminAdvocatData: [],
    };
  },

  methods: {
    Post() {
      this.getAdvocatInfo.info.rus = this.editor.getHTML();
      this.getAdvocatInfo.info.eng = this.editor.getHTML();
    },
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        TextAlign,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
      ],
      content: this.getAdvocatInfo.info.rus,
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
      content: this.getAdvocatInfo.info.eng,
    });
  },
  computed: {
    getAdvocatInfo() {
      // eslint-disable-next-line max-len
      return this.$store.state.receivedData
        .advocatsInfo.find((item) => item.id === this.$route.params.id);
    },
  },
  beforeUnmount() {
    // this.editor.destroy();
  },
};
</script>

<style lang="scss" scoped>

.btn-admin-menu-editor
{
  width: 25px;
}
.is-active{
  background-color: rgba(150, 150, 150, 0.329) !important;
}
.buttons-editor button
{
  border: 0px;
  padding: 7px;
  border-left: 1px solid #0000001f;
  border-right:1px solid #0000001f ;
  margin: 0px 3px;
  background-color: transparent;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.363);
}
.buttons-editor
{
  display: flex;
  justify-content: space-between;
}
.admin-lawyer__form-img
{
  margin-top: 20px;
  text-align: center;
  margin-left: auto;
}
.admin-lawyer__form-img{
  margin: 10px;
  margin-left: auto;

}
.admin__lawyer-info
{
  display: flex;
}
.admin__lawyer-info label
{
  flex: 1 1 auto;
  margin: 4px;
}
.admin__lawyer-img
{
  margin: 10px;
}
.admin__lawyer-img img
{
  display: block;
  margin: auto;
}
.img-admin {
  max-height: 300px;
}
.admin__lawyer__contacts__inputs
{
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 20px;
}
.admin__lawyer__contacts
{
  display: flex;
  justify-content: space-between;
}
.admin__btn-save
{
  margin: 20px auto;
  display: block;
  width: 20vw;
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
