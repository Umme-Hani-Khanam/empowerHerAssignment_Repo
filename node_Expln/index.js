import boxen from "boxen"
const message="I am using my first external module";
const title="Hurray!!!";
console.log(boxen(message,
    {
        title:title,
        titleAlignment:"center"
    }
));
console.log(boxen(
    message,{
        title:title,
        borderStyle:"singleDouble",
        titleAlignment:"center"
    }
))

console.log(boxen(message,{
    title:title,
    borderStyle:"round",
    titleAlignment:"center"
}))