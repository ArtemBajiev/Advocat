<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable import/no-unresolved -->

<template>
  <HeaderSlot></HeaderSlot>
  <AdminMenu></AdminMenu>
  <div class="container">
    <div class="admin__main__cards">
    <div class="admin__main__card-item" v-for="item in mainCardData"
    :key="item.id">
      <textarea class="admin__main__card__input" type="text" v-model="item.text.rus"></textarea>
    </div>
  </div>
    <hr>
    <div class="admin__main__cards">
    <div class="admin__main__card-item" v-for="item in mainCardData"
    :key="item.id">
      <textarea class="admin__main__card__input" type="text" v-model="item.text.eng"></textarea>
    </div>
</div>
  <div v-if="editor" class="button-container">
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
      Заголовок 1 уровня
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 2 })
    .run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
      Заголовок 2 уровня
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 3 })
    .run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
      Заголовок 3 уровня
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

  </div>
</div>
  <editor-content :editor="editor" />
</template>

<script>

import HeaderSlot from '@/components/HeaderSlot.vue';
import AdminMenu from '@/components/AdminMenu.vue';

export default {
  components: {
    AdminMenu,
    HeaderSlot,
  },

  data() {
    return {
    };
  },
  computed: {
    mainCardData() {
      return this.$store.state.articles;
    },
  },

};
</script>

<style lang="scss">
.admin__main__card__input
{
  width: 270px;
  height: 300px;
  word-wrap: break-word;
  font-size: 18px;
  text-align: center;
  line-height: 1.1;
  padding: 10px;
  border-radius: 20px;
  border: 0px solid transparent;
  margin-bottom: 10px;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.411);

}
.admin__main__cards
{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
