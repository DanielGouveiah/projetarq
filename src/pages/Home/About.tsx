import { ArrowRight } from "@phosphor-icons/react";
import daniel from "../../assets/daniel.jpeg";
import raul from "../../assets/raul.jpg";
import vytoria from "../../assets/vytoria.jpg";
import jovania from "../../assets/jovania.jpg";

const About = () => {
  const people = [
    {
      name: "Jovania Santos",
      role: "Diretora",
      instagram: "https://www.instagram.com/jo_vania_s/",
      img: jovania,
      color: "text-rose-600",
    },
    {
      name: "Vytoria Albuquerque",
      role: "Vice-Diretora",
      instagram: "https://www.instagram.com/vytoriaalbuquerque.arq/",
      img: vytoria,
      color: "text-fuchsia-600",
    },
    {
      name: "Daniel Barbosa",
      role: "Programador",
      instagram: "https://www.instagram.com/deniels_gouveia/",
      img: daniel,
      color: "text-blue-600",
    },
    {
      name: "Raul Monteiro",
      role: "Editor",
      instagram: "https://www.instagram.com/raulsimples/",
      img: raul,
      color: "text-cyan-600",
    },
  ];
  return (
    <section
      id="about"
      aria-label="Sobre nós"
      className="flex justify-center text-start pb-10 md:pb-20">
      <div className=" relative container grid md:grid-cols-3 gap-4 md:gap-10 px-4 md:px-0">
        <div>
          <h1 className="text-4xl md:text-5xl md:sticky md:top-5 row-span-full">
            Por trás do projeto...
          </h1>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <p className="text-xl md:text-2xl text-stone-600 py-2">
            A Projetarq é um projeto universitário feito por estudantes,
            contamos com uma equipe pequena e unida e juntos conseguimos fazer o
            projeto acontecer.
          </p>

          <div className="grid gap-6">
            <h3 className="text-3xl md:py-2 font-medium">Quem somos?</h3>
            <div className="text-xl md:text-2xl text-stone-600">
              <p className=" py-1 md:py-3">
                Somos universitários de Recife-PE e utilizamos de nossos
                conhecimentos específicos para criar algo grande e belo.
              </p>
              <p>
                O intuíto do projeto além de trazer conteúdos sobre arquitetura,
                é nos preparar para encarar o mundo e nos tornarmos melhores
                profissionais!
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <h3 className="text-3xl py-2 font-medium ">Nossa tripulação</h3>
            <ul className="grid md:grid-cols-2 py-6 md:py-10 gap-y-1 md:gap-y-6">
              {people.map((person) => {
                return (
                  <div
                    className="grid gap-1 md:gap-10 px-4 py-4 md:py-0 md:px-10 bg-stone-50 md:bg-transparent rounded-lg"
                    key={person.name}>
                    <div className="flex gap-4">
                      <img
                        src={person.img}
                        alt=""
                        className={`h-12 w-12 rounded-full border-2 border-stone-200 border-opacity-10`}
                      />
                      <div className="grid">
                        <h4 className={"text-lg font-medium "}>
                          {person.name}
                        </h4>
                        <p className="text-stone-600">{person.role}</p>
                      </div>
                    </div>
                    <a
                      href={person.instagram}
                      target="_blank"
                      className={`flex font-medium gap-2 items-center place-self-end ${person.color} hover:gap-4 hover:scale-110 transition-all`}>
                      Instagram <ArrowRight size={20} />
                    </a>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
