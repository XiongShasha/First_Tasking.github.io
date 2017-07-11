/**
 * Created by xiongshasha on 17-7-11.
 */
//#1.输入NameArry,SubGrade (11min)

var NameArry = new Array();
NameArry=['张三','李四'];
var SubGrade =  new Array(2);   //表格有2行
for(var i = 0;i < SubGrade.length; i++){
    SubGrade[i] = new Array(4);    //每行有5列
}
SubGrade=[[95,80,75,80],[80,70,85,90]];

//#2.计算每个人的总成绩  (13min)

var tolGrade=new Array(SubGrade.length);

for(var i=0;i<SubGrade.length;i++)
{
    tolGrade[i]=0;
    for(var j=0;j<SubGrade[i].length;j++)
    {
        tolGrade[i]=tolGrade[i]+SubGrade[i][j];
    }
}

//#3.计算每个人成绩的平均分以及全班总平均分 (9min)

var AvgGrade=new Array;//每个人成绩的平均分
for(var i=0;i<tolGrade.length;i++)
{
    AvgGrade[i]=tolGrade[i]/(SubGrade[0].length);
}
var Avg=0;//全班总平均分
for(var i=0;i<AvgGrade.length;i++)
{
    Avg+=AvgGrade[i];
}
Avg=Avg/(AvgGrade.length);

//#4.找出总成绩的中位数 （23min）

var Copy_tolGrade = new Array();
for(var i=0;i<tolGrade.length;i++)
{
    Copy_tolGrade[i]=tolGrade[i];
}
var temp;//替换数
for(var i=0;i<Copy_tolGrade.length-1;i++)
    for(var j=0;j<Copy_tolGrade.length-1-i;j++)
    {
        if(Copy_tolGrade[j]>=Copy_tolGrade[j+1])
        {
            temp=Copy_tolGrade[j];
            Copy_tolGrade[j]=Copy_tolGrade[j+1];
            Copy_tolGrade[j+1]=temp;
        }
    }
var M;//中位数
if(Copy_tolGrade.length%2==0)
    M=(Copy_tolGrade[Copy_tolGrade.length/2-1]+Copy_tolGrade[Copy_tolGrade.length/2])/2;
else
    M=Copy_tolGrade[Copy_tolGrade.length/2];

//#5.显示

document.write("成绩单"+"<br>");
document.write("姓名|语文|数学|英语|编程|平均分|总分"+"<br>");
document.write("============================================="+"<br>");
for(var i=0;i<NameArry.length;i++)
{
    document.write("     "+NameArry[i]+"    ");
    for(var j=0;j<SubGrade[0].length;j++)
    {
        document.write("    |    ");
        document.write(SubGrade[i][j]+"    ");
    }
    document.write("    |    ");
    document.write(AvgGrade[i]);
    document.write("    |    ");
    document.write(tolGrade[i]);
    document.write("<br>");
}
document.write("============================================="+"<br>");
document.write("全班总平均分："+Avg.toFixed(3)+"<br>");
document.write("全班总分中位数："+M.toFixed(3)+"<br>");