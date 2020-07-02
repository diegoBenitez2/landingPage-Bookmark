//JQuery
$('.questions__item').click(function(){
  $(this).children('.answer').slideToggle(); 
})
const $featuresCopy = document.getElementsByClassName('features__container__copys__copy');
const $featuresItems = document.getElementsByClassName('features_items__a'); 
const $featuresImgs = document.getElementsByClassName('features-img');
const $selectedItem1 = document.getElementById('sltd1');
const $selectedItem2 = document.getElementById('sltd2');
const $selectedItem3 = document.getElementById('sltd3');
const $quetions_item = document.getElementsByClassName('questions__item')
const $svgArrow = document.getElementsByClassName('svgArrow')
const $pathArrow = document.getElementsByClassName('pathsvg')
const $hamburguer = document.getElementById('hamburguer')
const $close = document.getElementById('close')
const $nav = document.getElementById('navi')
const $herder_logo =document.getElementById('header__logo')
const $form = document.getElementsByTagName('form')[0]
const $contact_email = document.getElementById("contact_email")
const $emialError = document.querySelector('span.contact__error')
const $mail = document.getElementById('mail')
const $media570= window.matchMedia("(min-width:570px) and (max-width:1023px)")
const $media2= window.matchMedia("(min-width: 320px)")
const $media3 = window.matchMedia("(min-width : 1024px)")
//MENU HAMBURGUER
$hamburguer.addEventListener('click',()=>{
 $nav.style.display ='block'
 $hamburguer.style.display = 'none'
 $herder_logo.style.display ='none'
})
//MENU CLOSE
$close.addEventListener('click',()=>{
  $nav.style.display ='none'
 $hamburguer.style.display = 'block'
 $herder_logo.style.display ='block'
})
//SECTION FEATURES
///VALIDATIONS MEDIAS QUERY
function showMedia(p,mq){
  if(mq.matches){
    // $media2.removeListener()
      if($featuresImgs[0].style.display ==='block'){
        $featuresImgs[0].style.right= p;
      }
      else if($featuresImgs[1].style.display ==='block'){
        $featuresImgs[1].style.right= p;
      }
      else{
        $featuresImgs[2].style.right= p;
      }
    
    }
}
if(matchMedia){
$media570.addListener(()=>{
    showMedia('180px',$media570)
})
$media2.addListener(()=>{
   showMedia('1.6em',$media2)
  })
  $media3.addListener(()=>{
  showMedia('1.6em',$media3)
  })
}

//ANIMATIONS FEATURES
$featuresItems[1].addEventListener('click',function(){
  $featuresCopy[0].style.animation ='copyout .5s ease forwards'
  $featuresCopy[0].style.display ='none'
  $featuresCopy[2].style.animation ='copyout .5s ease forwards'
  $featuresCopy[2].style.display ='none'
  $featuresCopy[1].style.animation ='copyin .5s ease forwards'; 
  $featuresCopy[1].style.display ='block'
  $featuresItems[2].style.fontWeight ='initial'; 
  $featuresItems[0].style.fontWeight ='initial'; 
  $featuresItems[1].style.fontWeight ='bold'; 

  //forms selected
  $selectedItem1.style.display='none'
  $selectedItem2.style.display='block'
  $selectedItem3.style.display='none'
  //images
  $featuresImgs[0].style.display='none';
  $featuresImgs[0].style.right='100%';
  $featuresImgs[2].style.display='none';
  $featuresImgs[2].style.right='100%';
  $featuresImgs[1].style.display='block';
  if($media570.matches){
    $featuresImgs[1].style.right='180px';
  }
  else {
    $featuresImgs[1].style.right='1.6em';
  }
  
})
$featuresItems[2].addEventListener('click',function(){
  $featuresCopy[0].style.animation ='copyout .5s ease forwards'
  $featuresCopy[0].style.display ='none'
  $featuresCopy[1].style.animation ='copyout .5s ease forwards'
  $featuresCopy[1].style.display ='none'
  $featuresCopy[2].style.animation ='copyin .5s ease forwards'; 
  $featuresCopy[2].style.display ='block'
  $featuresItems[1].style.fontWeight ='initial'; 
  $featuresItems[0].style.fontWeight ='initial'; 
  $featuresItems[2].style.fontWeight ='bold'; 

   //forms selected
  $selectedItem1.style.display='none'
  $selectedItem2.style.display='none'
  $selectedItem3.style.display='block'
  //images
  $featuresImgs[0].style.display='none';
  $featuresImgs[0].style.right='100%';
  $featuresImgs[1].style.display='none';
  $featuresImgs[1].style.right='100%';
  $featuresImgs[2].style.display='block';
  if($media570.matches){
    $featuresImgs[2].style.right='180px';
  }
  else{
    $featuresImgs[2].style.right='1.6em';
  }
})
$featuresItems[0].addEventListener('click',function(){
  $featuresCopy[1].style.animation ='copyout .5s ease forwards'
  $featuresCopy[1].style.display ='none'
  $featuresCopy[2].style.animation ='copyout .5s ease forwards'
  $featuresCopy[2].style.display ='none'
  $featuresCopy[0].style.animation ='copyin .5s ease forwards'; 
  $featuresCopy[0].style.display ='block'
  $featuresItems[1].style.fontWeight ='initial'; 
  $featuresItems[2].style.fontWeight ='initial'; 
  $featuresItems[0].style.fontWeight ='bold'; 

 //forms selected
  $selectedItem1.style.display='block'
  $selectedItem2.style.display='none'
  $selectedItem3.style.display='none'
  //images
  $featuresImgs[1].style.display='none';
  $featuresImgs[1].style.right='100%';
  $featuresImgs[2].style.display='none';
  $featuresImgs[2].style.right='100%';
  $featuresImgs[0].style.display='block';
  if($media570.matches){
    $featuresImgs[0].style.right='180px';
  }
  else{
    $featuresImgs[0].style.right='1.6em';
  }

})
//SECTION QUESTIONS
$quetions_item[0].addEventListener('click',()=>{
  $svgArrow[0].classList.toggle('svg')
  $pathArrow[0].classList.toggle('path')
})
$quetions_item[1].addEventListener('click',()=>{
  $svgArrow[1].classList.toggle('svg')
  $pathArrow[1].classList.toggle('path')
})
$quetions_item[2].addEventListener('click',()=>{
  $svgArrow[2].classList.toggle('svg')
  $pathArrow[2].classList.toggle('path')
})
$quetions_item[3].addEventListener('click',()=>{
  $svgArrow[3].classList.toggle('svg')
  $pathArrow[3].classList.toggle('path')
})

//VALIDATIONS EMAIL
$contact_email.addEventListener('input',(event)=>{
  if($contact_email.validity.valid){
    $emialError.innerHTML = ''
    $emialError.className= "contact__error"
  }
  else{
    showError()
  }
})

$form.addEventListener('submit',(event)=>{
  if(!$contact_email.validity.valid){
    showError()
    event.preventDefault()
  }
})

function showError(){
   $emialError.classList.add('active')
  if($contact_email.validity.valueMissing){
    $emialError.textContent = 'You must enter an email address.'
  } 
  else if($contact_email.validity.typeMismatch){
    $emialError.textContent = 'Whoops!, make sure it´s an email?'
  }
}
   
  




