const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'idx':1,
            'image':'https://placeimg.com/64/64/22',
            'name':'김보람',
            'birthday':'000506',
            'gender':'남자',
            'class':'채널매니저'
        },
        {
            'idx':2,
            'image':'https://placeimg.com/64/64/23',
            'name':'이조은',
            'birthday':'000125',
            'gender':'여자',
            'class':'회사원'
        },
        {
            'idx':3,
            'image':'https://placeimg.com/64/64/24',
            'name':'임세빈',
            'birthday':'990501',
            'gender':'여자',
            'class':'회사원'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));