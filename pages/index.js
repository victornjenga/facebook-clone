import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Login from "./login";
import { getSession } from "next-auth/react";

import { useSession, signIn, signOut } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { db } from "../firebase";
import Widgets from "../components/Widgets";

export default function Home() {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <div className="h-screen bg-gray-100 overflow-hidden">
        <Head>
          <title>Social App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="flex">
          <Sidebar />
          <Feed />
          <Widgets />
        </main>
      </div>
    );
  } else {
    return (
      <div className="grid place-items-center">
        <Image
          src="https://links.papareact.com/t4i"
          height={400}
          width={400}
          objectFit="contain"
          alt="/"
        />
        <h1
          onClick={signIn}
          className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer "
        >
          Login with Google
        </h1>
      </div>
    );
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => {
    return {
      id: post.id,
      ...post.data(),
      timestamp: null,
    };
  });
  return {
    props: {
      session,
    },
  };
};
