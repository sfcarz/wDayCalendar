$(document).ready(function () {

    let time = moment().format('h:a');
    let now = moment().format('dddd, MMMM Do');
    let $container = $('#container');

      console.log(time);
      // $('#col-1').text(time).addClass('text-secondary')
      $('#currentDay').text(now).addClass('display-4 text-light');


      for ( let i = 9; i < 12; i++) {
        let $row = $('<row>').addClass('row border-warning pb-1');
        let $div1 = $('<div>').addClass('col-1 border border-left-0 rounded border-dark text-center align-items-center justify-content-center d-flex text-light hour bg-secondary').text(`${i}:am`).attr('id', `hr${i}`);
        let $div10 = $('<div>').addClass('col-10 bg-secondary input-group');
        let $input = $('<textarea>').addClass(`form-control text-dark bg-secondary mt-1 mb-1 p-5 text-left`).attr({type: 'text', id: `input-${i}`});
        $div10.append($input);
        let $divEnd = $('<div>').addClass('col-1 bg-warning rounded');
        let $button = $('<button>').addClass(`btn btn-primary saveBtn time-${i}`).attr({type: 'submit', id:`time-${i}`}).text('Submit');
        $divEnd.append($button);
        $row.append($div1, $div10, $divEnd);
        $container.append($row);

        let hour = $(`#hr${i}`).text();

        // console.log(hour);

        if (`hr${i}` === time) {
          // console.log('Time is 12am');
        } else {
          // console.log('Time is Never');
        }


        $(`.time-${i}`).on('click', function (event) {
          event.preventDefault();

          let writing = $(`#input-${i}`).val().trim();
          let setWriting = localStorage.setItem(`time: ${i}`, JSON.stringify(writing));
        });

        let getWriting = JSON.parse(localStorage.getItem(`time: ${i}`));
          $(`#input-${i}`).text(getWriting);

      };

      for ( let i = 12; i < 13; i++) {
        let $row = $('<row>').addClass('row border-warning pb-1');
        let $div1 = $('<div>').addClass('col-1 border border-left-0 rounded border-dark text-center align-items-center justify-content-center d-flex text-light hour bg-secondary').text(`${i}:pm`).attr('id', `hr${i}`);
        let $div10 = $('<div>').addClass('col-10 bg-info input-group');
        let $input = $('<textarea>').addClass(`form-control border-info text-dark bg-info mt-1 mb-1 p-5 text-left`).attr({type: 'text', id: `input-${i}`});
        $div10.append($input);
        let $divEnd = $('<div>').addClass('col-1 bg-warning rounded');
        let $button = $('<button>').addClass(`btn btn-primary saveBtn time-${i}`).attr({type: 'submit', id:`time-${i}`}).text('Submit');
        $divEnd.append($button);
        $row.append($div1, $div10, $divEnd);
        $container.append($row);

        let hour = $(`#hr${i}`).text();

        // console.log(hour);

        if (`hr${i}` === time) {
          // console.log('Time is 12am');
        } else {
          // console.log('Time is Never');
        }


        $(`.time-${i}`).on('click', function (event) {
          event.preventDefault();

          let writing = $(`#input-${i}`).val().trim();
          let setWriting = localStorage.setItem(`time: ${i}`, JSON.stringify(writing));
        });

        let getWriting = JSON.parse(localStorage.getItem(`time: ${i}`));
          $(`#input-${i}`).text(getWriting);

      };

      for ( let i = 1; i < 6; i++) {
        let $row = $('<row>').addClass('row border-warning pb-1');
        let $div1 = $('<div>').addClass('col-1 border border-left-0 rounded border-dark text-center align-items-center justify-content-center d-flex text-light hour bg-secondary').text(`${i}:pm`).attr('id', `hr${i}`);
        let $div10 = $('<div>').addClass('col-10 bg-info input-group');
        let $input = $('<textarea>').addClass(`form-control border-info text-dark bg-info mt-1 mb-1 p-5 text-left`).attr({type: 'text', id: `input-${i}`});
        $div10.append($input);
        let $divEnd = $('<div>').addClass('col-1 bg-warning rounded');
        let $button = $('<button>').addClass(`btn btn-primary saveBtn time-${i}`).attr({type: 'submit', id:`time-${i}`}).text('Submit');
        $divEnd.append($button);
        $row.append($div1, $div10, $divEnd);
        $container.append($row);

        let hour = $(`#hr${i}`).text();

        // console.log(hour);

        if (`hr${i}` === time) {
          // console.log('Time is 12am');
        } else {
          // console.log('Time is Never');
        }


        $(`.time-${i}`).on('click', function (event) {
          event.preventDefault();

          let writing = $(`#input-${i}`).val().trim();
          let setWriting = localStorage.setItem(`time: ${i}`, JSON.stringify(writing));
        });

        let getWriting = JSON.parse(localStorage.getItem(`time: ${i}`));
          $(`#input-${i}`).text(getWriting);

      };

});






