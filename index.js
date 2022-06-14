// code your solution here
const superbowlWin = (record) => {
    const cb =  (element) => {
        return element.result === 'W'
    }

    const winYear = record.find(cb)

    if (winYear){
        return winYear.year
    }else {
        return undefined
    }
}