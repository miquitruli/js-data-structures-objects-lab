// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driverObj, key, value) {
    return Object.assign({}, driverObj, {[key]:value});
}
//returns a driver with the original key value pairs and the new key value pair
//it does not modify the original driver, but rather returns a clone with the new data

function destructivelyUpdateDriverWithKeyAndValue(driverObj, key, value) {
    return Object.assign(driverObj, {[key]:value});
}
//updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver

function deleteFromDriverByKey(driverObj, key) {
    const newDriver = Object.assign({}, driverObj);
    delete newDriver[key];
    return newDriver;
}
//deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
//does not modify the original driver (it is non-destructive)

function destructivelyDeleteFromDriverByKey(driverObj, key) {
    const newDriver = Object.assign({}, driverObj);
    delete driverObj[key];
    return driverObj;
}
//returns driver without the delete key/value pair
//modifies the original driver