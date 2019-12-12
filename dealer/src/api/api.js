import { constructPayload } from "../lib/util";
import axios from "axios";

export const submit = payload => {
  const token =
  "AAIkMjYxZWM2YWEtNmUzYy00YmRiLTg0NmMtMzBmMzYzZDFjNGZj8QhzO4z0tzKR4oLpzzK8BXz2jfqOBbXFAWf-elt555iYG_ilPSYYtd9qeXlgnDetZIHgZrbUzwSKoQE0IwtX_TmEv__CVRe6iWXqQ9sfjHkOyH8SaK2YoqmQpXXW4x7tsPEhEaI6QdOiXnIJo6wcu28dj3s-810-kkIZ0w65aFk";
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
      console.log(res);
      console.log(res.data);
    });
  return constructPayload(payload);
};
