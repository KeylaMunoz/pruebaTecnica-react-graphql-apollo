import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [alert, setAlert] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem('users')) || [];

    console.log(users);

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      setAlert(true)
      return;
    }

    const newUser = { email, password };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    setSuccess(true);

    // Redirigir al login después de 2 segundos
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 8 }}>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Correo Electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {alert && (
                <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                    Ya existe una cuenta con este correo.
                </Typography>
            )}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Registrarse
            </Button>
            <Typography component="h1" variant="h5">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login" sx={{ textDecoration: "none", color: "#1976d2" }}>
                    Ingresa aquí
                </Link>
            </Typography>
          {success && (
            <Typography color="success" variant="body2">
              Registro exitoso. Redirigiendo...
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
