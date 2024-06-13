<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2 class="flex text-center my-4 font-bold text-2xl max-w-xl mx-auto">RESERVA</h2>

<div class="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
	<!-- <div class="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
		Criar uma Reserva
	</div> -->
	<form class="py-4 px-6" action="" method="POST">
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="name">CONDOMÍNIOS</label>
			<select
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="condominio"
				name="condominio"
			>
				<option value="">Selecione um Condomínio</option>
				<option value="haircut">Haircut</option>
				<option value="coloring">Coloring</option>
				<option value="styling">Styling</option>
				<option value="facial">Facial</option>
			</select>
		</div>
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="email">LOCAL</label>
			<select
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="local"
				name="local"
			>
				<option value="">Selecione um Espaço</option>
				<option value="haircut">Haircut</option>
				<option value="coloring">Coloring</option>
				<option value="styling">Styling</option>
				<option value="facial">Facial</option>
			</select>
		</div>
		<!-- <div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="phone"> Phone Number </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="phone"
				type="tel"
				placeholder="Enter your phone number"
			/>
		</div> -->
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="date"> Date </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="date"
				type="date"
				placeholder="Select a date"
			/>
		</div>
		<!-- <div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="time"> Time </label>
			<input
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="time"
				type="time"
				placeholder="Select a time"
			/>
		</div> -->
		<div class="mb-4">
			<label class="block text-gray-700 font-bold mb-2" for="message"> OBSERVAÇÕES </label>
			<textarea
				class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				id="message"
				rows="4"
				placeholder="Informe qualquer detalhe adicional"
			/>
		</div>
		<div class="flex items-center justify-center mb-4">
			<button
				class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Salvar Reserva
			</button>
		</div>
	</form>
</div>
