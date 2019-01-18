import { createElement } from "./index";

class Element {
  children: (Element | string)[] = [];
  constructor(public name: string) {}
  append(child: Element | string) {
    this.children.push(child);
  }
}
declare const global: any;
global.document = {
  createElement: (name: string) => {
    return new Element(name);
  }
};

test("jsx", () => {
  expect(<div>hello</div>).toMatchObject({
    name: "div",
    children: ["hello"]
  });
});

test("function", () => {
  function Layout(props: any) {
    return <div className="container">{props.children}</div>;
  }
  expect(
    <Layout>
      <h1>hello</h1>
    </Layout>
  ).toMatchObject({
    name: "div",
    className: "container",
    children: [
      {
        name: "h1",
        children: ["hello"]
      }
    ]
  });
});
