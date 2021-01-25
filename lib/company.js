/**
 *
 * @namespace faker.company
 */
var Company = function (faker) {
  
  var self = this;
  var f = faker.fake;
  
  /**
   * suffixes
   *
   * @method faker.company.suffixes
   */
  this.suffixes = () => // Don't want the source array exposed to modification, so return a copy
  faker.definitions.company.suffix.slice(0)

  /**
   * companyName
   *
   * @method faker.company.companyName
   * @param {string} format
   */
  this.companyName = function (format) {

    var formats = [
      '{{name.lastName}} {{company.companySuffix}}',
      '{{name.lastName}} - {{name.lastName}}',
      '{{name.lastName}}, {{name.lastName}} and {{name.lastName}}'
    ];

    if (typeof format !== "number") {
      format = faker.random.number(formats.length - 1);
    }

    return f(formats[format]);
  }

  /**
   * companySuffix
   *
   * @method faker.company.companySuffix
   */
  this.companySuffix = () => faker.random.arrayElement(faker.company.suffixes())

  /**
   * catchPhrase
   *
   * @method faker.company.catchPhrase
   */
  this.catchPhrase = () => f('{{company.catchPhraseAdjective}} {{company.catchPhraseDescriptor}} {{company.catchPhraseNoun}}')

  /**
   * bs
   *
   * @method faker.company.bs
   */
  this.bs = () => f('{{company.bsBuzz}} {{company.bsAdjective}} {{company.bsNoun}}')

  /**
   * catchPhraseAdjective
   *
   * @method faker.company.catchPhraseAdjective
   */
  this.catchPhraseAdjective = () => faker.random.arrayElement(faker.definitions.company.adjective)

  /**
   * catchPhraseDescriptor
   *
   * @method faker.company.catchPhraseDescriptor
   */
  this.catchPhraseDescriptor = () => faker.random.arrayElement(faker.definitions.company.descriptor)

  /**
   * catchPhraseNoun
   *
   * @method faker.company.catchPhraseNoun
   */
  this.catchPhraseNoun = () => faker.random.arrayElement(faker.definitions.company.noun)

  /**
   * bsAdjective
   *
   * @method faker.company.bsAdjective
   */
  this.bsAdjective = () => faker.random.arrayElement(faker.definitions.company.bs_adjective)

  /**
   * bsBuzz
   *
   * @method faker.company.bsBuzz
   */
  this.bsBuzz = () => faker.random.arrayElement(faker.definitions.company.bs_verb)

  /**
   * bsNoun
   *
   * @method faker.company.bsNoun
   */
  this.bsNoun = () => faker.random.arrayElement(faker.definitions.company.bs_noun)
  
}

module['exports'] = Company;