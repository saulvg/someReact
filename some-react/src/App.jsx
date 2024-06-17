import { PageOne } from "./pages";
import { AppContext } from "./hooks/useAppContext";

function App() {
  return (
    <AppContext>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <PageOne />
    </AppContext>
  );
}

export default App;
