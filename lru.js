function simulateLRU(ref, frames) {
    const memory = new Map();
    let faults = 0;
  
    for (let i = 0; i < ref.length; i++) {
      const page = ref[i];
  
      if (memory.has(page)) {
        memory.delete(page); // move to most recent
      } else {
        if (memory.size >= frames) {
          const lruPage = memory.keys().next().value;
          memory.delete(lruPage);
        }
        faults++;
      }
  
      memory.set(page, i); // update recency
    }
  
    return faults;
  }
  