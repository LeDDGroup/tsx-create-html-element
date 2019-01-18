type Assign<T, K> = Pick<T, Exclude<keyof T, keyof K>> & K;

declare namespace JSX {
  type Element = Node;
  type Reference<T extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap> = {
    value?: HTMLElementTagNameMap[T];
  };
  interface ElementChildrenAttribute {
    children: any;
  }
  type IntrinsicElements = {
    [id in keyof HTMLElementTagNameMap]: Assign<
      Partial<HTMLElementTagNameMap[id]>,
      { children?: any; ref?: Reference<id> }
    >
  };
}
