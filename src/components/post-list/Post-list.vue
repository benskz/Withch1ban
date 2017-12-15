<template lang="html">
  <ul>
    <li v-for="post in posts">
      <Post
        :title="post.title"
        :description="post.description"
        :votes="post.votes"
      />
    </li>
  </ul>
</template>

<script>
import Post from '../post/Post.vue';

export default {
  name: 'Post-list',
  props: ['posts'],
  components: {
    Post
  }
}
</script>
