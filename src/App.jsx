import "./App.css";
import HomePage from "./pages/HomePage";
import GuestList from "./pages/GuestList";
import EventList from "./pages/EventList";
import CreateGuest from "./pages/CreateGuest";
import CreateEvent from "./pages/CreateEvent";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CustomNavbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/guests"
          element={
            <IsPrivate>
              <GuestList />
            </IsPrivate>
          }
        />
        <Route
          path="/guests/create"
          element={
            <IsPrivate>
              <CreateGuest />
            </IsPrivate>
          }
        />

        <Route
          path="/events"
          element={
            <IsPrivate>
              <EventList />
            </IsPrivate>
          }
        />
        <Route
          path="/events/create"
          element={
            <IsPrivate>
              <CreateEvent />
            </IsPrivate>
          }
        />

        <Route
          path="/auth/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/auth/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
