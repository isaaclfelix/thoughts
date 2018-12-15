<?php
namespace App\Http\Controllers;

use Laravel\Passport\Passport;
use Illuminate\Http\Request;

class ThoughtController extends Controller
{

  /**
   * Bring all of the thoughts available
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    // Get from the DB
    $thoughts = \App\Thought::all();
    return $thoughts->toJson();
  }

  /**
   * Bring all of the thoughts available
   *
   * @return \Illuminate\Http\Response
   */
  public function create(Request $request)
  {
    //
    $request->validate([
      'author' => 'bail|required|integer',
      'situation' => 'bail|required|string',
      'automatedThoughts' => 'bail|required|string',
      'actions' => 'bail|required|string',
      'emotions' => 'bail|required|string'
    ]);

    //
    $thought = new \App\Thought();
    $thought->author = $request->author;
    $thought->situation = $request->situation;
    $thought->automated_thoughts = $request->automatedThoughts;
    $thought->actions = $request->actions;
    $thought->emotions = $request->emotions;

    $thought->save();

    return redirect()->route('home');
  }
}
