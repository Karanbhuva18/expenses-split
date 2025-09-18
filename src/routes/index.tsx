import { createFileRoute, redirect } from "@tanstack/react-router";
import { isAuthenticated } from "@/lib/auth";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/register/login",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Welcome to Home Page 🚀</div>;
}
