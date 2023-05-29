exports.middleWareGlobal = (req, res, next) => {

    // console.log();
    console.log('Passei pelo middleware global');
    // console.log();

    next();
}