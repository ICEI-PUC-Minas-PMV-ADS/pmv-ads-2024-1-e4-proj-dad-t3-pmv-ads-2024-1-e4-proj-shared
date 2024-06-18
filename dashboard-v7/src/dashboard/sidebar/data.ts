import HomeIcon from './icons/HomeIcon.svelte';
import MediasIcon from './icons/MediasIcon.svelte';
import ContactIcon from './icons/ContactIcon.svelte';
import ServersIcon from './icons/ServersIcon.svelte';
import TerminalIcon from './icons/TerminalIcon.svelte';
import RecycleBinIcon from './icons/RecycleBin.svelte';
import DocumentationIcon from './icons/DocumentationIcon.svelte';

export const data = [
	{
		section: 'MINHAS RESERVAS',
		content: [
			{
				title: 'Lista de Reservas',
				icon: HomeIcon,
				link: '/acesso/reservas'
			},
			{
				title: 'Nova Reserva',
				icon: MediasIcon,
				link: '/acesso/reservas/reserva'
			}
		]
	},
	{
		section: 'CONDOMÍNIOS',
		content: [
			{
				title: 'Meus Condominios',
				icon: TerminalIcon,
				link: '/acesso/meuscondominios'
			},
			{
				title: 'Procurar Condominios',
				icon: RecycleBinIcon,
				link: '/acesso/condominios'
			}
		]
	}
];

export const itemsCondominio = [
	{
		section: 'RESERVAS',
		content: [
			{
				title: 'Lista de Reservas',
				icon: HomeIcon,
				link: '/acesso/reservas'
			}
		]
	},
	{
		section: 'CONDOMÍNOS',
		content: [
			{
				title: 'Lista de Condôminos',
				icon: TerminalIcon,
				link: '/acesso/condominos'
			}
		]
	},
	{
		section: 'LOCAIS',
		content: [
			{
				title: 'Locais',
				icon: TerminalIcon,
				link: '/acesso/locais'
			},
			{
				title: 'Adicionar Local',
				icon: RecycleBinIcon,
				link: '/acesso/locais/adicionar'
			}
		]
	}
];
