function isValidPassword(password,username){
    const checklen = password.length;
    const checkspace = password.indexOf(' ');
    const checki = password.includes(username);
    console.log(`${checklen}" " ${checkspace}" "${checki}`);
    if(password.length<8 || (password.indexOf(' ') !== -1) || !(password.includes(username))){
        return false;
    }
     return true;
}

isValidPassword("sabdjasb123","oueworjeor");