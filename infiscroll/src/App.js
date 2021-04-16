import FunctionalPaginationScroll from "./Components/FunctionalPaginationScroll";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <FunctionalPaginationScroll />
        </Provider>
    );
};

export default App;
