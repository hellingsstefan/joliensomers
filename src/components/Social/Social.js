import PropTypes from 'prop-types';
import classes from './Social.module.scss';
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

const Social = ({ style }) => (
    <div className={c(classes.social, { [classes[style]]: style })}>
        {items.map(item => (
            <a
                key={item.name}
                className={classes.item}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer">
                <span className={classes.name}>{item.name}</span>
                <span className={c(classes.icon, classes[item.icon])} />
            </a>
        ))}
    </div>
);

Social.propTypes = {
    style: PropTypes.string,
};

export default Social;
