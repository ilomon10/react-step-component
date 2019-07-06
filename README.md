# react-step-component

> This is simple step progress component for react

[![NPM](https://img.shields.io/npm/v/react-step-component.svg)](https://www.npmjs.com/package/react-step-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-step-component
```

## Usage

```jsx
import React, { Component } from 'react'

import { List, Item } from 'react-step-component'

export default class App extends Component {
  render() {
    return (
      <div>
        <List>
          <Item.Wrapper>
            <Item.Left>
              Left Component
            </Item.Left>
            <Item.Center/>
            <Item.Right>
              Right Component
            </Item.Right>
          </Item.Wrapper>
        </List>
      </div>
    )
  }
}
```

## [API Documentation](https://ilomon10.github.io/react-step-component/)

## License

MIT © [ilomon10](https://github.com/ilomon10)
