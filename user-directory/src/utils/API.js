import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = 

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
