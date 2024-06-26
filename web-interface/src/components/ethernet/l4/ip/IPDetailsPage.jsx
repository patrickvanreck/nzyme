import React from "react";
import {useParams} from "react-router-dom";
import ApiRoutes from "../../../../util/ApiRoutes";

export default function IPDetailsPage() {

  const { ipParam } = useParams()

  return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href={ApiRoutes.ETHERNET.OVERVIEW}>Ethernet</a></li>
                <li className="breadcrumb-item"><a href={ApiRoutes.ETHERNET.L4.OVERVIEW}>Layer 4</a></li>
                <li className="breadcrumb-item">IP Addresses</li>
                <li className="breadcrumb-item active" aria-current="page">{ipParam}</li>
              </ol>
            </nav>
          </div>

          <div className="col-md-12">
            <h1>
              IP Address &quot;{ipParam}&quot;
            </h1>
          </div>


        </div>
      </React.Fragment>
  )


}