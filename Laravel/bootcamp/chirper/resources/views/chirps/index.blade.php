<x-app-layout>
    {{-- <x-alert :message="'Erreur, vous n\'avez pas saisi de nom'" /> --}}
    {{-- <p class="text-white">{{url('profile/user')}}</p> --}}
    {{-- @php
            $message = "Erreur, vous n\'avez pas saisi de nom";
            $color1 = 'bg-purple-700';
            $color2 = 'bg-orange-800';
            @endphp

<x-alert :message="$message" :color="$color1" />
<x-alert :message="$message" :color="$color2" />
<x-card>
    <p class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore expedita iusto maiores rem doloremque
        sapiente voluptatem eius similique officia earum omnis dicta quae doloribus aperiam ratione aut porro quidem
        dolores, hic illo aliquid. Eius rem, officia iusto sed doloribus corrupti.</p>
</x-card> --}}

        <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <form class="max-w-2xl" method="POST" action="{{ route('chirps.store') }}">
                @csrf
                <textarea name="message" placeholder="{{ __('util.msg') }}"
                    class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">{{ old('message') }}</textarea>
                <x-input-error :messages="$errors->get('message')" class="mt-2" />
                <x-primary-button class="mt-4">{{ __('util.chirp') }}</x-primary-button>
            </form>
            <div class="mt-10 grid grid-flow-row-dense grid-cols-3 gap-4">
                @foreach ($chirps as $chirp) 
                    <div class="transition duration-700 col-span-1 p-6 bg-purple-700 shadow-lg rounded-lg text-white hover:scale-110 hover:shadow-2xl">
                        
                        <div class="flex justify-between items-center">
                            <h3 class="mt-2 ms-2 text-1xl text-white/75 flex justify-between"> 
                                <div>
                                    <span class="far fa-comment-dots text-2xl"> </span>
                                    {{$chirp->user->name}}
                                </div>
                            </h3>
                            
                            {{-- Ne s'affiche que pour les commentaires de l'utilisateur --}}
                            @unless($chirp->created_at->eq($chirp->updated_at))
                                <small class="mt-2 ms-2 text-1/4xl text-white/25"> Modifié {{$chirp->updated_at->diffForHumans()}}</small>
                            @endunless

                            @if($chirp->user->is(auth()->user()))
                                <div>
                                    <x-dropdown>
                                        <x-slot name="trigger">
                                            <button class="text-white"> 
                                                <span class="fas fa-ellipsis-v"></span>
                                            </button>
                                        </x-slot>
                                        <x-slot name="content">
                                            <x-dropdown-link :href="route('chirps.edit', $chirp)">
                                                <span class="fas fa-pen me-4"></span>
                                                {{ __('Edit')}}
                                            </x-dropdown-link>
                                             <form action="{{route('chirps.destroy', $chirp)}}" method="post">
                                                @csrf
                                                @method('DELETE')
                                                <x-dropdown-link :href="route('chirps.destroy', $chirp)" onclick="event.preventDefault(); this.closest('form').submit();">                                            
                                                    <span class="fas fa-trash-alt me-4"></span>
                                                    {{ __('Delete')}}
                                                </x-dropdown-link>
                                            </form>  
                                        </x-slot>
                                    </x-dropdown> 
                                </div>
                            @endif
                        </div>
                        <small class="mt-2 ms-2 text-1/4xl text-white/25">{{$chirp->created_at->format('j M Y, g:i a')}}</small>    
                        <p class="mt-4 mb-20 text-3xl mb-auto">{{$chirp->message}}</p>
                        {{-- <div class="absolute bottom-5 end-5">
                            <span class="far fa-thumbs-up text-2xl me-4" ></span> 
                            <span class="far fa-thumbs-down text-2xl" ></span>
                        </div> --}}

                          
                    </div>  
                @endforeach
            </div>
        </div>
</x-app-layout>
