@extends('layouts.main')
@section('hero')
    @include('frontend.hero-section')
    <div class="p-10">

        @include('frontend.video-section')
        @include('frontend.pokja-section')
        @include('frontend.berita-section')
        @include('frontend.profile-section')
        @include('frontend.galeri-section')
    </div>
@endsection
