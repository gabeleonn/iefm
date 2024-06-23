import { Link } from "react-router-dom"

export function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/celulas">Login</Link>
            <Link to="/celulas/1">cadastro</Link>
        </nav>
    )
}
