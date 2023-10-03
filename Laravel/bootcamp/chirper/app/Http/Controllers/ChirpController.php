<?php

namespace App\Http\Controllers;

use App\Models\Chirp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChirpController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $action = action([ChirpController::class, 'index']);
        // dd($action);
        // exit;

        // ddd(User::all());
        return view('chirps.index', [
            'chirps' => Chirp::orderBy('created_at', 'DESC')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        // envoyer les données en BDD
        $request->user()->chirps()->create($validated);
        // ddd();
        // rediriger sur chirps.index
        return redirect(route('chirps.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Chirp $chirp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chirp $chirp)
    {
        return view('chirps.edit', [
            'chirp' => $chirp
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chirp $chirp)
    {
        $this->authorize('update', $chirp);
        // dd('Update');
        // dd(Auth::user());

        $validated = $request->validate([
            'message' => 'required|string|max:255'
        ]);

        $chirp->update($validated);

        return redirect(route('chirps.index'));
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chirp $chirp)
    {
        // Vérifier l'autorisation du user
        $this->authorize('delete', $chirp);
        // Supprimer la ressource
        $chirp->delete();
        // Rediriger vers la page des commentaires
        return redirect(route('chirps.index'));

    }
}
