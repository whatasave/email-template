import type { ComponentProps, ComponentType, SvelteComponent } from "svelte";
import TextComponent from "./Text.svelte";
import LinkComponent from "./Link.svelte";
import ImgComponent from "./Img.svelte";
import HrComponent from "./Hr.svelte";
import HeadComponent from "./Head.svelte";
import VerticalComponent from "./Vertical.svelte";
import HorizontalComponent from "./Horizontal.svelte";
import Email from "./Email.svelte";

export type Element<Component extends SvelteComponent = SvelteComponent> = {
    component: ComponentType<Component>;
    props: ComponentProps<Component>;
};

function createElement<Component extends SvelteComponent>(
    component: ComponentType<Component>
) {
    return (props?: ComponentProps<Component>) => ({ component, props });
}

export const Link = createElement(LinkComponent);
export const Img = createElement(ImgComponent);
export const Hr = createElement(HrComponent);
export const Head = createElement(HeadComponent);

export function Text(text: string, props?: Omit<ComponentProps<TextComponent>, 'text'>) {
    return {
        component: TextComponent,
        props: { text, ...props },
    };
}

export function Vertical(children: Element[], props?: Omit<ComponentProps<VerticalComponent>, 'children'>) {
    return {
        component: VerticalComponent,
        props: { children, ...props },
    };
}

export function Horizontal(children: Element[], props?: Omit<ComponentProps<HorizontalComponent>, 'children'>) {
    return {
        component: HorizontalComponent,
        props: { children, ...props },
    };
}

export { Email };