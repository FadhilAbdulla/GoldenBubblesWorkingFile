import React, { useState } from "react";
import CountUp from "react-countup";
import {
  File,
  User,
  UserCheck,
} from "feather-icons-react/build/IconComponents";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../core/img/imagewithbasebath";
import { ArrowRight } from "react-feather";
import { all_routes } from "../Router/all_routes";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Dashboard = () => {
  const route = all_routes;
  // const [chartOptions] = useState({
  //   series: [
  //     {
  //       name: "Sales",
  //       data: [130, 210, 300, 290, 150, 50, 210, 280, 105],
  //     },
  //     {
  //       name: "Purchase",
  //       data: [-150, -90, -50, -180, -50, -70, -100, -90, -105],
  //     },
  //   ],
  //   colors: ["#28C76F", "#EA5455"],
  //   chart: {
  //     type: "bar",
  //     height: 320,
  //     stacked: true,
  //     zoom: {
  //       enabled: true,
  //     },
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 280,
  //       options: {
  //         legend: {
  //           position: "bottom",
  //           offsetY: 0,
  //         },
  //       },
  //     },
  //   ],
  //   plotOptions: {
  //     bar: {
  //       horizontal: false,
  //       borderRadius: 4,
  //       borderRadiusApplication: "end", // "around" / "end"
  //       borderRadiusWhenStacked: "all", // "all"/"last"
  //       columnWidth: "20%",
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   yaxis: {
  //     min: -200,
  //     max: 300,
  //     tickAmount: 5,
  //   },
  //   xaxis: {
  //     categories: [
  //       "Jan",
  //       "Feb",
  //       "Mar",
  //       "Apr",
  //       "May",
  //       "Jun",
  //       "Jul",
  //       "Aug",
  //       "Sep",
  //     ],
  //   },
  //   legend: { show: false },
  //   fill: {
  //     opacity: 1,
  //   },
  // });
  const MySwal = withReactContent(Swal);
  const showConfirmationAlert = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#00ff00",
      confirmButtonText: "Yes, delete it!",
      cancelButtonColor: "#ff0000",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          className: "btn btn-success",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "btn btn-success",
          },
        });
      } else {
        MySwal.close();
      }
    });
  };
  const data = {
    overallBalance: 200,
    totalMonthlyDeposit: 300,
    totalMonthlyWithdrawal: 400,
    highestDepositAmount: 200,

    customer: 50,
    pendingRegistration: 10,
    pendingFundRequest: 5,
    pendingApproval: 2,
  };
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-widget w-100">
                <div className="dash-widgetimg">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/dash1.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    <CountUp
                      start={0}
                      end={data?.overallBalance ?? 0}
                      duration={3}
                      prefix="$"
                    />
                  </h5>
                  <h6>Overall Balance</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-widget dash1 w-100">
                <div className="dash-widgetimg">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/dash2.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    $
                    <CountUp
                      start={0}
                      end={data?.totalMonthlyDeposit ?? 0}
                      duration={3} // Duration in seconds
                    />
                  </h5>
                  <h6>Total Monthly Deposit</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-widget dash2 w-100">
                <div className="dash-widgetimg">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/dash3.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    $
                    <CountUp
                      start={0}
                      end={data?.totalMonthlyWithdrawal ?? 0}
                      duration={3} // Duration in seconds
                      // decimals={1}
                    />
                  </h5>
                  <h6>Total Monthly Withdrawal</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-widget dash3 w-100">
                <div className="dash-widgetimg">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/dash4.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <div className="dash-widgetcontent">
                  <h5>
                    $
                    <CountUp
                      start={0}
                      end={data?.highestDepositAmount ?? 0}
                      duration={3} // Duration in seconds
                    />
                  </h5>
                  <h6>Highest Deposit Amount</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-count">
                <div className="dash-counts">
                  <h4>{data?.customer ?? 0}</h4>
                  <h5>Customers</h5>
                </div>
                <div className="dash-imgs">
                  <User />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das1">
                <div className="dash-counts">
                  <h4>{data?.pendingApproval ?? 0}</h4>
                  <h5>Pending Approval</h5>
                </div>
                <div className="dash-imgs">
                  <UserCheck />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das2">
                <div className="dash-counts">
                  <h4>{data?.pendingFundRequest ?? 0}</h4>
                  <h5>Pending Fund Request</h5>
                </div>
                <div className="dash-imgs">
                  <ImageWithBasePath
                    src="assets/img/icons/file-text-icon-01.svg"
                    className="img-fluid"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das3">
                <div className="dash-counts">
                  <h4>{data?.pendingRegistration ?? 0}</h4>
                  <h5>Pending Registration</h5>
                </div>
                <div className="dash-imgs">
                  <File />
                </div>
              </div>
            </div>
          </div>
          {/* Button trigger modal */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
