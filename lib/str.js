export function QuotedStr1(pStr){
    
    return "'"+pStr+"'";
}

export function QuotedStr2(pStr){
    return '"'+pStr+'"';
}

export function EmptyNull(value) {
 
    if (!value) 
      return 'null';  
    
    return value;
 }
