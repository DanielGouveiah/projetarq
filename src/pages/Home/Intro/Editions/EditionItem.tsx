import { useEffect, useRef, useState } from "react";
import { IEditions } from "../../../../Types/Types";

interface data {
  data: IEditions | null;
}

const EditionItem = ({ data }: data) => {
  const ref = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (data) {
      const secDate = data!.release_date!.seconds;
      const date = new Date(secDate! * 1000).toLocaleDateString("pt-BR");
      setDate(date);
      setTitle(data!.title);
      ref.current!.style.backgroundImage = `url('${data?.cover}')`;
    }
  }, [setDate, data]);

  return (
    <>
      {data ? (
        <a
          href={data.edition}
          target="_blank"
          className="flex flex-col gap-2 w-fit h-fit">
          <div
            className={`edition w-full min-w-[240px] h-[32vh] md:h-[40vh] max-h-[320px] rounded-lg overflow-hidden bg-center bg-cover md:grayscale hover:grayscale-0 hover:scale-105 transition duration-400 `}
            ref={ref}
          />

          <div className="flex flex-col gap-1 text-stone-900">
            <h2 className="text-xl font-medium max-w-[20ch]">{title}</h2>
            <p className="text-stone-600">{date}</p>
          </div>
        </a>
      ) : (
        <a className="flex flex-col gap-2 relative w-fit h-fit">
          <div
            className={`bg-stone-800 edition w-full  bg-center bg-cover min-w-[240px] h-[32vh] md:h-[40vh] max-h-[320px] overflow-hidden rounded-lg hover:scale-105 transition duration-400 bg-[url('../src/assets/breve.jpg')]`}
          />

          <div className="flex flex-col gap-1 text-stone-900">
            <h2 className="text-xl font-medium">Em breve!</h2>
          </div>
        </a>
      )}
    </>
  );
};

export default EditionItem;
