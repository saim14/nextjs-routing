import Head from "next/head";

export default function ProductPage() {
  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-4 ml-8">
        <h1 className="text-3xl">Product Page</h1>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </div>
    </>
  );
}
