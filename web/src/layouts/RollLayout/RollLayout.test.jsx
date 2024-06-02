import { render } from '@redwoodjs/testing/web'

import RollLayout from './RollLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RollLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RollLayout />)
    }).not.toThrow()
  })
})
