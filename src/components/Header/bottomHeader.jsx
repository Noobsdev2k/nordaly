import React from "react";
import { Link } from "react-router-dom";
import {headerConfig} from "./headerConfig"

export default function Bottom() {
  return (
    <div className="header-bottom">
      <div className="row align-items-center">
        <div className="col-12">
          <div className="main-menu main-menu-padding-2 main-menu-center main-menu-font-width-400 main-menu-lh-1">
            <nav>
              <ul>
                {headerConfig.map(({path, title}, index) => (
                  <li key={index}>
                    <Link to={path} >{title}</Link>
                  </li>
                )
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
