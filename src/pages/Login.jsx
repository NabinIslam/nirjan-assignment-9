import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import GoogleButton from "react-google-button";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = e => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then(() => {
        navigate(from, { replace: true });

        toast.success("Login successful");
      })
      .catch(err => console.error(err));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Login successful");
      })
      .catch(err => console.error(err));
  };

  return (
    <main className="pt-40">
      <form
        className="flex max-w-md flex-col gap-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" name="password" type="password" required />
        </div>
        <Button type="submit">Login</Button>
        <p className="text-sm">
          Don't have an account?{" "}
          <Link className="font-medium hover:underline" to="/register">
            Register
          </Link>
        </p>
      </form>

      <div className="flex mt-5 items-center justify-center">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </main>
  );
};

export default Login;
