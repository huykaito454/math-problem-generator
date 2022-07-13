import { FaSearch } from "react-icons/fa";
import ItemSkill from "./ItemSkill";

const TopicPage = () => {
    const skills = [
        { name: "skill 1", Attempetd: "12", Correct: "0", Incorrect: "1", Score: "10", CAStandard: "4.OA.1" },
        { name: "skill 2", Attempetd: "NA", Correct: "NA", Incorrect: "NA", Score: "NA", CAStandard: "4.NPT.1" },
        { name: "skill 3", Attempetd: "NA", Correct: "NA", Incorrect: "NA", Score: "NA", CAStandard: "4.NPT.1" },
        { name: "skill 4", Attempetd: "NA", Correct: "NA", Incorrect: "NA", Score: "NA", CAStandard: "4.NPT.1" },
        { name: "skill 5", Attempetd: "NA", Correct: "NA", Incorrect: "NA", Score: "NA", CAStandard: "4.NPT.1" },
        { name: "skill 6", Attempetd: "NA", Correct: "NA", Incorrect: "NA", Score: "NA", CAStandard: "4.NPT.1" },
        { name: "skill 7", Attempetd: "NA", Correct: "NA", Incorrect: "NA", Score: "NA", CAStandard: "4.NPT.1" },
        { name: "skill 8", Attempetd: "NA", Correct: "NA", Incorrect: "NA", Score: "NA", CAStandard: "4.NPT.1" },
        { name: "skill 9", Attempetd: "NA", Correct: "NA", Incorrect: "NA", Score: "NA", CAStandard: "4.NPT.1" },
        { name: "skill 10", Attempetd: "NA", Correct: "NA", Incorrect: "NA", Score: "NA", CAStandard: "4.NPT.1" },
    ];

    return (
        <>
            <div className="px-[10px]">
                <div className="flex h-[160px] bg-amber-500 rounded-xl justify-between items-center p-6">
                    <div className="">
                        <h5 className="text-sm">Home page/ All topic/ Topic name</h5>
                        <h1 className="text-4xl mt-4">Topic name</h1>
                    </div>
                    <div className="w-[400px] h-[120px] mr-12 bg-gradient-to-bl from-slate-200/75 px-[64px] rounded-3xl">
                        <h1 className="text-2xl mt-[8px]">Info</h1>
                        <div className="flex justify-between pt-4">
                            <h5 className="text-sm">Started date</h5>
                            <h5 className="text-sm">01/06/2022</h5>
                        </div>
                        <div className="flex justify-between pt-4">
                            <h5 className="text-sm">Due date</h5>
                            <h5 className="text-sm">11/06/2022</h5>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="w-full">
                        <h1 className="text-4xl mt-4 w-full">Description</h1>
                        <h5 className="text-lg mt-2 w-full">
                            It seems that model literature will no longer be used in martial arts in the middle and high school classes, but they still dominate when students memorize the opening
                            lessons with the structure of introducing the author, work, and proposal. For that passage, that story, many children know that they need to memorize the available
                            analytical sentences to make it easier to get points.
                        </h5>
                    </div>
                    <div className="w-full">
                        <div className="flex">
                            <h1 className="text-4xl mt-4 w-full">Skill</h1>
                            <div className="w-[700px] flex justify-between items-center ">
                                <button className="bg-orange-400 rounded-xl px-[8px] py-[4px] cursor-pointer hover:opacity-80">Continue Practise</button>
                                <button className="bg-orange-400 rounded-xl px-[8px] py-[4px] cursor-pointer hover:opacity-80">Redo Practise</button>
                                <button className="bg-orange-400 rounded-xl px-[8px] py-[4px] cursor-pointer hover:opacity-80">View Sample Questions</button>
                            </div>
                        </div>
                        <div className="mt-2 mb-[80px]">
                            <table className="block overflow-scroll h-[320px] relative">
                                <tr className="">
                                    <th className="py-[12px] sticky top-0 bg-white">
                                        <div className="flex rounded-xl border-2 border-solid h-[36px] w-[400px] text-xl relative">
                                            <input className="rounded-xl px-[12px] py-[4px] outline-0 w-[370px]" placeholder="Search skill..."></input>
                                            <FaSearch className="absolute top-[6px] right-[10px] text-zinc-400 cursor-pointer hover:opacity-80" />
                                        </div>
                                    </th>
                                    <th className="px-[27px] sticky top-0 bg-white">Attempetd</th>
                                    <th className="px-[27px] sticky top-0 bg-white">Correct</th>
                                    <th className="px-[27px] sticky top-0 bg-white">Incorrect</th>
                                    <th className="px-[27px] sticky top-0 bg-white">Score</th>
                                    <th className="px-[27px] sticky top-0 bg-white">CA standards</th>
                                    <th className="px-[27px] sticky top-0 bg-white">Video</th>
                                    <th className="px-[27px] w-[102px] sticky top-0 bg-white">Redo</th>
                                </tr>

                                {skills.map((skill) => {
                                    return <ItemSkill skill={skill}></ItemSkill>;
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopicPage;
