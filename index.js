// code your solution here


function superbowlWin(record) {
    const result = record.find(function (record) {
        return record.result === "W"
    })
    if (!!result === true) {
        return result.year
    }  else if (!!result !== true) {
        return undefined
    }
}


