import { createRequire } from 'node:module';

import { building } from '$app/environment';

const require = createRequire(import.meta.url);
export function handle({ event, resolve }) {
	if (building) {
		const { minify } = require('@minify-html/node');
		let page = '';
		return resolve(event, {
			transformPageChunk({ html, done }) {
				page += html;
				if (done)
					// This is lazily imported because it's only a development dependency.
					return minify(Buffer.from(page), {
						allow_noncompliant_unquoted_attribute_values: false,
						allow_optimal_entities: false,
						allow_removing_spaces_between_attributes: false,
						keep_closing_tags: true,
						keep_comments: true,
						keep_html_and_head_opening_tags: false,
						keep_input_type_text_attr: true,
						keep_ssi_comments: true,
						minify_css: true,
						minify_doctype: false,
						minify_js: true,
						preserve_brace_template_syntax: false,
						preserve_chevron_percent_template_syntax: false,
						remove_bangs: true,
						remove_processing_instructions: true,
					}).toString('utf-8');
			},
		});
	}
	return resolve(event);
}
