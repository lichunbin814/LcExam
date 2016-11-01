/**
 * 作答頁面
 */
$(function () {
    var ViewModel = {
        GetCount: 50,
        QuentionSelector: "#Quention",
        OptionUlSelector: "#Option",
        CorrectOptionIndexSelector: "#CorrectOptionIndex"
    };
    var quentionsService = new QuentionsService(ViewModel.GetCount);
    quentionsService.GetQuentionInfo(function (data) {
        $(ViewModel.QuentionSelector).text(data.Quention);
        var optionUl = $(ViewModel.OptionUlSelector);
        data.Option.forEach(function (value, index, array) {
            optionUl.append($("<li>").text(value));
        });
        $(ViewModel.CorrectOptionIndexSelector).val(data.CorrectOption);
    });
});
//# sourceMappingURL=QuentionsController.js.map