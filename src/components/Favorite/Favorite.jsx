import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Grid2'
import { Card, CardMedia, CardContent } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';

const Favorite = () => {

    const [error, setError] = useState('');
    const [favoriteCharacters, setFavoriteCharacters] = useState([]);
    

    const loadFavorites = () => {
        try {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            setFavoriteCharacters(favorites);
        } catch (error) {
            setError("Error al cargar los favoritos.");
        }
    }
    
    useEffect(() => {
        loadFavorites();
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoriteCharacters));
    }, [favoriteCharacters]);

    const handleCardClick = (character) => {
        console.log("Card clickeada:", character);
     };



    return (
    <div>
        {error && <Typography variant="h6" color="error">{error}</Typography>}
            <Grid container spacing={5} justifyContent="center" sx={{ mt: 4 }} >
                {favoriteCharacters.length > 0 ? (
                    favoriteCharacters.map((character) => (
                        <Grid item xs={12} sm={6} md={4} key={character.id}>
                            <Card sx={{ maxWidth: 200 }}>
                                <Box onClick={() => handleCardClick(character)} sx={{ cursor: "pointer" }}>
                                    <CardMedia component="img" width="200" image={character.image} alt={character.name} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {character.name}
                                        </Typography>

                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                {character.status} - {character.species}
                                            </Typography>
                                            <IconButton aria-label="remove from favorites">
                                                <FavoriteIcon sx={{ color: "red"}} />
                                            </IconButton>
                                        </div>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" color="text.secondary">No tienes personajes favoritos.</Typography>
                )}
            </Grid>
        </div>
    )
}

export default Favorite