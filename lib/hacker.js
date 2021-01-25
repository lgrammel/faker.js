/**
 *
 * @namespace faker.hacker
 */
var Hacker = function (faker) {
  var self = this;
  
  /**
   * abbreviation
   *
   * @method faker.hacker.abbreviation
   */
  self.abbreviation = () => faker.random.arrayElement(faker.definitions.hacker.abbreviation);

  /**
   * adjective
   *
   * @method faker.hacker.adjective
   */
  self.adjective = () => faker.random.arrayElement(faker.definitions.hacker.adjective);

  /**
   * noun
   *
   * @method faker.hacker.noun
   */
  self.noun = () => faker.random.arrayElement(faker.definitions.hacker.noun);

  /**
   * verb
   *
   * @method faker.hacker.verb
   */
  self.verb = () => faker.random.arrayElement(faker.definitions.hacker.verb);

  /**
   * ingverb
   *
   * @method faker.hacker.ingverb
   */
  self.ingverb = () => faker.random.arrayElement(faker.definitions.hacker.ingverb);

  /**
   * phrase
   *
   * @method faker.hacker.phrase
   */
  self.phrase = function () {

    var data = {
      abbreviation: self.abbreviation,
      adjective: self.adjective,
      ingverb: self.ingverb,
      noun: self.noun,
      verb: self.verb
    };

    var phrase = faker.random.arrayElement(faker.definitions.hacker.phrase);
    return faker.helpers.mustache(phrase, data);
  };
  
  return self;
};

module['exports'] = Hacker;