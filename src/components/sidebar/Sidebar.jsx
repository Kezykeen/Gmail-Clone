import { Button, IconButton } from "@material-ui/core";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { openMessageModal } from "../../features/mailSlice";
import SidebarOption from "../sidebarOption/SidebarOption";
import "./Sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<Add fontSize="large" />}
        className="sidebar_compose"
        onClick={() => dispatch(openMessageModal())}
      >
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected="true" />
      <SidebarOption Icon={Star} title="Snoozed" number={2} />
      <SidebarOption Icon={AccessTime} title="Starred" number={54} />
      <SidebarOption Icon={LabelImportant} title="Important" number={12} />
      <SidebarOption Icon={NearMe} title="Sent" number={32} />
      <SidebarOption Icon={Note} title="Drafts" number={5} />
      <SidebarOption Icon={ExpandMore} title="More" number={3} />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
