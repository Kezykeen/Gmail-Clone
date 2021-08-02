import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { db } from "../../firestore";
import EmailRow from "../emailRow/EmailRow";
import Section from "../section/Section";
import "./EmailList.css";

const EmailList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList_sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="emailList_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            to={to}
            subject={subject}
            message={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data to test the width ellipsis"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
        <EmailRow
          to="Test"
          subject="This is dummy data"
          message="More context for the dummy data"
          time="10am"
        />
      </div>
    </div>
  );
};

export default EmailList;
