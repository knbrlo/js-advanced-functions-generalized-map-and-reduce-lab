function map(array, functionToUse) {
    return array.map(functionToUse);
}

function reduce(array, functionToUse, startPoint) {
    let value;
    if (startPoint != null) {
      value = array.reduce(functionToUse, startPoint);
    } else {
      value = array.reduce(functionToUse);
    }
    return value;
}
