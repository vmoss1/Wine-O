import { fetchAllWines } from "../../store/wine";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function MainPage() {
  const dispatch = useDispatch();
  let allWines = useSelector((state) => state.wines.list);

  useEffect(() => {
    dispatch(fetchAllWines());
  }, [dispatch]);

  return (
    <>
      {allWines.map((wine) => (
        <h3 key={wine.id}>{wine.name}</h3>
      ))}
    </>
  );
}

export default MainPage;
