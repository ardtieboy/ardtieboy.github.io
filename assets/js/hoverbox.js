$(function () {
    $('[id^="hoverbox-education"]').hover(
        function () {
            $('[id^="hoverbox-education"]').removeClass('shadow-drop-2-center');
            $('#' + this.id).addClass('shadow-drop-2-center');
        }
    );
});

$(function () {
    $('[id^="hoverbox-experience"]').hover(
        function () {
            $('[id^="hoverbox-experience"]').removeClass('shadow-drop-2-center');
            $('#' + this.id).addClass('shadow-drop-2-center');
        }
    );
});

$(function () {
    $('[id^="hoverbox-trivia"]').hover(
        function () {
            $('[id^="hoverbox-trivia"]').removeClass('shadow-drop-2-center');
            $('#' + this.id).addClass('shadow-drop-2-center');
        }
    );
});