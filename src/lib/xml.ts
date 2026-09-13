import XMLBuilder from 'fast-xml-builder';

const xmlBuilder = new XMLBuilder({ ignoreAttributes: false, suppressEmptyNode: true });

export function buildXml<const Data>(data: Data) {
	return xmlBuilder.build(data);
}
