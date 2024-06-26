import React from "react";
import CardTitleWithControls from "../../shared/CardTitleWithControls";

export default function SingleValueCardLoading(props) {

  const title = props.title;
  const timeRange = props.timeRange;
  const setTimeRange = props.setTimeRange;
  const fixedAppliedTimeRange = props.fixedAppliedTimeRange;

  return (
      <div className="card">
        <div className="card-body card-number">
          <CardTitleWithControls title={title}
                                 slim={true}
                                 disabled={true}
                                 timeRange={timeRange}
                                 setTimeRange={setTimeRange}
                                 fixedAppliedTimeRange={fixedAppliedTimeRange} />

          <div className="value value-loading text-muted">
            <i className="fa-solid fa-spinner fa-fade"></i>
          </div>
        </div>
      </div>
  )

}