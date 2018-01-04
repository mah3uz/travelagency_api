<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <script src="https://js.pusher.com/4.1/pusher.min.js"></script>
        <script>

            // Enable pusher logging - don't include this in production
            // Pusher.logToConsole = true;
            //
            // var pusher = new Pusher('30d91cd5d4ea5dc59514', {
            //     cluster: 'ap2',
            //     encrypted: true
            // });
            //
            // var channel = pusher.subscribe('my-channel');
            // channel.bind('my-event', function(data) {
            //     alert(data.message);
            // });
        </script>

        <title>Travel Apps wit Laravel API & React</title>

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body>
        <h2 style="text-align: center">Laravel React App</h2>
        <div id="root"></div>

        {{--<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>--}}
        <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
