/// <reference path="../global.d.ts" />

export type Properties<P> = P & { children?: any; ref?: JSX.Reference };
export interface FunctionElement<P> {
  (props: Properties<P>): JSX.Element;
}
export interface ClassElement<P> {
  new (props: Properties<P>): { render(): JSX.Element };
}

export function createElement<T extends keyof JSX.IntrinsicElements, L>(
  name: T | FunctionElement<L> | ClassElement<L>,
  props: (JSX.IntrinsicElements[T]) | L,
  ...children: any[]
) {
  if (typeof name === "string") {
    const { ref, ...rest } = (props || {}) as JSX.IntrinsicElements[T];
    const el = document.createElement(name);
    Object.assign(el, rest);
    el.append(...flat(children));
    if (ref) {
      ref.value = el;
    }
    return el;
  } else {
    const { ref, ...rest } = (props || {}) as L & { ref?: any };
    if (isClassElement(name)) {
      const el = new name({ ...(rest as L), children }).render();
      if (ref) {
        ref.value = el;
      }
      return el;
    } else {
      const el = name({ ...(rest as L), children });
      if (ref) {
        ref.value = el;
      }
      return el;
    }
  }
}

export function Fragment({ children }: { children?: any }) {
  return children as Node;
}

function isClassElement<P>(
  t: FunctionElement<P> | ClassElement<P>
): t is ClassElement<P> {
  return "render" in t.prototype;
}

function flat(arr: any[]): any[] {
  return arr.reduce<any[]>(
    (acc, value) => acc.concat(Array.isArray(value) ? flat(value) : [value]),
    []
  );
}
