import { endpoints } from "./endpoints";
import API from "./commonAPI";

const getMovieByID = async (movieID) => {
  const res = await API.get(
    endpoints.getMovieByID(movieID),
  )
  if (res.error) throw res.error
  return res.data
}

export {
  getMovieByID,
}