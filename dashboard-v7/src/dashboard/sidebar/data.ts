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
				link: '/reservas'
			},
			{
				title: 'Nova Reserva',
				icon: MediasIcon,
				link: '/reservas/nova'
			}
		]
	},
	{
		section: 'CONDOMÍNIOS',
		content: [
			{
				title: 'Meus Condoinios',
				icon: TerminalIcon,
				link: '/admin/terminal'
			},
			{
				title: 'Procurar Condominios',
				icon: RecycleBinIcon,
				link: '/admin/recycle-bin'
			}
		]
	}
];
