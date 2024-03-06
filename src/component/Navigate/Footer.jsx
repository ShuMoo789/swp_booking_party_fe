// Footer.jsx

import { MDBFooter, MDBIcon, MDBCol, MDBRow } from "mdb-react-ui-kit";
import "./Footer.scss";

export default function Footer() {
  return (
    <MDBFooter bgColor="info" className="text-center text-md-start text-muted">
      <section className="d-flex justify-content-center justify-content-md-space-around p-4 border-bottom">
        <div className="text-center-small text-start-medium">
          <MDBRow className="text-center text-md-start">
            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-4 content-right-margin"
            >
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                <MDBIcon icon="birthday-cake" className="me-3" />
                The Booking Party For Kids
              </h6>
              <p className="text-white">
                Crafting magical memories for kids, one birthday extravaganza at
                a time, where creativity takes flight and giggles are endless.
                Make every child's special day extraordinary with us.
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-4 content-right-margin text-center" // Thêm class text-center vào đây
            >
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                Plan Your Visit
              </h6>
              <p className="text-white">
                <a href="#!" className="text-reset">
                  Our Packages
                </a>
              </p>
              <p className="text-white">
                <a href="#!" className="text-reset">
                  Our Services
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4 content-right-margin"
            >
              <h6 className="text-uppercase fw-bold mb-4 text-white">
                Contact Us
              </h6>
              <p className="text-white">
                <MDBIcon
                  icon="home"
                  className="me-2"
                  style={{ paddingRight: "10px" }}
                />
                Luu Huu Phuoc, Dong Hoa, Di An, Binh Duong, Vietnam
              </p>
              <p className="text-white">
                <MDBIcon
                  icon="envelope"
                  className="me-3"
                  style={{ paddingRight: "5px" }}
                />
                bookingpartyforkids@gmail.com
              </p>
              <p className="text-white">
                <MDBIcon icon="phone" className="me-3" /> 0766710603
              </p>
            </MDBCol>
            <div className="text-center p-1">
              <div>
                <a href="http://facebook.com" className="me-4 text-reset">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="https://twitter.com" className="me-4 text-reset">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="https://instagram.com" className="me-4 text-reset">
                  <MDBIcon fab icon="instagram" />
                </a>
              </div>
            </div>
          </MDBRow>
        </div>
      </section>
    </MDBFooter>
  );
}
