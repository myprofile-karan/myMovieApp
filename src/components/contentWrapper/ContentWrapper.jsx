import React from "react";

const ContentWrapper = ({ children }) => {
    const style ={
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    }
    return <div className="contentWrapper" style={style}>{children}</div>;
};

export default ContentWrapper;


// CSS