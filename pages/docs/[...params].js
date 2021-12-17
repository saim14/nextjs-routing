import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 1) {
    return (
      <div className="mt-4 ml-8">
        <Head>
          <title>Doc Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-3xl">Doc for feature {params[0]}</h1>
      </div>
    );
  }

  if (params.length === 2) {
    return (
      <div className="mt-4 ml-8">
        <Head>
          <title>Doc Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-3xl">
          Doc for feature {params[0]} and concept {params[1]}
        </h1>
      </div>
    );
  } else {
    return (
      <>
        <Head>
          <title>Doc Home Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="mt-4 ml-8">
          <h1 className="text-3xl">Doc Home Page</h1>
        </div>
      </>
    );
  }
}
