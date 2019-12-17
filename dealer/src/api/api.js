import { constructPayload } from "../lib/util";
import axios from "axios";

export const submit = payload => {
  const token =
  "AAIkMjYxZWM2YWEtNmUzYy00YmRiLTg0NmMtMzBmMzYzZDFjNGZjtAg9zV_Na0LvTfzojN-zc6oPLO_lI-jMBwQYeiqWchPTV41rKYsxT2U-jrrfQgLHisuSn2PSuNj3OeIS5zTPkfwxOkLBFGKpM5Vk5QY0TZZ9D4fdPSYhh7lv4GFh3d3x8NmR89lB4bPkeekJPkyaE7K_QrOqcCncLp-1gcbojsU";
  const payloadJSON = constructPayload(payload);
  axios
    .post(
      `https://fni-api-np.dealertrack.com/sfni/uat1/credit-application/v1/deals/credit-apps
    `,
      payloadJSON,
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
    )
    .then(res => {
      return res.data;
    });
};
