const { saveFileParse, removeFile } = require('@services/fs/fs.service');
const { resumeParserByFile } = require('@utils/resume-parser');
const { resumeLog } = require('@services/logger/logger.service');

const parseByFile = async (file) => {
  /* {valid: boolean, filePath: '',} */
  const resultSaveFile = await saveFileParse(file);
  const data = await resumeParserByFile(resultSaveFile.filePath);
  Object.entries(data).forEach((val) =>
    !val[1] ? resumeLog('info', `Property '${val[0].toUpperCase()}' not found`) : ''
  );
  await removeFile(resultSaveFile.filePath);
  return data;
};

module.exports = {
  parseByFile,
};
