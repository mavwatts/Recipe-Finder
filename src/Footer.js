import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'

const FooterPagePro = () => {
  return (
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#6351ce" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="getconnectedbar">
              <h4 className="social">
                Get connected with us on social networks!
              </h4>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className=" footernav">
        <MDBRow className="mt-3 rowcreator">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h4 className="text-uppercase font-weight-bold footernav">
              <strong>Menu Me</strong>
            </h4>
            <hr  />
            <p className ='paragraphwrapper'>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h4 className="text-uppercase font-weight-bold footernav">
              <strong>Products</strong>
            </h4>
            <hr />
            <p>
              <a href="#!">MDBootstrap</a>
            </p>
            <p>
              <a href="#!">MDWordPress</a>
            </p>
            <p>
              <a href="#!">BrandFlow</a>
            </p>
            <p>
              <a href="#!">Bootstrap Angular</a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h4 className="text-uppercase font-weight-bold footernav">
              <strong>Useful links</strong>
            </h4>
            <hr />
            <p>
              <a href="#!">Your Account</a>
            </p>
            <p>
              <a href="#!">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!">Shipping Rates</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h4 className="text-uppercase font-weight-bold footernav">
              <strong>Contact</strong>
            </h4>
            <hr />
            <p>
              <i className="fa fa-home mr-3" /> Mavrick Watts
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> Indianapolis, IN 46219, US
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> 317.691.XXXX
            </p>
           
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/mavwatts"> Mavrick Watts - Gitlab </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;