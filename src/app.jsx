import * as React from "react";
import * as ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mycard from "./components/card";
import imgs from "./components/import_img";
import { Row, Col, Container, Toast } from "react-bootstrap";
import hitter from "./images/Hitter.jpg";
import MyNavbar from "./components/navbar";

let All_comp = () => {
     return (
          <>
               <MyNavbar></MyNavbar>
               <Container fluid className="w-100 p-3">
                    <Row
                         xs={1}
                         sm={1}
                         md={1}
                         lg={2}
                         xxl={3}
                         className="justify-content-around align-items-center w-100"
                    >
                         {imgs.map((el) => (
                              <Col>
                                   <Mycard
                                        title={el.title}
                                        url={el.url}
                                        link={el.link}
                                   ></Mycard>
                              </Col>
                         ))}
                    </Row>
                    <Toast>
                         <Toast.Header>
                              <img
                                   src={hitter}
                                   className="rounded-circle me-2"
                                   width={50}
                                   height={50}
                                   alt=""
                              />
                              <strong className="me-auto">HiTTER</strong>
                         </Toast.Header>
                         <Toast.Body>
                              I hope you like it! by Hitter &hearts;.
                         </Toast.Body>
                    </Toast>
               </Container>
          </>
     );
};
function render() {
     ReactDOM.render(
          <>
               {" "}
               <All_comp></All_comp>
          </>,
          document.querySelector("#root")
     );
}

render();
