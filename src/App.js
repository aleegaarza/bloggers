import { Header } from "./components/Header";
//redux
import { Provider } from "react-redux";
import store from "./store";
import BloggersList from "./components/BloggersList";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BloggersList />
    </Provider>
  );
}

export default App;
