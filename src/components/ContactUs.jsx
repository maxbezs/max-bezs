import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact-us");
    }
    return (
        <button onClick={handleClick}>Contact Us</button>
    );
};
    
export default Blog;