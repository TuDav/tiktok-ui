import Header from "~/components/Layout/components/Header";


function DdefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DdefaultLayout;
