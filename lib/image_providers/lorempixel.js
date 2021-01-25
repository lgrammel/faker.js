/**
 *
 * @namespace lorempixel
 * @memberof faker.image
 */
var Lorempixel = function (faker) {

  var self = this;

  /**
   * image
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.image
   */
  self.image = function (width, height, randomize) {
    var categories = ["abstract", "animals", "business", "cats", "city", "food", "nightlife", "fashion", "people", "nature", "sports", "technics", "transport"];
    return self[faker.random.arrayElement(categories)](width, height, randomize);
  };
  /**
   * avatar
   *
   * @method faker.image.lorempixel.avatar
   */
  self.avatar = () => faker.internet.avatar();
  /**
   * imageUrl
   *
   * @param {number} width
   * @param {number} height
   * @param {string} category
   * @param {boolean} randomize
   * @method faker.image.lorempixel.imageUrl
   */
  self.imageUrl = function (width, height, category, randomize) {
      var width = width || 640;
      var height = height || 480;

      var url ='https://lorempixel.com/' + width + '/' + height;
      if (typeof category !== 'undefined') {
        url += '/' + category;
      }

      if (randomize) {
        url += '?' + faker.random.number()
      }

      return url;
  };
  /**
   * abstract
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.abstract
   */
  self.abstract = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'abstract', randomize);
  /**
   * animals
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.animals
   */
  self.animals = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'animals', randomize);
  /**
   * business
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.business
   */
  self.business = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'business', randomize);
  /**
   * cats
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.cats
   */
  self.cats = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'cats', randomize);
  /**
   * city
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.city
   */
  self.city = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'city', randomize);
  /**
   * food
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.food
   */
  self.food = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'food', randomize);
  /**
   * nightlife
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.nightlife
   */
  self.nightlife = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'nightlife', randomize);
  /**
   * fashion
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.fashion
   */
  self.fashion = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'fashion', randomize);
  /**
   * people
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.people
   */
  self.people = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'people', randomize);
  /**
   * nature
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.nature
   */
  self.nature = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'nature', randomize);
  /**
   * sports
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.sports
   */
  self.sports = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'sports', randomize);
  /**
   * technics
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.technics
   */
  self.technics = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'technics', randomize);
  /**
   * transport
   *
   * @param {number} width
   * @param {number} height
   * @param {boolean} randomize
   * @method faker.image.lorempixel.transport
   */
  self.transport = (width, height, randomize) => faker.image.lorempixel.imageUrl(width, height, 'transport', randomize)
}

module["exports"] = Lorempixel;
