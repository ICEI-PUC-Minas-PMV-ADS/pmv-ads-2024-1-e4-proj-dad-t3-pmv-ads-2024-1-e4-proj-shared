<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="bg-gray-200 min-h-screen flex flex-col justify-center py-2 sm:px-6 lg:px-8 px-6">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<div
			class="bg-white self-center mx-auto my-ayto flex bg-white-500 shadow-lg w-fit p-2 rounded-lg"
		>
			<svg class="h-16" viewBox="0 0 512 512"
				><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
					d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"
				/></svg
			>
		</div>

		<h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
			Acesse sua conta
		</h2>
		<p class="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
			<a
				href="#"
				class="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
			>
				Não possui conta? Criar uma agora.
			</a>
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
			<form>
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
							required=""
							value=""
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
						/>
						<div
							class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
						>
							<svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</div>

				<div class="mt-6">
					<label for="password" class="block text-sm font-medium leading-5 text-gray-700"
						>Senha</label
					>
					<div class="mt-1 rounded-md shadow-sm">
						<input
							id="password"
							name="password"
							type="password"
							required=""
							class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
						/>
					</div>
				</div>

				<div class="mt-6 flex items-center justify-between">
					<div class="flex items-center">
						<input
							id="remember_me"
							name="remember"
							type="checkbox"
							value="1"
							class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
						/>
						<label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900"
							>Lembrar-me</label
						>
					</div>

					<div class="text-sm leading-5">
						<a
							href="#"
							class="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
						>
							Esqueceu sua senha?
						</a>
					</div>
				</div>

				<div class="mt-6">
					<span class="block w-full rounded-md shadow-sm">
						<button
							type="submit"
							class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
						>
							Sign in
						</button>
					</span>
				</div>
			</form>
		</div>
	</div>
</div>
