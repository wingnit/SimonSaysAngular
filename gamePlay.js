/**
 * Created by apurnell on 6/19/14.
 */
function playGame()
{
    /*game buttons*/
    var button1 = makeButton(300, 300); //topLeft button
    var button1Glare = makeGlare(320, 265);

    var button2 = makeButton(500, 300); //topRight button
    var button2Glare = makeGlare(520, 265);

    var button3 = makeButton(300, 500); //bottomLeft button
    var button3Glare = makeGlare(320, 465);

    var button4 = makeButton(500, 500); //bottomRight button
    var button4Glare = makeGlare(520, 465);

    /*button initial colors*/
    var intialColors = ['#1482CC', '#CC0000', '#009900', '#CCCC00', '#5C1F99', '#CC6600'];

    /*button glow colors*/
    var glowColors = ['#47CCED', '#FF0000', '#33CC33', '#FFFF00', '#AD5CFF', '#DB944D'];

    function makeButton(xCoordinate, yCoordinate)
    {
        var button = new Circle(xCoordinate, yCoordinate, 75).attr({fillColor: 'random', strokeColor: '#CCC', strokeWidth: 9});
        button.addTo(stage);

        return button;
    }

    function makeGlare(xCoordinate, yCoordinate)
    {
        var glare = new Group().addTo(stage).attr({x:xCoordinate, y:yCoordinate});
        var bigGlare = new Circle(15, 0, 15).attr({fillColor: '#ffffff'});
        var littleGlare = new Circle(0, 10, 10).attr({fillColor: '#CCC'});

        glare.addChild(littleGlare);
        glare.addChild(bigGlare);

        return glare;
    }

    /*button1 behavior: topLeft*/
    button1.on('click', function(){
        makeItFlash(button1, 300, 300)
    });/*.on('mouseover', function(){
        button1.animate('0.5s', {
            fillColor:'#EB7575'})

            .on('mouseout', function(){
                button1.animate('1s', {
                    fillColor:'#CC0000'});
            });
    });*/


    /*button3 behavior: bottomLeft*/
    button3.on('click', function(){
        makeItFlash(button3, 300, 500)
    });/*.on('mouseover', function(){
        button3.animate('0.5s', {
            fillColor:'#66FF33'
        })

            .on('mouseout', function(){
                button3.animate('1s', {
                    fillColor:'#009900'
                });
            });
    });*/

    /*button4 behavior: topRight button*/
    button4.on('click', function(){
        makeItFlash(button4, 500, 500)
    });/*on('mouseover', function(){
        button4.animate('0.5s', {
            fillColor:'#FFFF4D'
        })

            .on('mouseout', function(){
                button4.animate('1s', {
                    fillColor:'#CCCC00'
                });
            });
    });*/

    /*button2 behavior: bottomRight button*/
    button2.on('click', function(){
        makeItFlash(button2, 500, 300)
    });/*.on('mouseover', function(){
        button2.animate('0.5s', {
            fillColor:'#47CCED'});
    })*/

        /*.on('mouseout', function(){
            button2.animate('1s', {
                fillColor:'#1482CC'
            });
        })*/

    /*Glow Effect Animation*/
    function makeItFlash(button, xCoordinate, yCoordinate)
    {
        /*glower objects*/
        var glow = new Circle(xCoordinate, yCoordinate, 10).attr({fillColor:'random', opacity:0});
        glow.addTo(stage);

        /*makes light halo effect*/
        var glowerRadiusStep = 2.75;
        var glowerOpacityStep = 0.5;
            var flashEffect = new KeyframeAnimation('1s', {
            '0%': {opacity: 0, scaleX:0*glowerRadiusStep, scaleY:0*glowerRadiusStep},
            '25%': {opacity: 1*glowerOpacityStep, scaleX:1*glowerRadiusStep, scaleY:1*glowerRadiusStep},
            '50%': {opacity: 2*glowerOpacityStep, scaleX:2*glowerRadiusStep, scaleY:2*glowerRadiusStep},
            '75%': {opacity: 0.5*glowerOpacityStep, scaleX:3*glowerRadiusStep, scaleY:3*glowerRadiusStep},
            '95%': {opacity: 0, scaleX:4*glowerRadiusStep, scaleY:4*glowerRadiusStep},
            '100%': {opacity: 0, scaleX: 11/8, scaleY: 11/8}    //<---resets size of circle that represents the glowing halo effect
        });

        /*makes button light up a random color*/
        var flashColor = new KeyframeAnimation('0.5s', {
            '100%': {fillColor:'random'}
        });

        flashColor.addSubjects(button);
        flashEffect.addSubjects(glow);
        flashEffect.play();
        flashColor.play();
    }
}

//**************************
//Play animations
//**************************
bonsai.run(document.getElementById('simonSaysStart'), {
 code: playGame,
 width: 1220,
 height: 1080
});

