<x-app-layout>
 

        <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <form class="max-w-2xl" method="POST" action="{{ route('chirps.update', $chirp) }}">
                @csrf
                @method('PATCH')
                <textarea name="message" placeholder="{{ __('util.msg') }}"
                    class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">{{ old('message', $chirp->message) }}
                </textarea>
                <x-input-error :messages="$errors->get('message')" class="mt-2" />
                <x-primary-button class="mt-4 me-2">{{ __('Update Chirp') }}</x-primary-button>
                <a class="text-purple-700" href="{{route('chirps.index')}}">{{ __('Cancel')}}</a>
            </form>
        </div>
</x-app-layout>
