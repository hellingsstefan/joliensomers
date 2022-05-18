import { useContext, useEffect } from 'react';
import { StyleContext } from '../context/StyleContext';

import items from '../utils/items';
import Gallery from '../components/Gallery';
import PhotoCard from '../components/PhotoCard';
import JumbotronSlider from '../components/JumbotronSlider';

const Home = () => {
    const setStyle = useContext(StyleContext)[1];

    useEffect(() => {
        setStyle('dark');
    });

    return (
        <>
        <JumbotronSlider items={items} />
        <div className="container">
            <Gallery type="fixed-2-3">
                {items.map((item, index) => (
                    <PhotoCard
                        key={index}
                        href={`/portfolio/reportage/${index}`}
                        title={item.title}
                        category="Category"
                        image={item.image}
                        alt="This is alt" />
                ))}
            </Gallery>
        </div>
        </>
    );
};

export default Home;
