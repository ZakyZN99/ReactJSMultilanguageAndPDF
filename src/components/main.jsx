import { Col, Row } from "react-bootstrap";
import manulifeImg from "../assets/img/Manulife.png";
import factSheetImg from "../assets/img/FactSheet.png";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

export const MultiLanguage = () => {
  const [t, setTranslate] = useTranslation("translate");
  const navigate = useNavigate();

  const printToPdf = (lng) => {
    setTranslate.changeLanguage(lng);
    const input = document.getElementById("manulifeData");

    html2canvas(input, { scale: 1.5 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      pdf.save("manulife.pdf");
      navigate("../");
    });
  };

  useEffect(() => {
    printToPdf();
  });

  return (
    <div className="manulifeData" id="manulifeData">
      <Row>
        <Col className="img-header">
          <img
            src={manulifeImg}
            alt="Manulife"
            className="img-header-manulife"
          />
          <img
            src={factSheetImg}
            alt="FactSheetImg"
            className="img-header-factsheet"
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 0, offset: 1 }} sm={7}>
          <div className="manulife-title">MANULIFE DANA BERIMBANG</div>
        </Col>
        <Col md={{ span: 0, offset: 1 }} sm={3}>
          <div className="date-info">OCT 2023</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="main-title">{t("header.IO")}</h2>
          <p className="main-paragraph">{t("body.IO")}</p>
        </Col>
        <Col>
          <h2 className="main-title">{t("header.RC")}</h2>
          <p className="main-paragraph">{t("body.RC")}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="main-title">{t("header.FI")}</h2>
          <div className="main-paragraph">
            <tr>
              <td>{t("body.FI.inceptionDate")}</td>
              <td>:</td>
              <td>9 Jul 07</td>
            </tr>
            <tr>
              <td>{t("body.FI.inceptionPrice")}</td>
              <td>:</td>
              <td>IDR 1,000.00</td>
            </tr>
            <tr>
              <td>{t("body.FI.fundSize")}</td>
              <td>:</td>
              <td>Rp 133.82 {t("etc.billion")}</td>
            </tr>
            <tr>
              <td>{t("body.FI.unitNum")}</td>
              <td>:</td>
              <td>57,263,044.56</td>
            </tr>
            <tr>
              <td>{t("body.FI.netAssetVal")}</td>
              <td>:</td>
              <td>IDR 2,336.93</td>
            </tr>
            <tr>
              <td>{t("body.FI.fundCurr")}</td>
              <td>:</td>
              <td>IDR</td>
            </tr>
            <tr>
              <td>{t("body.FI.fundType")}</td>
              <td>:</td>
              <td>{t("etc.balanced")}</td>
            </tr>
            <tr>
              <td>{t("body.FI.valuation")}</td>
              <td>:</td>
              <td>{t("etc.daily")}</td>
            </tr>
            <tr>
              <td>{t("body.FI.custodianBank")}</td>
              <td>:</td>
              <td>Bank DBS Indonesia</td>
            </tr>
            <tr>
              <td>{t("body.FI.AMF")}</td>
              <td>:</td>
              <td>2%</td>
            </tr>
            <tr>
              <td>{t("body.FI.BC")}</td>
              <td>:</td>
              <td>MLLDBBG IJ</td>
            </tr>
            <tr>
              <td>{t("body.FI.FM")}</td>
              <td>:</td>
              <td>PT Manulife Aset Manajemen Indonesia</td>
            </tr>
          </div>
        </Col>
        <Col>
          <Row>
            <Col>
              <h2 className="main-title">{t("header.Allocation")}</h2>
              <div className="main-paragraph">
                <tr>
                  <td>{t("body.Allocation.equity")}</td>
                  <td>:</td>
                  <td>40 - 60 %</td>
                </tr>
                <tr>
                  <td>{t("body.Allocation.bond")}</td>
                  <td>:</td>
                  <td>40 - 60 %</td>
                </tr>
                <tr>
                  <td>{t("body.Allocation.MM")}</td>
                  <td>:</td>
                  <td>0 - 20 %</td>
                </tr>
              </div>
            </Col>
            <Col>
              <h2 className="main-title">{t("header.Portofolio")}</h2>
              <div className="main-paragraph">
                <tr>
                  <td>{t("body.Portofolio.equity")}</td>
                  <td>:</td>
                  <td>44.73%</td>
                </tr>
                <tr>
                  <td>{t("body.Portofolio.GB")}</td>
                  <td>:</td>
                  <td>52.32%</td>
                </tr>
                <tr>
                  <td>{t("body.Portofolio.CB")}</td>
                  <td>:</td>
                  <td>0.00%</td>
                </tr>
                <tr>
                  <td>{t("body.Portofolio.MM")}</td>
                  <td>:</td>
                  <td>2.95%</td>
                </tr>
              </div>
            </Col>
          </Row>
          <Row>
            <h2 className="main-title">{t("header.Note")}</h2>
            <div className="main-paragraph-number">
              <p>{t("body.note.1")}</p>
              <p>{t("body.note.2")}</p>
              <p>{t("body.note.3")}</p>
              <p>{t("body.note.4")}</p>
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <h2 className="main-title-IMC">{t("header.IMC")}</h2>
        <div className="line-space"></div>
        <p className="main-paragraph-IMC">{t("body.IMC")}</p>
      </Row>
      <Row>
        <div className="main-paragraph-disclaimer">
          <span style={{ fontWeight: "bold" }}>{t("etc.disclaimer")}</span>
          {t("body.disclaimer")}
        </div>
      </Row>
      <Row>
        <div className="about-company">
          <h5 className="main-company-title">Manulife Indonesia</h5>
          <div className="main-company-paragraph">
            <p>{t("footer.aboutus")}</p>
            <p>{t("footer.followus")}</p>
          </div>
        </div>
        <div className="space"></div>
      </Row>
      <Row className="manulife-footer">
        <Col>
          <img alt="Manulife Web" />
        </Col>
        <Col>
          <img alt="Manulife Facebook" />
        </Col>
        <Col>
          <img alt="Manulife X" />
        </Col>
        <Col>
          <img alt="Manulife Instagram" />
        </Col>
        <Col>
          <img alt="Manulife Youtube" />
        </Col>
      </Row>
    </div>
  );
};
