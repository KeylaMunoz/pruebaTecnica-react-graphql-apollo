import React from 'react';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_BY_ID } from '../../graphQL/queries';
// import { IdContext } from '../../context/IdContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


const CharacterDetail = () => {

    const { id } = useParams();
    const characterId = parseInt(id, 10); // Convierte el id a un número


    console.log('selectedCharacterId en CharacterDetail:', id);

    const { data, loading, error } = useQuery(GET_CHARACTERS_BY_ID, {
        variables: { id: characterId },
     });

     
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error! {error.message} verificar</div>;

    const character = data?.character;

    return (
        <div>

            <Card sx={{ maxWidth: 345, mt: (4)}}> 
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={character.image}
                    alt={character.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {character.status}
                        </Typography>

                        <Typography variant="body2" >
                            {character.species}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default CharacterDetail