<script setup>
import { useForm } from '@inertiajs/vue3';
import TextInput from '../Components/TextInput.vue';

const form = useForm({
    message: null,
});

const submit = ()=> {
    form.post(route('chirps.store'));
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
        <input type="submit" value="Chirp">
    </form>
</template>