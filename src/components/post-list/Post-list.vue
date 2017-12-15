<template lang="html">
<div class="post__list xs-col-12">


    <div class="post-item xs-col-12" v-for="post in posts">
      <Post
        :title="post.title"
        :description="post.description"
        :votes="post.votes"
        :brand="post.brand"
        :postId="post._id"
        @upvote="upvote"
        @downvote="downvote"
      />
    </div>
</div>
</template>

<script>
import Post from '../post/Post.vue';

export default {
  name: 'Post-list',

  components: {
    Post
  },

  props: ['posts'],

  methods: {
    upvote(e) {
      this.posts.forEach(post => {
        if (post._id === e.id) {
          switch (e.voteState) {
            case 'none':
              post.votes += 1;
              break;
            case 'down':
              post.votes += 2;
              break;
          }
        }
      });
    },

    downvote(e) {
      this.posts.forEach(post => {
        if (post._id === e.id) {
          switch (e.voteState) {
            case 'none':
              post.votes -= 1;
              break;
            case 'up':
              post.votes -= 2;
              break;
          }
        }
      });
    }
  }
}
</script>
