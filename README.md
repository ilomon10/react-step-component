# react-step-component

> React Step Component

[![NPM](https://img.shields.io/npm/v/react-step-component.svg)](https://www.npmjs.com/package/react-step-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-step-component
```

## Usage

```jsx
import React, { Component } from 'react'

import { List, Item, ItemLeft, ItemRight, ItemCenter } from 'react-step-component'

export default class App extends Component {
  render() {
    return (
      <div>
        <List>
          <Item>
            <ItemLeft>
              Left Component
            </ItemLeft>
            <ItemCenter/>
            <ItemRight>
              Right Component
            </ItemRight>
          </Item>
        </List>
      </div>
    )
  }
}
```

## License

MIT © [ilomon10](https://github.com/ilomon10)
