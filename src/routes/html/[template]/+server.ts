import templateList from '$templates/templateList.js';
import { error } from '@sveltejs/kit';
import type { ComponentType } from 'svelte';

export async function GET({ params }) {
	const { template: templateName } = params;
	const template = (templateList as Record<string, ComponentType>)[templateName];
	if (!template) throw error(404, 'Not found');
	// @ts-ignore
	const { html } = template.render();
	const doctype = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">";
	return new Response(doctype + html, { headers: { 'Content-Type': 'text/html' } });
}