// import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

const Footer = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast("Thanks for subscribing my newletter ✨", {
      description: `An email has been sent to ${values.email}`,
    });

    fetch("https://server.mezudev.site/api/send-welcome-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send welcome email");
        }
      })
      .catch((error) => {
        console.error("Error sending welcome email:", error.message);
      });
  }

  return (
    <footer className="z-50 relative  mx-auto text-center p-8 lg:px-10 bg-zinc-900  bg-cover  bg-[url('https://framerusercontent.com/images/hREJN8AsFEbJPz6GtPdzL1hLkvc.png')] text-white lg:w-5/6 lg:rounded-t-3xl">
      {/* Your content goes here */}
      <div className="grid grid-cols-2 gap-2">
        {/* Left Column (60%) */}
        <div className="relative col-span-2 sm:col-span-1 grid grid-rows-2 gap-1 lg:w-[496px]">
          {/* Top Row (70%) */}
          <div className="row-span-2 py-2 sm:row-span-1 ">
            <Form {...form} className="bg-amber-500">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto space-y-2 text-start w-80"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subscribe to my newletter</FormLabel>
                      <FormControl>
                        <Input placeholder="your-email@domain.com" {...field} />
                      </FormControl>
                      <FormDescription>Enter your email</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="bg-green-900">
                  Submit
                </Button>
              </form>
            </Form>
          </div>

          {/* Bottom Row (30%) */}
          <div className="row-span-2 py-4 my-auto sm:row-span-1 lg:py-0">
            <h2 className="mb-2 text-base font-bold">Contact me via</h2>
            <a
              href="https://twitter.com/MezuOristo"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter size={24} className="inline mx-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/mezu-orizu-a50612230/"
              target="_blank"
              rel="noreferrer"
            >
              <CiLinkedin size={24} className="inline mx-2" />
            </a>
            <a
              href="https://wa.me/+2349090202853"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={24} className="inline mx-2" />
            </a>
            <a
              href="mailto:duzioristo@gmail.com?subject=Sent_From_your_Site&body=Hi👋"
              target="_blank"
              rel="noreferrer"
            >
              <CiMail size={24} className="inline mx-2" />
            </a>
          </div>
        </div>

        {/* Right Column (40%) */}
        <div className="grid grid-cols-2 col-span-2 gap-2 sm:col-span-1 text-end lg:px-8 ">
          <div className="row-span-2 sm:row-span-1">
            <ul className="space-y-3">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="row-span-2 sm:row-span-1">
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/MZT7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a href="/Blog" target="_blank">
                  Blog
                </a>
              </li>
              <li>
                <a href="MezuResume.pdf" download={true} target="_blank">
                  Resume
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      </div>
      <div className="my-auto mt-6 text-sm text-zinc-700 lg:mt-0">
        © 2024 Mezu Orizu
      </div>
    </footer>
  );
};

export default Footer;
