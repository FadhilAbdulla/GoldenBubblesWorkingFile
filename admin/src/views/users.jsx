import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../core/pagination/datatable";
import { TableColumns } from "../common/tableColumns";
import { GetRequest, PostRequest } from "../common/ApiFunctions";
import ApiEndpoints from "../common/ApiEndpoints";
import { DataSourceSearch } from "../common/SearchFunction";
import { showSwalConfirmationAlert } from "../common/ConfirmationMessage";

const Users = () => {
  const [dataSource, setDataSource] = useState(null);
  const [Search, setSearch] = useState("");

  const fetchdata = async () => {
    const response = await GetRequest(ApiEndpoints.users);
    setDataSource(response ?? []);
  };

  const ApproveUser = async (userId) => {
    setDataSource(null);
    const res = await PostRequest(
      ApiEndpoints.approveUser,
      JSON.stringify({ userId })
    );
    // if (res.success === true) {
    fetchdata();
    // }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const customcolumn = [
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
        <div className="action-table-data">
          <div className="edit-delete-action">
            <a className="me-2 p-2">
              <i
                data-feather="eye"
                className="feather feather-eye action-eye"
              ></i>
            </a>
            {record.status !== "Active" && (
              <a
                className="me-2 p-2 bg-dark text-white"
                onClick={() =>
                  showSwalConfirmationAlert(() => ApproveUser(record.id))
                }
              >
                {" "}
                Approve{" "}
                <i
                  data-feather="check-square"
                  className="feather-check-square ms-2"
                  style={{ color: "green" }}
                ></i>
              </a>
            )}
            {/* <a
              className="confirm-text p-2"
              onClick={() =>
                showSwalConfirmationAlert(() => console.log("Deleted"))
              }
            >
              <i
                data-feather="x-circle"
                className="feather-x-circle"
                style={{ color: "red" }}
              ></i>
            </a> */}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Users</h4>
                <h6>Manage Your Users</h6>
              </div>
            </div>
          </div>
          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-body">
              <div className="table-top">
                <div className="search-set">
                  <div className="search-input">
                    <input
                      type="text"
                      placeholder="Search"
                      className="form-control form-control-sm formsearch"
                      value={Search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Link to className="btn btn-searchset">
                      <i data-feather="search" className="feather-search" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <Table
                  columns={[...TableColumns.users, ...customcolumn]}
                  dataSource={DataSourceSearch(Search, ["name"], dataSource)}
                />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
      </div>
    </div>
  );
};

export default Users;
