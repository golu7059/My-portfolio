import React from "react";
import Profile from "./components/Profile";
import RightPanel from "./components/RightPanel";

export default function App() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* left side of profile  */}
        <aside className="lg:col-span-1">
          <div className="panel rounded-2xl p-6 lg:p-8">
            <Profile />
          </div>
        </aside>

        {/* right content column */}
        <main className="lg:col-span-2 flex flex-col gap-6">
          <div className="panel rounded-2xl p-6 lg:p-8">
            <RightPanel />
          </div>
        </main>
      </div>
    </div>
  );
}
