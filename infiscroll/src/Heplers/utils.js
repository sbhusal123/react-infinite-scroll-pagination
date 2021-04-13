// Given a nextUrl, returns the next Page number
export const getNextPageNumber = nextUrl => {
    const params = nextUrl.split("?")[1].split("&");
    let pageUrl = "";
    params.forEach(param => {
        if (param.includes("page=")) {
            pageUrl = param.split("=")[1];
        }
    });
    return pageUrl;
};

// Given a component, checks if the bottom of element is reached
export const isBottomOfElementReached = el => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
};
