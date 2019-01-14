type Assign<T, K> = Pick<T, Exclude<keyof T, keyof K>> & K;

declare namespace JSX {
  type Element = Node;
  interface ElementChildrenAttribute {
    children: any;
  }
  type IntrinsicElements = {
    [id in keyof HTMLElementTagNameMap]: Assign<
      Partial<HTMLElementTagNameMap[id]>,
      { children?: any }
    >
  };
}
