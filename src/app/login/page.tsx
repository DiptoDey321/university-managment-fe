"use client";

import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import loginImage from "../../assets/Mobile login-amico.svg";
import Form from "../components/Forms/Form";
import FormInput from "../components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

type Formvalues = {
  id: string;
  password: string;
};

function LoginPage() {
  const onSubmit: SubmitHandler<Formvalues> = (data) => {
    try {
      console.log(data);
    } catch (error) {}
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
              <h1 style={{ color: "white" }}>Please login your account</h1>
              <div className="">
                <Form submitHandler={onSubmit}>
                  <FormInput
                    name="id"
                    type="text"
                    size="large"
                    label="User ID"
                  />{" "}
                  <br /> <br />
                  <FormInput
                    name="password"
                    type="password"
                    size="large"
                    label="Enter password"
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
