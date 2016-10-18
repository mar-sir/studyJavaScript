/**
 * Created by Huang''sir on 2016/10/18.
 */
String.prototype.replaceEx=function(apples,bananas,index){
    var arrSubStr=this.split(apples);//[];
    var sYouNew="";
    for(var i=0;i<arrSubStr.length;i++){
        if(i==arrSubStr.length-1){
            sYouNew+=arrSubStr[i];
        }else if(i==index-1){
            sYouNew+=arrSubStr[i]+bananas;
        }
        else {
            sYouNew += arrSubStr[i] + apples;
        }
    }
    return sYouNew;

}