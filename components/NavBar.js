import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <h2>UOSTime</h2>
      <Link href="/">
        <a>시간표</a>
      </Link>
      <Link href="/exchange">
        <a>강의교환</a>
      </Link>
      <Link href="/notice">
        <a>공지사항</a>
      </Link>
      <Link href="/myinfo">
        <a>내정보</a>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px lightgray solid;
        }
        nav a:hover {
          color: gray;
        }
        h2 {
          margin-left: 30px;
          margin-right: 20px;
        }
      `}</style>
    </nav>
  );
}
