import Reveal from "./Reveal";

export default function SectionHeading({ id, title, lead, dark = false, className = "" }) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <h2
        id={id}
        className={`text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${
          dark ? "!text-white" : ""
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-navy/70"}`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
