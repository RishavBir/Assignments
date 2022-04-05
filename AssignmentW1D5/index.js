const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop 
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )


// ==================================== 0 ==================================== //

                            // by using for loop

function profileLookup(name, property) 
    //write your code here
{
    for( let i=0; i<facebookProfiles.length; i++){
    if (facebookProfiles[i].firstName!==name){
        return "person does not exist"
    }else if (!facebookProfiles[i][property])
        {
        return "no such property"
        }
    else { return
                facebookProfiles[i][property]
            }
}
profileLookup["Suyash", "number"]
console.log(profileLookup["Suyash","number"])

// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket

// ================================== 1 ====================================== //

                            // by using for loop

function getNamesFromGurgaon(facebookProfiles) 
    //write your code here
{for (let i=0; i<facebookProfiles.length; i++){
    let x =facebookProfiles[i].address.location;
    if(x=='gurgaon'){
        return[facebookProfiles[i].firstName +" "+
    facebookProfiles[i].lastName]
    }
}
}
console.log(getNamesFromGurgaon(facebookProfiles))

                                  //  By using Higher order

    let newArr =facebookProfiles.filter(function(facebookProfiles){
        return facebookProfiles.address.location=="gurgaon"
    }).map((facebookProfiles)=> facebookProfiles.firstName+""+ facebookProfiles.lastName)
        console.log(newArr)

//using higher order

//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']

// ==================================2 ====================================== //

                            // by using for loop

function findFullName(stateName) 
    //write your code here
const Person ={ 
                stateName:"haryana",
                residents:"gurgaon",
                id: "222222222",
                fullName:function()
                    {console.log(this.stateName+""+this.residents);}
            }
            console.log(Person.id);
            Person.fullName()
// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents

// ================================== 3 ====================================== //

                                 // by using for loop

function getDLStatus(facebookProfiles) 
    //write your code here
{ for(let i=0; i<facebookProfiles.length; i++)
{ let x= facebookProfile[i].hasDrivingLicense
    let y= facebookProfiles[i].firstName +""+
        facebookProfiles [i].lastName
    if(x==true){
console.log([y+'-D/L'])
    } else if(x==false){
        console.log([y+'-ND/L'])
}
}
}
console.log(getDLStatus())

                                // by using Higher order

    const output1 =  facebookProfiles.filter((x)=> x.address.location=="gurgaon").map((x)=>{
        if (x.lastName== undefined){
            x.lastName=""
        }
        if (x.hasDrivingLicense ==true){
            return x.firstName +""+ x.lastName + "-D/L"
        }
        else {
            return x.firstName +""+ x.lastName + "-No D/L"
        }
         });

//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// =================================== 4 ===================================== //
                             

                                // By using for loop

 function getFullName()
 { let array =[]
    for(let i=0; i<facebookProfiles.length; i++)
{ if (typeof facebookProfiles[i].lastName=="string")
{ array.push(facebookProfiles[i].firstName+""+facebookProfiles[i].lastName)}
else
{array.push(facrbookProfiles[i].firstName)}
}
console.log(array)
}
getFullName
                             

                               // By using higher order

function getFullName(facebookProfiles) 
    //write your code here
{const x = facebookProfiles.map((y) => 
    y.firstName +""+ y.lastName)};
console.log(x);
// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]


// ===================================== 5 =================================== //

                            // BY USING FOR LOOP

function getLikes(facebookProfiles) 
    //write your code here
 {let arr=[]
for (let i=0; i<facebookProfiles.length; i++)
    { if (typeof facebookProfiles[i].likes==="object")
{ arr.push (...facebookProfiles[i].likes)
}
} console.log(arr)
}
getLikes(facebookProfiles)

// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ====================================== 6 ================================== //

                        // BY USING FOR LOOP

function getNameFromDelhiWithDL(facebookProfiles) 
    //write your code here
{for (let i=0; i<facebookProfiles.length; i++){
    let x =facebookProfiles[i].address.location.hasDrivingLicense
    if(x=='delhi'){
        return[facebookProfiles[i].firstName +""+
    facebookProfiles[i].lastName.hasDrivingLicense]
    }
}
}
console.log(getNamesFromDelhi)

//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ======================================= 7 ================================= //

                                        // BY USING FOR LOOP

function getNameOfDriverWithoutDL(facebookProfiles) 
    //write your code here
     {
       for(let i=0; i<facebookProfiles.length; i++){
         // for (j=0; i<facebookProfiles.; j++)
           let x = facebookProfiles.likes;
           let y = facebookProfiles.hasDrivingLicence;
                                    
          if (x ==  "driving" ){
                                    
         return  facebookProfiles.firstName
          }
                                    
        }
         }
                                    
     console.log(getNameOfDriverWithoutDL(facebookProfiles))

                                       // BY USING HIGHER ORDER

     function getNameOfDriverWithoutDL(facebookProfiles) {
        //write your code here
        let result= facebookProfiles.find((element)=>(element.hasDrivingLicense===false&&element.likes.indexOf('driving')!==-1))
        return result===undefined?"No such Person":(result.lastName===undefined?result.firstName:result.firstName+" "+result.lastName)
    }
    
    
    console.log(getNameOfDriverWithoutDL(facebookProfiles));
}
//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh