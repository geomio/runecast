// let rune1 = "fehu"
// let rune2 = "uruz"
// let rune3 = "thurisaz"
// let rune4 = "ansuz"
// let rune5 = 'raido'
// let rune6 = 'kenaz'
// let rune7 = 'Gebo'
// let rune8 = 'wunjo'
// let rune9 = 'hagalaz'
// let rune10 = 'nauthiz'
// let rune11 = 'isa'
// let rune12 = "jera"
// let rune13 = "eihwaz"
// let rune14 = 'perthro'
// let rune15 = 'algiz'
// let rune16 = 'sowulo'
// let rune17 = 'telwaz'
// let rune18 = 'berkana'
// let rune19 = 'ewaz'
// let rune20 = 'mannaz'
// let rune21 = 'laguz'
// let rune22 = 'inguz'
// let rune23 = 'othilla'
// let rune24 = 'dagaz'
let chance = [1,2]
let reverser = (chance[Math.floor(Math.random() * chance.length)]);
$(document).ready(function(){
  $("form#runeForm").submit(function(event){
    event.preventDefault();
    $(".runeCard").hide();
    $("#runeForm").hide();
    $("#infoText").hide();
    let runes = ['fehu', 'uruz', 'thurisaz', 'ansuz', 'raido', 'kenaz', 'gebo', 'wunjo', 'hagalaz', 'natuhiz', 'isa', 'jera', 'eihwaz', 'perthro', 'algiz', 'sowulo', 'teiwaz', 'berkana', 'ehwaz', 'mannaz', 'laguz', 'inguz', 'othila', 'dagaz']

    // let yourRune = 'fehu'
    let yourRune = (runes[Math.floor(Math.random() * runes.length)]);
    // if (reverser === 0) {
    //   yourRune = yourRune + "Reversed"
    // }
    // // yourRune now === fehuReversed

    $(`#${yourRune}`).show();
  });
});

// runes[Math.random()*12]
// let reverseRune = []

// x = 1.8
// Math.ceil(x) // 2
// Math.floor(x) // 1

//to re value forme input areas
//have input values
//in form there are four areas maybe have one area = multiplyer one = addition one = subtract and one can be for an additional add 
//line above:or what fits
//total sum let that will hold combined values
//need array for runes
//need array for reversed runes that will vs out over the rune array and show either the reverse rune or rune
//or have it tagged somehow as rune or opposite rune(maybe there is a loop that finds 1 out of 24 runes then a 50 50 chance to reverse the rune instead)
//after working css to straighten things
//css for style
//text for card areas