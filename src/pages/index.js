import Head from "next/head";
import dynamic from "next/dynamic";

const ChatComponent = dynamic(() => import("../components/ChatComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-slate-300 flex items-center">
      <Head>
        <title>Realtime Chat App with Ably, NextJS and Vercel</title>
        <link
          rel="icon"
          href="https://static.ably.dev/motif-red.svg?nextjs-vercel"
          type="image/svg+xml"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="font-display w-[900px] m-auto rounded-xl overflow-hidden shadow-sm bg-white">
        <h1 className="title">Group Chat with OpenAI</h1>
        <ChatComponent />
      </main>

      <style jsx>{`
        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
          margin: 0;
          color: white;
          background: #005c97;
          background: -webkit-linear-gradient(to right, #363795, #005c97);
          background: linear-gradient(to right, #363795, #005c97);
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        [data-author="me"] {
          /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 0 !important;
          border-bottom-left-radius: 8px !important;
        }
      `}</style>
    </div>
  );
}
