<template >
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
          <button @click="addImage">
      Изображение
    </button>
            <button id="add" @click="addVideo">
        YouTube
      </button>
      <!--<input
        id="width"
        type="number"
        v-model="width"
        placeholder="width"
        min="320"
        max="1024"
      >
      <input
        id="height"
        type="number"
        v-model="height"
        placeholder="height"
        min="180"
        max="720"
      >-->
      </div>
    </div>
      <editor-content :editor="editor" />
</template>
<script>
import Image from '@tiptap/extension-image';
import StarterKit from '@tiptap/starter-kit';
import Youtube from '@tiptap/extension-youtube';
import { Editor, EditorContent } from '@tiptap/vue-3';
import TextAlign from '@tiptap/extension-text-align';

export default {
  props: ['content'],
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: null,
      width: '640',
      height: '480',
    };
  },
  methods: {
    addImage() {
      const url = window.prompt('URL');

      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run();
      }
    },
    addVideo() {
      const url = prompt('Enter YouTube URL');

      this.editor.commands.setYoutubeVideo({
        src: url,
        width: Math.max(320, parseInt(this.width, 10)) || 640,
        height: Math.max(180, parseInt(this.height, 10)) || 480,
      });
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
        Youtube.configure({
          controls: true,
        }),
      ],
      content: this.content,
    });
  },
};
</script>
<style lang="scss">
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
.admin-events__load-img
{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
.tiptap {
  > * + * {
    margin-top: 0.75em;
  }
  iframe{
  width: 100% !important;

  height: 700px !important;
   }
  img {
    max-width: 100%;
    min-width: 30%;
    margin: 0 auto;
    height: auto;

    &.ProseMirror-selectednode {
      outline: 3px solid #68CEF8;
    }
  }
}
</style>
