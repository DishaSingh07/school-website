// import React from "react";
// import Heading from "../components/Heading";
// import Navbar from "../components/Navbar";

// const Method = () => {
//   return (
//     <div>
//       <Navbar />
//       <Heading title={"Methodologies and Resources"} />
//       <div className="px-4 py-6 space-y-8">
//         {/* Teaching Methodologies */}
//         <div className="text-center my-8">
//           <h1 className="text-3xl font-semibold my-2">
//             TEACHING METHODOLOGIES
//           </h1>
//           <div
//             className="w-full h-0.5 bg-[#0a0a0a] mx-auto my-4"
//             style={{ maxWidth: "200px" }}
//           ></div>
//           <p className="text-lg">
//             We use a blend of traditional and modern teaching techniques to
//             cater to different learning styles.
//           </p>

//           <div className="mt-6 space-y-4">
//             <ul
//               className="list-disc list-inside text-left mx-auto"
//               style={{ maxWidth: "800px" }}
//             >
//               <li className="text-lg">
//                 <span className="font-semibold">Blended Learning:</span>{" "}
//                 Combining traditional classroom instruction with digital tools.
//               </li>
//               <li className="text-lg">
//                 <span className="font-semibold">
//                   Differentiated Instruction:
//                 </span>{" "}
//                 Tailoring lessons to meet varied student needs.
//               </li>
//               <li className="text-lg">
//                 <span className="font-semibold">Project-Based Learning:</span>{" "}
//                 Encouraging application of knowledge through real-world
//                 projects.
//               </li>
//               <li className="text-lg">
//                 <span className="font-semibold">Inquiry-Based Learning:</span>{" "}
//                 Stimulating curiosity with open-ended questions and experiments.
//               </li>
//               <li className="text-lg">
//                 <span className="font-semibold">Active Learning:</span> Engaging
//                 students with discussions, debates, and role-playing.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Educational Resources */}
//         <div className="text-center my-8">
//           <h1 className="text-3xl font-semibold my-2">EDUCATIONAL RESOURCES</h1>
//           <div
//             className="w-full h-0.5 bg-[#0a0a0a] mx-auto my-4"
//             style={{ maxWidth: "200px" }}
//           ></div>

//           <p className="text-lg">
//           "Digital classrooms, interactive learning modules, and access
//           to online educational platforms.
//           </p>
//           <div className="mt-6 space-y-4">
//             <ul
//               className="list-disc list-inside text-left mx-auto"
//               style={{ maxWidth: "800px" }}
//             >
//               <li className="text-lg">
//                 <span className="font-semibold">Digital Classrooms:</span>{" "}
//                 Equipped with the latest technology for enhanced learning.
//               </li>
//               <li className="text-lg">
//                 <span className="font-semibold">
//                   Interactive Learning Modules:
//                 </span>{" "}
//                 Helping students grasp complex concepts.
//               </li>
//               <li className="text-lg">
//                 <span className="font-semibold">
//                   Online Educational Platforms:
//                 </span>{" "}
//                 Providing access to a wealth of resources and materials.
//               </li>
//               <li className="text-lg">
//                 <span className="font-semibold">Library:</span> A well-stocked
//                 library to support enriched learning.
//               </li>
//               <li className="text-lg">
//                 <span className="font-semibold">Science Labs:</span> Fully
//                 equipped labs for practical experiments.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Method;

import React from "react";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";

const Method = () => {
  return (
    <div className="method-container min-h-screen bg-gray-100">
      <Navbar />
      <Heading title={"Methodologies and Resources"} />

      <div className="method-content px-4 py-6 space-y-8">
        {/* Teaching Methodologies */}
        <section className="methodology bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto">
          <h2 className="methodology-title text-center text-2xl font-semibold my-8">
            TEACHING METHODOLOGIES
          </h2>
          <div
            className="methodology-divider mx-auto my-4"
            style={{
              width: "200px",
              height: "2px",
              backgroundColor: "#0a0a0a",
            }}
          ></div>
          <p className="methodology-description text-lg text-center mb-6">
            We use a blend of traditional and modern teaching techniques to
            cater to different learning styles.
          </p>
          <ul className="methodology-list list-disc list-inside text-left mx-auto max-w-2xl space-y-4">
            <li className="methodology-item text-lg">
              <span className="font-semibold">Blended Learning:</span> Combining
              traditional classroom instruction with digital tools.
            </li>
            <li className="methodology-item text-lg">
              <span className="font-semibold">Differentiated Instruction:</span>{" "}
              Tailoring lessons to meet varied student needs.
            </li>
            <li className="methodology-item text-lg">
              <span className="font-semibold">Project-Based Learning:</span>{" "}
              Encouraging application of knowledge through real-world projects.
            </li>
            <li className="methodology-item text-lg">
              <span className="font-semibold">Inquiry-Based Learning:</span>{" "}
              Stimulating curiosity with open-ended questions and experiments.
            </li>
            <li className="methodology-item text-lg">
              <span className="font-semibold">Active Learning:</span> Engaging
              students with discussions, debates, and role-playing.
            </li>
          </ul>
        </section>

        {/* Educational Resources */}
        <section className="resources bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto">
          <h2 className="resources-title text-center text-2xl font-semibold my-8">
            EDUCATIONAL RESOURCES
          </h2>
          <div
            className="resources-divider mx-auto my-4"
            style={{
              width: "200px",
              height: "2px",
              backgroundColor: "#0a0a0a",
            }}
          ></div>
          <p className="resources-description text-lg text-center mb-6">
            Digital classrooms, interactive learning modules, and access to
            online educational platforms.
          </p>
          <ul className="resources-list list-disc list-inside text-left mx-auto max-w-2xl space-y-4">
            <li className="resources-item text-lg">
              <span className="font-semibold">Digital Classrooms:</span>{" "}
              Equipped with the latest technology for enhanced learning.
            </li>
            <li className="resources-item text-lg">
              <span className="font-semibold">
                Interactive Learning Modules:
              </span>{" "}
              Helping students grasp complex concepts.
            </li>
            <li className="resources-item text-lg">
              <span className="font-semibold">
                Online Educational Platforms:
              </span>{" "}
              Providing access to a wealth of resources and materials.
            </li>
            <li className="resources-item text-lg">
              <span className="font-semibold">Library:</span> A well-stocked
              library to support enriched learning.
            </li>
            <li className="resources-item text-lg">
              <span className="font-semibold">Science Labs:</span> Fully
              equipped labs for practical experiments.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Method;
