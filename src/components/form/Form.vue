<template>
  <div>
    <h1>Have an idea?</h1>
    <form @submit.prevent="submit">
        <h2> Who is this idea for?</h2>
        <select v-model="post.selected">
            <option disabled value="">Please select one</option>
            <option value="pi">Premier Inn</option>
            <option value="hub">Hub by Premier Inn</option>
            <option value="costa">Costa</option>
            <option value="restaurants">Restaurants</option>
        </select>
        <input v-model="post.title" id="title" placeholder="What is your idea?"></input>
        <textarea v-model="post.description" id='description' placeholder="Describe your idea in 130 characters"></textarea>   
        <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'PostForm',
        data() {
            return {
                post: {
                    selected: '',
                    title: '',
                    description: ''
                }
            }
        },
        methods: {
            submit: function() {

                axios.post('http://innovation-vote.whitbread.digital:8080/post', this.post)
                .then((response) => {
                    
                    this.post.selected = '';
                    this.post.title = '';
                    this.post.description = '';
                    
                })  
                .catch(function (error) {
                    console.log(error.message);
                })
            }
        }
    } 
</script>