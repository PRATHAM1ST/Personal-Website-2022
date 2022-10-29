import { useState } from "react";
import { useEffect } from "react";
import ColourPicker from "../Components/ColourPicker";
import FontFamily from "../Components/FontFamily";
import FontSize from "../Components/FontSize";
import FontWeight from "../Components/FontWeight";
import Gap from "../Components/Gap";
import Height from "../Components/Height";
import "../Css/Admin.css";
import { checkAdmin, signin } from "../Database/Firebase";

export default function Admin() {
  const [admin, setAdmin] = useState();

  useEffect(() => {
    async function cool() {
      await setAdmin(checkAdmin());
    }
    cool();
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    signin(fd.get("username"), fd.get("password"));
  };

  return (
    <>
      <div id="Admin">
        <div className="dashboard">
          <div className="stats">
            <div className="stat-card">
              <div className="stat-title">Today's Visit</div>
              <div className="stat-number">{10}</div>
            </div>
            <div className="stat-card">
              <div className="stat-title">Total's Visit</div>
              <div className="stat-number">{1000}</div>
            </div>
          </div>
          <div className="cards">

            <div className="card">
              <div className="card-title">Colors</div>
              <div className="card-properties">
                <div className="colour-properties">
                  <ColourPicker colour="#e2e2e5" title="--primary-clr" />
                  <ColourPicker colour="#1b1b1b" title="--secondary-clr" />
                  <ColourPicker colour="#868687" title="--ternary-clr" />
                  <ColourPicker colour="#ffffff" title="--quaternary-clr" />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Font type</div>
              <div className="card-properties">
                <FontFamily current="Montserrat" type="--font-family"/>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Font Sizes</div>
              <div className="card-properties">
                <FontSize type="--fs-small" current="0.6vmax"/>
                <FontSize type="--fs-compact" current="0.8vmax"/>
                <FontSize type="--fs-regular" current="1.1vmax"/>
                <FontSize type="--fs-medium" current="1.75vmax"/>
                <FontSize type="--fs-big" current="2.4vmax"/>
                <FontSize type="--fs-large" current="3.15vmax"/>
                <FontSize type="--fs-title" current="4.2vmax"/>
                <FontSize type="--fs-hero-title" current="10vmax"/>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Font Weights</div>
              <div className="card-properties">
                <FontWeight current="300" type="--fw-light" />
                <FontWeight current="400" type="--fw-normal" />
                <FontWeight current="600" type="--fw-medium" />
                <FontWeight current="900" type="--fw-bold" />
              </div>
            </div>

            <div className="card">
              <div className="card-title">Side Margins</div>
              <div className="card-properties">
                <Gap current="50px" type="--margin"/>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Height</div>
              <div className="card-properties">
                <Height current="15vh" type="--navigation-height"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <form className="admin-login" onSubmit={handleLoginSubmit}>
            <div className="inputfield">
              <label htmlFor="username">Username</label>
              <input id="username" name="username" type="email" required />
            </div>
            <div className="inputfield">
              <label htmlFor="username">Password</label>
              <input id="password" name="password" type="password" required />
            </div>
            <button type="submit">Submit</button>
          </form> */
}
