var typed=new typed(".text",{
    Strings:["Front Developer" , "Code" , "Web Developer"],
    typeSpeed: 100, 
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



const bars = document.querySelectorAll('.bar-progress');
bars.forEach(bar => {
  const progressWidth = bar.style.width;
  bar.style.transform = `scaleX(${progressWidth})`;
});


document.addEventListener("DOMContentLoaded",function(event){
  let circle=document.querySelectorAll('.circle');
  circle.forEach(function(progress){
      let degree=0;
      var targetDegree=parseInt(progress.getAttribute('data-degree'));
      let color=progress.getAttribute('data-color');
      let number=progress.querySelector('.number');
      var interval=setInterval(function(){
          degree+=1;
          if(degree>targetDegree){
              clearInterval(interval);
              return;
          }
          progress.style.background=`conic-gradient(${color} ${degree}%  ,#222 0%)`;
          number.innerHTML=degree+'<span>%</span>';
          number.style.color=color;

      },50)
  })
});

  const scriptURL = 'https://script.google.com/macros/s/AKfycbytVJufLrbIOlU-zOO0mbkPPs8X6FBIt0thQiemYcjF/dev'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

