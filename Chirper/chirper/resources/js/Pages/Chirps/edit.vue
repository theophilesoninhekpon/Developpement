<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import EditChirpForm from '@/Components/EditChirpForm.vue';

defineProps({
    chirp: Object
});

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
                <EditChirpForm :chirp="chirp"/>
            </div>
        </div>
    </AppLayout>
</template>
