import React from "react";
import ProfileCard from "../components/ProfileCard";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

const Life = () => {
  const activities = [
    {
      title: "Music",
      imageUrl:
        "https://media.istockphoto.com/id/1175435360/vector/music-note-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=R7s6RR849L57bv_c7jMIFRW4H87-FjLB8sqZ08mN0OU=",
    },
    {
      title: "Dance",
      imageUrl:
        "https://images.unsplash.com/photo-1514489024785-d5ba8dfb2198?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Drama",
      imageUrl:
        "https://internationaljournalofresearch.com/wp-content/uploads/2020/06/img_20200608_004940-2.jpg?w=720",
    },
    {
      title: "Art",
      imageUrl:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sports",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1671466192305-8d0d6b0115e4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const clubs = [
    {
      title: "Literary Society",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2x-l7RIqy-yvlnKbpTYnGPiiAPLTgJbzJTg&s",
    },
    {
      title: "Environmental Club",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIF4wMSDHrUTZecGSmGfj8vvhoUI30rHgJeg&s",
    },
    {
      title: "Astronomy Club",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9oXExoUBTxRm1r10zqDk3X1TAWXWLl9_x1Q&s",
    },
    {
      title: "Coding Club",
      imageUrl:
        "https://saugus.pioneercss.org/ourpages/auto/2014/11/5/39007948/code-club.jpg",
    },
    {
      title: "Robotics",
      imageUrl:
        "https://cmrtc.ac.in/wp-content/uploads/2022/05/logo-300x300.jpg",
    },
    {
      title: "Debate Club",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1w2a6OS8jaqTBtb7I6DTAjfp7Sbq-U20lug&s",
    },
    {
      title: "Science Club",
      imageUrl:
        "https://media.licdn.com/dms/image/D5612AQGzS0Xnchmnuw/article-cover_image-shrink_600_2000/0/1677390322465?e=2147483647&v=beta&t=FYdwrDBc7VU3Lm2Ej4mo8N7XSZ-t54Tt_eivRCD9TPk",
    },
  ];

  return (
    <div>
      <Navbar />
      <Heading title={"Life at Springdale"} />
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <section className="mb-10">
            <h1 className="text-3xl text-center font-semibold my-2">
              EXTRACURRICULAR ACTIVITIES
            </h1>
            <div
              className="w-full h-0.5 bg-[#0a0a0a] mx-auto my-4"
              style={{ maxWidth: "200px" }}
            ></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {activities.map((activity, index) => (
                <ProfileCard
                  key={index}
                  title={activity.title}
                  imageUrl={activity.imageUrl}
                />
              ))}
            </div>
          </section>

          <section>
            <h1 className="text-3xl text-center font-semibold my-2">CLUBS AND SOCIETIES</h1>
            <div
              className="w-full h-0.5 bg-[#0a0a0a] mx-auto my-4"
              style={{ maxWidth: "200px" }}
            ></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clubs.map((club, index) => (
                <ProfileCard
                  key={index}
                  title={club.title}
                  imageUrl={club.imageUrl}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Life;
