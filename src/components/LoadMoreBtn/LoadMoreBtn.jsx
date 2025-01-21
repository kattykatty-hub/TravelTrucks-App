import clsx from "clsx";
import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onPress }) => {
  return (
    <button
      type="button"
      onClick={onPress}
      className={clsx(style.loadMore, "button", "button-outline")}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
