import shrimpdata from '../../assets/test2.json'

export const shrimpcoord = []

for(let i = 0 ;i<shrimpdata.shrimpList.length;i++ )
{
    let SC = 
    {
        id:i,
        contour30:shrimpdata.shrimpList[i].contour30,
        perimeter: shrimpdata.shrimpList[i].perimeter,
        area:shrimpdata.shrimpList[i].area ,
        shrimpLength: shrimpdata.shrimpList[i].shrimpLength,
        shrimpWidth: shrimpdata.shrimpList[i].shrimpWidth,
        peso:shrimpdata.shrimpList[i].peso ,
        cor: 1,
        red: 5
    }
    shrimpcoord.push(SC)
}