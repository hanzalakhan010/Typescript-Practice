function pickPeaks(arr: number[]): object {
  let pos: number[] = []
  let peaks: number[] = []
  // arr = arr.reverse();
  let increasing = undefined
  if (arr) {
    let pos_temp = 0
    let peak_temp = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]<arr[i+1] && increasing){
        increasing = false
        pos.push(pos_temp)
        peaks.push(peak_temp)
      }
      else if (arr[i]>arr[i+1] && !increasing){
        increasing  = true
        pos_temp = i
        peak_temp = arr[i]
      }
    }
  }
  return { pos, peaks }
}

// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))
console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]))