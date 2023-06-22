import '../style/Shop.scss';
import Header from '../../components/Header';

const LearningAndDevelopment = () => {

  return (
        <div>
            <Header/>
            <div>
                <h2>Books</h2>
                <p>Curated Collection of Self-Help and Personal Development Books</p>
                <div>
                    <img alt='book1 image'/>
                    <h3>Book 1</h3>
                    <p>Book 1 Description</p>
                    <button>Buy now</button>
                </div>
                <div>
                    <img alt='book2 image'/>
                    <h3>Book 2</h3>
                    <p>Book 2 Description</p>
                    <button>Buy now</button>
                </div>
                <div>
                    <img alt='book3 image'/>
                    <h3>Book 3</h3>
                    <p>Book 3 Description</p>
                    <button>Buy now</button>
                </div>
            </div>
            <div>
                <h2>Courses and Programs</h2>
                <p>Online Courses and Programs for Self-Improvement</p>
                <div>
                    <img alt='Course1 image'/>
                    <h3>Course  1</h3>
                    <p>Course  1 Description</p>
                    <button>Enroll  now</button>
                </div>
                <div>
                    <img alt='Course2 image'/>
                    <h3>Course  2</h3>
                    <p>Course  2 Description</p>
                    <button>Enroll  now</button>
                </div>
                <div>
                    <img alt='Course3 image'/>
                    <h3>Course  3</h3>
                    <p>Course  3 Description</p>
                    <button>Enroll  now</button>
                </div>
            </div>
            <div>
                <h2>Coaching and Consulting</h2>
                <p>Coaching and Consulting Services for Personal Development</p>
                <div>
                    <img alt='service1 image'/>
                    <h3>service  1</h3>
                    <p>service  1 Description</p>
                    <button>Book a Session</button>
                </div>
                <div>
                    <img alt='testimonials2 image'/>
                    <h3>testimonial  1</h3>
                    <p>testimonial  1 Description</p>
                    <button>Book a Session</button>
                </div>
            </div>
        </div>
    );
};
    
export default LearningAndDevelopment;