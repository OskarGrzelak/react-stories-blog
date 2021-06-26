import { useAuth0 } from "@auth0/auth0-react";

import Button from "./Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button clicked={() => loginWithRedirect()}>Zaloguj się</Button>;
};

export default LoginButton;
