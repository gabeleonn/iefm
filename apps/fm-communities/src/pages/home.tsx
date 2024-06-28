import { withAnimation } from "@/layouts/animation"
import { Link } from "react-router-dom"

function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/cadastro">Cadastrar</Link>
    </div>
  )
}

export const Home = withAnimation(Page)
