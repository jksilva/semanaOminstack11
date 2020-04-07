const express = require('express');

const app = express();

app.get('/', (req,res) => {
return res.json({
    evento: 'Semana Oministack',
    aluno: 'Jackson'
});
});

app.listen(3333);
