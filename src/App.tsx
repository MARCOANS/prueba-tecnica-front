import "./App.css";

import AppLayout from "./components/AppLayout";
import SweetAlert2 from "react-sweetalert2";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers";

function App() {
  const swalProps = useSelector((state: RootState) => state.sweetAlert);
  return (
    <div className="App">
      <AppLayout />
      <SweetAlert2 {...swalProps} />
    </div>
  );
}

export default App;
