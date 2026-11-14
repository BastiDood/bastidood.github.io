import XmlBuilder from 'fast-xml-builder';

const xmlBuilder = new XmlBuilder({ ignoreAttributes: false, suppressEmptyNode: true });

export const buildXml = xmlBuilder.build.bind(xmlBuilder);
