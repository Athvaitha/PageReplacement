function simulateOptimal(ref, frames) {
    const memory = [];
    let faults = 0;
  
    for (let i = 0; i < ref.length; i++) {
      const page = ref[i];
  
      if (!memory.includes(page)) {
        if (memory.length < frames) {
          memory.push(page);
        } else {
          let farthest = -1;
          let indexToReplace = -1;
  
          for (let j = 0; j < memory.length; j++) {
            const futureUse = ref.slice(i + 1).indexOf(memory[j]);
            if (futureUse === -1) {
              indexToReplace = j;
              break;
            }
            if (futureUse > farthest) {
              farthest = futureUse;
              indexToReplace = j;
            }
          }
  
          memory[indexToReplace] = page;
        }
        faults++;
      }
    }
  
    return faults;
  }
  