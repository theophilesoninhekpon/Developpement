<script setup>
import { useForm } from '@inertiajs/vue3';
import TextInput from './TextInput.vue';

const props = defineProps({
    chirp: Object
});

const form = useForm({
    message: props.chirp.message,
});

const submit = ()=> {
    form.patch(route('chirps.update', props.chirp));
}

</script>

<template>
    <form @submit.prevent="submit">
        <div>
            <input 
            type="text" 
            class="text"
            v-model="form.message"
            >
        </div>
        <span>{{ form.errors.message }}</span>
        <input type="submit" value="Update Chirp">
    </form>
</template>