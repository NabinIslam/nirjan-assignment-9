import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <main className="my-20">
      <Helmet>
        <title>Lingo Bingo | Update Profile</title>
      </Helmet>
      <div className="container">
        <h2 className="text-center text-3xl mb-10">Update your profile</h2>
        <form className="max-w-md mx-auto flex flex-col gap-5" action="">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Label>Current Photo</Label>
            <img className="rounded-full size-20" src={user.photoURL} />
          </div>
          <div>
            <Label>Name</Label>
            <TextInput defaultValue={user.displayName} />
          </div>
          <div>
            <Label>Email</Label>
            <TextInput defaultValue={user.email} />
          </div>
          <div>
            <Label>New Photo</Label>
            <FileInput />
          </div>

          <div>
            <Button>Update</Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default UpdateProfile;
