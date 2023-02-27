'use strict';
//? Question 1

function Instagram(handleOfAuthor, content, imageLink, noOfViews, noOfLikes) {
  this.handleOfAuthor = handleOfAuthor;
  this.content = content;
  this.imageLink = imageLink;
  this.noOfViews = noOfViews;
  this.noOfLikes = noOfLikes;
}

//? Question 2

const sophyIgPost = new Instagram(
  '@real_sophy',
  'Living my best live 😊',
  'https://www.instagram.com/p/Co9__DrLsRD/?utm_source=ig_web_copy_link',
  100000,
  10000
);

const arikeIgPost = new Instagram(
  '@d_arike',
  'RTID',
  'https://www.instagram.com/reel/Co-LK_-qVWo/?utm_source=ig_web_copy_link',
  500000,
  12000
);

console.log(sophyIgPost);
console.log(arikeIgPost);

//? question 3a
const createPerson = function (name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
};
const musaDetails = createPerson('Musa Dawodu', 19, 'Lekki, Lagos');
console.log(musaDetails);

//? Question 3b
const createJambScore = function (eng, govt, lit, crk) {
  return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
  };
};
musaDetails.JambScore = createJambScore(70, 85, 82, 94);
console.log(musaDetails);

//? Question 4
//? We have 3 ways to clone an object: Spread Operator, object.assign method, Json.parse + Stringify().

const instagramPost = {
  handleOfAuthor: '@bellanaijaweddings',
  content: 'Love and Culture remains the finest mix',
  imageLink:
    'https://www.instagram.com/reel/Co_4KWCLfCw/?utm_source=ig_web_copy_link',
  noOfViews: 133000,
  noOfLikes: 8599,
};
//? Cloning using the spread operator
const instagramPost2 = { ...instagramPost };
console.log(instagramPost2);

//? cloning using the object.assign() method
const instagramPost3 = Object.assign({}, instagramPost);
console.log(instagramPost3);

//? cloning using the JSON.parse + JSON.stringify.

const instagramPost4 = JSON.parse(JSON.stringify(instagramPost));
console.log(instagramPost4);

//? Question 5
const presidentialCandidates = {
  AAC: 'Omoyele Sowore',
  ACCORD: 'Christopher Imumolen',
  APC: 'Bola Ahmed Tinubu',
  LP: 'Peter Obi',
  NNPP: 'Rabiu Kwankwaso',
  PDP: 'Atiku Abubakar',
};

const entries = Object.entries(presidentialCandidates);
console.log(entries);
for (const [key, value] of entries) {
  console.log(`${value} is the presidential candidate of ${key}`);
}
