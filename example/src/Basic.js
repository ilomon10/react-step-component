import React from 'react'

import Step from 'react-step-component'

const Basic = () => (
  <div>
    <div>
      <Step.List>
        <Step.Item.Wrapper state='waiting'>
          <Step.Item.Left>
            This is content on the left side
          </Step.Item.Left>
          <Step.Item.Center content='1'/>
          <Step.Item.Right>
            This is content on the right side
          </Step.Item.Right>
        </Step.Item.Wrapper>
        <Step.Item.Wrapper state='done'>
          <Step.Item.Left>
            This is content on the left side from second item
          </Step.Item.Left>
          <Step.Item.Center content='2'/>
          <Step.Item.Right>
            This is content on the right side from second item
          </Step.Item.Right>
        </Step.Item.Wrapper>
        <Step.Item.Wrapper end state='pending'>
          <Step.Item.Left>
            This is content on the left side from last item
          </Step.Item.Left>
          <Step.Item.Center content='3'/>
          <Step.Item.Right>
            This is content on the right side from last item
          </Step.Item.Right>
        </Step.Item.Wrapper>
      </Step.List>
    </div>
  </div>
)

export default Basic