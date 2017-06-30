import express from 'express';

const app = express();
const PORT = process.env.PORT || 1701;

app.get('/', (req, res) => {
	res.send('Hello World!');
})

app.listen(PORT, () => {
	console.log("App listening on port " + PORT);
})