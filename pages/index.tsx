import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [token, setToken] = useState<string>("");
  const [test, setTest] = useState<any>([]);
  const [broadId, setBroadId] = useState<string>("");
  const getTwitchData = async () => {
    const data = await axios.post(
      "https://id.twitch.tv/oauth2/token",
      {
        client_id: "zpvf08767pfij244bfl5jixs2v9yu8",
        client_secret: "aptkofmht0h3cpeo8bpxtsee4bnkvs",
        grant_type: "client_credentials",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    setToken(data.data.access_token);

    console.log("test", test);
  };
  useEffect(() => {
    console.log(test);
    getTwitchData();
  }, []);
  const [name, setName] = useState<string>("");
  const FindId = async () => {
    const usersdata = await axios.get(
      `https://api.twitch.tv/helix/users?login=${name}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Client-id": "zpvf08767pfij244bfl5jixs2v9yu8",
        },
      }
    );
    console.log("users", usersdata);
    setBroadId(usersdata.data.data[0].id);
  };

  const GetVideos = async () => {
    const users = await axios.get(
      `https://api.twitch.tv/helix/clips?broadcaster_id=${broadId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Client-id": "zpvf08767pfij244bfl5jixs2v9yu8",
        },
      }
    );

    setTest(users.data.data);
  };
  useEffect(() => {
    console.log("test", broadId);
    if (broadId) GetVideos();
  }, [broadId]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input value={name} onChange={(e: any) => setName(e.target.value)} />
      <button onClick={() => FindId()}>Testt</button>
      {test
        ? test.map((x: any, index: number) => {
            return (
              <iframe
                key={index}
                width="1904"
                height="772"
                src={`${x?.embed_url}&parent=my-app-navy-nu`}
                title="Test"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            );
          })
        : null}
    </div>
  );
};

export default Home;
