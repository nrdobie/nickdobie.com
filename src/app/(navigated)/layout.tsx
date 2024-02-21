import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

import Navigation from "~/app/_components/navigation";
import ProfilePicture from "~/images/profile.jpg";
import { socialMediaAccounts } from "~/social-media.constants";

export default function SubpageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid lg:min-h-screen lg:grid-cols-[1fr,minmax(auto,400px),minmax(auto,800px),1fr]">
      <div className="hidden bg-primary lg:block"></div>
      <div className="flex flex-col gap-4 bg-primary p-4 text-primary-content lg:grid-cols-1 lg:items-center lg:gap-8 lg:p-8">
        <div className="lg:sticky lg:top-8">
          <div className="flex items-center gap-4 lg:flex-col lg:justify-center lg:gap-8">
            <div>
              <figure className="avatar mask mask-squircle bg-current p-1 lg:p-2">
                <div className="mask mask-squircle w-12 lg:w-32">
                  <Image src={ProfilePicture} alt="" width={128} height={128} placeholder="blur" />
                </div>
              </figure>
            </div>
            <div className="lg:text-center">
              <h1 className="text-xl font-semibold lg:text-3xl">Nicholas Dobie</h1>
              <p className="text-sm italic opacity-80 lg:text-base">Web Developer</p>
            </div>
          </div>
          <div className="flex justify-between gap-2 lg:flex-col lg:items-center lg:justify-start lg:gap-8">
            <div className="flex gap-2">
              {socialMediaAccounts.map(({ name, link, brandIcon }) => (
                <div className="tooltip tooltip-bottom" data-tip={name} key={name}>
                  <a
                    href={link}
                    className="btn btn-circle btn-ghost btn-sm lg:btn-md"
                    aria-label={name}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={brandIcon} className="text-xl lg:text-[2rem]" />
                  </a>
                </div>
              ))}
            </div>
            <a
              href="/assets/nick-dobie-resume.pdf"
              className="btn btn-outline btn-sm rounded-full text-current lg:btn-lg lg:btn-wide"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="p-8">
        <Navigation />
        {children}
      </div>
      <div></div>
    </div>
  );
}
