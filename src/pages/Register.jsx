import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import GoogleButton from "react-google-button";

const Register = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = e => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    console.log("🚀 ~ handleSubmit ~ name:", name);
    const email = form.get("email");
    console.log("🚀 ~ handleSubmit ~ email:", email);
    const password = form.get("password");
    console.log("🚀 ~ handleSubmit ~ password:", password);

    createUser(email, password)
      .then(() => {
        updateUser(name)
          .then(() => {})
          .catch(err => console.error(err));
        navigate(from, { replace: true });
        toast.success("Registration successful");
      })
      .catch(err => console.error(err));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Registration successful");
      })
      .catch(err => console.error(err));
  };

  return (
    <main className="pt-40">
      <div className="container">
        <form
          className="flex max-w-md flex-col gap-4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="Full name"
              required
            />
          </div>
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
          <Button type="submit">Register</Button>
          <p className="text-sm">
            Already have an account?{" "}
            <Link className="font-medium hover:underline" to="/login">
              Login
            </Link>
          </p>
        </form>
        <div className="flex mt-5 items-center justify-center">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </main>
  );
};

export default Register;
