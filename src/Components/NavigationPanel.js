import "../Css/NavigationPanel.css";
import { clickedMenuHome } from "../Database/Firebase";

export default function NavigationPanel({style}) {
  const pages = ["", "work", "about", "contact"];

  return (
    <>
      <div id="NavigationPanel" style={{animation: style}}>
        <nav className="links">
          {pages.map((page) => {
            if (page !== window.location.pathname.substring(1)) {
              if (page === "") {
                return (
                  <a href="/" key={page} className="pageLink" onClick={()=>console.log(1)}>
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
        </nav>
      </div>
    </>
  );
}
