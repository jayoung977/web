import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/Common.scss";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import axios from "axios";
// import StudentPage from "./pages/StudentPage";
// import PhotoPage from "./pages/PhotoPage";
import ProbStudent from "./pages/ProbStudent";

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    // getPhotos 함수 정의
    const getPhotos = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPhotos(res.data.slice(0, 10));
    };
    getPhotos(); //getPhotos 함수 실행
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/student/:name" element={<StudentPage />} />
          <Route path="/photos" element={<PhotoPage photos={photos} />} /> */}

          <Route path="/student/:name" element={<ProbStudent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
