//Parser function
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
        if(isNumber(nums[i]) !== true){
            return false;
        }
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






//Converter function
function arrayConverter(s) {
    let n=s.length;
    let nums=s.substring(1,n-1).split(/[ ,]+/);
    let arr=[nums.length,...nums];
    return arr.join(' ');
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




function Parser(lines,inputTypes){
    if(lines.length != inputTypes.length){
        return false;
    }

    for(let i=0;i<lines.length;i++){
        if(!parsers[inputTypes[i]](lines[i])){
            return false;
        }
    }
    return true;
}

function Converter(lines,inputTypes){
    let res=[];
    for(let i=0;i<lines.length;i++){
        res.push(converters[inputTypes[i]](lines[i]));
    }
    return res.join(' ');
}





export {Parser,Converter};

