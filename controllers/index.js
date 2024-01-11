const awesomeFunction = ((req, res, next) => {
    res.json('Awesome person');
});

const returnAnotherPerson = ((req, res, next) => {
    res.json('Super awesome person');
});

const week1Assignment = ((req, res, next) => {
    res.json('Viriya Duggan');
});


module.exports = {awesomeFunction, returnAnotherPerson, week1Assignment};
