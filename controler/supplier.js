const supplier = require('../models/supplier');
const Komponen = require('../models/supplier');

module.exports = {
  index: async (req, res, next) => {
    try {
      const supplier = await supplier.findAll();

      return res.status(200).json({
        status: true,
        message: 'berhasil',
        data: supplier
      });
    } catch (error) {
      next(error);
    }
  },

  show: async (req, res, next) => {
    try {
      const { supplier_id } = req.params;

      const komponen = await supplier.findOne({
        where: { id: supplier_id }
      });

      if (!supplier) {
        return res.status(404).json({
          status: false,
          message: `tidak ada supplier dengan id ${supplier_id}`,
          data: null
        });
      }

      return res.status(200).json({
        status: true,
        message: 'berhasil',
        data: supplier
      });
    } catch (error) {
      next(error);
    }
  },

  store: async (req, res, next) => {
    try {
      const { nama, alamat } = req.body;

      const supplier = await supplier.create({
        nama: nama,
        alamat: alamat
      });

      return res.status(201).json({
        status: true,
        message: 'berhasil',
        data: supplier
      });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { supplier_id } = req.params;

      const updated = await supplier.update(req.body, {
        where: { id: supplier_id }
      });

      if (updated[0] == 0) {
        return res.status(404).json({
          status: false,
          message: `tidak ada supplier dengan id ${supplier_id}`,
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
      const { supplier_id } = req.params;

      const deleted = await supplier.destroy({
        where: { id: supplier_id }
      });

      if (!deleted) {
        return res.status(404).json({
          status: false,
          message: `tidak ada supplier dengan id ${supplier_id}`,
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
