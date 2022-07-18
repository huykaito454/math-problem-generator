import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Main = lazy(() => import("./components/layout/Main"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const TeacherView = lazy(() => import("./pages/TeacherView/TeacherView"));
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/teacher" element={<TeacherView></TeacherView>}></Route>
      </Route>
    </Routes>
  );
}
