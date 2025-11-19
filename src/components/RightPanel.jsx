import React from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Honors from "./Honors";

export default function RightPanel() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-semibold mb-3">Core Skills</h2>
        <div className="rounded-lg p-4 bg-transparent border border-white/4">
          <Skills />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Experience</h2>
        <div className="rounded-lg p-4 bg-transparent border border-white/4">
          <Experience />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Projects</h2>
        <div className="rounded-lg p-4 bg-transparent border border-white/4">
          <Projects />
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg p-4 bg-transparent border border-white/4">
          <h3 className="text-sm font-medium mb-3">Education</h3>
          <Education />
        </div>

        <div className="rounded-lg p-4 bg-transparent border border-white/4">
          <h3 className="text-sm font-medium mb-3">Honors & Awards</h3>
          <Honors />
        </div>
      </div>

    </div>
  );
}
