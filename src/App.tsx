import { ProductProvider } from "./providers/context";
import { AppRoutes } from "./routes";

function App() {
  return (
    <ProductProvider>
      <AppRoutes />
    </ProductProvider>
  );
}

export default App;
