import PhonesRail from "@/app/components/PhonesRail";
import FirstCarRail from "@/app/components/FirstCarRail";
import SalvageRail from "@/app/components/SalvageRail";
import AmplifierRail from "@/app/components/AmplifierRail";
import PorscheRail from "@/app/components/PorscheRail";
import ProjectsRail from "@/app/components/ProjectsRail";
import ArtworkRail from "@/app/components/ArtworkRail";

export default function AboutPage() {
  return (
    <main className="pb-24">
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
          About
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[var(--ink)] md:text-6xl">
          My path into systems, hardware, and engineering.
        </h1>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 md:px-10">
        <h2 className="text-3xl font-semibold text-[var(--ink)]">Phones</h2>
        <div className="mt-4 space-y-4 text-lg leading-8 text-[var(--mute)]">
          <p>
            I started fixing phones when I was 12. What began with cracked screens
            turned into a real business built on buying broken phones, repairing
            them, and reselling them on eBay.
          </p>
          <p>
            I started with screen replacements and eventually worked my way into
            nearly every modular component: batteries, charging ports, cameras,
            speakers, buttons, and housings. It was my first real lesson in how
            broken systems could become opportunity if you understood them well
            enough.
          </p>
        </div>
      </section>
      <PhonesRail />

      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <h2 className="text-3xl font-semibold text-[var(--ink)]">My First Car</h2>
        <div className="mt-4 space-y-4 text-lg leading-8 text-[var(--mute)]">
          <p>
            At 15, before I even had a license, I began restoring my first car
            using money I had made from my own business. It became my first
            technically difficult long-form project.
          </p>
          <p>
            I restored the seats, carpet, headliner, radio, and full interior, and
            also took on the vinyl roof, body work, a drum-brake-to-disc-brake
            conversion, and a full rewire. It pushed me technically, financially,
            and in terms of learning things I did not already know.
          </p>
        </div>
      </section>
      <FirstCarRail />

      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <h2 className="text-3xl font-semibold text-[var(--ink)]">
          Salvage Title Restoration
        </h2>
        <div className="mt-4 space-y-4 text-lg leading-8 text-[var(--mute)]">
          <p>
            My first full salvage-title restoration raised the stakes. This time,
            the work had to do more than function — it had to pass both state
            safety inspection and certify rebuilt inspection.
          </p>
          <p>
            Like my earlier rebuilds, I funded the project with money I had earned
            myself. That made every decision real. It taught me how to work
            backward from an external standard and execute to it carefully.
          </p>
        </div>
      </section>
      <SalvageRail />

      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <h2 className="text-3xl font-semibold text-[var(--ink)]">
          Amplifier Repair
        </h2>
        <div className="mt-4 space-y-4 text-lg leading-8 text-[var(--mute)]">
          <p>
            Amplifier repair is where my electrical troubleshooting became much
            more disciplined. It pushed me into signal tracing, protection
            behavior, rail verification, and understanding faults in the context
            of the full system.
          </p>
          <p>
            Working on both solid-state and tube amplifiers also required real
            voltage awareness and safety discipline. It strengthened the habits I
            rely on most: verify safely, isolate the fault, test methodically,
            and understand why the system failed before calling it fixed.
          </p>
        </div>
      </section>
      <AmplifierRail />

      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <h2 className="text-3xl font-semibold text-[var(--ink)]">
          Porsche 944 Project
        </h2>
        <div className="mt-4 space-y-4 text-lg leading-8 text-[var(--mute)]">
          <p>
            The Porsche 944 project reflects a more mature stage of my work. It
            is not just about fixing what is broken, but understanding systems
            more intentionally and integrating planning with execution.
          </p>
          <p>
            I also want this section to include CAD files and design work, so it
            shows the bridge between physical project work and more formal
            technical planning.
          </p>
        </div>
      </section>
      <PorscheRail />


     

      <section className="mx-auto max-w-4xl px-6 py-12 md:px-10">
        <h2 className="text-3xl font-semibold text-[var(--ink)]">
          Artwork and Painting
        </h2>
        <div className="mt-4 space-y-4 text-lg leading-8 text-[var(--mute)]">
          <p>
            Painting and artwork are a different side of the same mindset. They
            rely less on troubleshooting and more on patience, finish, detail,
            and visual judgment, but the overlap is stronger than it looks.
          </p>
          <p>
            I want this section to include work like the shoes, phones, and
            table. It shows another form of care and precision — not just making
            something function, but making it look intentional and finished.
          </p>
        </div>
      </section>
      <ArtworkRail />
    </main>
  );
}
