import { useAuth0 } from "@auth0/auth0-react";

import Button from "./Button";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button clicked={() => logout({ returnTo: window.location.origin })}>
      Wyloguj się
    </Button>
  );
};

export default LogoutButton;
