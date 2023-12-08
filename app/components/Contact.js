"use client";

import React from "react";
import ContactBanner from "../../public/img/contact.gif";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [name, setName] = React.useState("");

  const [message, setMessage] = React.useState("");

  const [isSent, setIsSent] = React.useState(false);

  return (
    <div id="contact">
      <h1 className="text-center text-3xl">Contact</h1>
      <div className="max-w-5xl flex sm:flex-row flex-col  justify-between mx-auto my-8 px-6 sm:px-0 ">
        <Image
          src={ContactBanner}
          alt="contact"
          className="w-2/3 object-contain"
          priority
        />
        <div className="w-full sm:w-1/2 space-y-4">
          <Input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            cols="30"
            rows="10"
            placeholder="Message..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button
            className="w-full"
            onClick={() => {
              setName("");
              setMessage("");
              setIsSent(true);
            }}
          >
            Send Message
          </Button>
          {isSent && (
            <div className="text-center text-green-500">
              <p>Message Sent!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
