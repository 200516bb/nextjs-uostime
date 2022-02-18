import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import Timetable from "../components/Timetable";

export default function Home({ data }) {
  const [term, setTerm] = useState("2022-A10");
  const [select, setSelect] = useState("subject_nm");
  const [word, setWord] = useState("");

  const onChangeT = (e) => {
    setTerm(e.target.value);
  };
  const onChangeS = (e) => {
    setSelect(e.target.value);
  };
  const onChangeW = (e) => {
    setWord(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>UOSTime</title>
      </Head>
      <div className="search-container">
        <select className="term_condition" onChange={onChangeT} value={term}>
          <option value="2022-A10">2022-1학기</option>
          <option value="2021-A21">2021-겨울학기</option>
          <option value="2021-A20">2021-2학기</option>
          <option value="2021-A11">2021-여름학기</option>
          <option value="2021-A10">2021-1학기</option>
        </select>
        <select
          className="select_condition"
          onChange={onChangeS}
          value={select}
        >
          <option value="subject_nm">교과목명</option>
          <option value="subject_no">교과번호</option>
          <option value="subject_div">교과구분</option>
          <option value="sub_dept">학부(과)</option>
          <option value="subject_div2">세부영역</option>
          <option value="prof_nm">담당교수</option>
          <option value="shyr">학년</option>
          <option value="credit">학점</option>
        </select>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            onChange={onChangeW}
          />
          <button type="submit">검색</button>
        </form>
      </div>
      <Timetable data={data} term={term} select={select} word={word} />
      <style jsx>{`
        .search-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
          padding: 10px;
          gap: 10px;
        }
        select {
          width: 100px;
          height: 30px;
        }
        form {
          display: flex;
          align-items: center;
        }
        input {
          width: 400px;
          height: 30px;
        }
        button {
          width: 100px;
          height: 30px;
          margin-left: 8px;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await (
    await fetch(
      "https://uostime.herokuapp.com/api/lectures?year=2022&term=A10&search_type=subject_nm"
    )
  ).json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
