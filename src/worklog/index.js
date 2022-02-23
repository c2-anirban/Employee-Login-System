import React from "react";
import "./workLog.css";
import axios from "axios";
import { useState } from "react";

const WorkLog = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    starttime: "",
    endtime: "",
    workdone: "",
  });

  const [empWorkList, setEmpWorkList] = useState([]);

  let employee = localStorage.getItem("empId");

  const workList = () => {
    axios
      .get("http://localhost:3000/worklog", {
        params: {
          empID: Number.parseInt(employee),
        },
      })
      .then(function (response) {
        console.log(response.data, "work list");
        let storeList = response.data;
        setEmpWorkList(JSON.parse(JSON.stringify(storeList)));
      });
  };
  console.log(empWorkList, "list");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/worklog", {
        body: JSON.stringify(formData),
        empID: localStorage.getItem("empId"),
      })
      .then(function (response) {
        console.log(response);
        // logOut();
        setFormData({
          projectName: "",
          starttime: "",
          endtime: "",
          workdone: "",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
      <div className="wrapper wrapper--w680">
        <div className="card card-1 " id="card-1 ">
          <div className="card-heading"></div>
          <div className="card-body " id="card-body">
            <h2 className="title">Today's Info</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="input-group" id="input-group">
                <input
                  className="input--style-1"
                  type="text"
                  placeholder="Project's Name"
                  name="projectName"
                  onChange={(e) => handleChange(e)}
                  value={formData.projectName}
                />
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group" id="input-group">
                    <input
                      className="input--style-1 js-datepicker"
                      type="datetime-local"
                      placeholder="Starting Time"
                      name="starttime"
                      onChange={(e) => handleChange(e)}
                      value={formData.starttime}
                      required
                    />
                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group" id="input-group">
                    <input
                      className="input--style-1 js-datepicker"
                      type="datetime-local"
                      placeholder="Ending Time"
                      name="endtime"
                      onChange={(e) => handleChange(e)}
                      value={formData.endtime}
                      required
                    />
                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                  </div>
                </div>
              </div>

              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group" id="input-group">
                    <input
                      className="input--style-1"
                      type="text"
                      placeholder=" Work Done"
                      name="workdone"
                      onChange={(e) => handleChange(e)}
                      value={formData.workdone}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="p-t-20">
                <button
                  className="btn btn--radius btn--green "
                  id="workLogBtn"
                  type="submit"
                >
                  Submit
                </button>{" "}
                <button
                  className="btn btn--radius btn--green"
                  id="workLogBtn"
                  onClick={workList}
                  type=""
                >
                  Work Log
                </button>
              </div>
              <div className="titles mt-4">
                <h5 className="project-name worklist">Project Name</h5>{" "}
                <h5 className="starting-time worklist">Start Time</h5>{" "}
                <h5 className="ending-time worklist">End Time</h5>{" "}
                <h5 className="updates worklist">Work Done</h5>{" "}
              </div>
              {empWorkList.map((list) => {
                console.log(list);
                return (
                  <table>
                    <tr>
                      <td> {JSON.parse(list.body).projectName}</td>
                    </tr>
                    <tr>
                      <td>
                        {new Date(
                          JSON.parse(list.body).starttime
                        ).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {new Date(
                          JSON.parse(list.body).endtime
                        ).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td>{JSON.parse(list.body).workdone}</td>
                    </tr>
                  </table>
                );
              })}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkLog;
