import axios from "axios";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  /**
   * 고유 아이디 : 315162
   */
  id: number;
  /**
   * 배경으로 사용 할 수 있는 이미지파일 주소(사이즈가 큼) : "/r9PkFnRUIthgBp2JZZzD380MWZy.jpg"
   */
  backdrop_path: string;
  /**
   * 포스터로 사용 할 수 있는 이미지파일 주소(사이즈가 작음) : "/rKgvctIuPXyuqOzCQ16VGdnHxKx.jpg"
   */
  poster_path: string;
  /**
   * 영화 제목 : "장화신은 고양이: 끝내주는 모험"
   */
  title: string;
  /**
   * 영화 줄거리 : "그리고 소원별을 노리는 또 다른 빌런들과 마주치게 되는데…"
   */
  overview: string;
}

export interface IGetMoviesResult {
  /**
   * 데이터 조회 날짜
   */
  dates: {
    /**
     * 조회 종료일 : "2023-02-08"
     */
    maximum: string;
    /**
     * 조회 시작일 : "2023-01-18"
     */
    minimum: string;
  };
  /**
   * 데이터 페이지 넘버 : 1
   */
  page: number;
  /**
   * 조회된 영화데이터 결과 interface IMovie 참고
   */
  results: IMovie[];
  /**
   * API가 가지고 있는 총 데이터 페이지 넘버 : 21
   */
  total_pages: number;
  /**
   * API가 가지고 있는 총 데이터 넘버 : 413
   */
  total_results: number;
}

async function getApiData(url: string) {
  const { data: getMoviesResult } = await axios.get(
    `${BASE_PATH}${url}?api_key=${API_KEY}&page=1&language=ko-KR`
  );
  return getMoviesResult;
}

export default getApiData;
