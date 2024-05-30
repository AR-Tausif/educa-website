"use client";
import Link from "next/link";
import { Button } from "../ui/button";

const NavigateButton = ({ url, title }: { url: string; title: string }) => {
  return (
    <Link href={url}>
      <Button className="mt-4">{title}</Button>
    </Link>
  );
};

export default NavigateButton;
