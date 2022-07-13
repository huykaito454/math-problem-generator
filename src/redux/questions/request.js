import axios from "axios";
import { API } from "../../config";
export default function requestGetQuestion(data) {
  return axios.post(API.getAPI("question"), data);
}
