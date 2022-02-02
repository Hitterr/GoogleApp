import React from "react";
import { Navbar, Container } from "react-bootstrap";
import google from "./../images/google.png";
import { motion } from "framer-motion";
let MyNavbar = () => {
     return (
          <>
               <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
               >
                    <Navbar
                         bg="dark"
                         variant="dark"
                         style={{ height: "100px" }}
                    >
                         <Container>
                              <Navbar.Brand
                                   className="h-100"
                                   href="#home"
                                   className="d-flex flex-row justify-content-around align-items-center"
                              >
                                   <img
                                        alt=""
                                        src={google}
                                        width="60"
                                        height="60"
                                        className="d-inline-block align-top "
                                   />{" "}
                                   <h1 className="display-6 d-inline m-3">
                                        Google App
                                   </h1>
                              </Navbar.Brand>
                         </Container>
                    </Navbar>
               </motion.div>
          </>
     );
};
export default MyNavbar;
