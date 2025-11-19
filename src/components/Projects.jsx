import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Learning Management System",
      tech: "MERN, Cloudinary, Razorpay",
      period: "Mar 2024 – Dec 2024",
      desc: "A role-based LMS featuring secure authentication, course management, media uploads via Cloudinary, and Razorpay-based subscriptions. Built with React + Redux on the frontend and Node/Express on the backend."
    },
    {
      title: "AI-Powered SaaS",
      tech: "Next.js, Prisma, NeonDB",
      period: "Jan 2025 – Feb 2025",
      desc: "A modern SaaS application that generates images using Cloudinary AI, supports dynamic aspect ratios, and includes secure authentication through Clerk. Built with Next.js, Prisma, and NeonDB."
    },
    {
      title: "Stack Overflow (Appwrite)",
      tech: "React, Zustand, Appwrite",
      period: "Jan 2025 – Feb 2025",
      desc: "A Q&A platform inspired by Stack Overflow, featuring real-time updates, voting, and user authentication. Built with React, Zustand for state management, and Appwrite as the backend service."
    }
  ];

  return (
    <div className="space-y-4">
      {projects.map((p) => (
        <article key={p.title} className="p-3 rounded-md bg-white/2">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold">{p.title}</h4>
              <div className="text-xs text-[color:var(--muted)]">{p.tech}</div>
            </div>
            <div className="text-xs text-[color:var(--muted)]">{p.period}</div>
          </div>
          <p className="mt-2 text-sm text-[color:var(--muted)]">{p.desc}</p>
        </article>
      ))}
      <p className="text-xs mt-2 text-[color:var(--muted)]">
      Github link for all projects: <a href="https://github.com/golu7059" target="_blank" className="underline">https://github.com/golu7059</a>
      </p>
    </div>
  );
}
