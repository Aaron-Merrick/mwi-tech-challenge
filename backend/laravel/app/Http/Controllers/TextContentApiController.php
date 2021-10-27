<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TextContent;

class TextContentApiController extends Controller
{
    public function text() {
        return TextContent::all();
    }
}
