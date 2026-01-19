const {UserRepository}=require('../repository/index');

class UserService{
    constructor(){
        this.userRepository=new UserRepository();

    }
    async signup(data){
        try{
            const user= await this.userRepository.create(data);
            return user;
        }catch(error){
            console.log(error);
            throw error;
        }

    }
    async getUserByEmail(email){
        try{
            const user= await this.userRepository.findBy({ email: email });
            return user;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
}
module.exports=UserService