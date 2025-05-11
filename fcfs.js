function simulateFCFS(ref, frames) {
    const queue = [];
    const inMemory = new Set();
    let faults = 0;
  
    for (let page of ref) {
      if (!inMemory.has(page)) {
        if (queue.length >= frames) {
          const removed = queue.shift();
          inMemory.delete(removed);
        }
        queue.push(page);
        inMemory.add(page);
        faults++;
      }
    }
  
    return faults;
  }
  