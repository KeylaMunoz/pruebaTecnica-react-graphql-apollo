import React from 'react';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_BY_ID } from '../../graphQL/queries';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Paper } from "@mui/material";
import Divider from '@mui/material/Divider';

const CharacterDetail = () => {

    const { id } = useParams();

    const { data, loading, error } = useQuery(GET_CHARACTERS_BY_ID, {
        variables: { characterID: id },
     });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error! {error.message}</div>;

    const character = data?.character;

    return (
        <div>                   
            <Paper elevation={4} sx={{ width: "60%", padding: 3, display: "grid", gridTemplateColumns: "1fr 1fr",  alignItems: "center", gap: 0, borderRadius: 2, boxShadow: 3, border: "1px solid #ccc", margin: "auto", mt: 4,}}
            >
                <div>
                    <Avatar
                    alt= {character.name}
                    src={character.image}
                    sx={{ width: 280, height: 280, ml: 4, boxShadow: '1px 4px 8px rgba(68, 67, 67, 0.8)', border: "1px solid #ccc",}} 
                    />
                </div>

                <div>
                    <Stack spacing={0.5} divider={<Divider orientation="horizontal" flexItem />}sx={{ textAlign: "left" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>{character.name}</Typography>
                    <Typography variant="h6"><b>Specie:</b> {character.species}</Typography>
                    <Typography variant="h6"><b>Gender:</b> {character.gender}</Typography>
                    <Typography variant="h6"><b>Status:</b> {character.status}</Typography>
                    <Typography variant="h6"><b>Number of Episodes:</b> {character.episode.length}</Typography>
                    <Typography variant="h6"><b>Location:</b> {character.location.name}</Typography>
                    <Typography variant="h6"><b>Origin:</b> {character.origin.name}</Typography>
                    </Stack>
                </div>
            </Paper>
                    
        </div>
    );
};

export default CharacterDetail