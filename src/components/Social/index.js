import PropTypes from 'prop-types';
import styles from './Social.module.scss';
import c from 'classnames';

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

function Social({ style }) {

    return (
        <div className={c(styles.social, { [styles[style]]: style })}>
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
};

export default Social;
