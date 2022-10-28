import "../Css/NavigationPanel.css";

export default function NavigationPanel({style}) {
  const pages = ["", "work", "about", "contact"];

  return (
    <>
      <div id="NavigationPanel" style={{animation: style}}>
        <div className="links">
          {pages.map((page) => {
            if (page !== window.location.pathname.substring(1)) {
              if (page === "") {
                return (
                  <a href="/" key={page} className="pageLink">
                    home
                  </a>
                );
              }
              return (
                <a href={page} key={page} className="pageLink">
                  {page}
                </a>
              );
            }
            return ""
          })}
        </div>
      </div>
    </>
  );
}
