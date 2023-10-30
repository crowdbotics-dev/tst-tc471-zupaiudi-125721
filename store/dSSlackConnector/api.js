import axios from "axios"
import {
  DSSLACKCONNECTOR1_PASSWORD,
  DSSLACKCONNECTOR1_USERNAME
} from "react-native-dotenv"
const dSSlackConnector = axios.create({
  baseURL: "https://api.spotify.com",
  auth: {
    username: DSSLACKCONNECTOR1_PASSWORD,
    password: DSSLACKCONNECTOR1_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dsslackconnector1_get_v1_albums_list(payload) {
  return dSSlackConnector.get(`/v1/albums`, {
    params: { ids: payload.ids, market: payload.market }
  })
}
export const apiService = { dsslackconnector1_get_v1_albums_list }
