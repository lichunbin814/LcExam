/**
 * Service-作答頁面
 */
class QuentionsService {

    //private data = {
    //    //AllQuentionIndexs: [] as number[]
    //}

    constructor(private getCount) {
    }

    /**
     * 取得所有的題目Index
     */
    GetQuentionIndexs(callback :(data:number[]) => void) {

        let self = this;

        $.getJSON(ExamConfigForFirebase.AllQuentionIndexsUrl, function (data: number[], textStatus, jqXHR) {
            //self.data.AllQuentionIndexs = self.Shuffle(data, count);

            callback(self.Shuffle(data, self.getCount));
        })
    }

    /**
     * 取得題目的資訊
     */
    GetQuentionInfo(callback: (data: QuentionInfo) => void) {

        this.GetQuentionIndexs((data) => {
            let quentionIndex = data[0];
            $.getJSON(ExamConfigForFirebase.GetQuentionInfoUrl(quentionIndex), function (data: QuentionInfo, textStatus, jqXHR) {
                callback(data);
            })
        });        
    }


    Shuffle(array: any[], count: number) {
        let currentIndex = 0, temporaryValue, randomIndex;

        let arrayMaxIndex = array.length - 1;
        let isGetMore = count > arrayMaxIndex;
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
    }
}