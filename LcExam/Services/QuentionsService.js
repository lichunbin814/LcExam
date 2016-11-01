/**
 * Service-作答頁面
 */
var QuentionsService = (function () {
    //private data = {
    //    //AllQuentionIndexs: [] as number[]
    //}
    function QuentionsService(getCount) {
        this.getCount = getCount;
    }
    /**
     * 取得所有的題目Index
     */
    QuentionsService.prototype.GetQuentionIndexs = function (callback) {
        var self = this;
        $.getJSON(ExamConfigForFirebase.AllQuentionIndexsUrl, function (data, textStatus, jqXHR) {
            //self.data.AllQuentionIndexs = self.Shuffle(data, count);
            callback(self.Shuffle(data, self.getCount));
        });
    };
    /**
     * 取得題目的資訊
     */
    QuentionsService.prototype.GetQuentionInfo = function (callback) {
        this.GetQuentionIndexs(function (data) {
            var quentionIndex = data[0];
            $.getJSON(ExamConfigForFirebase.GetQuentionInfoUrl(quentionIndex), function (data, textStatus, jqXHR) {
                callback(data);
            });
        });
    };
    QuentionsService.prototype.Shuffle = function (array, count) {
        var currentIndex = 0, temporaryValue, randomIndex;
        var arrayMaxIndex = array.length - 1;
        var isGetMore = count > arrayMaxIndex;
        if (isGetMore) {
            count = arrayMaxIndex;
        }
        // While there remain elements to shuffle...
        while (count >= currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex += 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    return QuentionsService;
}());
//# sourceMappingURL=QuentionsService.js.map