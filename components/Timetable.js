export default function Timetable({ data, term, select, word }) {
  console.log(data);
  return (
    <div className="timetable">
      <table>
        <thead>
          <tr>
            <th>학부(과)</th>
            <th>교과번호</th>
            <th>분반</th>
            <th>교과목명</th>
            <th>학점</th>
            <th>담당교수</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((lecture) => (
            <tr>
              <td>{lecture.sub_dept}</td>
              <td>{lecture.subject_no}</td>
              <td>{lecture.class_div}</td>
              <td>{lecture.subject_nm}</td>
              <td>{lecture.credit}</td>
              <td>{lecture.prof_nm}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .timetable {
          display: flex;
          justify-content: center;
          margin: 10px;
          overflow-y: auto;
          border-radius: 10px;
          border: 1px lightgray solid;
          width: 800px;
          height: 400px;
          font-size: 14px;
        }
        th {
          padding-top: 10px;
          padding-bottom: 10px;
          position: sticky;
          top: 0;
          background-color: white;
          border-bottom: 1px lightgray solid;
        }
        tbody {
          overflow-y: scroll;
        }
        td {
          text-align: center;
          padding-top: 4px;
          padding-bottom: 4px;
        }
      `}</style>
    </div>
  );
}
