const slugify = require(`./utilities`).slugify;

const tags = [];

const tagsService = {
  addTag(tag = ``) {
    const slug = tag ? slugify(tag) : ``;
    if (slug && !tags.find(t => t.slug === slug)) tags.push({ tag, slug });
    return slug;
  },

  findSlug(tag = ``) {
    const t = tags.find(t => t.tag === tag);
    console.log(/*TODO*/ `@@@ tags`, tags);
    return t ? t.slug : ``;
  },

  findTag(slug = ``) {
    const tag = slug ? tags.find(t => t.slug === slug) : ``;
    return tag ? tag.tag : ``;
  },

  allTags() {
    console.log(/*TODO*/ `@@@ all tags`, tags);
    return tags;
  }
};

module.exports = { tagsService };
