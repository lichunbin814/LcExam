/**
 * 作答頁面
 */
$(function () {
    let ViewModel = {
        GetCount: 50,
        QuentionSelector: "#Quention",
        OptionUlSelector : "#Option",
        CorrectOptionIndexSelector: "#CorrectOptionIndex"
    };


    let quentionsService = new QuentionsService(ViewModel.GetCount);

    quentionsService.GetQuentionInfo((data) => {
        $(ViewModel.QuentionSelector).text(data.Quention);
        let optionUl = $(ViewModel.OptionUlSelector);
        data.Option.forEach((value, index, array) => {
            optionUl.append($("<li>").text(value));
        })
        $(ViewModel.CorrectOptionIndexSelector).val(data.CorrectOption);
    })
})