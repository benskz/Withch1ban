<template>
  <div id="app">
    <h1>Hello Withch1ban!</h1>

    <PostList :posts="posts"/>
</div>
</template>

<script>
  import axios from 'axios';
  import PostList from './components/post-list/Post-list.vue';

  export default {
    name: 'App',

    components: {
      PostList
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
