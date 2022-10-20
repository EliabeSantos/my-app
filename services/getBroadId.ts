import axios from "axios";

interface GetBrad {
  streamerName: string;
  token: string;
}

export const GetBroad = async ({ streamerName, token }: GetBrad) => {
  const data = await axios.get(
    `https://api.twitch.tv/helix/users?login=${streamerName}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Client-id": process.env.NEXT_PUBLIC_CLIENTID,
      },
    }
  );
  return data.data;
};
