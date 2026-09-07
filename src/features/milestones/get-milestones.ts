import { getEntries, type ReferenceDataEntry } from 'astro:content';

export async function getMilestones() {
	return await getEntries([
		{ collection: 'milestones', id: 'casper-studios' },
		{ collection: 'milestones', id: 'verdn' },
		{ collection: 'milestones', id: 'rust-archipelago' },
		{ collection: 'milestones', id: 'up-csi' },
		{ collection: 'milestones', id: 'up-diliman' },
	] satisfies ReferenceDataEntry<'milestones'>[]);
}
