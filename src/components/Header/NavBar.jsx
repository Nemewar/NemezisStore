import "./navBar.css";
import { CartWidget } from "./CartWidget";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {

  const [form, setForm] = useState({
    searchText: ""
  })

  const navigate = useNavigate();

  const onchangeInput = (ev) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    })
  }

  const onReset = () => {
    setForm({
      ...form,
      searchText: ""
    })
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (form.searchText.length !== 0) {
      navigate({
        pathname: "/search",
        search: `?q=${form.searchText}`
      })
      onReset()
    }
  }


  return (
    <>
      <nav className="contenedor-navbar">
        <ul className="navbar">

          <div className="contenido-navbar left">

            <li onClick={onReset}>
              <Link to="/"><img src="/assets/img/logos/NemezisStore.jpg" /></Link>
            </li>

            <li>
              <form onSubmit={onSubmit}>
                <input
                  name="searchText"
                  type="text"
                  placeholder="Buscar Productos"
                  autoComplete="off"
                  value={form.searchText}
                  onChange={onchangeInput}
                />
              </form>
            </li>

          </div>

          <div className="contenido-navbar center">

            <li onClick={onReset}>
              <Link to="/">Videojuegos</Link>
              <ul className="submenu">
                <li><Link to="/categoria/ps4">PS4</Link></li>
                <li><Link to="/categoria/nintendoswitch">NINTENDO SWITCH</Link></li>
                <li><Link to="/categoria/xboxone">XBOX ONE</Link></li>
              </ul>
            </li>

            <li onClick={onReset}>
              <Link to="/nosotros">Nosotros</Link>
            </li>

            <li onClick={onReset}>
              <Link to="/contacto">Contacto</Link>
            </li>

          </div>

          <div className="contenido-navbar end">

            <li onClick={onReset}>
              <a href="#"><CartWidget /></a>
            </li>

            <li onClick={onReset}>
              <Link to="/login">Iniciar Sesión</Link>
            </li>

          </div>

        </ul>
      </nav>
    </>
  )
}