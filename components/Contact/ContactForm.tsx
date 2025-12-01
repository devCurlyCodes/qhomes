"use client";
import { motion } from "framer-motion";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Textarea } from "../ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  return (
    <Card className="w-full  md:w-[350px]">
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl">
          <motion.h1
            className="cardtitle"
            initial={{ opacity: 0.1, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}>
            GET IN TOUCH WITH US
          </motion.h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <motion.div
            className="flex flex-col space-y-3 w-[310px]"
            initial={{ opacity: 0.1, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}>
            <Input id="name" placeholder="Name" />
            <Input id="email" placeholder="Email" />
            <Input id="phone" placeholder="Phone" />
            <Select>
              <SelectTrigger className="w-[310px]">
                <SelectValue placeholder="What are you interested in?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="threeb">3 Bedroom</SelectItem>
                <SelectItem value="twob">2 Bedroom</SelectItem>
                <SelectItem value="studio">Studio</SelectItem>
              </SelectContent>
            </Select>
            <Textarea id="message" placeholder="Message" />
          </motion.div>
        </form>
      </CardContent>
      <CardFooter className="flex items-center">
        <motion.div
          className="submitCont "
          initial={{ opacity: 0.1, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}>
          <Button>Submit</Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
}
