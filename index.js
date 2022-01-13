const app = require('express')()


app.get('/', (req, res) => {
  console.log(req)
  res.end('Hello World!')
})

app.listen(7010, () => {
  console.log('listening on port 7010')
})
