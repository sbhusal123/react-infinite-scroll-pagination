import React from "react";
import ContentLoader from "react-content-loader";

function Loader() {
    return (
        <>
            <ContentLoader viewBox="0 0 450 70">
                {/* Only SVG shapes */}
                <rect x="0" y="25" rx="3" ry="3" width="380" height="5" />
                <rect x="0" y="35" rx="3" ry="3" width="380" height="5" />
                <rect x="0" y="45" rx="3" ry="3" width="380" height="5" />
                <rect x="0" y="55" rx="3" ry="3" width="380" height="5" />
                <rect x="0" y="65" rx="3" ry="3" width="380" height="5" />
            </ContentLoader>
        </>
    );
}

export default Loader;
