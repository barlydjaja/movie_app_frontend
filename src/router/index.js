import { Routes, Route } from "react-router-dom";
import Home from "../page/Home"
import Movie from "../page/Movie"
import Add from "../page/Add";
const Router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/movie/:id"} element={<Movie/>}/>
            <Route path={"/add"} element={<Add/>}/>
        </Routes>
    );
};

export default Router;
