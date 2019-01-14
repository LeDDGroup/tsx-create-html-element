declare namespace JSX {
  type Element = string;
  interface ElementChildrenAttribute {
    children: any;
  }
  interface IntrinsicElements {
    [element: string]: {
      [property: string]: any;
    };
  }
}

export function createElement<T extends keyof HTMLElementTagNameMap>(
  name: T,
  props: HTMLElementTagNameMap[T],
  ...rest: Node[]
) {
  const el = document.createElement(name);
  Object.assign(el, props);
  el.append(...rest);
  return el;
}
