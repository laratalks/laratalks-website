"use strict";

var LaraTalks = LaraTalks || function(config) {this.config = config;};

LaraTalks.prototype.begin = function () {

    var parent = this;

    $(document).ready(function(){

        parent.insertRandomPeople();

    });

    this.prettyHeader();

};

LaraTalks.prototype.insertRandomPeople = function() {

    var people = _.shuffle(this.config.PEOPLE).slice(0, 9),
        $template = this.config.$RANDOM_PEOPLE_TEMPLATE,
        $place = this.config.$RANDOM_PEOPLE_PLACE;

    var _compiled = _.template($template.html());

    $place.hide();

    $place.html(_compiled({ people : people }));

    $place.fadeIn(400);

};

var config = {
    $RANDOM_PEOPLE_TEMPLATE : $('#people-random-sort-template'),
    $RANDOM_PEOPLE_PLACE : $("#random-people-place"),
    $FADEABLE_CONTENT : $('.masthead__content'),
    PEOPLE : [
        {
            name : "بهزاد شعبانی",
            link : "https://twitter.com/Behzad_sh",
            image : "static/img/people/behzad.jpeg",
            description : "توسعه دهنده در ibartar.com"
        },
        {
            name : "محمدرضا شادمان",
            link : "http://twitter.com/bigsinoos",
            image : "static/img/people/mohammad_reza.jpeg",
            description : "توسعه دهنده در ibartar.com"
        },
        {
            name : "مرتضی پروینی",
            link : "http://twitter.com/imorteza",
            image : "static/img/people/morteza.jpeg",
            description : "توسعه دهنده لاراول"
        },
        {
            name : "حسن گیلک",
            link : "https://twitter.com/hasangilak",
            image : "static/img/people/hasan.jpeg",
            description : "توسعه دهنده در آریاسان"
        },
        {
            name : "رضا محمودیان",
            link : "https://twitter.com/Rez___a",
            image : "static/img/people/reza.jpeg",
            description : "طراح رابط کاربری بانک سامان"
        },
        {
            name : "امیر حبیب زاده",
            link : "https://twitter.com/amir_habibzadeh",
            image : "static/img/people/amir.jpeg",
            description : "توسعه دهنده لاراول"
        },
        {
            name : "احمدکریم پور",
            link : "https://twitter.com/iahmadina",
            image : "static/img/people/ahmad.jpeg",
            description : "توسعه دهنده لاراول"
        },
        {
            name : "حمید کریمی",
            link : "http://google.com",
            image : "static/img/people/hamid.jpeg",
            description : "اسپرت آوران"
        }
    ]
};

LaraTalks.prototype.prettyHeader = function () {

    var parent = this;

    $(document).on('scroll', function(){

        var windowHeight = $(window).height(),
            percent = 100 / windowHeight,
            top = $(document).scrollTop(),
            opacity = Math.abs(((windowHeight - top) * percent));

        parent.config.$FADEABLE_CONTENT.css({'opacity' : opacity / 100});

    });

};

var app = new LaraTalks(config); app.begin();