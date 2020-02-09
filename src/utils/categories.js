const slugify = require(`./utilities`).slugify;

const categories = [];

const categoriesService = {
  addCategory(category = ``) {
    const slug = category ? slugify(category) : ``;
    if (slug && !categories.find(t => t.slug === slug))
      categories.push({ category, slug });
    return slug;
  },

  findSlug(category = ``) {
    const c = category ? categories.find(c => c.category === category) : ``;
    return c ? c.category : ``;
  },

  findCategory(slug = ``) {
    const category = slug ? categories.find(t => t.slug === slug) : ``;
    return category ? category.category : ``;
  },

  allCategories() {
    return categories;
  }
};

module.exports = { categoriesService };
