import { constructPayload } from "../lib/util";
import axios from "axios";

export const submit = payload => {
  const token =
  "AAIkMjYxZWM2YWEtNmUzYy00YmRiLTg0NmMtMzBmMzYzZDFjNGZj96JMPHE5f8K9FxyJduj1k3KfyIRYKD0fRUkzu_F6SJmOTvJ7M3agRB-8g6sEZ1SRhiM8BIyzr21scB7eVkKchbN0j2RDAjU6bb-5h8ip8shvGMeFDzzZHjJ9fTaS6CylBl3jCFFUtByMqQzdt56hq3sfJ9XCJeRSkPl2jjMmpfs";
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
