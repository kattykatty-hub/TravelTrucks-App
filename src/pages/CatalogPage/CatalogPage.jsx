import { useLocation, useSearchParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import CampersList from "../../components/CampersList/CampersList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectCurrentPage,
  selectIsPageLoad,
  selectTotal,
  setCurrentPage,
  selectLoading,
  resetItems,
  selectError,
} from "../../redux/campersSlice";
import { fetchCampers } from "../../redux/campersOps";
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import {
  selectCurrentFilters,
  setCurrentFilters,
} from "../../redux/filtersSlice";
import { resolveFilterParams } from "../../helpers/filtersHelper";
import style from "./CatalogPage.module.css";
import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const currentFilters = useSelector(selectCurrentFilters);
  const currentPage = useSelector(selectCurrentPage);
  const total = useSelector(selectTotal);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isPageLoad = useSelector(selectIsPageLoad);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    document.title = "Campers catalog - TravelTrucks";

    const initialPage = Number(searchParams.get("page")) || 1;

    const filters = {
      location: searchParams.get("location") || "",
      form: searchParams.get("form") || null,
      equipment: searchParams.getAll("equipment") || [],
    };

    dispatch(setCurrentFilters(filters));
    dispatch(setCurrentPage(initialPage));

    dispatch(
      fetchCampers({
        ...resolveFilterParams(filters),
        page: 1,
        limit: 4 * initialPage,
      })
    );
  }, [dispatch, searchParams]);

  useEffect(() => {
    if (isPageLoad) {
      return;
    }

    dispatch(resetItems());
    dispatch(
      fetchCampers({
        ...resolveFilterParams(currentFilters),
        page: currentPage,
        limit: 4,
      })
    );

    updateSearchParams(currentFilters);
  }, [currentFilters, currentPage, dispatch, isPageLoad]);

  const updateSearchParams = useCallback(
    (currentFilters) => {
      const newSearchParams = {
        ...Object.fromEntries([...searchParams]),
      };

      if (currentPage > 1) {
        newSearchParams.page = currentPage;
      } else {
        delete newSearchParams.page;
      }

      if (currentFilters.location) {
        newSearchParams.location = currentFilters.location;
      } else {
        delete newSearchParams.location;
      }

      if (currentFilters.form) {
        newSearchParams.form = currentFilters.form;
      } else {
        delete newSearchParams.form;
      }

      if (currentFilters.equipment.length > 0) {
        newSearchParams.equipment = currentFilters.equipment;
      } else {
        delete newSearchParams.equipment;
      }

      setSearchParams(newSearchParams);
    },
    [searchParams, currentPage, setSearchParams]
  );

  const loadMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <Container>
      <div className={style.catalogPage}>
        <aside>
          <CatalogFilter />
        </aside>
        <main>
          {error && (
            <p className="error">No campers found with specified filters</p>
          )}
          {!error && (
            <>
              {campers.length > 0 && (
                <CampersList campers={campers} state={location} />
              )}
              {loading && <Loader />}
              {!loading && total > campers.length && (
                <div className={style.loadMoreBtn}>
                  <LoadMoreBtn onPress={loadMore} />
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </Container>
  );
};

export default CatalogPage;
