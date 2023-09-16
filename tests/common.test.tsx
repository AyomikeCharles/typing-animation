import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Typing } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Typing text={['hello', 'world']} />)
  })
})
