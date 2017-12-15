<template>
  <section class='wb-innovation-form-copy'>
    <h2>Welcome to the Whitbread innovation portal!</h2>

    <form class="wb-innovation-form" v-on:submit="submit">
        <select class="wb-innovation-form-selection" id='select'>
            <option value="" disabled selected>Brand</option>
            <option value="pi">Premier Inn</option>
            <option value="hub">Hub by Premier Inn</option>
            <option value="costa">Costa</option>
            <option value="restaurants">Restaurants</option>
        </select>
        <br />
        <input id='title' required placeholder="What is your idea?">
        <br />
        <textarea id='description' required placeholder="Describe your idea in 130 characters"></textarea>   
        <br />
        <div style="text-align:center">
            <button type="submit" id='cancelButton'>Cancel</button>
            <button type="submit" id='submitButton'>Submit</button>
        </div>
    </form>
  </section>
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

