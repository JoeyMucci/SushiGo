import { render } from '@redwoodjs/testing/web'

import InstructionsPage from './InstructionsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InstructionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InstructionsPage />)
    }).not.toThrow()
  })
})
