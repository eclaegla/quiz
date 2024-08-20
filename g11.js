 

    let question =[
        {
            ques:'Which of the following is NOT a type of mutation?',
            cha:'A. Point mutation',
            chb:'B. Frameshift mutation',
            chc:'C. Silent mutation',
            chd:'D. Genetic recombination',
            dt:1
        },
    
        {
            ques:'In a dihybrid cross, what is the phenotypic ratio of the F2 generation?',
            cha:'A. 3:1',
            chb:'B. 9:3:3:1',
            chc:'C. 1:2:1',
            chd:'D.n1:1',
            dt:2
        }, 
    
        {
            ques:'Which process produces gametes?',
            cha:'A. Mitosis',
            chb:'B. Meiosis',
            chc:'C. Fertilization',
            chd:'D. Binary fission',
        },
    
        {
            ques:'The organelle responsible for energy production in a cell is the:',
            cha:'A. Nucleus',
            chb:'B. Ribosomes',
            chc:'C. Golgi apparatus',
            chd:'D. Mitochondria',
        },
    
    
    
        {
            ques:'Which phase of mitosis is characterized by the alignment of chromosomes at the equator of the cell?',
            cha:'A. Prophase',
            chb:'B. Metaphase',
            chc:'C. Anaphase',
            chd:'D. Telophase',
        },
    
    
    
        {
            ques:'The primary consumers in a food chain are:',
            cha:'A. Carnivores',
            chb:'B. Herbivores',
            chc:'C. Decomposers',
            chd:'D. Producers',
        },
    
        {
            ques:'Osmosis is the movement of:',
            cha:'A. Water from a higher to a lower solute concentration',
            chb:'B. Solutes from a higher to a lower concentration',
            chc:'C. Water from a lower to a higher solute concentration',
            chd:'D. Solutes from a lower to a higher concentration',
        },
    
        {
            ques:'Which of the following is a biotic factor in an ecosystem?',
            cha:'A. Sunlight',
            chb:'B. Temperature',
            chc:'C. Bacteria',
            chd:'D. Water',
        },
    
        {
            ques:'The process by which plants convert light energy into chemical energy is called:',
            cha:'A. Respiration',
            chb:'B. Photosynthesis',
            chc:'C. Transpiration',
            chd:'D. Fermentation',
        },
        {
    
            ques:'The hormone responsible for the development of secondary sexual characteristics in males is:',
            cha:'A. Testosterone',
            chb:'B. Estrogen',
            chc:'C. Progesterone',
            chd:'D. Growth hormone',
    },
    
       
                
                
                
                
                ]
    let num = 1
    let y = [3,4,5,6,7]
            let x = 0
            let myfun =()=>{
                num +=1 
                x+=1
                z()
    console.log();
    document.getElementById('psc').innerHTML =`Your score is ${score}/10`
               
              
            }
    
            let on = document.getElementById('one')
            let tw = document.getElementById('two')
            let tr = document.getElementById('thre')
            let fr = document.getElementById('four')
            let qu =document.getElementById('quiz')
    
    let z=()=>{
     qu.innerHTML =num +". "+ question[x].ques
     on.innerHTML = question[x].cha
     tw.innerHTML = question[x].chb
     tr.innerHTML = question[x].chc
     fr.innerHTML = question[x].chd 
    
    
     //if(num == 10){
       //document.getElementById('sc').classList.add('notification')
       // <p class="">
    //Your  score is 10/10 
        //  </p>
    
     //  }
    
    }
    
    
    z()
    
    let back = () =>{
        window.location.href ='index.html'
    }
    
    
    let score = 0
    // D onclick
    fr.onclick=()=>{
    if(fr.innerHTML =='D. Genetic recombination'){
        score+=1
        fr.style.backgroundColor ='green'
        fr.style.color ='#ffff'
        myfun()
        setTimeout(()=>{
             fr.style.backgroundColor ='#ffff'
             fr.style.color ='#000'
        },400)
        
    
    }else if(fr.innerHTML =='D. Mitochondria'){
        score+=1
        fr.style.backgroundColor ='green'
        fr.style.color ='#ffff'
        myfun()
        setTimeout(()=>{
             fr.style.backgroundColor ='#ffff'
             fr.style.color ='#000'
        },400)
    }
    
    
    
    else{
        fr.style.backgroundColor ='red'
        fr.style.color ='#ffff'
        setTimeout(()=>{
            fr.style.backgroundColor ='#ffff'
            fr.style.color ='#000'
       },400)
    
       myfun()
        
    }
    
    
    
    
    }
    
    // B ONCLICK
    
    tw.onclick =()=>{
        if(tw.innerHTML =='B. 9:3:3:1'){
            score+=1
              tw.style.backgroundColor ='green'
                 tw.style.color ='#ffff'
    
            myfun()
        setTimeout(() => {
             tw.style.backgroundColor ='#ffff'
               tw.style.color ='#000'
        },400)
        
        }else if(tw.innerHTML =='B. Meiosis'){
            score+=1
              tw.style.backgroundColor ='green'
                 tw.style.color ='#ffff'
    
            myfun()
        setTimeout(() => {
             tw.style.backgroundColor ='#ffff'
               tw.style.color ='#000'
        },400)
    
            
        }else if(tw.innerHTML =='B. Metaphase'){
            score+=1
              tw.style.backgroundColor ='green'
                 tw.style.color ='#ffff'
    
            myfun()
        setTimeout(() => {
             tw.style.backgroundColor ='#ffff'
               tw.style.color ='#000'
        },400)
    
            
        }
    
        else if(tw.innerHTML =='B. Herbivores'){
            score+=1
              tw.style.backgroundColor ='green'
                 tw.style.color ='#ffff'
    
            myfun()
        setTimeout(() => {
             tw.style.backgroundColor ='#ffff'
               tw.style.color ='#000'
        },400)
    
            
        }
    
        else if(tw.innerHTML =='B. Photosynthesis'){
            score+=1
              tw.style.backgroundColor ='green'
                 tw.style.color ='#ffff'
    
            myfun()
        setTimeout(() => {
             tw.style.backgroundColor ='#ffff'
               tw.style.color ='#000'
        },400)
    
            
        }
        else{
            tw.style.backgroundColor ='red'
            tw.style.color ='#ffff'
            setTimeout(()=>{
                tw.style.backgroundColor ='#ffff'
                tw.style.color ='#000'
           },400)
    
           myfun()
            
        }
    
       
    }
    
    // C ONCLICK
    
    tr.onclick=()=>{
        if(tr.innerHTML =='C. Bacteria'){
            score+=1
            tr.style.backgroundColor ='green'
            tr.style.color ='#ffff'
            myfun()
            setTimeout(()=>{
                 tr.style.backgroundColor ='#ffff'
                 tr.style.color ='#000'
            },400)
        
        }else{
            tr.style.backgroundColor ='red'
            tr.style.color ='#ffff'
            setTimeout(()=>{
                tr.style.backgroundColor ='#ffff'
                tr.style.color ='#000'
           },400)
    
           myfun()
            
        }
        
        
        
        
        }
    
        // A ONCLICK
    
        on.onclick=()=>{
            if(on.innerHTML =='A. Testosterone'){
                score+=1
                on.style.backgroundColor ='green'
                on.style.color ='#ffff'
              
                setTimeout(()=>{
                     on.style.backgroundColor ='#ffff'
                     on.style.color ='#000'
                },400)
                
            
            }else if(on.innerHTML =='A. Water from a higher to a lower solute concentration'){
                score+=1
                on.style.backgroundColor ='green'
                on.style.color ='#ffff'
                myfun()
                setTimeout(()=>{
                     on.style.backgroundColor ='#ffff'
                     on.style.color ='#000'
                },400)
    
            }
            
            
            else{
                on.style.backgroundColor ='red'
                on.style.color ='#ffff'
                setTimeout(()=>{
                    on.style.backgroundColor ='#ffff'
                    on.style.color ='#000'
               },400)
               myfun()
            }
            
            
            
            
            }

            let restart =()=>{
                window.location.href ='g11.html'
            }
        
    
    