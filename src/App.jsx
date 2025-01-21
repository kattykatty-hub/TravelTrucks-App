import { Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Loader from "./components/Loader/Loader";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CamperDetailsPage from "./pages/CamperDetailsPage/CamperDetailsPage";
import CamperFeatures from "./components/CamperFeatures/CamperFeatures";
import CamperReviews from "./components/CamperReviews/CamperReviews";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:camperId" element={<CamperDetailsPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
