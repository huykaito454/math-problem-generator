import { FaVideo } from "react-icons/fa";

const ItemSkill = ({ skill }) => {
    return (
        <>
            <tr className="h-[50px] bg-gray-100">
                <td className="text-xl font-bold pl-[16px]">{skill.name}</td>
                <td className="text-center">{skill.Attempetd}</td>
                <td className="text-center">{skill.Correct}</td>
                <td className="text-center">{skill.Incorrect}</td>
                <td className="text-center">{skill.Score}</td>
                <td className="text-center">{skill.CAStandard}</td>
                <td className="flex items-center justify-center h-[50px]">
                    <FaVideo className="text-2xl align-center content-center cursor-pointer hover:opacity-80" />
                </td>
                <td className={"items-center justify-center h-[50px]"}>
                    <div
                        className={
                            skill.Score === "NA"
                                ? "text-center w-[45px] h-[25px] rounded-lg bg-neutral-500 mx-auto cursor-pointer hover:opacity-80"
                                : "text-center w-[45px] h-[25px] rounded-lg bg-orange-600 mx-auto cursor-pointer hover:opacity-80"
                        }
                    >
                        Redo
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ItemSkill;
