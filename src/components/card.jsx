import React from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
let Mycard = (props) => {
     return (
          <React.Fragment>
               <motion.div
                    initial={{ x: -600, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                         delay: 1.3,
                         duration: 0.7,
                         type: "spring",
                         stiffness: 100,
                    }}
               >
                    <Card
                         style={{ height: "700px", width: "30rem" }}
                         className="m-2 row justify-content-around bg-light border  shadow rounded-3"
                    >
                         <Card.Img
                              variant="top"
                              src={props.url}
                              className="w-100 h-50"
                         />
                         <Card.Body className="p-5 d-flex flex-column align-items-center justify-content-around ">
                              <Card.Title className=" m-2 display-5 text-dark">
                                   {props.title}
                              </Card.Title>
                              <a
                                   href={props.link}
                                   style={{
                                        display: "inline",
                                        width: "7em",
                                        height: "2em",
                                   }}
                                   className="text-light display-6 text-decoration-none "
                                   target={"_blank"}
                              >
                                   <Button
                                        id="go"
                                        className="m-2 w-100"
                                        variant="success"
                                   >
                                        {" "}
                                        Go
                                   </Button>
                              </a>
                         </Card.Body>
                    </Card>
               </motion.div>
          </React.Fragment>
     );
};
export default Mycard;
