import React from "react";

const Tag = ({ children }) => (
  <span className="inline-block px-3 py-1 mr-2 mb-2 text-sm bg-white/6 rounded-full text-white/90">
    {children}
  </span>
);

export default function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      <div>
        <h4 className="text-sm font-medium text-white mb-2">Languages</h4>
        <div>
          <Tag>Python</Tag>
          <Tag>c++</Tag>
          <Tag>Go</Tag>
          <Tag>Java</Tag>
          <Tag>JavaScript</Tag>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-white mb-2">Development</h4>
        <div>
          <Tag>MERN Stack</Tag>
          <Tag>Next.js</Tag>
          <Tag>Building AI Agents</Tag>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-white mb-2">Databases and Tools</h4>
        <div>
          <Tag>MongoDB</Tag>
          <Tag>MySQL</Tag>
          <Tag>Git</Tag>
          <Tag>Docker</Tag>
        </div>
      </div>
    </div>
  );
}
