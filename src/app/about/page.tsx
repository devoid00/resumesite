import PhonesRail from "@/app/components/PhonesRail";
import FirstCarRail from "@/app/components/FirstCarRail";
import SalvageRail from "@/app/components/SalvageRail";
import AmplifierRail from "@/app/components/AmplifierRail";
import PorscheRail from "@/app/components/PorscheRail";
import ArtworkRail from "@/app/components/ArtworkRail";

function RailShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mt-10 mb-6">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[var(--bg)] to-transparent md:w-20" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[var(--bg)] to-transparent md:w-20" />

      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="px-6 md:px-10 xl:px-16">{children}</div>
      </div>
    </div>
  );
}

function StorySection({
  title,
  children,
  first = false,
}: {
  title: string;
  children: React.ReactNode;
  first?: boolean;
}) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      {!first && <div className="mb-10 h-px w-12 bg-[var(--accent)] opacity-40" />}

      <h2 className="text-2xl font-medium tracking-tight text-[var(--ink)] md:text-3xl">
        {title}
      </h2>

      <div className="mt-6 space-y-5 text-[17px] leading-[1.8] text-[var(--mute)]">
        {children}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="pb-24">
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
          About
        </p>

        <h1 className="mt-4 maxw-4xl text-4xl font-semibold leading-tight text-[var(--ink)] md:text-6xl">
           My story through systems, from repair to integration.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--mute)]">
          My work has developed through hands-on system building — starting with
          small-scale electronics, expanding into vehicle restoration and full
          electrical integration, and growing into more formal troubleshooting,
          testing, and engineering work. What ties it all together is a
          consistent interest in understanding how real systems behave, how they
          fail, and how to return them to reliable operation.
        </p>
      </section>

      <StorySection title="Early Systems Work" first>
        <p>
          I began repairing phones at 12 years old. What started as cracked
          screen replacements quickly expanded into a more complete device repair
          workflow involving batteries, charging ports, cameras, speakers,
          housings, and other modular components.
        </p>

        <p>
          More importantly, it became my first real introduction to systems
          thinking. Even without full documentation, I had to identify how
          components interacted, isolate faults efficiently, and make practical
          repair decisions based on how the device behaved as a whole.
        </p>

        <p>
          That work also funded what came next. The money I made repairing and
          reselling phones gave me the ability to take on my first major
          mechanical project and begin working at a much larger system scale.
        </p>
      </StorySection>

      <RailShell>
        <PhonesRail />
      </RailShell>

      <StorySection title="First Vehicle Build">
        <p>
          At 15, I began restoring my first car, a 1968 Dodge Charger. It was
          the first project where I had to think beyond isolated repairs and
          manage a long-form build across multiple electrical and mechanical
          subsystems.
        </p>

        <p>
          The restoration included a complete wiring harness installation,
          interior restoration, brake system conversion from drum to disc, and
          substantial work across hydraulic, electrical, and body systems. It
          required sequencing work correctly, sourcing parts within budget, and
          learning how changes in one subsystem affected the rest of the
          vehicle.
        </p>

        <p>
          I eventually sold that car and used it to fund the next stage: a
          salvage-title Jeep rebuild that introduced a higher standard of
          validation and accountability.
        </p>
      </StorySection>

      <RailShell>
        <FirstCarRail />
      </RailShell>

      <StorySection title="Salvage Title Reconstruction">
        <p>
          At 17, the Jeep project raised the stakes because the goal was not just to
          make the vehicle run and drive, but to bring it back to certified,
          road-legal condition. That meant working toward state inspection and
          rebuilt-title requirements rather than relying only on my own
          judgment.
        </p>

        <p>
          This was an important shift in how I approached projects. It required
          working backward from external standards, validating repairs more
          carefully, and treating electrical, drivetrain, suspension, and safety
          systems as parts of a larger integrated platform.
        </p>

        <p>
          It also strengthened the habits that still define how I work:
          planning around constraints, sourcing intelligently, documenting what
          matters, and executing with the expectation that the result must hold
          up to real scrutiny.
        </p>
      </StorySection>

      <RailShell>
        <SalvageRail />
      </RailShell>

      <StorySection title="Electronics and Signal-Level Debugging">
        <p>
          My work in amplifier repair brought that same mindset into a more
          explicitly electrical setting. It required structured signal tracing,
          rail verification, bias analysis, protection-circuit awareness, and
          component-level diagnosis across both solid-state and tube platforms.
        </p>

        <p>
          It was also where troubleshooting became more disciplined. Rather than
          simply replacing what appeared faulty, the work required isolating
          failure modes, validating assumptions with measurement, and
          understanding why a system had failed before calling it repaired.
        </p>

        <p>
          In practice, this included reliability-critical work for professional
          touring acts, where turnaround time and repair quality both mattered.
          That environment reinforced the importance of methodical testing,
          technical judgment, and stable operation under real-world demands.
        </p>
      </StorySection>

      <RailShell>
        <AmplifierRail />
      </RailShell>

      <StorySection title="System Integration and Design Direction">
        <p>
          My current project work reflects a more advanced phase of this same
          progression. The Porsche 944 build is not only a repair or
          restoration effort, but an integration problem involving architecture,
          tradeoffs, and system compatibility.
        </p>

        <p>
          The drivetrain approach was selected deliberately to preserve the
          platform’s original balance characteristics while increasing
          performance. That means the project is as much about system decisions
          as it is about fabrication or installation. Mechanical interfaces,
          wiring, control systems, and sensor behavior all have to be considered
          together.
        </p>

        <p>
          More broadly, this is the direction I am interested in continuing:
          work that combines hands-on execution with deeper system reasoning,
          especially in power electronics, hardware integration, testing, and
          aerospace-adjacent engineering problems.
        </p>
      </StorySection>

      <RailShell>
        <PorscheRail />
      </RailShell>

      <StorySection title="Craft and Finish">
        <p>
          Alongside technical work, I have also spent time on projects centered
          on finish, presentation, and visual precision — including custom
          painting and detail work on shoes, phones, and furniture.
        </p>

        <p>
          Although those projects are different in application, they draw on the
          same underlying habits: patience, consistency, attention to detail,
          and the expectation that finished work should look intentional as well
          as functional.
        </p>

        <p>
          That balance matters to me. Good engineering is not just about making
          something work — it is also about making decisions carefully and
          carrying them through to a finished result that reflects thought,
          discipline, and care.
        </p>
      </StorySection>

      <RailShell>
        <ArtworkRail />
      </RailShell>
    </main>
  );
}
