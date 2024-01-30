"use client";

import { Content } from "antd/es/layout/layout";
import UMBreadcrumb from "./UMBreadcrumb";
import Header from "./Header";

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content style={{ minHeight: "100vh" }}>
      <Header></Header>
      <UMBreadcrumb
        items={[
          {
            label: `${base}`,
            link: `${base}`,
          },
          {
            label: `Student`,
            link: `${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
