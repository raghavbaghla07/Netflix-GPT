import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTsearch from './GPTsearch';
import { useSelector } from 'react-redux';

const Browse = () => {

    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    return (
        < div >
            <Header />
            {
                showGptSearch ? (
                    <GPTsearch />
                ) : (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                )}


        </div >
    );
};

export default Browse