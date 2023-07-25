function userGenerator(name, lastname){
    let username="";
    for (let i =0; i<3;i++){
        username+=name[i];
    }
    for (let i =0; i<3;i++){
        username+=lastname[i];
    }
    let number = Math.floor(Math.random()*20);
    username+=number;
    console.log("Su userName es " + username);


};
userGenerator("juan", "graciano");