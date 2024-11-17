import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const App = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
