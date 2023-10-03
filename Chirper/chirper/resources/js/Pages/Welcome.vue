<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    // laravelVersion: String,
    // phpVersion: String,
});
</script>

<template>

    <Head title="Welcome" />

    <div class="sm:flex 
    sm:justify-center sm:items-center
    min-h-screen 
    bg-center bg-gray-100 
    dark:bg-gray-900 selection:bg-orange-500 
    selection:text-white">
        <div v-if="canLogin" class="p-6">
            <Link v-if="$page.props.auth.user" :href="route('dashboard')"
                class="font-semibold text-gray-600 hover:text-gray-900 
                dark:text-gray-400 dark:hover:text-white focus:outline 
                focus:outline-2 focus:rounded-sm focus:outline-red-500">
                Dashboard
            </Link>

            <template v-else>
                <div class="flex flex-col items-center">
                    <Link :href="route('login')"
                    class="font-semibold text-gray-600 hover:text-gray-900 
                    dark:text-gray-400 dark:hover:text-white focus:outline 
                    focus:outline-2 focus:rounded-sm focus:outline-red-500">
                Log in</Link>

                <Link v-if="canRegister" :href="route('register')"
                    class="font-semibold text-gray-600 hover:text-gray-900 
                    dark:text-gray-400 dark:hover:text-white focus:outline 
                    focus:outline-2 focus:rounded-sm focus:outline-red-500">
                Register</Link>
                </div>
            </template>
        </div>

    </div>

</template>

