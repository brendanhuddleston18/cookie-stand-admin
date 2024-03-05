import Head from 'next/head'
export default function Header() {
    return (
      <header>
        <Head>
          <title>Cookie Stand Admin</title>
         </Head>
      <h1 className="p-8 text-4xl bg-purple-700 text-gray-50">Cookie Stand Admin</h1>
    </header>
    );
  }