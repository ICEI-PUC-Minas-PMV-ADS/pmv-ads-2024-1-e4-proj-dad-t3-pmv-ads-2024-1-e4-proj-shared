<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2 class="my-4 font-bold text-2xl">LISTA DE RESERVAS</h2>

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
				Unidade
			</th>
			<th
				scope="col"
				class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
			>
				Email
			</th>
			<th
				scope="col"
				class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
			>
				Actions
			</th>
		</tr>
	</thead>
	<tbody class="bg-white divide-y divide-gray-200">
		<tr>
			<td class="px-6 py-4 whitespace-nowrap">
				<div class="flex items-center">
					<div class="flex-shrink-0 h-10 w-10">
						<img class="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=2" alt="" />
					</div>
					<div class="ml-4">
						<div class="text-sm font-medium text-gray-900">Carlos Silva</div>
						<div class="text-sm text-gray-500">carlos.silva@example.com</div>
					</div>
				</div>
			</td>
			<td class="px-6 py-4 whitespace-nowrap">
				<div class="text-sm text-gray-900">Apto 101</div>
				<div class="text-sm text-gray-500">Bloco A</div>
			</td>
			<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> carlos.silva@example.com </td>
			<td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
				<a href="#" class="text-indigo-600 hover:text-indigo-900">Editar</a>
				<a href="#" class="ml-2 text-red-600 hover:text-red-900">Excluir</a>
			</td>
		</tr>

		<tr>
			<td class="px-6 py-4 whitespace-nowrap">
				<div class="flex items-center">
					<div class="flex-shrink-0 h-10 w-10">
						<img class="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=3" alt="" />
					</div>
					<div class="ml-4">
						<div class="text-sm font-medium text-gray-900">Maria Oliveira</div>
						<div class="text-sm text-gray-500">maria.oliveira@example.com</div>
					</div>
				</div>
			</td>
			<td class="px-6 py-4 whitespace-nowrap">
				<div class="text-sm text-gray-900">Apto 202</div>
				<div class="text-sm text-gray-500">Bloco B</div>
			</td>
			<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				maria.oliveira@example.com
			</td>
			<td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
				<a href="#" class="text-indigo-600 hover:text-indigo-900">Editar</a>
				<a href="#" class="ml-2 text-red-600 hover:text-red-900">Excluir</a>
			</td>
		</tr>

		<tr>
			<td class="px-6 py-4 whitespace-nowrap">
				<div class="flex items-center">
					<div class="flex-shrink-0 h-10 w-10">
						<img class="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=4" alt="" />
					</div>
					<div class="ml-4">
						<div class="text-sm font-medium text-gray-900">Ana Souza</div>
						<div class="text-sm text-gray-500">ana.souza@example.com</div>
					</div>
				</div>
			</td>
			<td class="px-6 py-4 whitespace-nowrap">
				<div class="text-sm text-gray-900">Apto 303</div>
				<div class="text-sm text-gray-500">Bloco C</div>
			</td>
			<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ana.souza@example.com </td>
			<td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
				<a href="#" class="text-indigo-600 hover:text-indigo-900">Editar</a>
				<a href="#" class="ml-2 text-red-600 hover:text-red-900">Excluir</a>
			</td>
		</tr>

		<tr>
			<td class="px-6 py-4 whitespace-nowrap">
				<div class="flex items-center">
					<div class="flex-shrink-0 h-10 w-10">
						<img class="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=5" alt="" />
					</div>
					<div class="ml-4">
						<div class="text-sm font-medium text-gray-900">José Pereira</div>
						<div class="text-sm text-gray-500">jose.pereira@example.com</div>
					</div>
				</div>
			</td>
			<td class="px-6 py-4 whitespace-nowrap">
				<div class="text-sm text-gray-900">Apto 404</div>
				<div class="text-sm text-gray-500">Bloco D</div>
			</td>
			<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> jose.pereira@example.com </td>
			<td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
				<a href="#" class="text-indigo-600 hover:text-indigo-900">Editar</a>
				<a href="#" class="ml-2 text-red-600 hover:text-red-900">Excluir</a>
			</td>
		</tr>

		<!-- More rows... -->
	</tbody>
</table>
