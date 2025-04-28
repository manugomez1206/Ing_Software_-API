import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('Server is runnig on port 3000');
});

app.get('/',(req,res) => {
    res.send('Bienvenido a la pagina de Manu Gomez');
});