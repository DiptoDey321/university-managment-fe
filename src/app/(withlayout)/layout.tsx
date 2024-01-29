"use client";

import { Layout } from "antd";
import SideBar from "../components/ui/sidebar";
import Contents from "../components/ui/contents";
import { isLoggedIn } from "@/services/auth.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const isUserLoggedIn = isLoggedIn();
  const router = useRouter();

  useEffect(() => {
    console.log(isUserLoggedIn);

    if (!isUserLoggedIn) {
      router.push("/login");
    }
    setLoading(true);
  }, [router, isUserLoggedIn, loading]);

  if (!loading) {
    return <p>Loading........</p>;
  }
  return (
    <Layout>
      <SideBar></SideBar>
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
