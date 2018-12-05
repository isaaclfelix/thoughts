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
<button data-toggle="modal" data-target="#new-thought-modal" id="new-thought-fab" type="button" class="btn btn-info new-thought-fab position-fixed text-warning shadow d-flex align-items-center justify-content-center">
    <i class="fas fa-brain"></i>
</button>
@endsection
