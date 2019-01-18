# tsx-create-html-element

[![npm version](https://img.shields.io/npm/v/tsx-create-html-element.svg)](https://www.npmjs.com/package/tsx-create-html-element)

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Built with Spacemacs](https://cdn.rawgit.com/syl20bnr/spacemacs/442d025779da2f62fc86c2082703697714db6514/assets/spacemacs-badge.svg)](http://spacemacs.org)

Create html elements from tsx syntax using `document.createElement`.

## Install

```sh
$ npm install tsx-create-html-element
```

Update your tsconfig.json:

```json
// tsconfig.json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "createElement"
  }
}
```

## Usage

Jsx code:

```tsx
import { createElement } from "tsx-create-html-element";

const title = "Hello World";

function sayHi() {
  alert(title);
  document.getElementById("greet").innerText = title;
}

document.getElementById("app").appendChild(
  <div>
    <div id="greet" />
    <button onclick={sayHi}>Say Hi</button>
  </div>
);
```

Equivalent:

```ts
const title = "Hello World";

function sayHi() {
  alert(title);
  document.getElementById("greet").innerText = title;
}

const divGreetElement = document.createElement("div");
divGreetElement.id = "greet";
const buttonElement = document.createElement("button");
buttonElement.append("SayHi");
const divElement = document.createElement("div");
divElement.append(divGreetElement, buttonElement);
document.getElementById("app").appendChild(divElement);
```
