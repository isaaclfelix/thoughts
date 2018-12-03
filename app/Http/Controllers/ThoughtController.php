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

    $response = array();
    foreach($thoughts as $thought) {
      $response[] = array(
        'id' => '',
        'name' => ''
      );
    }

    // Put data in array
    $response = array(
      'test' => 'hola'
    );
    // Return encoded response
    //return json_encode($response);

    $query = http_build_query([
        'client_id' => 'client-id',
        'redirect_uri' => 'http://thoughts.test/oauth/authorize',
        'response_type' => 'code',
        'scope' => '',
    ]);

    return redirect(
      'http://thoughts.test/oauth/authorize?'.$query
    );
  }
}
