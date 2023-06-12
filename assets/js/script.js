let log = new Log(document.querySelector(".log"))

let char = new mage("NeiGamer")
let monster = new monstrengo()

const stage = new Stage(
    char, 
    monster,
    document.querySelector(".char"),
    document.querySelector(".monster"),
    log
)

stage.start()