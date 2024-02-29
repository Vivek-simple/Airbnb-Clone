let switchInput=document.querySelector('#switch');
switchInput.addEventListener('click',()=>{
    let switchTaxes=document.querySelectorAll('.switchTax');
        for(let switchTax of switchTaxes){
            if(switchTax.style.display!='inline')
            switchTax.style.display='inline';
          else
          switchTax.style.display='none';
           }
})