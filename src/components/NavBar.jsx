import React from "react";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">NewsMag</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item"> <div className="nav-link" onClick={()=>steCategory("technology")}> Technology</div></li>
            <li className="nav-item"onClick={()=>steCategory("bussiness")}> <div className="nav-link"> Bussiness</div></li>
            <li className="nav-item"onClick={()=>steCategory("health")}> <div className="nav-link"> Health</div></li>
            <li className="nav-item"onClick={()=>steCategory("science")}> <div className="nav-link"> Science</div></li>
            <li className="nav-item"onClick={()=>steCategory("sports")}> <div className="nav-link"> Sports</div></li>
            <li className="nav-item"onClick={()=>steCategory("enterainment")}> <div className="nav-link"> Enterainment</div></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
