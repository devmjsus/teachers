<template>
    <div class="container">
        <PostDetails v-for="post in info" :key="post.id" :post="post" :title="post.title" :content="post.content" @sayHi="showAlert"/>
    </div>
</template>

<script lang="ts" setup>
import PostDetails from './PostDetails.vue';
interface Post {
    id: number;
    title: string;
    content: string;
}
const info:Array<Post> = [
    { id: 1, title: 'Post 1', content: 'Prueba de texto, comunicación padres hijos 1' },
    { id: 2, title: 'Post 2', content: 'Prueba de texto, comunicación padres hijos 2' },
    { id: 3, title: 'Post 3', content: 'Prueba de texto, comunicación padres hijos 3' },
    { id: 4, title: 'Post 4', content: 'Prueba de texto, comunicación padres hijos 4' },
    { id: 5, title: 'Post 5', content: 'Prueba de texto, comunicación padres hijos 5' }
];
function showAlert(post:string) {
    alert(post) 
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

}
</style>