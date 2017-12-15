<template lang="html">
  <div class="post xs-col-12" :class="[brand ? brand : '']">
    <div class="post__logo xs-col-2">
      <div v-if="brand === 'pi'">
        <img class="brand-logo" src="../../img/logo-premierinn.png" />
      </div>
      <div v-else-if="brand === 'costa'">
        <img class="brand-logo" src="../../img/logo-costa.png" />
      </div>
      <div v-else-if="brand === 'hub'">
        <img class="brand-logo" src="../../img/logo-hub.png" />
      </div>
    </div>
    <div class="post__details-container xs-col-8">
      <h2 class="post__title">{{title}}</h2>
      <p class="post__description">{{description}}</p>
    </div>
    <div class="post__votes-container xs-col-2">
      <span class="vote vote--up" @click="upvote(postId)"></span>
      <p class="post__votes">{{votes}}</p>
      <span class="vote vote--down" @click="downvote(postId)"></span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import userId from '../../utils/user-id';

export default {
  name: 'Post',

  props: [
    'title',
    'description',
    'votes',
    'brand',
    'postId'
  ],

  data() {
    return {
      voteState: 'none'
    }
  },

  methods: {
    upvote(postId) {
      axios.post('http://innovation-vote.whitbread.digital:8080/vote', {
        userId,
        postId,
        vote: 'up'
      })
      .then((response) => {
          this.$emit('upvote', {
            id: this.postId,
            voteState: this.voteState
          });
          this.voteState = 'up';
      })
      .catch(function (error) {
          console.log(error.message);
      })
    },

    downvote(postId) {
      axios.post('http://innovation-vote.whitbread.digital:8080/vote', {
        userId,
        postId,
        vote: 'down'
      })
      .then((response) => {
          this.$emit('downvote', {
            id: this.postId,
            voteState: this.voteState
          });
          this.voteState = 'down';
      })
      .catch(function (error) {
          console.log(error.message);
      })
    }
  }
}
</script>

<style lang="scss">

body{
  font-family: 'Arial';
}

@font-face {
  font-family: 'PremierInn_Sans';
  src: url('/fonts/PremierInnSansWeb-Regular.woff2') format('woff2'),
       url('/fonts/PremierInnSansWeb-Regular.woff') format('woff'),
       url('/fonts/PremierInnSansWeb-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.logo{
  width:150px;
  padding: 20px;
}

.post{
  float: left;
  font-family: 'Arial';

    h2{
    text-align: left;
    margin-top: 0;
  }
}

.post__logo{
  float: left;
}

.post-item{
  float: left;
  padding: 10px 20px;
  box-sizing: border-box;
}

.post__list{
  background-color: #f7f7f7;
  float: left;
  margin-top: 30px;
}

.post__details-container{
  float: left;
  padding: 0 20px;
box-sizing: border-box;
}

.post__votes-container{
  float: left;
  font-size: 18px;
  text-align: center;


}

.vote{
  width: 40px;
  height: 30px;
  background-size: 100%;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}

.vote--up {
  background-image: url("../../img/sort-up.svg");
  fill: #ff0000;
}

.vote--down {
  background-image: url("../../img/sort-down.svg");
  fill: #ff0000;
}

.pi{
  color: #511e62
}

.hub{
  color: #bed600
}

.costa{
  color: #5d301b
}

.brand-logo{
  max-width: 100px;
width: 100%;
float: left;
}


</style>
