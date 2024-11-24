import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>홈이에용</h1>
      <Outlet />
    </>
  );
}
