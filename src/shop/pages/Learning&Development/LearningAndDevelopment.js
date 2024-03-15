import Header from '../../components/Header';

const LearningAndDevelopment = () => {

  return (
        <div>
            <Header/>
            <div style={{marginTop:"100px", flexDirection:"column", display:"flex"}}>
                <a href='/shop/learning-and-development/books'> Books</a>
                <a href='/shop/learning-and-development/couching-and-consulting'> Coaching and Consulting</a>
                <a href='/shop/learning-and-development/courses-and-programs'> Courses and Programs</a>
            </div>
            
        </div>
    );
};
    
export default LearningAndDevelopment;