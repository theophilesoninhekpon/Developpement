<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ChirpForm from '@/Components/ChirpForm.vue';
import { Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
    chirps: Object
});

const form = useForm({});

const submit = () => {
    form.delete('chirps.delete', JSON.parse($event.target.childNodes[0].value));
}
</script>

<template>
    <AppLayout title="Chirps">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Chirps
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <ChirpForm />
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg gap-4 grid grid-flow-row-dense grid-cols-4">
                    <div v-for="chirp in chirps" class="bg-green-400 p-5 flex flex-col" >
                        <p>{{ chirp.message }}</p>
                        <small>{{ chirp.created_at }}</small>
                        <small>{{ chirp.user.name }}</small>
                        <Link :href="chirp.edit_url" class="fas fa-pen"/>
                        <!-- <form @submit.prevent="submit" class="ms-5">
                            <input type="hidden" value="{{JSON.stringify(chirp) }}">
                            <button type="submit">
                                <span class="fas fa-times"></span>
                            </button>
                        </form> -->
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
