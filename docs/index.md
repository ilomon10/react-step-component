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

## API

### List

```jsx
import { List } from 'react-step-component'
```

#### Props

Props | Type | Default
------|------|------
children | **node** | 

___

### Item

```jsx
import { Item } from 'react-step-component'
```

#### Props

##### Item.Wrapper

Props | Type | Default
------|------|------
children | **node** | 
end | **boolean** | false
state | enum: '**pending**' \| '**waiting**' \| '**done**' | null

##### Item.Left

Props | Type | Default
------|------|------
children | **node** |

##### Item.Right

Props | Type | Default
------|------|------
children | **node** |

##### Item.Center

Props | Type | Default
------|------|------
content | **node** |
size | enum: '**lg**' \| '**sm**' | 'lg'

## License

MIT © [ilomon10](https://github.com/ilomon10)
