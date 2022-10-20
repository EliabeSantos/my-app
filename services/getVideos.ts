import axios from "axios";
import moment from "moment";

interface GetVid {
  broadId: string;
  token: string;
}

export const Videos = async ({ broadId, token }: GetVid) => {
  const data = await axios.get(
    `https://api.twitch.tv/helix/clips?broadcaster_id=${broadId}&started_at=${moment()
      .subtract(1, "day")
      .format()}&ended_at=${moment().format()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Client-id": process.env.NEXT_PUBLIC_CLIENTID,
      },
    }
  );
  return data.data;
};
