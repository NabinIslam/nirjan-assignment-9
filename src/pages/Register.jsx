import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { register, setUser, updateUser } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    console.log("🚀 ~ handleSubmit ~ name:", name);
    const email = form.get("email");
    console.log("🚀 ~ handleSubmit ~ email:", email);
    const password = form.get("password");
    console.log("🚀 ~ handleSubmit ~ password:", password);

    register(email, password)
      .then(() => {
        updateUser(name)
          .then(() => {})
          .catch(err => console.error(err));
        navigate(from, { replace: true });
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
    </main>
  );
};

export default Register;
