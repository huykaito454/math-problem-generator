import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage/HomePage";
import StudentPage from "./pages/StudentPage/StudentPage";
import TeacherPage from "./pages/TeacherPage/TeacherPage";
import AnswerQuestion from "./pages/StudentPage/AnswerQuestion";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main></Main>}>
                    <Route path="/" element={<HomePage></HomePage>}></Route>
                    <Route path="/teacher" element={<TeacherPage></TeacherPage>}></Route>
                    <Route path="/student" element={<StudentPage></StudentPage>}></Route>
                </Route>
                <Route path="/answer-question" element={<AnswerQuestion></AnswerQuestion>}></Route>
            </Routes>
        </>
    );
}

export default App;
