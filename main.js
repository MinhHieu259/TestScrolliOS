// A $( document ).ready() block.
$( document ).ready(function() {
    $('#overflowTest').scrollbox({
        distanceToReach: {
            x: 0,
            y: 0
        },
        wheelSensitivity: 20,
        momentum: {
            acceleration: 1600,
            thresholdTime: 500
        },
        startAt: {
            x: 'left',
            y: 'top'
        },
        templates: {
            horizontalBar: '<div></div>',
            verticalBar: '<div></div>',
            horizontalRail: '<div></div>',
            verticalRail: '<div></div>', 
            wrapper: '<div></div>'
        }
    });
});