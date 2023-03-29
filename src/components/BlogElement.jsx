const BlogElement = (props) => {
    return (
        <div className="unit">
            <div className="tabphoto">
                <img src={props.image}/>
            </div>
            <div className="unit-div">
                <h3>{props.title}</h3>
                <p>{props.text} 
                    <p>{props.title + " website: "}</p>
                    <a rel="nofollow" href={props.link}>
                        {props.link}
                    </a>
                </p>
            </div>
        </div>
    );
};
    
export default BlogElement;