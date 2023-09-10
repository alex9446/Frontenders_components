import Button from './components/Button'
import './App.css'

function App() {
  return (
    <>
      <Button size='small'>small</Button>
      <Button>normal</Button>
      <Button size='medium'>medium</Button>
      <Button size='large'>large</Button>
      <br/>
      <Button>normal</Button>
      <Button border='squared'>medium</Button>
      <Button border='rounded'>large</Button>
    </>
  )
}

export default App
