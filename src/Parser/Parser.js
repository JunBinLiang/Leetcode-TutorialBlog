//Different helper functions for parsing the input
function arrayParser(s) {
    if(s.length<2){
        return false;
    }  

    let n=s.length;   
    if(s.charAt(0)!='['||s.charAt(n-1)!=']'){
        return false;
    }
    
    let nums=s.substring(1,n-1).split(/[ ,]+/);
    for(let i=0;i<nums.length;i++){
        if(!isNumber(nums[i]))return false;
    }

    return true;
}


function isNumber(s){
    return !(isNaN(s)); //return false if the string is number
}

function isString(s){
    return s.length != 0;
}

//different parsers 
///////////////////////////////////////////////////////////////










//Trim inputs
function arrayConverter(s) {
    let n=s.lengh;
    let nums=s.substring(1,n-1).split(/[ ,]+/);
    return nums.join(' ');
}


function numberConverter(s){
    return s; //return false if the string is number
}

function stringConverter(s){
    return s;
}

//different converter 
///////////////////////////////////////////////////////////////








let parsers=[arrayParser,isNumber,isString];//different parsers
let converters=[arrayConverter,numberConverter,stringConverter];//different parsers




function Parser(lines,instructions){
    if(lines.length != instructions.length){
        return false;
    }

    for(let i=0;i<lines.length;i++){
        if(parsers[instructions[i]](lines[i])){
            return false;
        }
    }
    return true;
}

function Converter(lines,instructions){
    let res=[];
    for(let i=0;i<lines.length;i++){
        res.push(converters[instructions[i]](lines[i]));
    }
    return res;
}




  


export default {Parser,Converter};

