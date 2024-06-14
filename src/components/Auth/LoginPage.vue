<template>

    <head>

        <title>Login</title>

    </head>

    <body class="bg-gray-100">

        <div class="flex items-center justify-center min-h-screen bg-gray-100">

            <div class="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">

                <div>

                    <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>

                </div>

                <form class="mt-8 space-y-6" >

                    <div class="space-y-4">

                        <div>

                            <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>

                            <input id="email-address" name="email" type="email" autocomplete="email" required class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">

                        </div>

                        <div>

                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>

                            <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">

                        </div>

                    </div>

                    <div>

                        <button type="submit" class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                            Sign in

                        </button>

                    </div>

                </form>

            </div>

        </div>
        
    </body>

</template>
