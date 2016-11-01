/**
 * 測試會用到的各項參數
 */
class ExamConfigForFirebase {


    static hostName = "https://exam00-3a528.firebaseio.com/";

    static AllQuentionIndexsUrl = ExamConfigForFirebase.hostName + "Quentions.json"

    static GetQuentionInfoUrl(qunetionIndex) {
        return ExamConfigForFirebase.hostName + qunetionIndex +".json";
    } 
}