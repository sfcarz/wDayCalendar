$(document).ready(function () {
    let time = moment().format('h:a');
    console.log(time);
    let now = moment().format('dddd, MMMM Do');
    let $container = $('#container');

      $('#currentDay').text(now).addClass('display-4 text-light');

      for ( let i = 8; i < 12; i++) {
        let $row = $('<row>').addClass('row border-warning pb-1');
        let $div1 = $('<div>').addClass('col-1 border border-left-0 rounded border-dark text-center align-items-center justify-content-center d-flex text-light hour bg-secondary').text(`${i}:am`).attr('id', `hr${i}`);
        let $div10 = $('<div>').addClass('col-10 bg-info input-group');
        let $input = $('<textarea>').addClass(`form-control text-light bg-secondary mt-1 mb-1 p-5 text-left`).attr({type: 'text', id: `input-${i}`});
        $div10.append($input);
        let $divEnd = $('<div>').addClass('col-1 bg-info rounded');
        let $button = $('<button>').addClass(`btn btn-primary saveBtn mt-5 mr-5 time-${i}`).attr({type: 'submit', id:`time-${i}`}).text('Submit');
        $divEnd.append($button);
        $row.append($div1, $div10, $divEnd);
        $container.append($row);

        let hour = $(`#hr${i}`).text();
        if (hour == time) {
          $(`#input-${i}`).removeClass('bg-success').addClass('bg-danger')
        } else {
          $(`#input-${i}`).removeClass('bg-secondary').addClass('bg-success')
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
        let $input = $('<textarea>').addClass(`form-control text-light bg-secondary mt-1 mb-1 p-5 text-left`).attr({type: 'text', id: `input-${i}`});
        $div10.append($input);
        let $divEnd = $('<div>').addClass('col-1 bg-info rounded');
        let $button = $('<button>').addClass(`btn btn-primary mt-5 mr-5 saveBtn time-${i}`).attr({type: 'submit', id:`time-${i}`}).text('Submit');
        $divEnd.append($button);
        $row.append($div1, $div10, $divEnd);
        $container.append($row);

        let hour = $(`#hr${i}`).text();
        if (hour == time) {
          $(`#input-${i}`).removeClass('bg-success').addClass('bg-danger')
        } else {
          $(`#input-${i}`).removeClass('bg-secondary').addClass('bg-success')
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
        let $input = $('<textarea>').addClass(`form-control text-light bg-secondary mt-1 mb-1 p-5 text-left`).attr({type: 'text', id: `input-${i}`});
        $div10.append($input);
        let $divEnd = $('<div>').addClass('col-1 bg-info rounded');
        let $button = $('<button>').addClass(`btn btn-primary mt-5 mr-5 saveBtn time-${i}`).attr({type: 'submit', id:`time-${i}`}).text('Submit');
        $divEnd.append($button);
        $row.append($div1, $div10, $divEnd);
        $container.append($row);

        let hour = $(`#hr${i}`).text();
        if (hour == time) {
          $(`#input-${i}`).removeClass('bg-success').addClass('bg-danger')
        } else {
          $(`#input-${i}`).removeClass('bg-secondary').addClass('bg-success')
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