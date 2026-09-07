import { getEntries, type ReferenceDataEntry } from 'astro:content';

export async function getProjects() {
	return await getEntries([
		{ collection: 'projects', id: 'spectro' },
		{ collection: 'projects', id: 'drap' },
		{ collection: 'projects', id: 'hotspotter' },
		{ collection: 'projects', id: 'dapped-out' },
		{ collection: 'projects', id: 'botoken' },
		{ collection: 'projects', id: 'acda' },
		{ collection: 'projects', id: 'up-csi' },
		{ collection: 'projects', id: 'hatid' },
		{ collection: 'projects', id: 'drippy' },
		{ collection: 'projects', id: 'doctrack' },
		{ collection: 'projects', id: 'palai' },
		{ collection: 'projects', id: 'soundrave' },
		{ collection: 'projects', id: 'chrozone' },
		{ collection: 'projects', id: 'quizzo' },
		{ collection: 'projects', id: 'multicast' },
		{ collection: 'projects', id: 'snake' },
		{ collection: 'projects', id: 'option-block' },
	] satisfies ReferenceDataEntry<'projects'>[]);
}
