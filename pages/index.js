import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Table />
      <Footer />
     
    </>
  );
}

function Header() {
  return (
    <header>
      <Head>
        <title>Cookie Stand Admin</title>
       </Head>
    <h1 className="p-8 text-4xl bg-purple-700 text-gray-50">Cookie Stand Admin</h1>
  </header>
  );
}

function Main() {
  return (
    <main className="flex flex-col items-center justify-center w-1/2 p-8 m-8 mx-auto bg-purple-300 rounded-md">
    <h2>Create Cookie Stand</h2>
    <div className="flex flex-auto gap-2">
      <p>Location</p>
      <form>
        <input type="text"/>
      </form>
    </div>
    <div className="flex gap-6">
      <Form title="Minimum Customers per Hour" />
      <Form title="Maximum Customers per Hour" />
      <Form title="Average Cookies per Sale" />
      <button className="p-4 bg-purple-800 text-gray-50">Create</button>
    </div>
  </main>
  );
}

function Footer() {
  return (
    <footer className="p-6 bg-purple-700 text-gray-50">
      <p>&copy;{ new Date().getFullYear() }</p>
    </footer>
  );
}

function Form(props) {
  return (
    <div className="flex flex-col items-center">
      <p>{props.title}</p>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

function Table() {
  return (
    <div className="flex justify-center">
      <h2 className="m-4 text-2xl">Report Table Coming soon...</h2>
    </div>
  );
}