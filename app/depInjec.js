// * The way angular js does dependancy injection by annotate for func parameters name

const searchPeople = (name, height, weight, age) => {
    return `${name}`
}

console.log(angular.injector().annotate(searchPeople));
// ['name', 'height', 'weight', 'age']