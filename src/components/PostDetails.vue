<template>
    <div class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <button @click="handleClick">Say hello</button>
        <input type="text" v-model="message" placeholder="Write the message" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { Ref } from 'vue';
export default defineComponent({
    name: 'PostDetail',
    props: {
        post: {
            type: Object,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    emits: ['sayHi'],
    setup(props, { emit }) {
        // Emit an event when the button is clicked
        const handleClick = () => {
            emit('sayHi', message.value);
        };
        const message: Ref<string> = ref('');
        // You can also use a reactive variable if needed
        return {
            props,
            handleClick,
            message
        };
    }
}
)
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