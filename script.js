const randomQuoteSet = [
'Mathematics is really beautiful and interesting!', 'Physics is The King of Science.',
'Science plays a crucial role in improving our society.', 'Chemist plays around the laboratory.', 'Biologist conducts the research on organs of the animal.'];


const theAuthor = ['Simon', 'Peter', 'Sherry', 'Cherry', 'Kingston'];

const numGen = Math.floor(Math.random() * theAuthor.length);

function changingQuote() {
  const newGenNum = Math.floor(Math.random() * theAuthor.length);

  $('#text').text(randomQuoteSet[newGenNum]);
  $('#author').text('-' + theAuthor[newGenNum]);
}

$(document).ready(function () {
  $('#text').text(randomQuoteSet[numGen]);
  $('#author').text('- ' + theAuthor[numGen]);
  $('#new-quote').on('click', changingQuote);
});