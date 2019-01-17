import $ from 'jquery';
import _ from 'underscore';
import ko from 'knockout';

let b = $('#element').find('.child').hasClass('class');

_.any([1,2,3], v=>{
    return v%5===0;
});

let o = ko.observable<string|number>(50);
o('string')