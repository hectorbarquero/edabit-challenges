/* write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

let printValue = "#";

    for (counter = 0; counter < 7; counter++) {
        console.log(printValue);
        printValue += "#";
    }