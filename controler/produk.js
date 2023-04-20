const produk = require('../models/produk');
const produk = require('../models/produk');

module.exports = {
  index: async (req, res, next) => {
    try {
      const produk = await produk.findAll();

      return res.status(200).json({
        status: true,
        message: 'berhasil',
        data: produk
      });
    } catch (error) {
      next(error);
    }
  },

  show: async (req, res, next) => {
    try {
      const { nama, kuantitas } = req.params;

      const komponen = await produk.findOne({
        where: { nama: nama, 
            kuantitas: kuantitas },
        
      });

      if (!produk) {
        return res.status(404).json({
          status: false,
          message: `tidak ada produk dengan id ${produk_id}`,
          data: null
        });
      }

      return res.status(200).json({
        status: true,
        message: 'berhasil',
        data: produk
      });
    } catch (error) {
      next(error);
    }
  },

  store: async (req, res, next) => {
    try {
      const { nama, kuantitas,  } = req.body;

      const produk = await produk.create({
        nama: nama,
        produk: produk
      });

      await produk.addProduk(produk_id);

      return res.status(201).json({
        status: true,
        message: 'berhasil',
        data: null
      });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { nama, kuantitas } = req.params;

      const updated = await produk.update(req.body, {
        where: { nama: nama,
             kuantitas: kuantitas }
      });

      if (updated[0] == 0) {
        return res.status(404).json({
          status: false,
          message: `tidak ada produk dengan id ${produk_id}`,
          data: null
        });
      }

      return res.status(201).json({
        status: true,
        message: 'berhasil',
        data: null
      });
    } catch (error) {
      next(error);
    }
  },

  destroy: async (req, res, next) => {
    try {
      const { nama, kuantitas } = req.params;

      const deleted = await produk.destroy({
        where: { nama: nama, 
            kuantitas: kuantitas }
      });

      if (!deleted) {
        return res.status(404).json({
          status: false,
          message: `tidak ada produk dengan id ${produk_id} `,
          data: null
        });
      }

      return res.status(200).json({
        status: true,
        message: 'berhasil',
        data: null
      });
    } catch (error) {
      next(error);
    }
  }
};
