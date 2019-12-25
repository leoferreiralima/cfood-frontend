import React, { useEffect, useState } from "react";
import api from "./../../services/api";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    api.get("/auth/profile/").then(response => {
      setUser(response.data);
    });
  }, []);
  return <div>{JSON.stringify(user)}</div>;
};

export default Dashboard;
