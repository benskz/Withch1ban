<template lang="html">
<div class="post__list xs-col-12">


    <div class="post-item xs-col-12" v-for="post in posts">
      <Post
        :title="post.title"
        :description="post.description"
        :votes="post.votes"
        :brand="post.brand"
        :postId="post._id"
        @voteUp="post.votes += 1"
        @voteDown="post.votes -= 1"
      />
    </div>
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
