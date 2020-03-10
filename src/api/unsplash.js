// all code relating to getting unsplash to accepting our request

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID VLtt6zbrGkAeClPX0837TbefhKAlFPywm5bWlGvTbPA"
  }
});
