import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';
import { useLocation } from 'react-router-dom';

const ShowStories = () => {
    const location = useLocation();
    const type = location.pathname?.replace('/', '');
    const { isLoading, stories } = useDataFetcher(type);

    return (
        <>
        {isLoading ? (<p className="loading">Loading...</p>)
            : ( <> {stories.filter(x => x).map(({data: story}) => (
                    <Story key={story.id} story={story} />
                    ))}
                </>
            )}
        </>
    );
}

export default ShowStories;
