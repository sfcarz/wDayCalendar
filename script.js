$(document).ready(function () {
    let time = moment().format('h a')
    let now = moment().format('dddd, MMMM Do');
    console.log(time);
    console.log(now);

      $('#col-1').text(time).addClass('text-secondary')
      $('#currentDay').text(now).addClass('display-4 text-light')




    // console.log(`${m.toString()}`);
    // console.log(longDate);
    // console.log(random);
    // console.log(lt);
    // console.log(h);




});




let $container = $('#container')

let $row = $('<row>');

let $div1 = $('<col-1>');
let $div10 = $('<col-10>');
let $input = $('<input>');
let $divEnd = $('<div-end>');
let $btn = $('<btn>');