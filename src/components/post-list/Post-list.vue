<template lang="html">
<div class="post__list">

  <ul>
    <li v-for="post in posts">
      <Post
        :title="post.title"
        :description="post.description"
        :votes="post.votes"
      />
    </li>
  </ul>
</div>
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
