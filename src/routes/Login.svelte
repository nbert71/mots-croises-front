<div class="flex h-screen min-w-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h1 class="font-bold mb-4 text-center text-xl">Mots croisés</h1>
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <div class="mt-1 flex items-center">
                        <i class="fa-solid fa-user mr-3 text-gray-500"></i>
                        <input id="username" name="username" type="text" required
                            placeholder="Nom d'utilisateur"
                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                            shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                    </div>
                </div>

                <div>
                    <div class="mt-1 flex items-center">
                        <i class="fa-solid fa-lock mr-3 text-gray-500"></i>
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            placeholder="Mot de passe"
                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                            shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                    </div>
                </div>

                <div class="flex gap-2">
                    <a href='/#/register' class="flex w-1/2 justify-center rounded-md border border-blue-600 bg-white
                        py-2 px-4 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-100 focus:outline-none focus:ring-2
                        focus:ring-blue-500 focus:ring-offset-1">
                        Créer un compte
                    </a>
                    <button type="submit" class="flex w-1/2 justify-center rounded-md border border-transparent bg-blue-600
                        py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2
                        focus:ring-blue-500 focus:ring-offset-1">
                        Se connecter
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
