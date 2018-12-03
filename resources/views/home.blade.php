@extends('layouts.app')

@section('content')
<div class="container">
    <h1 class="mt-4 text-center">My Wall of Thoughts</h1>
    <div id="thoughts">
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
        </div>
    </div>
</div>
<button type="button" class="btn btn-info new-thought-fab position-fixed text-warning shadow d-flex align-items-center justify-content-center" style="width: 65px; height: 65px; bottom: 25px; right: 25px; z-index: 2; border-radius: 50%; font-size: 24px; text-shadow: 2px 3px 4px rgba(0,0,0,0.5);">
    <i class="fas fa-brain"></i>
</button>
@endsection
