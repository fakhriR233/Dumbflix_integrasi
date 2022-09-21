import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AdminAddMovies from "./Pages/AdminAddMovies";
import HomeScreen from "./Components/Home/HomeScreen";
import Profil from "./Components/Profil/Profil";
import Payment from "./Components/Payment/Payment";
import ListTransactions from "./Components/ListTransactions/ListTransactions";
import TVShows from "./Components/TVShows/TVShows";
import Movies from "./Components/Movies/Movies";
import MoviesDetails from "./Components/Details/MoviesDetails";
//import AdminTransaction from "./Pages/AdminTransaction";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddListPage from "./Components/AddListPage/AddListPage";
import AddEpisode from "./Components/AddEpisode/AddEpisode";
import AdminMovieDetails from "./Components/DetailsAdmin/AdminMovieDetails";
import AdminTVDetails from "./Components/DetailsAdmin/AdminTVDetails";
import { API, setAuthToken } from "./config/api";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  let Navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  console.log(state);

  useEffect(() => {
    if (state.isLogin === false) {
      Navigate("/");
    } else {
      if (state.user.status === "admin") {
        Navigate("/listtransactions");
      } else if (state.user.status === "user") {
        Navigate("/");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      };
      const response = await API.get("/check-auth", config);

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }
      console.log(response);

      let payload = response.data.data;
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/tvshows" exact element={<TVShows />} />
        <Route path="/movies" exact element={<Movies />} />
        <Route path="/moviesdetails/:id" exact element={<MoviesDetails />} />
        <Route
          path="/moviesdetails/episode/:id"
          exact
          element={<MoviesDetails />}
        />
        <Route path="/profile" element={<Profil />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/listtransactions" element={<ListTransactions />} />
        <Route path="/addmovies" element={<AdminAddMovies />} />
        {/* <Route path="/admintransaction" element={<AdminTransaction />} /> */}
        <Route path="/addlistpage" element={<AddListPage />} />
        <Route path="/addepisode" element={<AddEpisode />} />
        <Route path="/adminmoviedetails/:id" element={<AdminMovieDetails />} />
        <Route path="/admintvdetails/:id" element={<AdminTVDetails />} />
      </Routes>
    </>
  );
}

export default App;
