"use client";

import { Content } from "antd/es/layout/layout";
import UMBreadcrumb from "./UMBreadcrumb";

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content style={{ minHeight: "100vh" }}>
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
