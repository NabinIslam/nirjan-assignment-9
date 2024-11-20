import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <main>
      <div className="container py-10 flex flex-col items-center justify-center gap-5">
        <h1 className="text-xl">
          Welcome, <span className="font-bold">{user.displayName}</span>
        </h1>
        <img className="rounded-full" src={user.photoURL} alt="" />
        <h5>{user.email}</h5>
        <Link to="/update-profile">
          <Button>Update Profile</Button>
        </Link>
      </div>
    </main>
  );
};

export default MyProfile;
