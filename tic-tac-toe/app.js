const gameBoard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')
const starCells = [
  "", "", "", "", "", "", "", "", ""
]

function createBoard() {
  startCell.forEach((cell, index) => {
    const cellElement = document.createElement ('div')
    cellElement.classList.add('square')
    gameboard.append(cellElement)
  })

}
