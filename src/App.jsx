import {Pages} from "./pages/Pages.jsx";
import {Category} from "./components/Category.jsx";
import {BrowserRouter} from "react-router-dom";
import {Search} from "./components/Search.jsx";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Search />
            <Category />
            <Pages />
        </BrowserRouter>
    </div>
  );
}

export default App;
