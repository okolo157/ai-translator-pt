// import React from "react";

// export default function Homepage() {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("http://localhost:5000/homepage", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUserData(response.data.user);
//       } catch (error) {
//         toast.error("Failed to fetch user data");
//         localStorage.removeItem("token");
//         navigate('/');
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate('/');
//     toast.info("Logged out successfully");
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {userData && <p>Welcome, {userData.username}!</p>}
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }
import Navbar from "../components/Navbar";
import LanguageSelect from "../components/translator/LanguageSelect";
import Rating from "../components/translator/Rating";
import TranslateBox from "../components/translator/TranslateBox";
import VoiceTone from "../components/translator/VoiceTone";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
        }}
      >
        <LanguageSelect />
        <VoiceTone />
        <TranslateBox />
      </div>
    </div>
  );
}
