// Footer.jsx

import { MDBFooter, MDBIcon, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./Footer.scss";

export default function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-space-around p-4 border-bottom">
        <div className="text-center-small text-start-medium">
          <MDBRow
            className="text-center text-md-start"
            style={{ marginLeft: "50px" }}
          >
            <MDBCol
              md="3"
              lg="4"
              xl="3"
              className="mx-auto mb-4 content-right-margin"
            >
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "white" }}
              >
                <MDBIcon color="white" icon="birthday-cake" className="me-3" />
                The Booking Party For Kids
              </h6>
              <p style={{ color: "white" }}>
                Crafting unforgettable moments, one celebration at a time, where
                imagination knows no bounds and joy knows no limits.
              </p>
            </MDBCol>

            <MDBCol
              md="2"
              lg="2"
              xl="2"
              className="mx-auto mb-4 content-right-margin"
            >
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "white" }}
              >
                Products
              </h6>
              <p style={{ color: "white" }}>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p style={{ color: "white" }}>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p style={{ color: "white" }}>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p style={{ color: "white" }}>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="3"
              lg="2"
              xl="2"
              className="mx-auto mb-4 content-right-margin"
            >
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "white" }}
              >
                Useful links
              </h6>
              <p style={{ color: "white" }}>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p style={{ color: "white" }}>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p style={{ color: "white" }}>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p style={{ color: "white" }}>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4 content-right-margin"
            >
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "white" }}
              >
                Contact
              </h6>
              <p style={{ color: "white" }}>
                <MDBIcon
                  color="white"
                  icon="home"
                  className="me-2"
                  style={{ paddingRight: "10px" }}
                />
                Tầng 6 - Nhà Văn Hóa Hồ Chí Minh
              </p>
              <p style={{ color: "white" }}>
                <MDBIcon
                  color="white"
                  icon="envelope"
                  className="me-3"
                  style={{ paddingRight: "5px" }}
                />
                Booking4Kids@gmail.com
              </p>
              <p style={{ color: "white" }}>
                <MDBIcon color="white" icon="phone" className="me-3" /> + 01 234
                567 88
              </p>
            </MDBCol>
            <div className="text-center p-1" style={{ marginRight: "100px" }}>
              <div style={{ marginRight: "100px" }}>
                <a href="#" className="me-4 text-reset">
                  <MDBIcon color="white" fab icon="facebook-f" />
                </a>
                <a
                  href="https://www.facebook.com/phanngoc2213"
                  className="me-4 text-reset"
                >
                  <MDBIcon color="white" fab icon="twitter" />
                </a>
                <a
                  href="https://www.facebook.com/phanngoc2213"
                  className="me-4 text-reset"
                >
                  <MDBIcon color="white" fab icon="google" />
                </a>
                <a
                  href="https://www.facebook.com/phanngoc2213"
                  className="me-4 text-reset"
                >
                  <MDBIcon color="white" fab icon="instagram" />
                </a>
                <a
                  href="https://www.facebook.com/phanngoc2213"
                  className="me-4 text-reset"
                >
                  <MDBIcon color="white" fab icon="linkedin" />
                </a>
                <a
                  href="https://www.facebook.com/phanngoc2213"
                  className="me-4 text-reset"
                >
                  <MDBIcon color="white" fab icon="github" />
                </a>
              </div>
            </div>
          </MDBRow>
        </div>
      </section>
    </MDBFooter>
  );
}
