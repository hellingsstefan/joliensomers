import testImages from '../utils/testimages';
import Gallery from '../components/Gallery';
import PhotoCard from '../components/PhotoCard';

const Home = () => (
    <div className="container">
        <h1>Home</h1>
        <Gallery type="fixed-2-3">
            {testImages.map((image, index) => (
                <PhotoCard
                    key={index}
                    href={`/portfolio/reportage/${index}`}
                    title="Title"
                    category="Category"
                    image={image}
                    alt="This is alt" />
            ))}
        </Gallery>
    </div>
);

export default Home;
