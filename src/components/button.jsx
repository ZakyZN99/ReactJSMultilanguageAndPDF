import { Button } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import ReactDOM from "react-dom/client";
import { Link, Outlet, useNavigate } from 'react-router-dom';

export const ButtonPage = () => {
  const [t, setTranslate] = useTranslation("translate");
  const [loader, setLoader] = useState(false);

  const enLanguage = ReactDOM.createRoot(document.getElementById("root"));

  const navigate = useNavigate();

  const handleChangeLanguage = (lng) => {
    setTranslate.changeLanguage(lng);
    navigate('./main')
};

  return (
    <div className="">
      <h5>Klik Tombol untuk Download</h5>
      <Button
       variant="primary" onClick={() => handleChangeLanguage("en")} >
        {loader ? <span>Downloading...</span> : <span>EN MANULIFE</span>}
      </Button>
      <br/>
      <br />
      <Button variant="warning" onClick={() => handleChangeLanguage("id")}>
        {loader ? <span>Downloading...</span> : <span>ID MANULIFE</span>}
      </Button>
      <br />
      <Outlet/>
    </div>
  );
};
