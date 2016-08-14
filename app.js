/// <reference path="typings/index.d.ts" />

/* globals Clipboard */

let $inputBox = $('#get-text');

$inputBox.on('input', function () {
    let $inputVal = $inputBox.val().split('\n');

    let arr = [];

    $.each($inputVal, function (index, word) {
        arr.push($.trim(word));
    });

    let output = '';

    for (let i = 0, len = arr.length; i < len; i += 1) {
        if (!arr[i]) {
            continue;
        } else {
            output += `'${arr[i]}' + \n`;
        }
    }

    output = output.replace(/^\s+|\s+$/g, '');
    output = output.replace(/^[+]+|[+]+$/g, '');
    $('#result').val(output);
});

new Clipboard('#btn');