import "./App.css";
import AddBucket from "./components/AddBucket";
import HistoryCard from "./components/HistoryCard";
import DemoLinks from "./components/DemoLinks";
import AddCard from "./components/AddCard";
import { Provider } from "react-redux";
import store from "./components/store";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="px-10">
      <Provider store={store}>
        <DemoLinks />
        <AddBucket />
        <AddCard />
        <Body />
        <HistoryCard />
      </Provider>
    </div>
  );
};

export default App;
