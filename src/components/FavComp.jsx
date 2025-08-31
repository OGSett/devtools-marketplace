import { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import Card from "./subComponents/Card";

const FavComp = () => {
  const { fullList } = useData();
  const [favList, setFavList] = useState([]);

  const computeFavs = () => {
    try {
      const raw = JSON.parse(localStorage.getItem("Favtools")) || [];
      const favIds = [...new Set(raw)].map(Number);
      const matched = fullList.filter(item => favIds.includes(Number(item.id)));
      setFavList(matched);
    } catch {
      setFavList([]);
    }
  };

  useEffect(() => {
    computeFavs();
  }, [fullList]);

  useEffect(() => {
    const onChange = () => computeFavs();
    window.addEventListener("favchange", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("favchange", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  return (
    <div className="tester h-dvh">
      {favList.length ? (
        favList.map(item => (
        <Card tool={item}/>
        ))
      ) : (
        <div className="flex justify-center"><p>No favorites yet</p></div>
      )}
    </div>
  );
};

export default FavComp;
