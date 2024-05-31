import { render } from '@redwoodjs/testing/web'

import AchievementsPage from './AchievementsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AchievementsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AchievementsPage />)
    }).not.toThrow()
  })
})
