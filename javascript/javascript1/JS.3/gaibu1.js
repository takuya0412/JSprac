 function calc(ptn){
      var value1=parseInt(document.getElementById('value-1').value);
      var value2=parseInt(document.getElementById('value-2').value);
      var strtitle;
      if(ptn==1){
          strtitle="足し算の計算結果は";
          total=value1+value2;
      }
      else if(ptn==2){
          strtitle="引き算の計算結果は";
          total=value1-value2;
      }
      else if(ptn==3){
          strtitle="掛け算の計算結果は";
          total=value1*value2;
      }
      else if(ptn==4){
          strtitle="割り算の計算結果は";
          total=value1 / value2;
      }
      (function(){
        console.log("アラートより先にログが出力されます。");
      })();
      alert(strtitle+total);
      console.log(strtitle+total);
            
  }