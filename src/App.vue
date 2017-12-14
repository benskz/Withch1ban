<template>
  <div id="app">
    <h1>Hello Withch1ban!</h1>

    <PostList :posts="posts"/>
</div>
</template>

<script>
  import PostList from './components/post-list/Post-list.vue';

  export default {
    name: 'App',
    components: {
      PostList
    },
    data: () => {
      return {
        posts: [
          {
            title: 'hello',
            description: 'description1',
            votes: 5000
          },
          {
            title: 'Street Fighter',
            description: 'description2',
            votes: 100000
          }
        ]
      }
    }
  }
</script>
