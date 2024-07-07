import Layout from "../components/layout";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Google } from "@mui/icons-material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import useForm from "../hooks/useForm";
import "./AuthCard.css";

const Signup = () => {
  const [formData, handleChange] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Layout>
      <form
        className="auth-card signup bg-light"
        style={{ gap: "1.2rem" }}
        onChange={handleChange}
      >
        <div className="title-wrapper">
          <PersonAddAlt1Icon color="primary" sx={{ fontSize: "42px" }} />
          <Typography fontSize={"32px"}>Sign up</Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" name="firstName" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" name="lastName" required fullWidth />
          </Grid>
        </Grid>
        <TextField type="email" label="Email" name="email" fullWidth required />
        <TextField
          type="password"
          label="Password"
          name="password"
          fullWidth
          required
        />
        <TextField
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          fullWidth
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              value="remember"
              name="agreeToTerms"
              color="primary"
              size="small"
            />
          }
          label="By continuing, I agree to Y's Terms of use and Privacy Policy"
          style={{ alignSelf: "start" }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        {/* <Typography sx={{ margin: "-0.4rem", fontWeight: "600" }}>
          OR
        </Typography> */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<Google />}
          fullWidth
        >
          Continue with Google
        </Button>
        <Link href="/login" variant="body2">
          {"Have an account? Sign In"}
        </Link>
      </form>
    </Layout>
  );
};

export default Signup;
