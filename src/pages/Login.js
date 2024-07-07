import Layout from "../components/layout";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Google } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useForm from "../hooks/useForm";
import "./AuthCard.css";
// import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [formData, handleChange] = useForm({
    email: "",
    password: "",
    rememberUser: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Layout>
      <form className="auth-card bg-light" onChange={handleChange}>
        <div className="title-wrapper">
          <AccountCircleIcon color="primary" sx={{ fontSize: "42px" }} />
          <Typography fontSize={"32px"}>Sign in</Typography>
        </div>
        <TextField label="Email or Username" name="email" fullWidth required />
        <TextField
          type="password"
          label="Password"
          name="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={
            <Checkbox value="remember" color="primary" name="rememberUser" />
          }
          label="Remember me"
          style={{ alignSelf: "start" }}
        />
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<Google />}
            fullWidth
          >
            Continue with Google
          </Button>
        </GoogleLogin>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          onClick={handleSubmit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Typography fontSize={"0.8rem"}>
          By continuing, you are agree to Y's Terms of use and Privacy Policy
        </Typography>
      </form>
    </Layout>
  );
};

export default Login;
