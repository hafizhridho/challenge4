const express = require('express');
const router = express.Router();

const produk = require('../models/produk');
const komponen = require('../models/komponen');
const supplier = require('../models/supplier')


router.get('/', (req, res) => res.status(200).json({message: "Selamat Datang"}));


router.get('/produk', produk.index); 
router.get('/produk/:produk_id', produk.show); 
router.post('/produk', produk.store); 
router.put('/produk/:post_id', produk.update); 
router.delete('/produk/:post_id', produk.destroy); 

router.get('/komponen', komponen.index); 
router.get('/komponen/:komponen_id', komponen.show); 
router.post('/komponen', komponen.store); 
router.put('/komponen/:komponen_id', komponen.update); 
router.delete('/komponen/:komponen_id', komponen.destroy); 

router.get('/supplier', supplier.index); 
router.get('/supplier/:supplier_id', supplier.show); 
router.post('/supplier', supplier.store); 
router.put('/supplier/:supplier_id', supplier.update); 
router.delete('/supplier/:supplier_id', supplier.destroy); 

module.exports = router;