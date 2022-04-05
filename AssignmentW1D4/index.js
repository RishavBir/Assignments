                                           //Card Problem
  1                                         

  const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
       suit: "diamond",
       value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

//function findCard(value, suit) {
   // for (let i = 0;i < cardData.length; i++) {
     
      //  if (cardData[i].value===value && cardData[i].suit===suit) {
       //     return true
       // }
       
   // }
   // return false
 //}
 //console.log(findCard(5,'heart'))
// console.log(findCard(10, 'club'))

 //**************************************************************************************** */

 //3

 //function myCount(cardData)
 //{let arr = {}
//for (let i=0; i<async.length;i++){
  //arr[ans[i]]=0
//}
//for(let i=0; i<ans.length; i++){
 // for(let i=0; i<ans.length; i++){
   // for(let j =0; j<cardData.length; j++){
     // if (cardData[j].suit===ans[i]){
      //  arr[ans[i]]++
      //}
    //}
//  }return arr
//}
//console.log(myCount(cardData))}

//***********************************************************************************************/
//4

const getSavc =()=>{
  const sav ={};
  for(let i=0; i<cardData.length; i++){
    let hasAlready = false;
    if(sav.hasOwnProperty(cardData[i].suit)){
      hasAlready = true
      sav[cardData[i].suit].push(cardData[i].value)
    }
  if (hasAlready ==false)
  sav[cardData[i].suit]=[cardData[i].value]
} return sav
}
  console.log(getSavc())                                           

                                               //PLACES
//1

//const places = ['delhi','gurgaon','jaipur','pune']
//const[a,...b]=places
//console.log([...b])



//************************************************************************************************* */
//2
//const morePlaces =['kochi','hydrabad','Shimla','srinagar']
//morePlaces.splice(0,0,'delhi')
//console.log(morePlaces)
//***************************************************************************************************/

//3

//const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
//const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
//const [a,...b]=morePlaces
//const [x,y,z,...w]=places
//console.log([...b,x,y,z])
//************************************************************************************************** */

//4

//const myData ={name: "Rahul",
               // age :20,
                // gender:"male",
              //  address:{pinCode:123455,
              //  city:"delhi"},
          //  likes:["music","movies"]
          //      }

//let mypinCode=myData.address.pinCode;                                       
//console.log(mypinCode);

//5

//let myLike =myData.Likes[1];
//console.log(myLike)

//************************************************************************************************************ */


 