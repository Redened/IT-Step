document.getElementById('C1').style.backgroundColor = '#E44600';
document.getElementById('C2').style.backgroundColor = '#FC6600';
document.getElementById('C3').style.backgroundColor = '#893101';
document.getElementById('C4').style.backgroundColor = '#5e2708';

document.querySelectorAll('.circle').forEach(function(spanNumber){
     spanNumber.addEventListener('click', function() {
          document.querySelector('.color').style.backgroundColor = document.getElementById(this.id).style.backgroundColor
     })
});

