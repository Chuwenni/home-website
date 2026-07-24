const getUser = (req, res) =>{
    const user = req.user

    if(!req.user){
        return res.json({message: "Please Login First!", type: "error", user: {isLogin: false}})
    }

    return res.json({message: `Welcome back ${user.username}!`, type: "success", user: {...user, isLogin: true}})
}

module.exports = getUser