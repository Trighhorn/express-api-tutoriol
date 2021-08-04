const app =require('express')()
const PORT = 8080

app.listen(
    PORT,
    () => console.log(`Hello from localhost:${PORT}`)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        size: 'large'
    })
})

app.post('/tshirt/:id', (req, res) =>{
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'Logo Required'})
    }
    res.send({
        tshirt: `Tshirt with your ${logo} and ID of ${id}` 
    })
})