<div class="flex h-screen min-w-full bg-gray-200 flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h1 class="font-bold mb-4 text-center text-xl">Mots croisés</h1>
            <form class="space-y-6" on:submit|preventDefault={onSubmit}>
                <div class="mt-1 flex gap-2">
                    <div class="w-1/2">
                        <span class="block text-sm font-medium text-gray-700 mb-1">Prénom</span>
                        <input id="firstName" name="firstName" type="text" required
                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                            shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                    </div>
                    <div class="w-1/2">
                        <span class="block text-sm font-medium text-gray-700 mb-1">Nom de famille</span>
                        <input id="lastName" name="lastName" type="text" required
                            class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                            shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                    </div>
                </div>

                <div class="mt-1">
                    <span class="block text-sm font-medium text-gray-700 mb-1">Nom d'utilisateur</span>
                    <input id="username" name="username" type="text" required
                        class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                        shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                </div>

                <div class="mt-1">
                    <span class="block text-sm font-medium text-gray-700 mb-1">Mot de passe</span>
                    <input id="password" name="password" type="password" autocomplete="current-password" required
                        class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                        shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                </div>

                <div class="mt-1">
                    <span class="block text-sm font-medium text-gray-700 mb-1">Confirmation du mot de passe</span>
                    <input id="confirm_password" name="confirm_password" type="password" autocomplete="current-password" required
                        class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400
                        shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                </div>

                <div class="flex gap-2">
                    <a href='/#/login' class="flex w-1/2 justify-center rounded-md border border-blue-600 bg-white
                        py-2 px-4 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-100 focus:outline-none focus:ring-2
                        focus:ring-blue-500 focus:ring-offset-1">
                        J'ai déjà un compte
                    </a>
                    <button type="submit" class="flex w-1/2 justify-center rounded-md border border-transparent bg-blue-600
                        py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2
                        focus:ring-blue-500 focus:ring-offset-1">
                        S'inscrire
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    import { setToken } from "../store";

    async function onSubmit(e) {
        const formData = new FormData(e.target);
        const data = {};

        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        if (data["password"] == data["confirm_password"]) {
            const { confirm_password, ...payload } = data;

            const res = await fetch('http://127.0.0.1:3000/register', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            const tokenObject = await res.json();
            console.log(tokenObject)
            const jwt = tokenObject.access_token;
            setToken(jwt);
            console.log(jwt);

            window.location.reload();   // redirect to home page

        } else {
            // raise error in front
        }
    }
</script>
