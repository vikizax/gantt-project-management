import { useNavigate } from "react-router-dom";
import { useGoogleAuth } from "../../context/auth";
import { Button } from "@/components/ui/button";
import GoogleIcon from "../../custom-icons/google-icon.svg?react";
const HomePage = () => {
  const { signInWithGoogle } = useGoogleAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/home");
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  return (
    <div className="p-2">
      <h1>Home Page</h1>
      <Button onClick={handleGoogleSignIn}>
        <GoogleIcon />
        Continue with Google
      </Button>
    </div>
  );
};

export default HomePage;
