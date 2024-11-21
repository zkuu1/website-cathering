import User from "../models/UserModels.js";

export const getUsers = async(req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);

    }
}


export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error){
        console.log(error.message);

    }
}

export default getUsers;