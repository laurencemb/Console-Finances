/* 2D Array Data Set  */

var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

/* Print to Console Header */

console.log("---------------------------------------------------------------------")
console.log("Financial Analysis:")
console.log("_____________________________________________________________________")

/* TOTAL MONTHS AND TOTAL PROFIT/LOSS:
 Vars:
Var to store the total length of the arry and allow for length to be displayed in console.
Sum to store the overall total of Profit/Loss 

Code explained: 
For loop: starts at 0 the first dataset in the array, and continues through to the end due to the <.length clause
i++ ensure it jumps to the next value each time.
+= means each time it jumps up an additionis happening
finances[i][1] means it happens with the numerical value in the 2d array IF it was [i][0] i would get a long string of the 
month text values.

console.log prints it to the console. 

*/

var datasetTotalMonths = finances.length 
var sum = 0;



  console.log("Total Months= " + datasetTotalMonths);

  for (let  i = 0; i < finances.length; i++) {
   sum += finances[i][1];
    
  }

  console.log("Overall total: " + sum)

/* CALCULATING THE CHANGE: GENERATING AVAERGE FOR THE CHANGE: PICKING HIGHEST & LOWEST VALUE:

Creating variable for all the final factors required.  
variables for calculations have value of 0
*/


  let change = 0;
  let totalChange = 0
  let greatestIncreasePeriod;
  let greatestIncreaseAmount = 0;
  let greatestDecreasePeriod;
  let greatestDecreaseAmount = 0;

  /* FOR LOOP 
  Explained: 
 This starts at 1 not zero aswe are subtracting all subsequent values in turn, so we have to start from the second data set. 
it runs the length of the array due to the <.length clause, and runs through to the next due to i++

in side the loop a variable is created using let for the monthly change. it eqauls the second data minus the the previous dataset. 

next we have change previously set to equal zero as it is in a sum. and change is equal to the total sums of monthlyChange

for the greaest decrease/increase:
we use an if statement in the same loop to say that if the increase is less than the monthly change then it takes the value of the monthly change
as it loops through the full data set it will end up with the highest value assigned.  and vice versa for the lowest. 

then for the period we are doing the exact same condition but running it in the original data array. 

for the average change it is just the total of the change/by the number of changes which is one less than the original data set length. 

  */


  for (let i=1; i < finances.length; i++) {
    let monthlyChange = (finances[i][1]-finances [i-1][1]);
    change+=monthlyChange;
    
    if (greatestIncreaseAmount<monthlyChange){
      greatestIncreaseAmount = monthlyChange;
      greatestIncreasePeriod  =finances[i][0] + ": £" + finances[i][1];
    }
    else if (greatestDecreaseAmount>monthlyChange){
      greatestDecreaseAmount = monthlyChange;
      greatestDecreasePeriod = finances[i] [0] + ": £" + finances[i][1];
    }    

  }

  let averageChange = change/(datasetTotalMonths-1)



  /* console.log(change) not needed on console */
  console.log("Average Change:" + Math.round(averageChange * 100)/100)
  console.log("Greatest Increase in Profit: " + greatestIncreasePeriod)
  console.log("Greatest Decrease in Profit: " + greatestDecreasePeriod)



  /* failed attempts */
  
   /*  for ( let j = 1; j< finances.length; j++) {
  change += finances[j][1]-finances[j-1][1];

  } */

/*   for (let j = 0; j < finances.length; j++) {
    let current = finances[j][1]
    if (j>1){
      let previous = finances[j-1][1]
      change.push(current-previous)
    }
  }

  console.log (change);

  for (let k = 0; k < change.length; k++) {
    totalChange =+ change[k]
  }

  console.log(totalChange)

  console.log(averageMonthlyChange) */



/* function addsum(finances) {
  var sum =0;
  for (var i =0; i<finances.length; i++) {
    sum =+ finances[i][1]
  }
  return sum;
}

console.log(sum) */

  /* attempt 1 */

/* for  (let i=0; i < finances.length; i++) {
 sum += finances([i][1])
  
}
console.log(sum)
console.log (overallTotal) */

/* attempt 2 */

/* function sumArray(array) {
 let sum = 0

 for  (let i=0; i < finances.length; i++) {
  sum += finances[i][1];
 }

    return sum;
}

console.log(sum) */

/* attempt 3 */

/* function sumArray(array) {
let sum =0;


array.forEach(item => {sum += item;
});

console.log(sum);
return sum;
} */

