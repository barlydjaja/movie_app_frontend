import MovieForm from "../../components/MovieForm";
import {useNavigate} from "react-router-dom";

const Add = () => {
    const history = useNavigate
    const handleSuccess = () => {
        history('/')
    }
    return (
        <div style={{maxWidth: '500px', margin:"auto"}}>
            <div className={'mb-3 h3'}>Add Movie Detail</div>
            <MovieForm handleSuccess={handleSuccess}/>
        </div>
    );
};

export default Add;
