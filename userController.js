const User = require('./userSchema')

const userController={
    getUser:async (req, res,) =>{
        const user = await User.find()
        res.send(user)
    },
    addUser:async (req, res) =>{
        const user = User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        res.send('user added successfully')
    },
    updateUser:async (req, res) => {
        await User.updateOne(
            {name:req.body.name},
            {
                name:req.body.newName,
                email:req.body.email,
                password:req.body.password
            }
        )
        res.send(`user ${req.body.name} is now updated to ${req.body.newName}`)
    },
    deleteUser: async (req, res) =>{
        const user_to_delete = await User.deleteOne({name:req.body.name})
        if(user_to_delete.deletedCount>=0)
        res.send(`user ${req.body.name} has been deleted`)
        else res.send('error')
    },
}

module.exports= userController