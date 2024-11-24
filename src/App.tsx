import { useGoogleAuth } from "./context/auth";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const App = () => {
  const { user } = useGoogleAuth();

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <h1>Welcome {user?.displayName}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default App;
