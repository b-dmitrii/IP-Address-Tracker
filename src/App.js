import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { AppMap } from "./components/Map";
import { loadData } from "./store/ipInfoSlice";

function App() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.ipInfo);
  useEffect(() => {
    dispatch(loadData(search));
  }, [dispatch, search]);
  return (
    <div>
      <Header />
      <Info />
      <AppMap />
    </div>
  );
}

export default App;
