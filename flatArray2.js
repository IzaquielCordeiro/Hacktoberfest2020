// Flat an array recursively

const flat = (array, current = []) => {
    if(array instanceof Array){
        for(const item of array){
            current = flat(item, current);
        }
        return current;
    }else{
        current.push(array);
        return current;
    }
}