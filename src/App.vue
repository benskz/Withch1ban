<template>
  <div id="app">
    <h1>Hello Withch1ban!</h1>

    <Post
      title="This is a post title"
      description="This is a post description"
      votes="123"
    />
  </div>
</template>

<script>
  import Post from './components/post/Post.vue';

  export default {
    name: 'App',
    components: {
      Post
    }
  }
</script>
