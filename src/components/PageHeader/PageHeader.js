import { useContext, useEffect, useState } from 'react';
import c from 'classnames';
import classes from './pageHeader.module.scss';
import Logo from '../Logo';
import Nav from '../Nav';
import { StyleContext } from '../../context/StyleContext';

const PageHeader = () => {
    const [ style ] = useContext(StyleContext);
    const [ isShrunk, setShrunk ] = useState(false);
    const classNames = c(
        classes.pageHeader,
        classes[style],
        { [classes.compact]: isShrunk }
    );

    useEffect(() => {
        const mainElem = document.querySelector('main');
        const handler = () => {
            const positiveScrollTop = mainElem.getBoundingClientRect().top < 0;
            const negativeScrollTop = mainElem.getBoundingClientRect().top > 20;

            setShrunk(isShrunk => {
                if (!isShrunk && positiveScrollTop)
                    return true;

                if (isShrunk && negativeScrollTop)
                    return false;

                return isShrunk;
            });
        };

        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    });

    return (
        <header className={classNames}>
            <Logo />
            <Nav />
        </header>
    );
};

export default PageHeader;
