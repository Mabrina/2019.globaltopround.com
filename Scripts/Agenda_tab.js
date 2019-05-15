
/* agenda day 버튼 호환 */

$(document).ready(function () {
    //기본 설정값
    $(".Agenda_01").show();
    $(".Agenda_02").hide();
    $('.tba_01').css({ 'color': '#fff' });

    $(".tba_01").click(function () {
        //누르면 초기화
        $(".Agenda_01").show();
        $(".Agenda_02").hide();
        $('.tba_01').css({ 'color': '#fff'});
        $('.tba_02').css({ 'color': '#909396', 'background': 'none' });
        return false;
    });
    $(".tba_02").click(function () {
        //누르면 초기화
        $(".Agenda_02").show();
        $(".Agenda_01").hide();
        $('.tba_02').css({ 'color': '#fff'});
        $('.tba_01').css({ 'color': '#909396', 'background': 'none' });
        return false;
    });
});
