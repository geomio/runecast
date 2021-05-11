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
// let chance = [1,2]
// let reverser = (chance[Math.floor(Math.random() * chance.length)]);
$(document).ready(function(){
  $("form#runeForm").submit(function(event){
    event.preventDefault();
    $(".runeCard").hide();
    $("#runeForm").hide();
    $("#infoText").hide();
    
    let time1 = 0;
    let color1 = 0;
    let day1 = 0;
    let animal1 = 0;

  
    $("input:checkbox[name=time]:checked").each(function(){
      let time = $(this).val();
      time1 += parseInt(time);
    });
    console.log(time1)
    $("input:checkbox[name=color]:checked").each(function(){
      let color = $(this).val();
      color1 += parseInt(color);
    });
    $("input:checkbox[name=day]:checked").each(function(){
      let day = $(this).val();
      day1 += parseInt(day);
    });
    $("input:checkbox[name=animal]:checked").each(function(){
      let animal = $(this).val();
      animal1 += parseInt(animal);
    });

    let rolls = time1  + color1 + day1 + animal1;
    console.log(rolls);

    let runes = ['fehu', "fehuReverse", 'uruz', "uruzReverse", 'thurisaz', "thurisazReverse", 'ansuz', "ansuzReverse", 'raidho', "raidhoReverse", 'kenaz', "kenazReverse", 'gebo', 'wunjo', "wunjoReverse", 'hagalaz', 'nauthiz', "nauthizReverse", 'isa', 'jera', 'eihwaz', "eihwazReverse", 'perthro', "perthroReverse", 'algiz', "algizReversed", 'sowilo', 'tiwaz', "tiwazReverse", 'berkano', "berkanoReversed", 'ehwaz', "ehwazReverse", 'mannaz', "mannazReverse", 'laguz', "laguzReverse", 'ingwaz', 'othala', "othalaReverse", 'dagaz']
    for (let index = 1; index <= rolls; index++) {
      if (index === rolls) {
        //checks conditions of parentheses
      }
    }

    // let yourRune = (runes[Math.floor(Math.random() * runes.length)]);

    $(`#${yourRune}`).show();
  });
});
