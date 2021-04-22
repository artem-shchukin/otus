function maxItemAssociation(data) 
{ 
   console.log(data);

    if (!data)
    {
        console.log("data is empty");
        
        return; 
    }

    let listAssociation = new Array();

    for (let i=0; i < data.length; i++)
    {
        let item = data[i];

        setAssociation(listAssociation, item)
    }

    console.log(listAssociation);

    let lagestAssociation = getLagestAssociation(listAssociation);

    console.log(lagestAssociation);
}

function setAssociation(listAssociation, group)
{
    let index = getAssociationIndex(listAssociation, group);

    if (index > -1)
    {
        // добавить группу в асоциацию
        addToAssociation(listAssociation[index], group);
    }
    else 
    {
        // добавить новую ассоциацию
        addNewAssociation(listAssociation, group);
    }
}

function addNewAssociation(listAssociation, group)
{
    var association = new Array();

    for(let i=0; i<group.length; i++)
    {
        let item = group[i];

        pushLexicographic(association, item);
    }

    listAssociation.push(association);
}

function addToAssociation(association, group)
{
    for(let i=0; i< group.length; i++)
    {
        let item = group[i];

        if (!isItemInAssociation(association, item))
        {
            pushLexicographic(association, item);
        }
    }
}

function getAssociationIndex(listAssociation, group)
{
    for (let i=0; i < listAssociation.length; i++)
    {
        if (isInGroup(listAssociation[i], group))
        {
            return i;
        }
    }

    return -1;
}

