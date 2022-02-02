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
                         style={{ height: "700px", width: "28rem" }}
                         className="m-3 w-100 row justify-content-around bg-light border  shadow rounded-3"
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

                              <Button
                                   id="go"
                                   className="m-2 w-50"
                                   variant="success"
                              >
                                   {" "}
                                   <a
                                        href={props.link}
                                        className="text-light display-6 text-decoration-none "
                                        target={"_blank"}
                                   >
                                        {" "}
                                        Go
                                   </a>
                              </Button>
                         </Card.Body>
                    </Card>
               </motion.div>
          </React.Fragment>
     );
};
export default Mycard;
