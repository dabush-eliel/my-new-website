const slugify = function(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, `-`) // Replace spaces with -
    .replace(/[^\w-]+/g, ``) // Remove all non-word chars
    .replace(/--+/g, `-`) // Replace multiple - with single -
    .replace(/^-+/, ``) // Trim - from start of text
    .replace(/-+$/, ``); // Trim - from end of text
};

const periodString = ({ since, till }) => {
  since = new Date(since);
  till = till ? new Date(till) : null;
  const months = [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`
  ];
  const formatted_since = months[since.getMonth()] + `-` + since.getFullYear(); // since.getDate() + '-' +
  const formatted_till = till
    ? months[till.getMonth()] + `-` + till.getFullYear()
    : `Today`;
  return `${formatted_since} - ${formatted_till}`;
};

module.exports = { slugify, periodString };
