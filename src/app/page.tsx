import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { socialMediaAccounts } from "~/social-media.constants";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8 bg-primary p-8 text-primary-content">
      <figure className="avatar mask mask-squircle bg-current p-2">
        <div className="mask mask-squircle w-32">
          <Image src="/assets/profile.jpg" alt="" width={128} height={128} />
        </div>
      </figure>
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Nicholas Dobie</h1>
        <p className="italic opacity-80">Web Developer</p>
      </div>
      <div className="flex gap-2">
        {socialMediaAccounts.map(({ name, link, brandIcon }) => (
          <div className="tooltip tooltip-bottom" data-tip={name} key={name}>
            <a href={link} className="btn btn-circle btn-ghost" aria-label={name} target="_blank">
              <FontAwesomeIcon icon={brandIcon} size="2x" />
            </a>
          </div>
        ))}
      </div>
      <a
        href="/assets/nick-dobie-resume.pdf"
        className="btn btn-outline btn-lg btn-wide rounded-full text-current"
        download
      >
        Download CV
      </a>
    </div>
  );
}
