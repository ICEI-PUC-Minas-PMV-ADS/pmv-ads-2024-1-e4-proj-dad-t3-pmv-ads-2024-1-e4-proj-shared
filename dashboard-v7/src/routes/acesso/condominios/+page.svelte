<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	// import { getContext } from 'svelte';

	

	// const condos = getContext('condos');
	// console.log(condos)
</script>

<table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
	<thead class="bg-gray-50">
		<tr>
			<th
				scope="col"
				class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
			>
				Nome
			</th>
			<th
				scope="col"
				class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
			>
				Cidade
			</th>
			<th
				scope="col"
				class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
			>
				Bairro
			</th>
			<th
				scope="col"
				class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
			>
				CEP
			</th>
			<!-- <th
				scope="col"
				class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
			>
				Email
			</th> -->
			<th
				scope="col"
				class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
			>
				Solicitar
			</th>
		</tr>
	</thead>
	<tbody class="bg-white divide-y divide-gray-200">
		{#each data.condominios as condominio}
		<tr>
		  <td>{condominio.name}</td>
		  <td>{condominio.cidade}</td>
		  <td>{condominio.bairro}</td>
		  <td>{condominio.cep}</td>
		  <!-- <td>{condominio.email}</td> -->
		  <td>
			<a href="#" class="text-indigo-600 hover:text-indigo-900">SOLICITAR</a>
		  </td>
		</tr>
	  {/each}
	</tbody>
</table>
