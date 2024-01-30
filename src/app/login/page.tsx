"use client";

import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import React from "react";
import loginImage from "../../assets/Mobile login-amico.svg";
import Form from "../components/Forms/Form";
import FormInput from "../components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type Formvalues = {
  id: string;
  password: string;
};

function LoginPage() {
  const [userLogin] = useUserLoginMutation();
  // console.log(isLoggedIn());
  const router = useRouter();

  const onSubmit: SubmitHandler<Formvalues> = async (data: any) => {
    try {
      const response = await userLogin({ ...data }).unwrap();
      if (response?.accessToken) {
        router.push("/profile");
      }
      storeUserInfo({ accessToken: response?.data?.accessToken });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Row>
        <Col sm={24} md={14}>
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src={loginImage} width={500} alt="login image" />
          </div>
        </Col>
        <Col sm={24} md={10}>
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="login-card">
              <h2 style={{ color: "white", paddingBottom: "10px" }}>
                Please login your account
              </h2>
              <div className="">
                <Form submitHandler={onSubmit}>
                  <FormInput
                    name="id"
                    type="text"
                    size="large"
                    label="User ID"
                    labelColor="white"
                  />{" "}
                  <br /> <br />
                  <FormInput
                    name="password"
                    type="password"
                    size="large"
                    label="Enter password"
                    labelColor="white"
                  />
                  <br /> <br />
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LoginPage;
