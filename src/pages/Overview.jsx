import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

const Overview = () => {
  return (
    <div>
      <Navbar />
      <Heading title={"Overview"} />
      <div className="px-4 py-6 space-y-8">
        {/* history */}
        <div className="text-center my-8">
          <h1 className="text-3xl font-semibold my-2">
            A BRIEF HISTORICAL ACCOUNT
          </h1>
          <div
            className="w-full h-0.5 bg-[#0a0a0a] mx-auto my-4"
            style={{ maxWidth: "200px" }}
          ></div>
          <p className="text-lg">
            "Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students."
          </p>
        </div>

        {/* vision and mission */}
        <div className="text-center my-8">
          <h1 className="text-3xl font-semibold my-2">VISION AND MISSION</h1>
          <div
            className="w-full h-0.5 bg-[#0a0a0a] mx-auto my-4"
            style={{ maxWidth: "200px" }}
          ></div>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-bold">VISION:</span> To create a learning
              environment that fosters academic excellence, critical thinking,
              and ethical values.
            </p>
            <p className="text-lg">
              <span className="font-bold">MISSION:</span> To empower students
              with the knowledge, skills, and values needed to thrive in a
              dynamic world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
