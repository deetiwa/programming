console.log("script start");
const bucket = ['coffee', 'tea', 'salt', 'rice'];

const ricePromise = new Promise(resolve, reject) =>{

    if(bucket.includes("coffee") && bucket.includes("salt") && bucket.includes("tea") && bucket.includes("rice"))
          {  resolve({value:"rice"})
}
else{
    reject("could not do it");
}
}