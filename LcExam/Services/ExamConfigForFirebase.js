/**
 * 測試會用到的各項參數
 */
var ExamConfigForFirebase = (function () {
    function ExamConfigForFirebase() {
    }
    ExamConfigForFirebase.GetQuentionInfoUrl = function (qunetionIndex) {
        return ExamConfigForFirebase.hostName + qunetionIndex + ".json";
    };
    ExamConfigForFirebase.hostName = "https://exam00-3a528.firebaseio.com/";
    ExamConfigForFirebase.AllQuentionIndexsUrl = ExamConfigForFirebase.hostName + "Quentions.json";
    return ExamConfigForFirebase;
}());
//# sourceMappingURL=ExamConfigForFirebase.js.map