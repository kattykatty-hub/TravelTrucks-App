import { useEffect } from "react";
import Container from "../../components/Container/Container";
import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page not found - TravelTrucks";
  }, []);
  return (
    <Container>
      <article className={style.notFoundPage}>
        <h1 className="font-h1" aria-label="404 error - Page not found">
          Page not found
        </h1>
        <p>Sorry, but the page you were looking for does not exist.</p>
      </article>
    </Container>
  );
};
export default NotFoundPage;
