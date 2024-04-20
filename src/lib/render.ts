import type { ComponentType } from "svelte";

export function render(component: ComponentType) {
    const html = document.implementation.createHTMLDocument();
	new component({
		target: html.body,
	});
	const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
	const source = html.documentElement.outerHTML;
    return doctype + source;
}