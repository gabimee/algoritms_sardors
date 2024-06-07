function startOz(str){
  let result = "";
    
    if(str.startsWith('o') && str.charAt(0) == 'o')
        result += str.charAt(0);
 
    if(str.slice('z') && str.charAt(1) == 'z')
        result += str.charAt(1);
                        
    return result;
}