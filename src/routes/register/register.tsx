import { createFileRoute } from "@tanstack/react-router";
import Register from "@/Pages/register";
export const Route = createFileRoute("/register/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Register />;
}
