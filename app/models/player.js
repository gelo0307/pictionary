class Player {
    sockerId;
    active;
    score;
    constructor(playerName, isAdmin) {
        this.playerName = playerName;
        this.isAdmin = isAdmin;
    }
}

module.exports = Player