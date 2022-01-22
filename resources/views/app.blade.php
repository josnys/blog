<!DOCTYPE html>
<html class="h-full bg-gray-200 dark:bg-slate-900">
     <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
          <link rel="manifest" href="/manifest.json" />
          <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
          <script src="{{ mix('/js/app.js') }}" defer></script>

          @routes
     </head>
     <body class="font-sans text-slate-900 dark:text-slate-50 antialiased">
          @inertia
     </body>
</html>
