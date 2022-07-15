<div align="center">
    <img src="./assets/@motioned-official-react-components_image.png" />
</div>
<br />
<br />
<p>
Welcome to <strong>@motioned-official/react-components</strong> node package <code>README.md</code>. Please follow this file in order to find out about the <a href="#Installation">Installation</a> and <a href="#Usage">Usage</a> of the package.
<br />
<br />
<code>@motioned-official/react-components</code> can be used in your react projects including react-based framework projects such as <strong>NEXTJS</strong>. This package provides useful components specific to React and also NextJS.
</p>

## Installation

To install the package, make sure you have `node` and `npm` installed in your local machine. You may use the package manager other than `npm` such as `yarn` to install the package.

```shell
# inside your root directory
npm install @motioned-official/react-components
# or
yarn add @motioned-official/react-components
```

After installation you should be able to see in your `package.json` file the following dependency list.

```json
{
    ...
    "dependencies": {
        ...
         "@motioned-official/react-components": "^<version-tag>",
    }
}
```

## Usage

> <strong>TIP</strong> - to use provided package's components, you may import in your `jsx` or `tsx` file where you write your typical react code.

### `MReact`

```jsx
// Example.jsx
import Motioned from "@motioned-official/react-components";
// or you can destructur while importing
// import {MReact} from "@motioned-official/react-components"
const ExampleComponent = () => {
    return (
        <MReact.Section id="hero">
            <MReact.Wrap>
                <MReact.Content displayType="block">
                    <h1>Hello World!</h1>
                <MReact.Content>
            <MReact.Wrap>
        </MReact.Section>
    )
}
export default ExampleComponent;
```

```jsx
// Example.tsx
import Motioned from "@motioned-official/react-components";
// or you can destructur while importing
// import {MReact} from "@motioned-official/react-components"

interface ExampleComponentProps {
    title?: string;
}
const ExampleComponent : React.FC<ExampleComponentProps> = ({title}) => {
    return (
        <MReact.Section id="hero">
            <MReact.Wrap>
                <MReact.Content displayType="block">
                    <h1>{title ?? 'Hello World!'}</h1>
                <MReact.Content>
            <MReact.Wrap>
        </MReact.Section>
    )
}
export default ExampleComponent;
```

### `MNext`

```jsx
// pages/index.jsx
import Motioned from "@motioned-official/react-components";
// import {MNext, MReact} from "@motioned-official/react-components"

const indexMeta = {
  title: {
    default: "My Page",
    subString: "Home",
    joinBy: "|",
  },
  keywords: {
    words: ["Web Development", "React", "Next"],
    joinBy: ", ",
  },
  description:
    "This is my NextJS portfolio page. Explore my projects & learn more about me!",
};

const Home = () => {
  return (
    <React.Fragment>
      <MNext.SEO {...indexMeta} />
      <MReact.Section id="hero">
        <MReact.Wrap>
          <MReact.Content displayType="block">
            <h1>Hello World!</h1>
          </MReact.Content>
        </MReact.Wrap>
      </MReact.Section>
    </React.Fragment>
  );
};

export default Home;
```

```jsx
// pages/index.tsx
import Motioned from "@motioned-official/react-components";
// import {MNext, MReact} from "@motioned-official/react-components"
import type { NextPage } from "next";

const indexMeta = {
  title: {
    default: "My Page",
    subString: "Home",
    joinBy: "|",
  },
  keywords: {
    words: ["Web Development", "React", "Next"],
    joinBy: ", ",
  },
  description:
    "This is my NextJS portfolio page. Explore my projects & learn more about me!",
};

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <MNext.SEO {...indexMeta} />
      <MReact.Section id="hero">
        <MReact.Wrap>
          <MReact.Content displayType="block">
            <h1>Hello World!</h1>
          </MReact.Content>
        </MReact.Wrap>
      </MReact.Section>
    </React.Fragment>
  );
};

export default Home;
```
