"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.Status = void 0;
// Etat du jeu
var Status;
(function (Status) {
    Status[Status["Winner"] = 0] = "Winner";
    Status[Status["Loser"] = 1] = "Loser";
    Status[Status["Progress"] = 2] = "Progress";
})(Status || (exports.Status = Status = {}));
class Game {
    _words;
    _attempts; // nombre de coups
    _maxAttempts = 7; // définir le nombre de coups max en lecture seule
    _word; // mot à devnier en clair
    _hiddenWord; // caché le mot
    _status; // état du jeu Progress, Winner ou Loser
    _message; // message à destination du joueur
    constructor(_words) {
        this._words = _words;
        this.init(_words);
    }
    /**
     * init : initialiser le jeu
     *
     * @param words
     */
    init(words) {
        this._attempts = 1;
        let randomIndex = Math.floor(Math.random() * words.length);
        this._hiddenWord = words[randomIndex].hide;
        this._word = words[randomIndex].word;
        this._status = Status.Progress;
        this._message = `Voici un jeu de pendu. Vous devez deviner le mot caché en 7 coups au plus,
        vous pouvez uniquement proposer un mot, certaines lettres du mot à trouver
        sont affichées. Bonne chance ! Mot : ${this.show()}`;
    }
    // getter et setter
    get status() { return this._status; }
    set status(status) { this._status = status; }
    get message() { return this._message; }
    // gestion de l'utilisateur : setter et getter
    get attemtps() { return this._attempts; }
    /**
    * isWord : test boolean si le mot est celui que l'on cherche ou non
    *
    * @param word
    */
    isWord(word) {
        return word === this._word;
    }
    /**
     * show : affiche le mot caché à deviner
     */
    show() {
        return this._hiddenWord;
    }
    /**
     * run: logique du jeu
     *
     * @param choice
     */
    run(choice) {
        if (this.isWord(choice)) {
            this._status = Status.Winner;
        }
        else {
            this._message = `Bien essayé, mais votre mot : ${choice} n'est pas le message caché... /n
            Recommencez, ${this._hiddenWord}
            nombre de coup(s) restant: ${this._maxAttempts - this._attempts}`;
            this._attempts++;
        }
        if (this._attempts > this._maxAttempts && this._status !== Status.Winner) {
            this._status = Status.Loser;
        }
    }
    /**
     * final: affiche l'état du jeu à la fin
     */
    final() {
        if (this._status === Status.Winner) {
            return `Bravo vous avez trouvé le mot ${this._word} en ${this._attempts}`;
        }
        return `Jeu terminé ! Vous n'avez pas gagné ! Mais voici le mot caché : ${this._word}`;
    }
}
exports.Game = Game;
