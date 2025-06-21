<template>
    <div class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <button @click="handleClick">Say hello</button>
        <input type="text" v-model="message" placeholder="Write the message" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { Ref } from 'vue';

defineProps<{
    post: { title: string; content: string };
    title: string;
    content: string;
}>();
const emit = defineEmits<{
    (e: 'sayHi', msg: string): void;
}>();

const message: Ref<string> = ref('');

const handleClick = () => {
    emit('sayHi', message.value);
};
</script>

<style scoped>
.post {
    width: 300px;
    height: 100px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    margin: 10px;
    padding: 10 px;
}
</style>