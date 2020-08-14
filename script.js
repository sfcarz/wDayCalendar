$(document).ready(function () {
    let m = moment();

    let longDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    let random = moment().format(' M D Y, h:mm '); 
    let lt = moment().format('h a');
    let h = moment().toDate();
    // var timer = moment.duration(1000).timer({ start: true }, callback);

      console.log(lt);


    // console.log(`${m.toString()}`);
    // console.log(longDate);
    // console.log(random);
    // console.log(lt);
    // console.log(h);





});


 // August 13th 2020, 4:41:22 pm
// moment().format('dddd');                    // Thursday
// moment().format("MMM Do YY");               // Aug 13th 20
// moment().format('YYYY [escaped] YYYY');     // 2020 escaped 2020
                        