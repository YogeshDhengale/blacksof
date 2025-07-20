import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const INPUT_CLASS = "bg-transparent text-base lg:text-lg px-0 placeholder:text-white text-white border-0 rounded-none border-b-2 border-input/60 shadow-none outline-0 ring-0 focus-visible:ring-0 focus-visible:border-white focus:border-white"

const ContactSection = () => {
  return (
    <div className="min-h-screen gap-16 sm:p-20 bg-sky-600 text-white">
      <div className="container mx-auto px-6 md:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left side - Contact Information */}
          <div className="space-y-4 md:space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl mb-6 font-semibold">
                Get in touch
              </h2>
              <div className="w-16 h-0.5 bg-white mb-8"></div>
              <p className="text-2xl mb-8 md:mb-12">For general enquiries</p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Address :</h3>
                <p className="text-base leading-4 font-normal">
                  110, 16th Road, Chembur, Mumbai - 400071
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Phone :</h3>
                <p className="text-base leading-4 font-normal">
                  +91 22 25208822
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Email :</h3>
                <p className="text-base leading-4 font-normal">
                  info@supremegroup.co.in
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="space-y-6">
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Full name"
                  className={cn(INPUT_CLASS)}
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className={cn(INPUT_CLASS)}
                />
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Company"
                  className={cn(INPUT_CLASS)}
                />
              </div>

              <div>
                <Textarea placeholder="Message" className={cn(INPUT_CLASS)} />
              </div>

              <div className="pt-6">
                <Button
                  variant="outline"
                  className="border-2 px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200 h-auto"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
