import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function JobContainer() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/job/") {
      navigate("/404");
    }
  }, []);

  return <Outlet />;
}
