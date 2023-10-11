import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      name: "HR Website",
      link: "https://hectordevelops.github.io/hectordevelops.io/",
      icon: <TbWorldWww size={30} />,
    },
    {
      id: 2,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/hrosario1/",
      icon: <BsLinkedin size={30} />,
    },
    {
      id: 3,
      name: "Github",
      link: "https://github.com/HectorDevelops",
      icon: <BsGithub size={30} />,
    },
    {
      id: 4,
      name: "Email",
      link: "mailto:HectorDevelops@gmail.com",
      icon: <MdEmail size={30} />,
    },
  ];
  return (
    <div className="border-t-2 border-gray-400 flex justify-center max-w-4xl mx-auto">
      <div className="mt-6 flex w-96 justify-center ">
        {footerLinks.map(({ id, name, link, icon }) => (
          <div key={id} className="pr-3.5 ">
            <a href={link} target="_blank" rel="noreferrer" className="flex">
              {icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
