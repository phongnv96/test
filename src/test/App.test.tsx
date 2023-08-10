import '@testing-library/jest-dom/extend-expect'
import { render, screen, waitFor } from '@testing-library/react'

import App from '../App'

describe('App component', () => {
  test('App render successfully', async () => {
    render(
      <div data-testid="app-wrapper">
        <App />
      </div>
    )
    await waitFor(() => screen.getByTestId('app-wrapper'))
    expect(screen.getByTestId('app-wrapper')).toBeInTheDocument()
  })
})
