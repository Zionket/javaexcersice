const pi = 3.14;
function rectangelArea(l,w){
    if(isNaN(l) || isNaN(w) || l<=0 || w<=0)
    {
        return "invalid input";
    }
    return l*w;
}
function rectangelPerimeter(l,w){
    if(isNaN(l) || isNaN(w) || l<=0 || w<=0){
        return "invalid input";

    }
    return 2*l*w;

}
function circeleArea (r){
    if(isNaN(r) || r <=0){

        return "invalid input";
    }
    return pi*Math.pow(r,2);
}

function circleCircumference(r){

    if(isNaN(r) || r <= 0){
        return "invalid input";
    }
    return r*pi*2;
}

const rectangelarearesult = rectangelArea(2,3);
const rectangelperimeterresult = rectangelPerimeter(2,3);
const circelearearesult = circeleArea(4);
const circlecurcumferencereult = circleCircumference(4)

console.log(`Area = ${rectangelarearesult}`)
console.log(`perimeter = ${rectangelperimeterresult}`)
console.log(`perimeter = ${circelearearesult}`);
console.log(`circumferance = ${circlecurcumferencereult}`);
