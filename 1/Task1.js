function maxItemAssociation(data) 
{ 
    console.log(data);

    if (data === null || data === undefined)
    {
        console.log("data is empty");
        
        return; 
    }

    let listAssociation = new Array();

    for (let i=0; i < data.length; i++)
    {
        let item = data[i];

        SetAssociation(listAssociation, item)
    }

    console.log(listAssociation);

    var lagestAssociation = GetLagestAssociation(listAssociation);

    console.log(lagestAssociation);
}

function SetAssociation(listAssociation, group)
{
    let index = GetAssociationIndex(listAssociation, group);

    //console.log(group);

     //console.log(index);

    if (index > -1)
    {
        // добавить группу в асоциацию
        AddToAssociation(listAssociation[index], group);
    }
    else 
    {
        // добавить новую ассоциацию
        AddNewAssociation(listAssociation, group);
    }

    //console.log(listAssociation);
}

function AddNewAssociation(listAssociation, group)
{
    var association = new Array();

    for(let i=0; i<group.length; i++)
    {
        let item = group[i];

        PushLexicographic(association, item);
    }

    listAssociation.push(association);
}

function AddToAssociation(association, group)
{
    for(let i=0; i< group.length; i++)
    {
        let item = group[i];

        if (!IsItemInAssociation(association, item))
        {
            PushLexicographic(association, item);
        }
    }
}

function GetAssociationIndex(listAssociation, group)
{
    for (let i=0; i < listAssociation.length; i++)
    {
        if (IsInGroup(listAssociation[i], group))
        {
            return i;
        }
    }

    return -1;
}

