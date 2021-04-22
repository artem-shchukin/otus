function isInGroup(association, group)
{
    for(let i=0; i< group.length; i++)
    {
        let isInAssociation = isItemInAssociation(association, group[i]);

        if(isInAssociation)
        {
            return true;
        }
    }

    return false;
}

function pushLexicographic(association, item)
{
    association.push(item);

    association = association.sort();
}

function getLagestAssociation(listAssociation)
{
    listAssociation = listAssociation.sort(compareDesc);

    if (listAssociation.length > 0)
    {
        return listAssociation[0];
    }
    else
    {
        console.log("empty result");
    }    
}

function compareDesc(a, b)
{
    let value = a.length - b.length;
    
    let descValue = -value;

    return descValue;
}

function isItemInAssociation(association, item)
{
    var index = association.indexOf(item); //binarySearch(item, association);// 
    
    if (index > -1)
    {
        return true;
    }

    return false;
}

function binarySearch(value, list) {
    let first = 0;    //left endpoint
    let last = list.length - 1;   //right endpoint
    let position = -1;
    let found = false;
    let middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half
            last = middle - 1;
        } else {  //in in upper half
            first = middle + 1;
        }
    }
    return position;
}