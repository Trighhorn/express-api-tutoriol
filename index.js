const app =require('express')()
const PORT = 8080

app.listen(
    PORT,
    () => console.log('Hello from localhost:' + PORT)
)

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '1',
        size: 'large'
    })
})

