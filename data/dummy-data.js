const italian = require("../assets/image/categories_meals/italian.jpg");
const quick = require("../assets/image/categories_meals/quick_and_easy.jpg");
const humberfger = require("../assets/image/categories_meals/humberfger.jpg");
const german = require("../assets/image/categories_meals/german.jpg");
const light = require("../assets/image/categories_meals/light_and_lovely.jpg");
const exotic = require("../assets/image/categories_meals/exotic.jpg");
const breakfast = require("../assets/image/categories_meals/breakfast.png");
const asian = require("../assets/image/categories_meals/asian.jpg");
const french = require("../assets/image/categories_meals/french.jpg");
const summer = require("../assets/image/categories_meals/summer.jpg");

class Category {
  constructor(id, title, imageBackground) {
    this.id = id;
    this.title = title;
    this.background = imageBackground;
  }
}

export const CATEGORIES = [
  new Category("c1", "Italian", italian),
  new Category("c2", "Quick & Easy", quick),
  new Category("c3", "Hamburgers", humberfger),
  new Category("c4", "German", german),
  new Category("c5", "Light & Lovely", light),
  new Category("c6", "Exotic", exotic),
  new Category("c7", "Breakfast", breakfast),
  new Category("c8", "Asian", asian),
  new Category("c9", "French", french),
  new Category("c10", "Summer", summer),
];
