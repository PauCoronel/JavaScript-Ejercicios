let librosDeJS = ['JavaScript for Kids: A Playful Introduction to Programming', 'Composing Software', 'Eloquent JavaScript: A Modern Introduction to Programming', 'JavaScript: The Good Parts', 'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries', 'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript', 'JavaScript: The Definitive Guide', 'You Don’t Know JS', 'JavaScript Allongé: The Six Edition'];

let lista = librosDeJS.map(function(libro){
    return `<li>${libro}</li>`;
})
console.log('<ul>'+ lista + '</ul>');