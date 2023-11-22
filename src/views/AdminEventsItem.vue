<!-- eslint-disable vuejs-accessibility/media-has-caption -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <HeaderSlot></HeaderSlot>
  <AdminMenu></AdminMenu>
    <div class="container">
      <fieldset class="admin__card-form">
        <div class="admin__card-form__input-container">
        <div>
           <label for="">Заголовок рус
            <input class="form-control" type="text" v-model="eventsItemData.cardHeader.rus">
        </label>
        <label for="">Заголовок eng
            <input class="form-control" type="text" v-model="eventsItemData.cardHeader.eng">
        </label>
        </div>
        <div>
          <label for="">Текс отображаемый на карточке рус
            <textarea class="form-control" name="" id="" cols="50" rows="5"></textarea></label>
          <label for="">Текс отображаемый на карточке eng
            <textarea class="form-control" name="" id="" cols="50" rows="5"></textarea></label>
        </div>
      </div>
        <img v-if="eventsItemData.img" height="200"
         :src="require(`@/assets/img/${eventsItemData.img}`)" alt="pzs">
        <label v-else for="">Фото
            <input type="file">
        </label>
      </fieldset>
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
      <hr>  <p>ENG</p>
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
      <div v-for="itemPdf in eventsItemData.pdf" :key="itemPdf.pdf">
        <a href="" download>{{ itemPdf.pdfLink }}</a>
        <button @click="delPdf(itemPdf.pdfLink)">X</button>
      </div>
      <label for="">Выбрать файл PDF
      <input type="file"></label>
      <button class="btn btn-primary admin__btn-save" @click="saveData">Сохранить</button>
    </div>
</template>
<script>
import Image from '@tiptap/extension-image';
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
    delPdf(pdfLink) {
      this.eventsItemData.pdf = this.eventsItemData.pdf.filter((item) => item.pdfLink !== pdfLink);
    },
    addPdf() {
      this.eventsItemData.pdf.push({ pdfLink: 'normal.pdf', id: 0 });
    },
    saveData() {
      this.eventsItemData.content.rus = this.editor.getHTML();
      this.eventsItemData.content.eng = this.editor.getHTML();
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
      content: this.eventsItemData.content.rus,
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
      content: this.eventsItemData.content.eng,
    });
  },
  computed: {
    eventsItemData() {
      return this.$store.state.lawyerEvents.find((item) => item.id === this.$route.params.id);
    },
  },
  beforeUnmount() {
    // this.editor.destroy();
  },
};
</script>
<style lang="scss" scoped>
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
.btn-admin-menu-editor
{
  width: 25px;
}

.admin__card-form
{
  display: flex;
  border: 1px solid rgba(128, 128, 128, 0.548);
  max-width: 800px;
  justify-content: space-between;
  margin: 0px auto;
  margin-bottom: 40px;
  padding: 10px;
  border-radius: 20px;
}
.admin__btn-save
{
  margin: 20px auto;
  display: block;
  width: 20vw;
}
.admin__card-form__input-container label
{
width: 100%;
padding-right: 20px;
}
</style>
