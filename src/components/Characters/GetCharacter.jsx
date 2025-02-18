import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack';
import { Box, Pagination, Card, CardMedia, CardContent } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';



const GetCharacter = ({characters, setPage, page, totalPages, }) => {

    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);


    const toggleFavorite = (character) => {
        setFavorites((prev) => {
            const isFavorite = prev.some(fav => fav.id === character.id);

            if (isFavorite) {
                return prev.filter(fav => fav.id !== character.id);
            } else {
                return [...prev, character];
            }
        });
    };

    return (
         <div>
            <Grid container spacing={5} justifyContent="center" sx={{ mt: 4 }} >
                {characters.map( (character) => (
                    <Grid item xs={12} sm={6} md={4} key={character.id}>
                        <Card  sx={{ maxWidth: 200 }}>
                            <Box sx={{cursor: 'pointer', '&:hover': {opacity: 0.9, backgroundColor: '#f5f5f5',}, }} >
                            <Link to={`/character/${character.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <CardMedia component="img" width="200" image= {character.image} alt= {character.name}/>
                                <CardContent >
                                    <Typography gutterBottom variant="h6" component="div">
                                    {character.name}
                                    </Typography>

                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                       
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {character.status} - {character.species} - {character.gender}
                                        </Typography>
                                    </div>    
                                </CardContent>
                                </Link>
                                <IconButton aria-label="add to favorites" sx={{mt: -4, ml: 20 }} onClick={() => toggleFavorite(character)} >
                                    <FavoriteIcon  sx={{ position: "flex", color: favorites.some(fav => fav.id === character.id) ? "red" : "gray" }} />
                                </IconButton>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Stack spacing={2}  mt={4} alignItems="center" >
                <Pagination count={totalPages || 1} page={page} onChange={(event, value) => setPage(value)} color="primary" />
            </Stack>
        </div>
    )
}

export default GetCharacter
