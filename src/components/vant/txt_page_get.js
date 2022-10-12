class TxtPageModel {
    
    constructor(fontSize, lineHeight,content) {
        this.fontSize = fontSize;
        this.lineHeight = lineHeight;
        this.content = content;
    }
   
    // 分页好的数据
    getTxtArray() {
        let windowWidth = window.screen.width;
        let windowHeight = window.screen.height - 68/15*16;
        let rowCount = parseInt(windowWidth / this.fontSize);
        let heightCount = parseInt(windowHeight / this.lineHeight);
        let pageTxtCount = rowCount * heightCount;
        var pageCount = parseInt(this.content.length / pageTxtCount);
        
        var txtArr = []

        for (var i = 0; i < pageCount; i++){
            let txt = this.content.substring(i * pageTxtCount, i * pageTxtCount + pageTxtCount);
            txtArr.push(txt)
        }
        let speat = this.content.length / pageTxtCount;
        
        if (speat > pageCount) {
            let txt = this.content.substring( pageCount * pageTxtCount,pageCount * pageTxtCount + this.content.length - pageCount * pageTxtCount);
            txtArr.push(txt)
        }
        return txtArr
    }
}
export default new TxtPageModel(12,12,'sdfsdfs')
