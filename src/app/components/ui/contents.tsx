"use client";

import { Content } from "antd/es/layout/layout";

const Contents = ({ children }: { children: React.ReactNode }) => {
  return <Content style={{ minHeight: "100vh" }}>{children}</Content>;
};

export default Contents;
