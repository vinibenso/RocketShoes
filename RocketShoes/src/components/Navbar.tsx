
import { Logo } from "./Logo";


export function NavBar(){
  return (

    <header className='flex  justify-auto w-full justify-between '>
    <Logo />
     <p>HOMEN</p>
     <p>MULHER</p>
     <p>CRIANÇA</p>
     <p>CUSTOMIZAR</p>
     <input placeholder="Pesquisar"></input>
    </header>
  )
}