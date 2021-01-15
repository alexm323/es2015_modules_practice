


const choice = (items) => {
    let randIndex = Math.floor((Math.random() * items.length))
    return items[randIndex]
}

const remove = (items, item) => {
    let removeIndex = items.indexOf(item)
    let removedItemArr = items.splice(removeIndex, 1)
    if (removedItemArr.length === 0) {
        return undefined
    } else {
        return removedItemArr[0]
    }

}
export { choice, remove };