import Button from './components/Button'
import { mdiAccount, mdiCheck, mdiMapMarker } from '@mdi/js'
import './App.css'

function App() {
  return (
    <>
      <Button size='small'>small</Button>
      <Button size='normal'>normal</Button>
      <Button size='medium'>medium</Button>
      <Button size='large'>large</Button>
      <br/>
      <Button border='normal'>normal</Button>
      <Button border='squared'>squared</Button>
      <Button border='rounded'>rounded</Button>
      <br/>
      <Button state='disabled'>disabled</Button>
      <Button state='loading' ariaLabel='loading'></Button>
      <br/>
      <Button color='normal'>normal</Button>
      <Button color='primary'>primary</Button>
      <Button color='link'>link</Button>
      <Button color='info'>info</Button>
      <Button color='success'>success</Button>
      <Button color='warning'>warning</Button>
      <Button color='danger'>danger</Button>
      <br/>
      <Button colorOutline='normal'>normal</Button>
      <Button colorOutline='primary'>primary</Button>
      <Button colorOutline='link'>link</Button>
      <Button colorOutline='info'>info</Button>
      <Button colorOutline='success'>success</Button>
      <Button colorOutline='warning'>warning</Button>
      <Button colorOutline='danger'>danger</Button>
      <br/>
      <Button leftIcon={mdiAccount} color='primary'>icon left</Button>
      <Button rightIcon={mdiMapMarker} color='info'>icon right</Button>
      <Button leftIcon={mdiCheck} border='rounded' color='success' ariaLabel='check'></Button>
    </>
  )
}

export default App
