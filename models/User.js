let User = ({username,email,password}) => {
    this.username = username;
}

User.prototype.getUserName = () => {console.log(User.username);}

module.exports = User;