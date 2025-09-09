import { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import requests from "../../utils/requests";
import axios from "../../utils/axios";

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);

        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url(
        //   "https://image.tmdb.org/t/p/original${movie?.backdrop_path}
        // )`,
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // height: 100 + "vh",
      }}
    >
      <div className={styles.banner__contents}>
        <h1 className={styles.banner__title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={styles.banner__buttons}>
          <button className={`${styles.banner__button} ${styles.play}`}>
            Play
          </button>
          <button className={styles.banner__button}>My List</button>
        </div>
        <h1 className={styles.banner__description}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={styles.banner__fadeBotton} />
    </div>
  );
};

export default Banner;
