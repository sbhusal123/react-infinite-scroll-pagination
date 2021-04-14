import React from "react";
import ContentLoader from "react-content-loader";

function Loader() {
    return (
        <>
            <ContentLoader
                viewBox="0 0 1000 300"
                speed={0.5}
                backgroundOpacity={0.7}
                foregroundColor="#a3c4d4"
            >
                <rect x="0" y="0" width="1000" height="5" />
                <rect x="0" y="0" width="5" height="250" />
                <rect x="0" y="250" width="1000" height="5" />
                <rect x="995" y="0" width="5" height="250" />

                <rect x="10" y="20" width="350" height="3" />
                <rect x="10" y="35" width="350" height="3" />
                <rect x="0" y="50" width="1000" height="5" />
                <rect x="10" y="70" width="150" height="3" />
                <rect x="10" y="100" width="800" height="3" />
                <rect x="10" y="120" width="800" height="3" />
                <rect x="10" y="140" width="800" height="3" />

                <rect x="0" y="200" width="1000" height="5" />
                <rect x="10" y="225" width="350" height="3" />
                <rect x="10" y="240" width="350" height="3" />
            </ContentLoader>
        </>
    );
}

export default Loader;
