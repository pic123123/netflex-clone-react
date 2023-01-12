import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import getApiData, { IGetMoviesResult } from "../api";

// interface IMoviesUseLoadData {
//   nowPlayingData: IGetMoviesResult;
//   upcomingData: IGetMoviesResult;
// }

// export async function movieLoader() {
//   const nowPlayingData: IGetMoviesResult = await getApiData(
//     "/movie/now_playing1"
//   );
//   const upcomingData: IGetMoviesResult = await getApiData("/movie/upcoming");
//   return { nowPlayingData, upcomingData };
// }

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Movie() {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlayingResult, setNowPlayingResult] = useState<IGetMoviesResult>({
    dates: {
      maximum: "",
      minimum: "",
    },
    page: 0,
    results: [
      { id: 0, backdrop_path: "", poster_path: "", title: "", overview: "" },
    ],
    total_pages: 0,
    total_results: 0,
  });
  const [upcomingResult, setUpcomingResult] = useState<IGetMoviesResult>({
    dates: {
      maximum: "",
      minimum: "",
    },
    page: 0,
    results: [
      { id: 0, backdrop_path: "", poster_path: "", title: "", overview: "" },
    ],
    total_pages: 0,
    total_results: 0,
  });

  useEffect(() => {
    const initGetData = async () => {
      const nowPlayingResult: IGetMoviesResult = await await getApiData(
        "/movie/now_playing"
      );
      const upcomingData: IGetMoviesResult = await getApiData(
        "/movie/upcoming"
      );
      setNowPlayingResult(nowPlayingResult);
      setUpcomingResult(upcomingData);
      setIsLoading(false);
    };

    initGetData();
  }, []);

  // const result = useLoaderData() as IMoviesUseLoadData;
  // const nowPlayingData: IGetMoviesResult = result.nowPlayingData;
  // const upcomingData: IGetMoviesResult = result.upcomingData;

  return (
    <div>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <div>{nowPlayingResult.results[0].backdrop_path}</div>
          <div>{upcomingResult.results[0].overview}</div>
        </>
      )}
    </div>
  );
}

export default Movie;
