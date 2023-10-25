<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <HeaderSlot></HeaderSlot>
    <div class="container">
    <section name="legal-center">

        <AdminMenu></AdminMenu>
      <div class="container">
        <div class="button-container">
      <div v-if="editor">
        <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().
        chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
          bold
        </button>
        <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can()
        .chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
          italic
        </button>
        <button @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can()
        .chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
          strike
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 1 })
        .run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
          Заголовок 1
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 2 })
        .run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
          Заголовок 2
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 3 })
        .run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
          Заголовок 3
        </button>
        <button @click="editor.chain().focus().toggleBulletList().run()"
         :class="{ 'is-active': editor.isActive('bulletList') }">
          bullet list
        </button>
        <button @click="editor.chain().focus().toggleOrderedList().run()"
         :class="{ 'is-active': editor.isActive('orderedList') }">
          ordered list
        </button>
        <button @click="editor.chain().focus().toggleBlockquote().run()"
         :class="{ 'is-active': editor.isActive('blockquote') }">
          blockquote
        </button>
        <button @click="editor.chain().focus().setHorizontalRule().run()">
          horizontal rule
        </button>
        <button @click="editor.chain().focus().setHardBreak().run()">
          hard break
        </button>
        <button @click="editor.chain().focus().setTextAlign('left').run()"
         :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
          left
        </button>
        <button @click="editor.chain().focus().setTextAlign('center').run()"
         :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
          center
        </button>
        <button @click="editor.chain().focus().setTextAlign('right').run()"
         :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
          right
        </button>
        <button @click="editor.chain().focus().setTextAlign('justify').run()"
         :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
          justify
        </button>
        <button @click="editor.chain().focus().unsetTextAlign().run()">
          unsetTextAlign
        </button>
        <button @click="addImage" >add image from URL</button>

      </div>
        </div>
      </div>
      <editor-content :editor="editor" />
      <div class="button-container">
      <div v-if="editorEng">
        <button @click="editorEng.chain().focus().toggleBold().run()" :disabled="!editorEng.can().
        chain().focus().toggleBold().run()" :class="{ 'is-active': editorEng.isActive('bold') }">
          bold
        </button>
        <button @click="editorEng.chain().focus().toggleItalic().run()" :disabled="!editorEng.can()
        .chain().focus().toggleItalic().run()" :class="
        { 'is-active': editorEng.isActive('italic') }">
          italic
        </button>
        <button @click="editorEng.chain().focus().toggleStrike().run()" :disabled="!editorEng.can()
        .chain().focus().toggleStrike().run()" :class="{
             'is-active': editorEng.isActive('strike') }">
          strike
        </button>
        <button @click="editorEng.chain().focus().toggleHeading({ level: 1 })
        .run()" :class="{ 'is-active': editorEng.isActive('heading', { level: 1 }) }">
          Заголовок 1
        </button>
        <button @click="editorEng.chain().focus().toggleHeading({ level: 2 })
        .run()" :class="{ 'is-active': editorEng.isActive('heading', { level: 2 }) }">
          Заголовок 2
        </button>
        <button @click="editorEng.chain().focus().toggleHeading({ level: 3 })
        .run()" :class="{ 'is-active': editorEng.isActive('heading', { level: 3 }) }">
          Заголовок 3
        </button>
        <button @click="editorEng.chain().focus().toggleBulletList().run()"
         :class="{ 'is-active': editorEng.isActive('bulletList') }">
          bullet list
        </button>
        <button @click="editorEng.chain().focus().toggleOrderedList().run()"
         :class="{ 'is-active': editorEng.isActive('orderedList') }">
          ordered list
        </button>
        <button @click="editorEng.chain().focus().toggleBlockquote().run()"
         :class="{ 'is-active': editorEng.isActive('blockquote') }">
          blockquote
        </button>
        <button @click="editorEng.chain().focus().setHorizontalRule().run()">
          horizontal rule
        </button>
        <button @click="editorEng.chain().focus().setHardBreak().run()">
          hard break
        </button>
        <button @click="editorEng.chain().focus().setTextAlign('left').run()"
         :class="{ 'is-active': editorEng.isActive({ textAlign: 'left' }) }">
          left
        </button>
        <button @click="editorEng.chain().focus().setTextAlign('center').run()"
         :class="{ 'is-active': editorEng.isActive({ textAlign: 'center' }) }">
          center
        </button>
        <button @click="editorEng.chain().focus().setTextAlign('right').run()"
         :class="{ 'is-active': editorEng.isActive({ textAlign: 'right' }) }">
          right
        </button>
        <button @click="editorEng.chain().focus().setTextAlign('justify').run()"
         :class="{ 'is-active': editorEng.isActive({ textAlign: 'justify' }) }">
          justify
        </button>
        <button @click="editorEng.chain().focus().unsetTextAlign().run()">
          unsetTextAlign
        </button>
        <button @click="addImage" >add image from URL</button>

      </div>
        </div>
      <editor-content :editor="editorEng" />

      <button @click="Post()">Сохранить</button>
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
      return this.$store.state.LegalCenter;
    },
  },
  beforeUnmount() {
    // this.editor.destroy();
  },
};
</script>

    <style lang="scss">
    .img-admin
    {
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
        background: #0D0D0D;
        color: #FFF;
        font-family: 'JetBrainsMono', monospace;
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
        border-left: 2px solid rgba(#0D0D0D, 0.1);
      }
      hr {
        border: none;
        border-top: 2px solid rgba(#0D0D0D, 0.1);
        margin: 2rem 0;
      }
    }
    .tip-img
    {
      float: left;
      max-height: 300px;
    }
    </style>
