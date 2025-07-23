
export const checkValidate = (email,password,name=null)=>{
    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    let checkName = true;
    if(name){
        name = name.trim().replace(/\s+/g, " ");
        checkName = /^[a-zA-Z\s'-]{3,}$/.test(name);

    } 
    if(!checkName) return "Name is not Valid!"
    if(!checkEmail) return "Email is not Valid!"
    if(!checkPassword) return "Password is not Valid!"
    return null;

}