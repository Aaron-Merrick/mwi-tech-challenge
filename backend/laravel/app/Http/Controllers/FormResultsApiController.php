<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FormResults;

class FormResultsApiController extends Controller
{

    public function store(Request $r) {
        $r = request()->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'title' => 'nullable',
            'email' => 'required',
            'message' => 'nullable'
        ]);

        return FormResults::create($r);
    }
}
