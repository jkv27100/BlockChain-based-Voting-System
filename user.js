
 const start = localStorage.getItem('value');
 console.log(start);

 const end = localStorage.getItem('value1');
 
 console.log(end);


if(start) {
    document.querySelectorAll('button').forEach(b => b.removeAttribute('disabled'));
 }

if(end) {
    document.querySelectorAll('button').forEach(a => a.setAttribute('disabled','disabled'));
}
 





