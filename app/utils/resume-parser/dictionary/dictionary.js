const specificDate = [
  { re: 'present', fullName: 'present', shortName: 'present', number: 'present' },
  { re: 'now', fullName: 'now', shortName: 'now', number: 'present' },
  { re: 'current', fullName: 'current', shortName: 'current', number: 'present' },
  { re: 'nowedays', fullName: 'nowedays', shortName: 'nowedays', number: 'present' },
  { re: 'today', fullName: 'today', shortName: 'today', number: 'present' },
];

module.exports = {
  title: {
    skills: ['Skills', 'Skills & Expertise', 'Skills Summary'],
    technology: ['Technology', 'Technologies'],
    experience: ['Experience', 'Job Experience', 'Career History'],
    education: ['Education', 'Educations', 'EDUCATION', 'Education and Training', 'EDUCATION AND TRAINING'],
    languages: ['Languages'],
    courses: ['Courses'],
    projects: ['Projects'],
    personalInfo: ['personal info', 'personal information'],
    trainings: ['Trainings', 'Training'],
  },
  regexp: {
    name: `(?<![.\\-])\\b([А-ЯA-Z][а-яa-z]+[\\s\n][А-ЯA-Z][а-яa-z]+)[\\s\n\.]`,
    nameUpperCase: `(?<![.\\-])\\b([А-ЯA-Z][А-ЯA-Z]+[\\s\n][А-ЯA-Z][А-ЯA-Z]+)[\\s\n\.]`,
    nameFlags: ``,
    experiencePeriod: `((?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|June?|July?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)?(\\s)+(\\d){2,}|(\\d){1,2}[.\\/-](\\d){2,4})(\\s*(–|-|till|to|\\.\\.)\\s*|\\s+)((?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|June?|July?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)?(\\s)+(\\d){2,}|(\\d){1,2}[.\\/-](\\d){2,4}|(now|present|current|today))`,
    company: '([A-Z]\\w{2,}([\\s\\.\\n]?|[\\s\\.\\n\\/]\\w+[\\.\\s\\n]))',
    companyWordReplacer: 'pro\\w+|team|soft\\w+|internal|custo\\w+',
    companySpecialSymbolReplacer: `\\.|\\/`,
  },
  specificDate: specificDate,
  months: [
    { re: 'Jan(?:uary)?', fullName: 'January', shortName: 'Jan', number: '01' },
    { re: 'Feb(?:uary)?', fullName: 'February', shortName: 'Feb', number: '02' },
    { re: 'Mar(?:ch)?', fullName: 'March', shortName: 'Mar', number: '03' },
    { re: 'Apr(?:il)?', fullName: 'April', shortName: 'Apr', number: '04' },
    { re: 'May', fullName: 'May', shortName: 'May', number: '05' },
    { re: 'Jun(?:e)?', fullName: 'June', shortName: 'June', number: '06' },
    { re: 'Jul(?:y)?', fullName: 'July', shortName: 'July', number: '07' },
    { re: 'Aug(?:ust)?', fullName: 'August', shortName: 'Aug', number: '08' },
    { re: 'Sept(?:ember)?', fullName: 'September', shortName: 'Sept', number: '09' },
    { re: 'Sep(?:ember)?', fullName: 'September', shortName: 'Sept', number: '09' },
    { re: 'Oct(?:ober)?', fullName: 'October', shortName: 'Oct', number: '10' },
    { re: 'Nov(?:ember)?', fullName: 'November', shortName: 'Nov', number: '11' },
    { re: 'Dec(?:ember)?', fullName: 'December', shortName: 'Dec', number: '12' },
    ...specificDate,
  ],
};
