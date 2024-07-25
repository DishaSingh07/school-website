import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import CurrComp from "../components/CurrComp";

const Curriculum = () => {
  const description =
    "At Springdale Public School, we offer a comprehensive and well-rounded curriculum designed to foster a love for learning and prepare students for future success. Our curriculum is carefully crafted to ensure that students acquire foundational knowledge and skills, while also allowing for exploration in various subject areas.";

  return (
    <div>
      <Navbar />
      <Heading title="Curriculum" />
      <CurrComp description={description} />
    </div>
  );
};

export default Curriculum;
