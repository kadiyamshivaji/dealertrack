import { constructPayload } from "../lib/util";
import axios from "axios";

export const submit = payload => {
  const token =
    "AAIkMjYxZWM2YWEtNmUzYy00YmRiLTg0NmMtMzBmMzYzZDFjNGZjMSphqKQTYdiF0zfBYZfPKru0fqMn0l1mYe7-OstzsF6785fRN7udYs7aA0V6pbp2SfS-FuprkXsp_3_jBywcIj_tARtdFLOt4yurOeWHjv1Cu1xQbXW-AyE3_WyGu0QerbjPaw1F3uZw0AgUADwNqlFtxujR36PkrBGn8dGZSgo";
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
