
<template>
  <div>
    <h1>Innovation Portal</h1>
    <PostForm />
    <PostList :posts="posts"/>
</div>
</template>

<script>
  import axios from 'axios';
  import PostList from './components/post-list/Post-list.vue';
  import PostForm from './components/Form.vue';

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