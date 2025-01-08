import Header from "./pages/@shared/components/header";
import AppRoutes from "./@shared/routes";
import { AuthProvider } from "./pages/@shared/security/auth.context";

function App() {
  return (
    <div>
      <Header />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
