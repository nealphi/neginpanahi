import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Flex, Text } from "@chakra-ui/react";
import SocialMediaLinks from "./SocialMediaLinks";
export const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o0lp69a", "template_p55uo0i", form.current, {
        publicKey: "LTrQmZedVx_aWXvH_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="form">
      <Text fontSize={["26px","32", "38px"]} color={"lightBlue"} mb={10}>
        LET'S GET IN TOUCH!
      </Text>

        <form ref={form} onSubmit={sendEmail}>
          <div className="login">
            <input type="text" name="user_name" placeholder="Enter your name" />

            <input
              type="email"
              name="user_email"
              placeholder="Enter your Email"
            />
          </div>

          <div className="text-aria">
            <textarea name="message" placeholder="Type your message here..." />
            <input className="submit" type="submit" value="Send" />
          </div>
        </form>

      <SocialMediaLinks />
    </div>
  );
};
