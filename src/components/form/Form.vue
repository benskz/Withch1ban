<template>
  <section class='wb-innovation-form-copy'>
    <h2>Welcome to the Whitbread innovation portal!</h2>

    <form class="wb-innovation-form" @submit.prevent="submit">
        <select id="select" class="wb-innovation-form-selection" v-model="post.selected">
            <option value="" disabled selected>Brand</option>
            <option value="pi">Premier Inn</option>
            <option value="hub">Hub by Premier Inn</option>
            <option value="costa">Costa</option>
        </select>
        <br />
        <input v-model="post.title" id="title" placeholder="What is your idea?" required></input>
        <br />
        <textarea v-model="post.description" id="description" placeholder="Describe your idea in 130 characters"></textarea>   
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
                    alert('Your post has been successful');
                
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

