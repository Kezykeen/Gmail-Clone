import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { openMail } from "../../features/mailSlice";
import "./EmailRow.css";

const EmailRow = ({ id, to, subject, message, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOpenMail = () => {
    dispatch(openMail({ id, to, subject, message, time }));

    history.push("/mail");
  };

  return (
    <div className="emailRow" onClick={() => handleOpenMail()}>
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <h3 className="emailRow_title">{to}</h3>

      <div className="emailRow_message">
        <h4>
          {subject} <span className="emailRow_description">- {message}</span>
        </h4>
      </div>

      <p className="emailRow_time">{time}</p>
    </div>
  );
};

export default EmailRow;
