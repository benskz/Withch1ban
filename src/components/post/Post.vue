<template lang="html">
  <div class="post">
    <h2 class="post__title">{{title}}</h2>
    <p class="post__description">{{description}}</p>
    <p class="post__votes">{{votes}}</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: [
    'title',
    'description',
    'votes'
  ]
}
</script>
