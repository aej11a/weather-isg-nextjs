import Head from 'next/head'
import React from "react";
import {Header} from "../components/Header";

export default function Home() {
  return (
      <>
        <div className="page" style={{height: "80vh", display: "flex", alignItems: "center"}}>
          <Header/>
        </div>
        <footer>
          Site by <a href="https://github.com/aej11a">Andrew Jones</a>
          <br/>
          Powered by <a href="https://nextjs.org/">NextJS by Vercel</a>
        </footer>
      </>
  )
}
