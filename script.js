
// one through four
const one = document.getElementById('container'),
      two = document.querySelector('#container'),
      three = document.getElementsByClassName('second'),
      four = document.querySelector('ol > .third')


const footer = document.querySelector('.footer')
footer.classList.add('main') //six
footer.classList.remove('main') //seven

const li = document.createElement('li') //eight
li.innerText = 'four' //nine
document.querySelector('ul').appendChild(li) //ten

document.querySelectorAll('ol > li').forEach(node => node.setAttribute('style', 'background-color: green;')) //eleven

footer.parentNode.removeChild(footer) //twelve

const five = one.getElementById('container').innerText = "Hello" //five
