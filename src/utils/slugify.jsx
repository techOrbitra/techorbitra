// /lib/slugify.js
export const slugify = (str) =>
  str
    .toLowerCase() // convert to lowercase
    .trim() // remove extra spaces
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/[^\w-]+/g, ""); // remove all non-word chars
