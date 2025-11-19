import React from "react";

const Item = ({ title, company, range, desc }) => (
  <div className="flex items-start gap-5 mb-6">
    <div className="flex flex-col items-center">
      <div className="w-3 h-3 rounded-full bg-white/20"></div>
      <div className="timeline-line h-full mt-2"></div>
    </div>

    <div className="flex-1">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-md font-semibold text-white">{title}</h3>
          <p className="text-sm text-[color:var(--muted)]">{company}</p>
        </div>

        <div className="text-sm text-[color:var(--muted)]">{range}</div>
      </div>
      <p className="mt-2 text-sm text-[color:var(--muted)]">{desc}</p>
    </div>
  </div>
);

export default function Experience() {
  return (
    <>
      <Item
        title="Front-end Developer Intern"
        company="Mr Loggage"
        range="Jul 2024 - Sep 2024"
        desc="Developed reusable React components and improved overall UI consistency using Tailwind CSS. Applied state-management concepts with Redux Toolkit to organize data flow more efficiently while strengthening my practical understanding of frontend development."
      />
    </>
  );
}
