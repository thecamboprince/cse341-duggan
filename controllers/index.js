const awesomeFunction = ((req, res, next) => {
    res.json('Viriya Duggan');
});

const returnAnotherPerson = ((req, res, next) => {
    res.json('Super awesome person');
});



module.exports = {awesomeFunction, returnAnotherPerson};
