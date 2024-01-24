"use client";

import { useState } from "react";
const { Sider } = Layout;
import { Layout, Menu, MenuProps } from "antd";
import { Sidebaritems } from "@/constants/sidebaritems";
import { USER_ROLE } from "@/constants/role";

function SideBar() {
  type MenuItem = Required<MenuProps>["items"][number];
  const [collapsed, setCollapsed] = useState(false);
  const role = USER_ROLE.SUPER_ADMIN;

  return (
    <div className="sidebar-property">
      {/* left side  slider menu using antd  */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ width: "200px !important" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 style={{ color: "White" }}>Dipto-Academy</h2>
        </div>

        {/* Menu list  */}
        <Menu
          style={{ height: "100vh", width: "200px" }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={Sidebaritems(role)}
        />
      </Sider>
    </div>
  );
}

export default SideBar;
