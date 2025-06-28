type Position = [number, number];

export function knightMinMovesBidirectional(
  start: Position,
  end: Position,
  boardSize: number
): number {
  if (start[0] === end[0] && start[1] === end[1]) return 0;

  const directions: Position[] = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2], [1, -2], [2, -1],
  ];

  const toKey = (x: number, y: number) => `${x},${y}`;

  let visitedStart = new Map<string, number>();
  let visitedEnd = new Map<string, number>();

  let queueStart: Position[] = [start];
  let queueEnd: Position[] = [end];

  visitedStart.set(toKey(start[0], start[1]), 0);
  visitedEnd.set(toKey(end[0], end[1]), 0);

  while (queueStart.length && queueEnd.length) {
    // Always expand the smaller frontier (optimization)
    if (queueStart.length > queueEnd.length) {
      [queueStart, queueEnd] = [queueEnd, queueStart];
      [visitedStart, visitedEnd] = [visitedEnd, visitedStart];
    }

    const nextQueue: Position[] = [];

    for (const [x, y] of queueStart) {
      const key = toKey(x, y);
      const depth = visitedStart.get(key)!;

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= boardSize || ny >= boardSize) continue;

        const newKey = toKey(nx, ny);
        if (visitedStart.has(newKey)) continue;

        // 🧠 If the other side already visited this square — we’re done!
        if (visitedEnd.has(newKey)) {
          return depth + 1 + visitedEnd.get(newKey)!;
        }

        visitedStart.set(newKey, depth + 1);
        nextQueue.push([nx, ny]);
      }
    }

    queueStart.length = 0;
    queueStart.push(...nextQueue);
  }

  return -1; // unreachable (should never happen on a valid board)
}
