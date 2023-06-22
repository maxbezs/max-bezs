import '../style/Shop.scss';
import Header from '../../components/Header';

const MindfulnessAndMeditation = () => {

  return (
        <div>
            <Header/>
            <div>
                <h2>
                    Meditation and Mindfulness
                </h2>
                <p>Resources and Guides for Meditation and Mindfulness</p>
                <div>
                    Information cards about different meditation techniques and benefits of mindfulness.
                    <button>Learn More</button>
                </div>
            </div>
            <div>
                <h2>Audio and Visual Resources</h2>
                <p>
                Inspirational and Motivational Audio-Visual Resources
                </p>
                <div>
                Cards with an image, title, short description
                <button>Access Now</button>
                </div>
            </div>
        </div>
    );
};
    
export default MindfulnessAndMeditation;