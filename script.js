/* Add any JavaScript you need to this file. */
window.onload = function() {
  let buttonAll = document.querySelector('#defaultInline1');
  let buttonRPI = document.querySelector('#defaultInline2');
  let buttonACC = document.querySelector('#defaultInline3');
  let butt1 = document.querySelector('#butt1');
  let butt2 = document.querySelector('#butt2');

  buttonAll.addEventListener('click', handleAll);
  buttonRPI.addEventListener('click', handleRPI);
  buttonACC.addEventListener('click', handleACC);
  butt1.addEventListener('click', handleRPI);
  butt2.addEventListener('click', handleACC);

  function handleAll() {
    let P1 = document.getElementById('P1');
    P1.style.display = 'block';
    let P2 = document.getElementById('P2');
    P2.style.display = 'block';
    let P3 = document.getElementById('P3');
    P3.style.display = 'block';
    let P4 = document.getElementById('P4');
    P4.style.display = 'block';

    let A1 = document.getElementById('A1');
    A1.style.display = 'block';
    let A2 = document.getElementById('A2');
    A2.style.display = 'block';
    let A3 = document.getElementById('A3');
    A3.style.display = 'block';
    let A4 = document.getElementById('A4');
    A4.style.display = 'block';
    let A5 = document.getElementById('A5');
    A5.style.display = 'block';
    let A6 = document.getElementById('A6');
    A6.style.display = 'block';
  }
  function handleRPI() {
    let P1 = document.getElementById('P1');
    P1.style.display = 'block';
    let P2 = document.getElementById('P2');
    P2.style.display = 'block';
    let P3 = document.getElementById('P3');
    P3.style.display = 'block';
    let P4 = document.getElementById('P4');
    P4.style.display = 'block';

    let A1 = document.getElementById('A1');
    A1.style.display = 'none';
    let A2 = document.getElementById('A2');
    A2.style.display = 'none';
    let A3 = document.getElementById('A3');
    A3.style.display = 'none';
    let A4 = document.getElementById('A4');
    A4.style.display = 'none';
    let A5 = document.getElementById('A5');
    A5.style.display = 'none';
    let A6 = document.getElementById('A6');
    A6.style.display = 'none';
  }
  function handleACC() {
    let P1 = document.getElementById('P1');
    P1.style.display = 'none';
    let P2 = document.getElementById('P2');
    P2.style.display = 'none';
    let P3 = document.getElementById('P3');
    P3.style.display = 'none';
    let P4 = document.getElementById('P4');
    P4.style.display = 'none';

    let A1 = document.getElementById('A1');
    A1.style.display = 'block';
    let A2 = document.getElementById('A2');
    A2.style.display = 'block';
    let A3 = document.getElementById('A3');
    A3.style.display = 'block';
    let A4 = document.getElementById('A4');
    A4.style.display = 'block';
    let A5 = document.getElementById('A5');
    A5.style.display = 'block';
    let A6 = document.getElementById('A6');
    A6.style.display = 'block';
  }
};
