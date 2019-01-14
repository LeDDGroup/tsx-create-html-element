declare namespace JSX {
  type Element = Node;
  interface ElementChildrenAttribute {
    children: any;
  }
  interface IntrinsicElements {
    [element: string]: {
      [property: string]: any;
    };
  }
}

