import Button from './components/Button'
import Input from './components/Input'
import { mdiAccount, mdiCheck, mdiMapMarker } from '@mdi/js'
import './App.css'

function App() {
  return (
    <>
      <header className='page-header' aria-label='page title'>
        <h1>FRONTENDERS UI KIT</h1>
      </header>
      <section className='components-group' aria-label='button components group'>
        <h1>button component</h1>
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
        <section>
          <h2>event</h2>
          <Button onClick={() => alert('click!')}>click</Button>
        </section>
      </section>
      <section className='components-group' aria-label='input components group'>
        <h1>input component</h1>
        <section>
          <h2>sizes</h2>
          <div className='inputs-group'>
            <Input label='small' size='small' />
            <Input label='normal' size='normal' />
            <Input label='medium' size='medium' />
            <Input label='large' size='large' />
          </div>
        </section>
        <section>
          <h2>attributes</h2>
          <div className='inputs-group'>
            <Input label='*required' state='required' />
            <Input label='disabled' state='disabled' />
            <Input label='readonly' state='readonly' />
            <Input label='password' type='password' />
            <Input label='searchfield' type='search' />
            <Input label='helper text' help='some help text' />
          </div>
        </section>
        <section>
          <h2>color states</h2>
          <div className='inputs-group'>
            <Input label='normal' color='normal' />
            <Input label='primary' color='primary' />
            <Input label='link' color='link' />
            <Input label='info' color='info' />
            <Input label='success' color='success' />
            <Input label='warning' color='warning' />
            <Input label='danger' color='danger' />
          </div>
        </section>
        <section>
          <h2>borders</h2>
          <div className='inputs-group'>
            <Input label='normal' border='normal' />
            <Input label='squared' border='squared' />
            <Input label='rounded' border='rounded' />
          </div>
        </section>
      </section>
    </>
  )
}

export default App
