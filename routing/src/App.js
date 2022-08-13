import {
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";

import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import MainNavigation from "./layout/MainNavigation";

function App() {

    // Path = localhost:3O00 (when we want to add routing we add a /) localhost:3O00/FirstPage for instance
    // real server later = my-page.com
  return <div>
      <MainNavigation />
      <br/>
      <Routes>
          <Route path="/" element={<FirstPage />} />
      </Routes>
      <Routes>
          <Route path="/second" element={<SecondPage />} />
      </Routes>
      <Routes>
          <Route path="/third" element={<ThirdPage />} />
      </Routes>

    </div>
  ;
}
export default App;
