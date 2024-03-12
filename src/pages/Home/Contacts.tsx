import {
  InstagramLogo,
  PaperPlaneTilt,
  // PaperPlaneTilt,
  // PatreonLogo,
} from "@phosphor-icons/react";

import contactsPhoto from "./../../assets/contacts-photo.jpg";
import contactsPhotoSm from "./../../assets/contacts-photo-sm.jpg";

const Contacts = () => {
  return (
    <section
      className="relative py-10 md:py-20 px-2 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-y-14 md:gap-y-20"
      id="contacts">
      <h2 className="text-3xl md:text-5xl font-semibold text-stone-50 col-span-2 md:col-span-2 md:col-start-2">
        Entre em contato
      </h2>

      <div className=" text-stone-50 col-span-full grid md:grid-cols-4 justify-center gap-y-4 py-6">
        <div className="grid items-center  justify-center xl:grid-cols-2 gap-6 col-start-2 col-span-2 sm:text-start leading-loose text-lg rounded-xl">
          <div className="grid justify-center bg-red-dark rounded-xl p-6 xl:max-h-[400px] xl:translate-x-20 shadow-lg">
            <div className="grid text-center">
              <h3 className="text-xl md:text-2xl">Curtiu nosso projeto?</h3>
              <p className="text-stone-400">
                Entre em contato para saber mais!
              </p>
            </div>
            <ul className="py-6 md:py-10">
              <li className="rounded-sm border-b-2 border-red py-4">
                <a
                  rel="noopener"
                  href="https://www.instagram.com/projet.arq_magazine/"
                  target="_blank"
                  className="flex hover:text-red-light flex-col md:flex-row gap-2 sm:gap-4 text-lg md:text-xl items-center">
                  <InstagramLogo size={32} /> Instagram
                </a>
              </li>
              <li className="rounded-sm border-b-2 border-transparent py-4">
                <a
                  href="mailto:projetarqmagazine@gmail.com?subject=Gostaria de saber mais sobre o projeto"
                  target="_blank"
                  className="flex hover:text-red-light flex-col md:flex-row gap-2 sm:gap-4 text-lg md:text-xl items-center">
                  <PaperPlaneTilt size={32} /> Envie um Email
                </a>
              </li>
              {/* 
              <li className="rounded-sm border-b-2 border-transparent py-4">
                <a
                  href=""
                  target="_blank"
                  className="flex hover:text-red-light flex-col md:flex-row gap-2 sm:gap-4 text-lg md:text-xl items-center">
                  <PatreonLogo size={32} /> Assine nosso Patreon
                </a>
              </li> */}
            </ul>
          </div>

          <div className="grid justify-center row-start-1 xl:row-auto">
            <img
              src={contactsPhoto}
              alt=""
              className="hidden xl:block rounded-xl -z-10 xl:-translate-x-20"
            />
            <img
              src={contactsPhotoSm}
              alt=""
              className=" hidden md:block xl:hidden max-h-[240px] rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
