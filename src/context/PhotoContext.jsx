// src/contexts/PhotoContext.js
import React, { createContext, useState, useContext } from "react";

// Create Context
const PhotoContext = createContext();

// Create Provider Component
export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState({
    "Sports Day": [
      {
        src: "https://www.cedarcollege.sa.edu.au/wp-content/uploads/2017/03/Sports-day1.jpg",
        description: "Students participating in various sports events.",
      },
      {
        src: "https://lh5.googleusercontent.com/proxy/vr2iZCIpD1PdKZnKiaPSLfMuyq-ZUPQ2YxV_solw8B4SD2jXbd9RglQv7jR5yU6rJLhCKIA-wVMvHpjsEip07_BL5m_Smm3jgJa39P_t_tVc",
        description: "More action from the sports day.",
      },
      {
        src: "https://www.broomfieldhouse.com/wp-content/uploads/2021/07/Runners-showing-grit-and-determination-scaled.jpg",
        description: "Excitement on the track.",
      },
    ],
    "Science Exhibition": [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTEO8FJBzy_H8O1jHP_TzTA1DI3T1G0argjg&s",
        description: "Students presenting their science projects.",
      },
      {
        src: "https://dooninternational.net/web/wp-content/uploads/2022/10/SCIENCE-EXHIBITION-4.jpg",
        description: "Innovative science displays.",
      },
    ],
    "Cultural Fest": [
      {
        src: "https://static.toiimg.com/thumb/imgsize-11915,msid-16187162,width-400,resizemode-4/16187162.jpg",
        description: "Students performing in the cultural fest.",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRletHlZy9KT_BCIDzUEnHlSIvEY3ZErJH2nA&s",
        description: "Highlights from the cultural performances.",
      },
    ],
    Classroom: [
      {
        src: "https://dpssirsa.com/downloads/nimages/IMG_3544.jpg",
        description: "A glimpse of our interactive classrooms.",
      },
      {
        src: "https://lh4.googleusercontent.com/proxy/buXiz1QNPtieScAxewUWM7Jz0WqMHmcvo6w-2B75dvjuxiO74FB0-3QI420pQGdEwBzN_pWb8LEu11Uqav-XAY7NxxrgXGSm0uUJcdcizFYClGJs7rsoZh2J09ejsBNvtJz0S4rkl3rTpiUKf2zvlhcfcfWtRLMIqNSAV41_x2rc1QUBaopCpvmNUkRewZ59z4-QlRP6YSMu",
        description: "Students engaged in classroom activities.",
      },
    ],
    Library: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLJ8q0y5GAvzLqHXY3GnD3qz9W50d2-MpQQ&s",
        description: "Students reading and studying in the school library.",
      },
    ],
  });

  return (
    <PhotoContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotoContext.Provider>
  );
};

// Custom Hook to use the Photo Context
export const usePhotoContext = () => useContext(PhotoContext);
