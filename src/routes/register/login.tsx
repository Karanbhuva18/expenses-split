import Login from '@/Pages/Login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Login/>
}
