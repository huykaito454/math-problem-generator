import axios from "axios";
import { API } from "../../config";
export default function requestGetTopics(grade) {
  return axios.get(API.getAPI("get-topics-by-grade"), {
    params: { grade: grade },
  });
}
