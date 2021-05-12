function checkBoxIsValid() {

  const timeChecked = $("input:checkbox[name=time]:checked").length;
  const colorChecked = $("input:checkbox[name=color]:checked").length;
  const dayChecked = $("input:checkbox[name=day]:checked").length;
  const animalChecked = $("input:checkbox[name=animal]:checked").length;
  if (!timeChecked) {
    alert("Please pick at least one time");
    return false;
  }else if (!colorChecked) {
    alert("Please pick at least one color");
    return false;
  }else if (!dayChecked) {
    alert("Please pick at least one day");
    return false;
  }else if (!animalChecked) {
    alert("Please pick at least one animal");
    return false;
  }else {
    return true;
  }
}


$(document).ready(function () {
  $("form#runeForm").submit(function (event) {
    event.preventDefault();
    if (checkBoxIsValid()) {
      $(".runeCard").hide();
      $("#runeForm").hide();
      $("#infoText").hide();
      var audio = new Audio("runes/runepics/audio/magicwand.wav");
      audio.play();
      let time1 = 0;
      let color1 = 0;
      let day1 = 0;
      let animal1 = 0;
      $("input:checkbox[name=time]:checked").each(function () {
        let time = $(this).val();
        time1 += parseInt(time);
      });
      $("input:checkbox[name=color]:checked").each(function () {
        let color = $(this).val();
        color1 += parseInt(color);
      });
      $("input:checkbox[name=day]:checked").each(function () {
        let day = $(this).val();
        day1 += parseInt(day);
      });
      $("input:checkbox[name=animal]:checked").each(function () {
        let animal = $(this).val();
        animal1 += parseInt(animal);
      });

      let rolls = time1 + color1 + day1 + animal1;

      let runes = ['fehu', "fehuReverse", 'uruz', "uruzReverse", 'thurisaz', "thurisazReverse", 'ansuz', "ansuzReverse", 'raidho', "raidhoReverse", 'kenaz', "kenazReverse", 'gebo', 'wunjo', "wunjoReverse", 'hagalaz', 'nauthiz', "nauthizReverse", 'isa', 'jera', 'eihwaz', "eihwazReverse", 'perthro', "perthroReverse", 'algiz', "algizReversed", 'sowilo', 'tiwaz', "tiwazReverse", 'berkano', "berkanoReversed", 'ehwaz', "ehwazReverse", 'mannaz', "mannazReverse", 'laguz', "laguzReverse", 'ingwaz', 'othala', "othalaReverse", 'dagaz']
      for (let index = 1; index <= rolls; index++) {
        let yourRune = (runes[Math.floor(Math.random() * runes.length)]);
        if (index === rolls) {
          $(`#${yourRune}`).show();
        }
      }
    }
  });
});
