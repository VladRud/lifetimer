import React from 'react';
import './MainTemplate.scss';
import { Position, Alignment, Classes, Button, Navbar, NavbarGroup, NavbarHeading, Popover } from "@blueprintjs/core";
import HeaderMenu from "../../molecules/HeaderMenu/HeaderMenu";

const MainTemplate = ({user, children}) => {
  return (
    <div className="Main-template">
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>ToDo</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Popover content={<HeaderMenu/>} position={Position.BOTTOM}>
            <Button className={Classes.MINIMAL} icon="person" text={user.name}/>
          </Popover>
        </NavbarGroup>
      </Navbar>
      <div>
        {children}
      </div>
    </div>
  )
};

export default MainTemplate;
