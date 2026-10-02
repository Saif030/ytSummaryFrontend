import UserRoutes from './routes/UserRoutes';
import AuthRoutes from './routes/AuthRoutes';
import { useAuth } from "./store/DataStore.js";

function App() {
  const { isAuthenticated } = useAuth();
  return (
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
          { isAuthenticated ? <UserRoutes /> : <AuthRoutes /> }
      </div>
  );
}

export default App;