import type { Dispatch, SetStateAction } from 'react';

export function createBox(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  boardSize: number,
  setWestBoundary: Dispatch<SetStateAction<number>>,
  setEastBoundary: Dispatch<SetStateAction<number>>,
  setNorthBoundary: Dispatch<SetStateAction<number>>,
  setSouthBoundary: Dispatch<SetStateAction<number>>
): boolean {

  let lowerX = startX > endX ? endX : startX; 
  let upperX = startX < endX ? endX : startX;
  let lowerY = startY > endY ? endY : startY;
  let upperY = startY < endY ? endY : startY;

  setSouthBoundary((lowerX - 3) < 0 ? 0 : (lowerX - 3));
  //setSouthBoundary(5);
  setNorthBoundary((upperX + 3) > boardSize ? boardSize : (upperX + 3));
  setWestBoundary((lowerY - 3) < 0 ? 0 : (lowerY - 3));
  setEastBoundary((upperY + 3) > boardSize ? boardSize : (upperY + 3));

  return true;
}

/*export function knightMinMoves(){
  let x,y,boardSize;
  createBox(x,y,boardSize);
  let slope = 1;
    let countMoves = 0;
    const startTime2 = Date.now();
    const startTime = performance.now(); // Record the start time
    let moveCount = 0;
    let j;
    let num = 4 * slope;
    //console.log(`x: ${startPos}\n Obj: ${myObject[0].x}`);
    //while(boardObject.x.length < board*board) {
    while(chessSet.size < board * board) {
    //while() {
        if(isFinalMove) {
            console.log("Break: True");
            break;
        }

        j = 0;
        myObject[moveCount+1] = {x: [], y: []};
        if(moveCount === 1 || moveCount === 10) {
            console.log(`x: ${myObject[1].x[0]}, y: ${myObject[1].x[0]}
              );
        }

        for(let k = 0; k < myObject[moveCount].x.length; k++){
            if(k === 0 || k === 1 || k === 2) {
                console.log(`xx: ${myObject[moveCount].x[k]} yU: ${Math.abs(slope) * myObject[moveCount].x[k] - b}, yL: ${Math.abs(slope) * myObject[moveCount].x[k] + b}`);
            }
            if((myObject[moveCount].y[k] > slope * myObject[moveCount].x[k] - b && moveCount !=0) || (myObject[moveCount].y[k] < slope * myObject[moveCount].x[k] + b && moveCount != 0)) {
            } else {
                  if(k === 0 || k === 10) {
                  console.log(`Got it: ${myObject[moveCount].x[k]}, ${myObject[moveCount].y[k]} `);
                  }
                  horseMoves(myObject[moveCount].x[k], myObject[moveCount].y[k], moveCount);
            }
        }

        moveCount++;
        count++;
        if(((startPos[0] - endPos[0]) > 3) && ((count+3) < startPos[0])) {
          countX++;
        }
        if((startPos[1] - endPos[1]) > 3 && ((count+3) < startPos[1])) {
            countY++;
        }
                
    }


export defualt function checkMove(
  x: number,
  y: number,
  board: number,
  outOfBounds: number,
  chessSet: Set<string>
): boolean {
  if (
    x <= outOfBounds ||
    y <= outOfBounds ||
    x > board - 1 ||
    y > board - 1 ||
    chessSet.has(`${x},${y}`)
  ) {
    return false;
  }
  return true;
}


function horseMoves(x,y,j) {
  //const startTime = performance.now(); // Record the start time
  movesArray = [[x-1,y+2],[x-1,y-2],[x-2,y-1],[x-2,y+1],[x+1,y-2],[x+2,y-1],[x+2,y+1],[x+1,y+2]];
  let tempX,tempY;

  for(let i=0; i < movesArray.length; i++) {
    n++;
    tempX = movesArray[i][0];
    tempY = movesArray[i][1];

    if(checkMove(tempX,tempY)){
        chessSet.add(tempX + "," + tempY);
        boardObject.x.push(tempX);
        boardObject.y.push(tempY);
        myObject[j+1].x.push(tempX);
        myObject[j+1].y.push(tempY);
    } else {
                
    }
    if(tempX === endPos[0] && tempY === endPos[1]) {
        // Console.log true:
        console.log(`True: (${tempX}, ${tempY})`);
        isFinalMove = true;
        return true;
    }
}
*/
