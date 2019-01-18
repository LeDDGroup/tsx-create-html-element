/// <reference path="global.d.ts" />

export type Properties<P> = P & { children?: any };
export interface FunctionElement<P> {
  (props: Properties<P>): JSX.Element;
}

export function createElement<T extends keyof HTMLElementTagNameMap, L>(
  name: T | FunctionElement<L>,
  props: HTMLElementTagNameMap[T] | L,
  ...children: any[]
) {
  if (typeof name === "string") {
    const el = document.createElement(name);
    Object.assign(el, props);
    el.append(...flat(children));
    return el;
  }
  return name({ ...(props as L), children });
}

function flat(arr: any[]): any[] {
  return arr.reduce<any[]>(
    (acc, value) => acc.concat(Array.isArray(value) ? flat(value) : [value]),
    []
  );
}
