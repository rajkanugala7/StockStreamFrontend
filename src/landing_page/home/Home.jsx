import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      } else {
        try {
          const { data } = await axios.post(
            "http://localhost:8080",
            {},
            { withCredentials: true }
          );
          const { status, user } = data;
          if (status) {
            setUsername(user);
            toast(`Hello ${user}`, {
              position: "top-right",
            });
            // Redirect to the dashboard if logged in successfully
            window.location.href = "http://localhost:5174/"; // External URL for dashboard
          } else {
            removeCookie("token");
            navigate("/login");
          }
        } catch (error) {
          removeCookie("token");
          navigate("/login");
        }
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <>
      <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
