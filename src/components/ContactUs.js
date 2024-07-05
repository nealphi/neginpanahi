import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { HStack, Stack, Text } from "@chakra-ui/react";
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
    <Stack className="form">
      <Stack>
        <Text  fontSize={42} color={"lightBlue"} mb={10}>
          LET'S GET IN TOUCH!
        </Text>
      </Stack>

      <form ref={form} onSubmit={sendEmail}>
        <Stack alignItems={"flex-start"} gap={10}>
          <HStack display={"flex"} justifyContent={"space-between"} gap={10}>
            <Stack alignItems={"flex-start"}>
              <label className="lable">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
              />
            </Stack>

            <Stack alignItems={"flex-start"}>
              <label className="lable">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your Email"
              />
            </Stack>
          </HStack>
          <Stack alignItems={"flex-start"} width={"100%"} mb={10}>
            <label className="lable">Message</label>
            <textarea name="message" />
            <input className="submit" type="submit" value="Send" />
          </Stack>
        </Stack>
      </form>
      <SocialMediaLinks />
    </Stack>
  );
};
