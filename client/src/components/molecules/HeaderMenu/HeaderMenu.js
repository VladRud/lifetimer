import { Menu, MenuItem } from "@blueprintjs/core";
import React from "react";

const HeaderMenu = () => {
  return (
    <Menu>
      <MenuItem icon="cog" text="Settings" />
      <MenuItem icon="log-out" text="Log Out" />
    </Menu>
  )
};

export default HeaderMenu;
