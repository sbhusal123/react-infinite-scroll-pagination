import ClassBasedPaginationScroll from "./Components/ClassBasedPaginationScroll";
import FunctionalPaginationScroll from "./Components/FunctionalPaginationScroll";

import { Col, Container, Button } from "react-bootstrap";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
    const url = window.location.href;
    return (
        <Provider store={store}>
            {url.includes("autoload") ? <ClassBasedPaginationScroll /> : null}
            {url.includes("manualload") ? <FunctionalPaginationScroll /> : null}

            {!url.includes("autoload") && !url.includes("manualload") ? (
                <Container style={{ marginTop: "5%" }}>
                    <Col>
                        <Button href={url + "/autoload/"}>
                            Demo : Autoload with Scroll
                        </Button>
                    </Col>
                    <br></br>
                    <Col>
                        <Button href={url + "/manualload/"}>
                            Demo: Load more on end
                        </Button>
                    </Col>
                </Container>
            ) : null}
        </Provider>
    );
};

export default App;
