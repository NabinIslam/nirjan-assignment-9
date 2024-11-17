import { Button, Label, TextInput } from "flowbite-react";

const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get("email");
    const password = form.get("password");

    console.log({ email, password });
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
        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
};

export default Login;
