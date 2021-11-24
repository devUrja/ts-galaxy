import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('navbar is getting rendered properly with application name', () => {
  render(<App />)
  const linkElement = screen.getByText(/NASA/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders App correctly', () => {
  const domTree = renderer.create(<App />).toJSON()
  expect(domTree).toMatchSnapshot()
})

