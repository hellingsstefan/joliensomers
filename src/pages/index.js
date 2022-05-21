import { useContext, useEffect } from 'react';
import { StyleContext } from '@context/StyleContext';

import items from '@utils/items';
import { jumbotronItems } from '@utils/items';
import Gallery from '@components/Gallery';
import PhotoCard from '@components/PhotoCard';
import JumbotronSlider from '@components/JumbotronSlider';
import Button from '@components/Button';

const Home = () => {
    const setStyle = useContext(StyleContext)[1];

    useEffect(() => {
        setStyle('dark');
    });

    return (
        <>
            <JumbotronSlider items={jumbotronItems} />
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
            <section>
                <Button
                    icon="arrow-right"
                    iconPosition="after"
                    href="/portfolio/reportage/1"
                    label="button" />
            </section>
        </>
    );
};

export default Home;
