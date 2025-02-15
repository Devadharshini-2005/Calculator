let value='';
    function calculate(val){
      if(val === '='){
        value=eval(value);
        document.querySelector('.js-input-box').value=`${value}`;
      }
      else if(val === 'AC'){
        value='';
        document.querySelector('.js-input-box').value=`${value}`;
      }
      else if(val === 'del'){
        value=value.slice(0,-1);
        document.querySelector('.js-input-box').value=`${value}`;
      }
      else{
        value += val;
        document.querySelector('.js-input-box').value=`${value}`;
      }
    }