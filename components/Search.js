import { useState } from "react";

export default function Search() {
  const [selectedT, setSelectedT] = useState("2022-1");
  const [selectedS, setSelectedS] = useState("subject_nm");
  const [word, setWord] = useState("");

  const onChangeT = (e) => {
    setSelectedT(e.target.value);
  };
  const onChangeS = (e) => {
    setSelectedS(e.target.value);
  };
  const onChangeW = (e) => {
    setWord(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <select className="term_condition" onChange={onChangeT} value={selectedT}>
        <option value="2022-1">2022-1학기</option>
        <option value="2021-w">2021-겨울학기</option>
        <option value="2021-2">2021-2학기</option>
        <option value="2021-s">2021-여름학기</option>
        <option value="2021-1">2021-1학기</option>
      </select>
      <select
        className="select_condition"
        onChange={onChangeS}
        value={selectedS}
      >
        <option value="subject_nm" selected>
          교과목명
        </option>
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
      <style jsx>{`
        .container {
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
    </div>
  );
}
