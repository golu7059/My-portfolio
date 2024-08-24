import React from "react";

const Education = () => {
    return (
        <section id="education" className="p-8">
            <h2 className="text-2xl font-bold">Education</h2>
            {/* Example education card */}
            <div className="mt-4 bg-white p-4 shadow-md">
                <h3 className="text-xl font-bold">University of California, Berkeley</h3>
                <p className="mt-2">Bachelor of Science, Computer Science</p>
                <p className="mt-2">GPA: 3.8</p>
            </div>
        </section>
    );
};

export default Education;