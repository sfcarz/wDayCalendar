$(document).ready(function () {

  let time = moment().format('h a')
    let now = moment().format('dddd, MMMM Do');

    // console.log(now);
    // console.log(time);

      // $('#col-1').text(time).addClass('text-secondary')
      $('#currentDay').text(now).addClass('display-4 text-light')

      let $container = $('#container');

      for ( let i = 9; i < 17; i++) {

        let $row = $('<row>').addClass('row border-warning pb-1');

        let $div1 = $('<div>').addClass('col-1 bg-light border border-left-0 rounded border-warning text-center align-items-center justify-content-center d-flex')
        
        $row.append($div1);

        $container.append($row[i]);

      };





      $('#div-end').on('click', function (event) {
        event.preventDefault()

        let setting = [];
        let notes = $('#input').val().trim()
        let infoSet = localStorage.setItem('9:am', JSON.stringify(notes));
        let infoGet = JSON.parse(localStorage.getItem('9:am'));
        if (infoGet === null) {
          return ''
        } else {
          setting.push(infoGet)
        }

        console.log(setting);

        $('#input').val(setting);
      

        
      //   setting.push(infoGet);

      });

});