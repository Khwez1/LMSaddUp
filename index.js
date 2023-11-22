let count = 0;

document.getElementById('increment').addEventListener('click', increment);
document.getElementById('decrement').addEventListener('click', decrement);

function increment() {
  count++;
  document.getElementById('count').innerText = count;
}

function decrement() {
  count--;
  document.getElementById('count').innerText = count;
}
