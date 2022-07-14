import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../config";
const TopicPage = () => {
  const [topics, setTopics] = useState([]);
  const [skills, setSkills] = useState([]);
  const getTopic = async () => {
    try {
      const res = await axios.get(API.getAPI("get-topics-by-grade"), {
        params: { grade: 1 },
      });
      setTopics(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSeeDetails = async (id) => {
    try {
      const res = await axios.get(API.getAPI("get-skills-by-topic"), {
        params: { topic: 1 },
      });
      setSkills(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopic();
  }, [skills]);
  return (
    <div className="w-full page-container flex flex-col my-10 gap-y-10">
      <div className="w-full p-16 bg-primary text-white text-6xl rounded-3xl">
        Topic
      </div>
      <div className="w-full flex items-start justify-between">
        <div className="w-[40%] p-8 bg-whit shadow-md flex flex-col gap-y-6 text-black rounded-3xl">
          <span className="text-2xl">All topic</span>
          {topics.length > 0 &&
            topics.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 border-gray-300"
              >
                <div className="flex items-center justify-center gap-x-8">
                  <div className="">
                    <img
                      src="https://img.icons8.com/color/96/000000/pixel-star.png"
                      alt=""
                      className="w-14"
                    />
                  </div>
                  <div>
                    <p className="text-lg">{item.name}</p>
                  </div>
                </div>
                <div
                  className="button"
                  onClick={() => {
                    handleSeeDetails(item.id);
                  }}
                >
                  See details
                </div>
              </div>
            ))}
        </div>
        <div className="w-[59%] p-8 bg-whit shadow-md flex flex-col gap-y-6 text-black rounded-3xl">
          <span className="text-2xl">Topic details</span>
          {skills.length > 0 &&
            skills.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4 border-gray-300"
              >
                <p className="text-xl">{item.name}</p>
                <div className="button">Do</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
