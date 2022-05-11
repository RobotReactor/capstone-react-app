import React from 'react'

const DashboardContent = () => {
  return (
    <div>
        <div id="main-screen" className="main-screen">
                <div className="top-container">
                    <div className="top-page-info">
                        <div className="bc-info">
                            <div className="head-info">
                                <i className="fa fa-building"></i>
                                <h5>Main Dashboard</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg-container">
                    <div className="big-section"></div>
                    <div className="nrml-section"></div>
                </div>
                <div className="md-container">
                    <div className="big-section"></div>
                    <div className="big-section"></div>
                </div>
                <div className="sm-container">
                    <div className="nrml-section"></div>
                    <div className="big-section"></div>
                </div>
                <div className="lg-container">
                    <div className="nrml-section"></div>
                    <div className="nrml-section"></div>
                    <div className="nrml-section"></div>
                </div>
                <div className="lg-container">
                    <div className="big-section"></div>
                </div>
            </div>
    </div>
  )
}

export default DashboardContent