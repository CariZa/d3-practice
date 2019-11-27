// d3.select('p')

// This will select the first matching element / paragraph and change font color to teal
// d3.select('p').style('color', 'teal')

// Select the 3rd paragraph and change font color to teal
// d3.select('p:nth-child(3)').style('color', 'teal')

// Select all and change font color to teal
// d3.selectAll('p').style('color', 'teal')

// add a unordered list to the body element of the dom
d3.select("body")
  .append('ul');

const ul = d3.select('ul');

ul.append('li').text('first');
ul.append('li').text('second');
ul.append('li').text('third');

ul.attr('class', 'list');
d3.select('.list').style('color', 'teal');