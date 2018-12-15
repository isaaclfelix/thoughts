@extends('layouts.app')

@section('content')
<div class="container">
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <h1 class="mt-4 text-center">My Wall of Thoughts</h1>
    <div id="thoughts" thoughts='{!! $thoughts->toJson() !!}'>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
        </div>
    </div>
</div>
<button data-toggle="modal" data-target="#new-thought-modal" id="new-thought-fab" type="button" class="btn btn-info new-thought-fab position-fixed text-warning shadow d-flex align-items-center justify-content-center">
    <i class="fas fa-brain"></i>
</button>
<div author={{ Auth::id() }} route={{ route('new') }} id="new-thought-modal-window"></div>
@endsection
