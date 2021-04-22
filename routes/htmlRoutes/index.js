const path = require('path');
const router = require('express').Router();






// send HTML to request
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
  
// send Animals HTML to request
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});
  
// send Zookeepers html to request
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});
  
// wild card route
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
  
module.exports  = router;