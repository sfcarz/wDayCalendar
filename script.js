$(document).ready(function () {

    let time = moment().format('h');
    let now = moment().format('dddd, MMMM Do');
    let $container = $('#container');

      // $('#col-1').text(time).addClass('text-secondary')
      $('#currentDay').text(now).addClass('display-4 text-light');


      for ( let i = 9; i < 13; i++) {
        let $row = $('<row>').addClass('row border-warning pb-1');

        let $div1 = $('<div>').addClass('col-1 bg-light border border-left-0 rounded border-warning text-center align-items-center justify-content-center d-flex text-secondary').text(`${i} : am`).attr('id', `hr${i}`);

        let $div10 = $('<div>').addClass('col-10 bg-info input-group');
        let $input = $('<input>').addClass(`form-control border-danger mt-1 mb-1 p-5 text-left`).attr({type: 'text', id: `input-${i}`});
        $div10.append($input);

        let $divEnd = $('<div>').addClass('col-1 bg-warning rounded');
        let $button = $('<button>').addClass(`btn btn-primary time-${i}`).attr({type: 'submit', id:`time-${i}`}).text('Submit');
        $divEnd.append($button);

        $row.append($div1, $div10, $divEnd);
        $container.append($row);

        let hour = $(`#hr${i}`).val();

        console.log(hour);

        if (`hr${i}` === time) {
          // console.log('Time is 12am');
        } else {
          // console.log('Time is Never');
        }


        $(`.time-${i}`).on('click', function (event) {
          event.preventDefault();
          let storage = [];
          let writing = $(`#input-${i}`).val().trim();
          let setWriting = localStorage.setItem(`time: ${i}`, JSON.stringify(writing));
          let getWriting = JSON.parse(localStorage.getItem(`time: ${i}`));
          // console.log(getWriting);
          if (getWriting === null) {
            return
          } else {
            storage.push(getWriting)
          }
        });


      };

});






