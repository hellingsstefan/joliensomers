// import { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Social.module.scss';
import c from 'classnames';
// import { attachAnimation } from '../../utils/transitioning';

const items = [
    {
        name: 'facebook',
        url: 'https://www.facebook.com/',
        icon: 'facebook',
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/',
        icon: 'instagram',
    },
    {
        name: 'twitter',
        url: 'https://www.twitter.com/',
        icon: 'twitter',
    },
];

function Social({ style, transitioning = false }) {
    // const socialRef = useRef(null);

    // if (transitioning)
    //     attachAnimation(socialRef, styles.transitioning);

    return (
        <div
            // ref={socialRef}
            className={c(styles.social, {
                [styles[style]]: style,
                [styles.transitioning]: transitioning,
            })}>
            {items.map(item => (
                <a
                    key={item.name}
                    className={styles.item}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer">
                        <span className={styles.name}>{item.name}</span>
                        <span className={c(styles.icon, styles[item.icon])} />
                    </a>
            ))}
        </div>
     );
}

Social.propTypes = {
    style: PropTypes.string,
    transitioning: PropTypes.bool,
};

export default Social;
