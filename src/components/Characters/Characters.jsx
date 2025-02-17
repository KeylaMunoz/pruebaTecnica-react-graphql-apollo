import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../../graphQL/queries';
import GetCharacter from './GetCharacter';
import { useState, useContext } from 'react';
import { FilterContext } from '../../context/FilterContext';


const Characters = () => {

    const [page, setPage] = useState(1);
    const { name, status } = useContext(FilterContext);

    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { page, name, status},
    });

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const characters = data?.characters?.results;
    const totalPages = data.characters.info.pages;

    return (
        <div>
            <GetCharacter characters={characters} setPage={setPage} totalPages={totalPages} page={page} />
        </div>
    )
}

export default Characters