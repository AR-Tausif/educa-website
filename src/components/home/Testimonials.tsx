import React from "react";
import Container from "../common/Container";
import Avatar from "@/assets/images/avatars/avatar.webp";
import Avatar1 from "@/assets/images/avatars/avatar-1.webp";
import Avatar2 from "@/assets/images/avatars/avatar-2.webp";
import Avatar3 from "@/assets/images/avatars/avatar-3.webp";
import Avatar4 from "@/assets/images/avatars/avatar-4.webp";
import Image from "next/image";

const Testimonials = () => {
  const feedbacks = [
    {
      img: Avatar,
      name: "Daniella Doe",
      prof: "Mobile Dev",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione.",
    },
    {
      img: Avatar1,
      name: "Jane doe",
      prof: "Marketing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum.",
    },
    {
      img: Avatar2,
      name: "Yanick Doe",
      prof: "Developer",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
    },
    {
      img: Avatar3,
      name: "Daniella Doe",
      prof: "Mobile Dev",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
    },
    {
      img: Avatar4,
      name: "Daniella Doe",
      prof: "Mobile Dev",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];
  return (
    <div className="text-gray-600 dark:text-gray-300" id="reviews">
      <Container>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            We have some Feedback.
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {feedbacks.map((item, number) => (
            <div
              key={number}
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
            >
              <div className="flex gap-4">
                <Image
                  className="w-12 h-12 rounded-full"
                  src={item.img}
                  alt="user avatar"
                  width="200"
                  height="200"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    {item.name}
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {item.prof}
                  </p>
                </div>
              </div>
              <p className="mt-8">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
