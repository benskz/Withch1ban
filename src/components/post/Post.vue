<template lang="html">
  <div class="post xs-col-12">
  <div class="post__logo xs-col-2">
<img src="" alt="Icon" />
  </div>
  <div class="post__details-container xs-col-8">
    <h2 class="post__title">{{title}}</h2>
    <p class="post__description">{{description}}</p>

   {{ brand }}

  </div>
   <div class="post__votes-container xs-col-2"> 
    <div class="vote vote--up"></div>

    <p class="post__votes">{{votes}}</p>    

        <div class="vote vote--down"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: [
    'title',
    'description',
    'votes',
    'brand'
  ]
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

.post{
  float: left;
  font-family: 'Arial';
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
}

.post__details-container{
  float: left;
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
}

.vote--up {
  background-image: url("../../img/sort-up.svg");
  fill: #ff0000;
}

.vote--down {
  background-image: url("../../img/sort-down.svg");
  fill: #ff0000;
}

</style>
