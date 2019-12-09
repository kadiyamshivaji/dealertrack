import { constructPayload } from "../lib/util";
import axios from "axios";
let token;
export const getToken = () => {
  axios
    .post(
      `https://fni-api-np.dealertrack.com/sfni/uat1/oauth2/token`,
      {
        grant_type: "client_credentials",
        client_id: "261ec6aa-6e3c-4bdb-846c-30f363d1c4fc",
        client_secret: "N7oH5wG2tV3fS0aU4nM7gV3uM6mP7aQ1wC7tP6gV1eQ2pX8vK8",
        scope: "sdeals-write"
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then(res => {
      token = res.data.access_token;
    });
};
export const submit = payload => {
  // const token =
  //   "AAIkMjFmODBhMjctOTdkMS00M2VhLWJjZjgtYzJkNjRjMjBkOTFibE_rDxXaNJqThjNlvChcVh0aT439fXv6WUVEvQdJsZtj2FeCoazhr7KsHBm0EONwegEYO-ONvjGZ3pcduC86nhYBpTSs1sMEx5y8wp0_tLooFCJbfaG-oTVIWQ_4Qpmh3vCYjxzk5ZNjCSLx2GglvXECopx3qSEo-bSCeRDw0CM";
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
