const Komponen = require('../models/komponen');

module.exports = {
  index: async (req, res, next) => {
    try {
      const komponen = await Komponen.findAll();

      return res.status(200).json({
        status: true,
        message: 'berhasil',
        data: komponen
      });
    } catch (error) {
      next(error);
    }
  },

  show: async (req, res, next) => {
    try {
      const { komponen_id } = req.params;

      const komponen = await Komponen.findOne({
        where: { id: komponen_id }
      });

      if (!komponen) {
        return res.status(404).json({
          status: false,
          message: `tidak ada komponen dengan id ${komponen_id}`,
          data: null
        });
      }

      return res.status(200).json({
        status: true,
        message: 'berhasil',
        data: komponen
      });
    } catch (error) {
      next(error);
    }
  },

  store: async (req, res, next) => {
    try {
      const { nama, deskripsi } = req.body;

      const komponen = await Komponen.create({
        nama: nama,
        deskripsi: deskripsi
      });

      return res.status(201).json({
        status: true,
        message: 'berhasil',
        data: komponen
      });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { komponen_id } = req.params;

      const updated = await Komponen.update(req.body, {
        where: { id: komponen_id }
      });

      if (updated[0] == 0) {
        return res.status(404).json({
          status: false,
          message: `tidak ada komponen dengan id ${komponen_id}`,
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
      const { komponen_id } = req.params;

      const deleted = await Komponen.destroy({
        where: { id: komponen_id }
      });

      if (!deleted) {
        return res.status(404).json({
          status: false,
          message: `tidak ada komponen dengan id ${komponen_id}`,
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
