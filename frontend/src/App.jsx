import PagesContextProvider from "./contexts/PagesContext";
import Link from "./components/Link";
import Page from "./components/Page";
import GetUsersPage from "./pages/GetUsersPage";
import "./App.css";
import CreateUsersPage from "./pages/CreateUsersPage";
import "./App.css";
import HomePage from "./pages/HomePage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <PagesContextProvider>
        <nav className="navegation-bar">
          <Link className="Link" to="/">
            Home Page
          </Link>
          <Link className="Link" to="/create-users">
            Create Users
          </Link>
          <Link className="Link" to="/get-users">
            Get users
          </Link>
        </nav>
        <Page route="/" Component={HomePage} />
        <Page route="/create-users" Component={CreateUsersPage} />
        <Page route="/get-users" Component={GetUsersPage} />
      </PagesContextProvider>
    </div>
  );
};

export default App;
