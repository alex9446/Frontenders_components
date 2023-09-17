import Button from './components/Button'
import { mdiAccount, mdiCheck, mdiMapMarker } from '@mdi/js'
import './App.css'

function App() {
  return (
    <>
      <section id='buttons-app' aria-label='buttons app'>
        <section>
          <h2>sizes</h2>
          <Button size='small'>small</Button>
          <Button size='normal'>normal</Button>
          <Button size='medium'>medium</Button>
          <Button size='large'>large</Button>
        </section>
        <section>
          <h2>borders</h2>
          <Button border='normal'>normal</Button>
          <Button border='squared'>squared</Button>
          <Button border='rounded'>rounded</Button>
        </section>
        <section>
          <h2>states</h2>
          <Button state='disabled'>disabled</Button>
          <Button state='loading' ariaLabel='loading'></Button>
        </section>
        <section>
          <h2>color states</h2>
          <Button color='normal'>normal</Button>
          <Button color='primary'>primary</Button>
          <Button color='link'>link</Button>
          <Button color='info'>info</Button>
          <Button color='success'>success</Button>
          <Button color='warning'>warning</Button>
          <Button color='danger'>danger</Button>
        </section>
        <section>
          <h2>color outline states</h2>
          <Button colorOutline='normal'>normal</Button>
          <Button colorOutline='primary'>primary</Button>
          <Button colorOutline='link'>link</Button>
          <Button colorOutline='info'>info</Button>
          <Button colorOutline='success'>success</Button>
          <Button colorOutline='warning'>warning</Button>
          <Button colorOutline='danger'>danger</Button>
        </section>
        <section>
          <h2>icons</h2>
          <Button leftIcon={mdiAccount} color='primary'>icon left</Button>
          <Button rightIcon={mdiMapMarker} color='info'>icon right</Button>
          <Button leftIcon={mdiCheck} border='rounded' color='success' ariaLabel='check'></Button>
        </section>
      </section>
    </>
  )
}

export default App
