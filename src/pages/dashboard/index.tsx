import { signOut } from "firebase/auth";
import GanttChart from "../../components/dhtmlx/Gantt";
import { auth } from "../../firebase";
import { useGoogleAuth } from "../../context/auth";
export default function DashboardPage() {
  const { user } = useGoogleAuth();

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <>
      <h1>Welcome {user?.displayName}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
      <GanttChart />
    </>
  );
}
