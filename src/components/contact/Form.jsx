"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import ItemLayout from "../about/ItemLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const sendEmail = (params) => {
  //   const toastId = toast.loading("Sending your message, please wait...");

  //   // toast.info(
  //   //   "Form submissions are demo-only here. Please checkout the final code repo to enable it. If you want to connect you can reach out to me via codebucks27@gmail.com.",
  //   //   {
  //   //     id: toastId,
  //   //   }
  //   // );

  //   // comment out the above toast.info and uncomment the below code to enable emailjs

  //   // emailjs
  //   //   .send(
  //   //     process.env.NEXT_PUBLIC_SERVICE_ID,
  //   //     process.env.NEXT_PUBLIC_TEMPLATE_ID,
  //   //     params,
  //   //     {
  //   //       publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
  //   //       limitRate: {
  //   //         throttle: 5000, // you can not send more then 1 email per 5 seconds
  //   //       },
  //   //     }
  //   //   )
  //   //   .then(
  //   //     () => {
  //   //       toast.success(
  //   //         "I have received your message, I will get back to you soon!",
  //   //         {
  //   //           id: toastId,
  //   //         }
  //   //       );
  //   //     },
  //   //     (error) => {
  //   //       // console.log("FAILED...", error.text);
  //   //       toast.error(
  //   //         "There was an error sending your message, please try again later!",
  //   //         {
  //   //           id: toastId,
  //   //         }
  //   //       );
  //   //     }
  //   //   );
  // };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Tanay Dwivedi",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <ItemLayout className={" col-span-full lg:col-span- row-span-2 flex-col items-start"}>
        <div>
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            <b>Email</b>
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            tanaydwivedi095@gmail.com
          </p>
        </div>
      </ItemLayout>
          
      <ItemLayout className={" col-span-full lg:col-span- row-span-2 flex-col items-start"}>
        <div>
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            <b>Mobile Number</b>
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            +91-7007922481
          </p>
        </div>
      </ItemLayout>
          
    </>
  );
}
