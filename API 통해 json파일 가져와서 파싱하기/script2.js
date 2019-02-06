

var url;
const xmlhttp = new XMLHttpRequest();
var myobj2 = document.querySelector("#show");
var year = document.getElementById("year");

function submit(){
    inputt = document.getElementById("input").value
    if(inputt ==null || inputt == ""){
        alert("빈칸을 입력해주세요");
        return console.error(false),false;
        
    } else{
    var input=document.getElementById("input").value
    //console.log(input);
    console.debug(input);
    
    url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt="+input;
    console.log(url);
    inputYear(input);
    loadApi(url);
    
    }
    
}

function inputYear(yearValue){
    var str = yearValue; 
    var yyyy =  str.slice(0, 4);
    var mm = str.slice(4, 6);
    var dd = str.slice(6, 8);
    document.getElementById("year").innerHTML = "<h2><b>"+yyyy+"년"+mm+"월"+dd+"일"+"</b></h2>"; 
//inner로 처리를 하면 그때그때 넣을때 마다 값이 바뀐다(그때그때 추가되는 형식이 아니라 그대로 입력이 되는 형식인듯하다 )

// 년월일 입력 부분인데 0000년00월00일 로 6자리 숫자를 나눠서 입력하고 싶다 이건 노마드 코더 시계 강의부분을 다시 참조  
// 노마드 코더는 시분초가 각각 나눠진상태로 제공되므로 0숫자 / 숫자숫자 형태 구분을 3항연산자를 통해 구별함 
// 아무튼 내가 해결한 방법은 .slice로 활용

}



function loadApi(urls){
    //집어 넣을 id=show 인 엘레먼트 선택

    for(i=0; i<document.getElementsByTagName("p").length;i++){   
    myobj2.removeChild(document.getElementsByTagName("form")[i]);
    }// 앞에 남아있던 form테그 내 child 삭제 for문으로 구현할필요 없는것 같은데 어떻게 하다보니 구현한것같음
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            movieList(this);               
        } 
    };  
    xmlhttp.open("GET", urls, true);
    xmlhttp.send(); 
}


function movieList(thiss){
    var myObj = JSON.parse(thiss.responseText);    
    console.log(myObj);
    if(myObj.boxOfficeResult.weeklyBoxOfficeList.length == 0){ 
        alert("없는 년도를 입력했습니다");
        return console.log(false),false
        //날짜를 잘못보냈을때만 날라오는 에러다. 그럼... 정성적으로 보냈을때는 해당 객체가 없으므로 저 문구를 처리 할수가 없다
        }else{
        myobj3 = document.createElement("form")
        myobj2.appendChild(myobj3); // #show 밑에 <form> </form>생성
            for(i = 0; i< myObj.boxOfficeResult.weeklyBoxOfficeList.length;i++){
                myobj4 = document.createElement('p'); //myobj4라는 <p></p>생성
                myobj4.appendChild(document.createTextNode("순위:"+myObj.boxOfficeResult.weeklyBoxOfficeList[i].rank+"  "));
                myobj3.appendChild(myobj4);
                myobj4.appendChild(document.createTextNode("제목:"+myObj.boxOfficeResult.weeklyBoxOfficeList[i].movieNm+" "));
                myobj3.appendChild(myobj4);
                myobj4.appendChild(document.createTextNode("관객수:"+myObj.boxOfficeResult.weeklyBoxOfficeList[i].audiCnt+"명"));
                myobj3.appendChild(myobj4);
                console.log(myObj.boxOfficeResult.weeklyBoxOfficeList[i].rank);
            }//myobj4이라는 p element 를 생성한뒤에 그곳에 0~length만큼 순위/제목/관객수를 p엘리먼트안에 넣어서 myobj3번 form테그안에 가두고
             //그걸 통채로 myobj2에 붙임 myobj2는 #show 라는 div 엘리먼트임
        }
}

/*참고자료 https://www.w3schools.com/js/js_ajax_xmlfile.asp  // ajax를 활용한 XMLHttpRequest 예제임 (문구 순서 주의)
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
      }
    };
    xhttp.open("GET", "cd_catalog.xml", true);
    xhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Artist</th><th>Title</th></tr>";
    var x = xmlDoc.getElementsByTagName("CD");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }*/