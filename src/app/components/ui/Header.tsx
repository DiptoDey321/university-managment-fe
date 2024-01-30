import React from "react";
import { Avatar, Button, Dropdown, Layout, Menu, MenuProps, Row } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { removedUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;

function Header() {
  const router = useRouter();

  const logOut = () => {
    removedUserInfo("accessToken");
    router.push("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Button onClick={logOut} type="text" danger>
          {" "}
          <LogoutOutlined />
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <AntHeader>
      <Row justify="end">
        <Dropdown overlay={menu} trigger={["hover"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <Avatar size="large" icon={<UserOutlined />} />
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
}

export default Header;
