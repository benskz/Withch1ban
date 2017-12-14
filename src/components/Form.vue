<template>
  <div>
    <h1>Have an idea?</h1>
    <form v-on:submit="submit">
        <h2> Who is this idea for?</h2>
        <select id='select'>
            <option value="pi">Premier Inn</option>
            <option value="hub">Hub by Premier Inn</option>
            <option value="costa">Costa</option>
            <option value="restaurants">Restaurants</option>
        </select>
        </br>
        <input id='title' placeholder="What is your idea?"></input>
        </br>
        <textarea id='description' placeholder="Describe your idea in 130 characters"></textarea>   
        </br>
        <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
    name: 'PostForm',
    methods: {
        submit() {
            axios.post('http://innovation-vote.whitbread.digital:8080/post', {
                data: this.data}).then(function(response){
                    alert('hi');
                }).catch(function (error){
                    alert('error');
                });
            }
        }
    } 
</script>

<style lang="scss">
  body {
    background-color: #c1c1c1;
  }

  h1 {
    text-align: center;
  }
</style>
