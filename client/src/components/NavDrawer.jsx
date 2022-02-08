import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";

const data = [
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    name: "Home",
    icon: <HomeIcon />,
  },
];

const NavDrawer = () => {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  return (
    <>
      <MenuIcon onClick={() => setOpen(true)}>Click me</MenuIcon>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        {getList()}
      </Drawer>
    </>
  );
};

export default NavDrawer;
