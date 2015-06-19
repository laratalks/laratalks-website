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

    var people = _.shuffle(this.config.PEOPLE).slice(0, 12),
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
            image : "dist/img/people/behzad.jpeg"
        },
        {
            name : "محمدرضا شادمان",
            link : "http://github.com/reshadman",
            image : "dist/img/people/mohammad_reza.jpeg"
        },
        {
            name : "مرتضی پروینی",
            link : "http://twitter.com/imorteza",
            image : "dist/img/people/morteza.jpeg"
        },
        {
            name : "حسن گیلک",
            link : "https://twitter.com/hasangilak",
            image : "dist/img/people/hasan.jpeg"
        },
        {
            name : "رضا محمودیان",
            link : "https://twitter.com/Rez___a",
            image : "dist/img/people/reza.jpeg"
        },
        {
            name : "امیر حبیب زاده",
            link : "https://twitter.com/amir_habibzadeh",
            image : "dist/img/people/amir.jpeg"
        },
        {
            name : "احمدکریم پور",
            link : "https://twitter.com/iahmadina",
            image : "dist/img/people/ahmad.jpeg"
        },
        {
            name : "حمید کریمی",
            link : "https://twitter.com/hamid_karimii",
            image : "dist/img/people/hamid.jpeg"
        },
        {
            name: "رسول  عبداللهی",
            link : 'https://twitter.com/ira3oul',
            image : 'dist/img/people/rasool.jpeg'
        },
        {
            name: "حسام ندر",
            link : 'https://twitter.com/hessam_nadr',
            image : 'dist/img/people/hessam.jpeg'
        },
        {
            name: "محمد محبی فر",
            link : 'https://twitter.com/mohebifar',
            image : 'dist/img/people/mohebifar.jpeg'
        },
        {
            name: "پیمان اسکندری",
            link : 'https://twitter.com/peyman3d',
            image : 'dist/img/people/peyman-eskandari.jpeg'
        }
    ]
};

LaraTalks.addScript = function (url, fnCallbacks) {

    var script = document.createElement( 'script' );

    if(fnCallbacks) {

        _.each(fnCallbacks, function(fn){
            script.onload = fn;
        });

    }

    script.type = 'text/javascript';
    script.src = url;
    script.async = true;

    document.body.appendChild(script);

};

LaraTalks.prototype.handleMap = function() {
    $(document).ready(function () {
        $(window).load(function(){
            setTimeout(function(){
                LaraTalks.addScript(
                    'http://maps.googleapis.com/maps/api/js?sensor=false&callback=laraTalkOnMapReady'
                );
            }, 1000);
        });
    });
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

var app = new LaraTalks(config);

app.begin();
app.handleMap();
