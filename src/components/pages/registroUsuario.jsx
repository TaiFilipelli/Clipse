import { Label, Input } from "keep-react"
import { Link } from "wouter"

const RegistroUsuario = () => {
  return (
    <section className='container-register'>
        <h1>Registro de usuario</h1>
        <h3>Ingrese los campos solicitados. Únase a la familia hoy!</h3>
          <section className='register'>
            <Label htmlFor="name">Nombre completo</Label>
            <Input type="text" placeholder="Nombre y apellido" name="name"/><br />
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" placeholder="Correo electrónico" name="email"/>
          </section>
          <Link href="/" className='anchor'>Volver atrás</Link>
    </section>
  )
}

export default RegistroUsuario
