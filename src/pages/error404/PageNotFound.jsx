import React from "react";
import { Link } from "react-router-dom";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';

const PageNotFound = () => {

  let style = {
    height:"350px",
    padding:"60px 0",  
    color:"white",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-evenly",
  }

  return (
    <ContentWrapper>
      <div className="not-found" style={style}>
        <h1>Oops! Page Not Found</h1>
        <p>
          We're sorry, but the page you are looking for cannot be found. Please
          check the URL and try again.
        </p>
        <div className="icons">
          <Link to="/">Go back to homepage</Link>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default PageNotFound;
