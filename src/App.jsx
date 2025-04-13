import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ButtonComponent from './components/ButtonComponent'

function App() {
  return (
    <>
     <NavbarComponent />
     <ButtonComponent variant="primary"></ButtonComponent>
     <div style={{ paddingTop: '60px', textAlign: 'center', color: 'black' }}>
      <h1>Hello Wolrld</h1>
      <p>ini adalah halaman bawah</p>
      </div>
    </>
  )
}

export default App
