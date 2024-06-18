<script lang="ts">
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';

	export let data: PageData;

	// Create a writable store to track the selected user type
	const userType = writable<'condomino' | 'condominio'>('condomino');

	// Function to switch user type
	const selectUserType = (type: 'condomino' | 'condominio') => {
		userType.set(type);
	};

	const style = {
		active: `flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 ring-inset shadow text-white bg-cyan-600 ring-cyan-600`,
		inactive: `flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none text-gray-400`
	};
</script>

<div class="bg-gray-200 min-h-screen flex flex-col justify-center py-2 sm:px-6 lg:px-8 px-6">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<div
			class="bg-white self-center mx-auto my-ayto flex bg-white-500 shadow-lg w-fit p-2 rounded-lg"
		>
			<svg class="h-16" viewBox="0 0 512 512">
				<!-- Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
				<path
					d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"
				/>
			</svg>
		</div>

		<h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
			Criar uma conta
		</h2>
		<p class="my-2 text-center text-sm leading-5 text-blue-500 max-w">
			<a
				href="/login"
				class="font-medium text-cyan-500 hover:text-cyan-400 focus:outline-none focus:underline transition ease-in-out duration-150"
			>
				Ja possui uma conta? Entre agora.
			</a>
		</p>
	</div>

	<div class="flex justify-center mt-8">
		<nav
			class="flex overflow-x-auto items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/5 rounded-xl dark:bg-gray-500/20"
		>
			<button
				role="tab"
				type="button"
				class={`${$userType == 'condomino' ? style.active : style.inactive} hover:shadow-sm`}
				on:click={() => selectUserType('condomino')}
			>
				Sou um Condômino
			</button>
			<button
				role="tab"
				type="button"
				class={`${$userType == 'condominio' ? style.active : style.inactive} hover:shadow-sm`}
				on:click={() => selectUserType('condominio')}
			>
				Sou um Condomínio
			</button>
		</nav>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form method="POST">
				<!-- Common inputs -->
				<div>
					<label for="email" class="block text-sm font-medium leading-5 text-gray-700"
						>Endereço de E-mail</label
					>
					<div class="mt-1 relative rounded-md shadow-sm">
						<input
							id="email"
							name="email"
							placeholder="user@exemplo.com"
							type="email"
							required
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
						/>
					</div>
				</div>

				<div class="mt-4">
					<label for="name" class="block text-sm font-medium leading-5 text-gray-700">Nome</label>
					<div class="mt-1 rounded-md shadow-sm">
						<input
							id="name"
							name="name"
							type="text"
							required
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
						/>
					</div>
				</div>

				<!-- Conditionally rendered inputs -->
				{#if $userType === 'condomino'}
					<div class="mt-4">
						<label for="cpf" class="block text-sm font-medium leading-5 text-gray-700">CPF</label>
						<div class="mt-1 rounded-md shadow-sm">
							<input
								id="cpf"
								name="cpf"
								type="text"
								required
								class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
							/>
						</div>
					</div>
				{:else}
					<div class="mt-4">
						<label for="cnpj" class="block text-sm font-medium leading-5 text-gray-700">CNPJ</label>
						<div class="mt-1 rounded-md shadow-sm">
							<input
								id="cnpj"
								name="cnpj"
								type="text"
								required
								class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
							/>
						</div>
					</div>
				{/if}

				<div class="mt-4">
					<label for="password" class="block text-sm font-medium leading-5 text-gray-700"
						>Senha</label
					>
					<div class="mt-1 rounded-md shadow-sm">
						<input
							id="password"
							name="password"
							type="password"
							required
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
						/>
					</div>
				</div>

				<div class="mt-4">
					<label for="confirm_password" class="block text-sm font-medium leading-5 text-gray-700"
						>Confirme sua senha</label
					>
					<div class="mt-1 rounded-md shadow-sm">
						<input
							id="confirm_password"
							name="confirm_password"
							type="password"
							required
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
						/>
					</div>
				</div>

				<div class="mt-4">
					<span class="block w-full rounded-md shadow-md">
						<button
							class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
						>
							Registrar
						</button>
					</span>
				</div>
			</form>
		</div>
	</div>
</div>
