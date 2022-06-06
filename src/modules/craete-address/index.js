import Web3 from "web3";

const createAddress = (req, res, next) => {
    console.log(req.body);
    res.status(200).send(req.body);
}

export default createAddress;
