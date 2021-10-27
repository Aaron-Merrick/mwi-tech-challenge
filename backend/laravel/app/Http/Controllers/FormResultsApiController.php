<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FormResults;

class FormResultsApiController extends Controller
{
    public function index() {
        return FormResults::all();
    }

    public function storeResults(Request $r) {
        $result = new FormResults();
        $result->first_name = $r->input('first_name');
        $result->last_name = $r->input('last_name');
        $result->title = $r->input('title');
        $result->email = $r->input('email');
        $result->message = $r->input('message');
        $result->save();
    }

    public function store() {
        request()->validate([
            'email' => 'required'
        ]);

        var_dump(request()->all());

        die();

        return FormResults::create([
            'first_name' => request('first_name'),
            'last_name' => request('last_name'),
            'title' => request('title'),
            'email' => request('email'),
            'message' => request('message')
        ]);

    }
}
