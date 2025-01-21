import { Link } from "react-router-dom";
import style from "./HomePage.module.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Campers of your dreams - TravelTrucks";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Explore our extensive catalog of campers to find the vehicle of your dreams for your next adventure.";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <section className={style.homePage}>
      <article>
        <div className={style.titles}>
          <h1 className={`${style.title} font-h1`}>Campers of your dreams</h1>
          <h2 className="font-h2">
            You can find everything you want in our catalog
          </h2>
        </div>
        <p>
          <Link className="button button-action" to="/catalog">
            View now
          </Link>
        </p>
      </article>
    </section>
  );
};

export default HomePage;
