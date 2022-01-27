import { useRouter } from 'next/router';
import testImages from '../../../utils/testimages';
import PhotoCard from '../../../components/PhotoCard';

const Reportage = () => {
    const router = useRouter();
    const { name } = router.query;

    return (
        <>
            <h1>Reportage {name}</h1>
            <PhotoCard
                title="Title"
                category="Category"
                image={testImages[name]}
                alt="This is alt" />
        </>
    );
};

export default Reportage;
