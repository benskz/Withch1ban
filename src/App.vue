
<template>
  <div>
    
    <header class="wb-innovation-header">
      <section class="wb-innovation-container">
        <h1>Whitbread</h1>
      </section>
    </header>
    
    <section class="wb-innovation-container">
      <PostForm />
        <PostList :posts="posts"/>
    </section>
</div>
</template>

<script>
  import axios from 'axios';
  import PostList from './components/post-list/Post-list.vue';
  import PostForm from './components/form/Form.vue';

  export default {
    name: 'App',

    components: {
      PostList,
      PostForm
    },

    data() {
      return {
        posts: []
      }
    },

    created() {
      axios.get('http://innovation-vote.whitbread.digital:8080/post')
      .then(response => {
        this.posts = response.data;
      });
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/basscss/css/basscss";
  @import "./scss/breakpoints";
  @import "./scss/vars";
  @import "./scss/typography";
  @import "./scss/generic";
  @import "./scss/_normalize";
  @import "./scss/tools";
  @import "./scss/objects";
  @import "./scss/form";
</style>