import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Home.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState({});

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setDatas(json.data.movie);
        setLoading(false);
      });
  }, [id]);

  console.log(datas);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <MovieDetail
          medium_cover_image={datas.medium_cover_image}
          title_long={datas.title_long}
          year={datas.year}
          rating={datas.rating}
          runtime={datas.runtime}
          genres={datas.genres}
          description={datas.description_full}
        />
      )}
    </div>
  );
}
export default Detail;
