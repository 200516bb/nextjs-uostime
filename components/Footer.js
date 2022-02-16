import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Link href="https://www.uos.ac.kr/">
            <a target="_blank">서울시립대학교 </a>
          </Link>
          | Contact | Contributors | 이용약관 | 개인정보처리방침
        </div>
        <div>서울시립대학교 시간표 관리 서비스 UOSTIME UOSTIME © 2020</div>
      </div>
      <style jsx>{`
        footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          display: flex;
          text-align: center;
          flex-direction: column;
          font-size: 12px;
          padding-top: 20px;
          padding-bottom: 20px;
          border-top: 1px lightgray solid;
        }
        a:hover {
          color: gray;
        }
      `}</style>
    </footer>
  );
}
