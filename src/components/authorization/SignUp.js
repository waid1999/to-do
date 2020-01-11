import * as React from "react";
import { Button, FormGroup, Input } from '@material-ui/core';
/** Utils */
// import { Header } from "../components/Styles";
const SignUp = () => {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  return (
    <form
        onSubmit={e => {
        // Auth handler
        }}
    >
        <h1>Sign up</h1>
        <br />
        <FormGroup>
        <Input
            type="email"
            name="email"
            value={userEmail}
            placeholder="john@mail.com"
            // onChange={e => setUserEmail(e.target.value)}
        />
        </FormGroup>
        <FormGroup>
        <Input
            type="password"
            name="password"
            value={userPassword}
            placeholder="Password"
            // onChange={e => setUserPassword(e.target.value)}
        />
        </FormGroup>
        <Button type="submit" >
        {/* {loading ? "Loading..." : "Sign In"} */}
        Sign in
        </Button>
    </form>
  );
}
export default SignUp;