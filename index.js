document.getElementById('btn').onclick = ()=>
    {
        y = document.querySelector('#list')
        let toggle = document.getElementById('toggle')

        if(y.classList.contains('listcon')){
            y.classList.remove('listcon')
            toggle.innerHTML ="<i class='bx bx-x-circle bx-flashing' style='color:#ff0021' ></i>"
        }
            else{
                y.classList.add('listcon')
                toggle.innerHTML ="  <i class='bx bx-menu bx-flashing' ></i>"
            }
  }


  let Home =()=>{
    window.location.href =''
  }

  let About =()=>{
    window.location.href ='about.html'

  }

  let Contact =()=>{
    window.location.href ='contact.html'
  }
  
  let  =()=>{
    window.location.href =''

  }

  // dark mode


document.getElementById('dark').onclick =()=>{
  dr = document.querySelector('#mybody')
  let darkM = document.getElementById('dark')

  if(dr.classList.contains('darkmode')){
      dr.classList.remove('darkmode')
      darkM.innerHTML ="<i class='bx bx-moon bx-flashing' style='color:#eea00d' ></i>"
  }
      else{
          dr.classList.add('darkmode')
          darkM .innerHTML ="<i class='bx bx-sun bx-spin' style='color:#eea00d'></i>  "
      } 
}

let dropdownDM =()=>{
  dr = document.querySelector('#mybody')
  let darkM = document.getElementById('dark')

  if(dr.classList.contains('darkmode')){
      dr.classList.remove('darkmode')
      darkM.innerHTML ="<i class='bx bx-moon bx-flashing' style='color:#eea00d' ></i>"
  }
      else{
          dr.classList.add('darkmode')
          darkM .innerHTML ="<i class='bx bx-sun bx-spin' style='color:#eea00d'></i>  "
      } 
}

document.getElementById('get').onclick =()=>{
  let gradeli = document.getElementById('gradeli')
  gradeli.classList.add('gradelist')
  document.getElementById('unique').style.filter= 'blur(45px)';
  document.getElementById('uni').style.filter= 'blur(45px)';
  document.getElementById('unique1').style.filter= 'blur(45px)';
  document.getElementById('footer').style.filter= 'blur(45px)';
  document.getElementById('imgcon').style.filter= 'blur(45px)';

  document.getElementById('ppp').style.display ='none'
 document.getElementById('getbtn').style.display ='none'
  
   document.getElementById('si').style.background ='#fff'

}


let myalert =()=>{
  alert(`We are Launching our New Website. We're working hard to modify our site!  Please come back soon.`)
}

let g11 =()=>{
  window.location.href ='g11.html'
}