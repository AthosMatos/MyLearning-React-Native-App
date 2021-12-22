export let coin = 0;
export let coinPhoto = null
export let onsetcoin = false

export function setCoin(value) 
{
  onsetcoin=true
    if(value===1)
    {
        coinPhoto = require('../assets/moedas/poticoin.png')
        coin = 30
    }
    else if(value===5)
    {
        coinPhoto = require('../assets/moedas/5_cents.png')
        coin = 17
    }
    else if(value===10)
    {
        coinPhoto = require('../assets/moedas/10_cents.png')
        coin = 20
    } 
    else if(value===25)
    {
        coinPhoto = require('../assets/moedas/25_cents.png')
        coin = 25
    } 
    else if(value===50)
    {
        coinPhoto = require('../assets/moedas/50_cents.png')
        coin = 23
    } 
    else if(value===100)
    {
        coinPhoto = require('../assets/moedas/1_real.png')
        coin = 27
    } 
}
export function resetsetcoin()
{
    onsetcoin = false
}

var CoinB
var PhotoB
var Img
var InfoB
var HistB

export const handleCoinB = ref => CoinB = ref
export const handlePhotoB = ref => PhotoB  = ref
export const handleImg = ref => Img = ref
export const handleInfoB = ref => InfoB = ref
export const handleHistB = ref => HistB = ref

export function GetCoinB()
{
    return CoinB
}
export function GetPhotoB()
{
    return PhotoB
}
export function GetImg()
{
    return Img
}
export function GetInfoB()
{
    return InfoB
}
export function GetHistB()
{
    return HistB
}



