import React from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Profile() {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D03AQGQzyts054omw/profile-displayphoto-scale_400_400/B4DZnILkloH4Ag-/0/1760000103892?e=1764806400&v=beta&t=wXB0BcJIN9URE5flVT5C6OqC-sB-kurk-8voK8l87lA"
        alt="Golu Kumar"
        className="w-36 h-36 rounded-full border-2 border-white/5 object-cover shadow-lg"
      />

      <h1 className="mt-5 text-2xl font-semibold">Golu Kumar</h1>
      <p className="text-sm text-[color:var(--muted)] mt-1">
        Full Stack Developer • B.Tech CSE
      </p>

      {/* Location + Email */}
      <div className="mt-4 flex flex-col gap-2 text-sm text-[color:var(--muted)]">
        <div className="flex items-center justify-center gap-2">
          <EnvelopeIcon className="w-4 h-4" />
          <a className="underline" href="mailto:golukumarjaisidih@gmail.com">
            golukumarjaisidih@gmail.com
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MapPinIcon className="w-4 h-4" />
          Vadodara, Gujarat, India
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-5 w-full grid grid-cols-2 gap-3">
        <a
          href="https://github.com/golu7059"
          target="_blank"
          className="text-sm px-3 py-2 rounded-md border border-white/6 hover:bg-white/5"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/golu-kumar-7079b5246/"
          target="_blank"
          className="text-sm px-3 py-2 rounded-md border border-white/6 hover:bg-white/5"
        >
          LinkedIn
        </a>
        <a
          href="https://leetcode.com/u/goluk/"
          target="_blank"
          className="text-sm px-3 py-2 rounded-md border border-white/6 hover:bg-white/5"
        >
          LeetCode
        </a>
        <a
          href="https://codeforces.com/profile/golu7059"
          target="_blank"
          className="text-sm px-3 py-2 rounded-md border border-white/6 hover:bg-white/5"
        >
          Codeforces
        </a>
      </div>

      {/* Download Resume */}
      <div className="mt-4 w-full">
        <a
          href="/Golu_Kumar_Resume.pdf"
          target="_blank"
          download = "Golu_Kumar_Resume.pdf"
          className="block text-sm px-3 py-2 rounded-md border border-white/6 hover:bg-white/5"
        >
          Download Resume
        </a>
      </div>

      {/* Tech interests */}
      <div className="mt-4 text-left w-full">
        <h3 className="text-sm font-medium text-white mb-2">Tech Interests</h3>
        <ul className="list-disc list-inside text-sm text-[color:var(--muted)] space-y-1">
          <li>Full-stack development (React, Next.js, Node.js)</li>
          <li>
            Competitive programming, DSA problem-solving and coding contests
          </li>
          <li>Learning modern AI engineering: LLMs, RAG, Agents, LangChain/LangGraph</li>
          <li>
            A strong passion for learning, building, and improving through code
          </li>
        </ul>
      </div>

      {/* Stats Section */}
      <div className="mt-6 w-full grid grid-cols-3 gap-2 text-center">
        <div className="p-3 rounded-lg bg-white/3">
          <div className="text-xs text-[color:var(--muted)]">Experience</div>
          <div className="font-semibold text-sm">Fresher</div>
        </div>
        <div className="p-3 rounded-lg bg-white/3">
          <div className="text-xs text-[color:var(--muted)]">Projects</div>
          <div className="font-semibold text-sm">10+</div>
        </div>
        <div className="p-3 rounded-lg bg-white/3">
          <div className="text-xs text-[color:var(--muted)]">Leetcode</div>
          <div className="font-semibold text-sm">1000+</div>
        </div>
      </div>
    </div>
  );
}
