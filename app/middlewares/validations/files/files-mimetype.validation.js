const { supportMimetype } = require('@config/config');

module.exports = (req, res, next) => {
  if (!supportMimetype.includes(req.files.file.mimetype) && req.files.file.name.split('.').pop() !== 'docx') {
    return res.status(404).json({ valid: false, err: 'Mimetype file not supported' });
  }
  next();
};
