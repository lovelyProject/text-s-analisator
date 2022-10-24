'use strict';

let btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
    let checkboxList = document.querySelectorAll('.check')
    let textArea = btn.previousElementSibling;
    let result = document.querySelector('#result');
    let funcList = [getWords,getSymbols,getSymbolsWithoutSpaces,getPercent];
    result.textContent = ''
    
    for (let i = 0; i < checkboxList.length; i++){
       if (checkboxList[i].checked){
        result.innerHTML += '<br>'+ funcList[i]();
       }
    }

    function getPercent(){
        let withOutSpace = textArea.value.replace(/ /gi , '');
        let obj = {};
    
        for (let elem of withOutSpace){
            if (obj[elem]){
                obj[elem]++;
            }else{
                obj[elem] = 1;
            }
        }
        
        //% букв 
        let result = '';
        for (let  key in obj){
            result += `${key} - ${(obj[key] * 100) / withOutSpace.length} % `
        }
        
        return result;
    }

    function getWords(){
        let arr2 = textArea.value.split(' ');
        let result = ' Количество слов: '+ arr2.length;

        return result;
    }

    function getSymbols(){
        let arr1 = textArea.value.split('');
        let result = ' Количество символов с пробелами: '+ arr1.length;

        return result;
    }

    function getSymbolsWithoutSpaces(){
        let withOutSpace = textArea.value.replace(/ /gi , '');
        let result = ' Количество символов без пробелов: '+ withOutSpace.length;

        return result;
    }

})