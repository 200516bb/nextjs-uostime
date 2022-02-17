import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Search from "../components/Search";

export default function Home() {
  return (
    <>
      <Head>
        <title>UOSTime</title>
      </Head>
      <Search />

      <style jsx>{``}</style>
    </>
  );
}
