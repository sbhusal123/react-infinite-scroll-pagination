import ClassBasedPaginationScroll from "./Components/ClassBasedPaginationScroll";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <ClassBasedPaginationScroll />
        </Provider>
    );
};

export default App;
