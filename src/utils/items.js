import testImages from '@utils/testimages';

export const items = testImages.map((image, index) => ({
    label: `image ${index}`,
    title: 'Title for image',
    location: 'Location',
    category: 'Category',
    image,
    alt: `image ${index}`,
    url: `/portfolio/reportage/${index}`,
}));

export const jumbotronItems = [
    {
        label: 'Jumbotron 1',
        title: 'Batteriekopf Trail',
        location: 'Frankrijk',
        image: testImages[0],
        category: 'Category',
        alt: 'Jumbotron image',
        url: '/portfolio/reportage/0',
    },
    {
        label: 'Jumbotron 2',
        title: 'Batteriekopf Trail',
        location: 'Frankrijk',
        image: testImages[1],
        category: 'Category',
        alt: 'Jumbotron image',
        url: '/portfolio/reportage/1',
    },
    {
        label: 'Jumbotron 3',
        title: 'Batteriekopf Trail',
        location: 'Frankrijk',
        image: testImages[2],
        category: 'Category',
        alt: 'Jumbotron image',
        url: '/portfolio/reportage/2',
    },
    {
        label: 'Jumbotron 4',
        title: 'Batteriekopf Trail',
        location: 'Frankrijk',
        image: testImages[3],
        category: 'Category',
        alt: 'Jumbotron image',
        url: '/portfolio/reportage/3',
    },
    {
        label: 'Jumbotron 5',
        title: 'Batteriekopf Trail',
        location: 'Frankrijk',
        image: testImages[4],
        category: 'Category',
        alt: 'Jumbotron image',
        url: '/portfolio/reportage/4',
    },
];

const allItems = [ ...jumbotronItems, ...items ];

export default allItems;
