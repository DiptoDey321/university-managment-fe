import { Button } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
function NotFoundPage() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ height: "100vh" }}
          src="https://i.ibb.co/FK8SVwC/404-Error-Page-not-Found-with-people-connecting-a-plug-pana.png"
          alt=""
          srcSet=""
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Button
          type="primary"
          shape="round"
          icon={<RollbackOutlined />}
          // size={size}
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
