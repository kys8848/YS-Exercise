function api(){
    $('#call').click(function(){
      $('#show').html('....loading...');
  
      $.ajax({
          type: "GET",
          url: "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20171110",
          dataType: 'json',
          success:function(data){
            //call = JSON.parse(data);  
            $('#show').html(JSON.stringify(data));
            mdata = JSON.stringify(data);
            pmdata =JSON.parse(mdata);


            
          }
      })
    
  })

}// 19.2.5일 작성 위 방법은  jquery문을 활용한 ajax 방식 json api 데이터 임

function init(){
    api();
    //console.log(a;
}
init();
var api = api();

/*$(document).ready(function() {
    $('#call').click(function() {
        url='https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20171110';
        $.getJSON(url,function(data){ 
            $('#show').empty(); 
            var parsedData = JSON.parse(data);//id show 테그 부분을 비우는 함수//
            $.each(data,function(){
                //var box = JSON.parse(this.responseText);
                //consloe.log(box.boxOfficeResult.boxofficeType);
                var html ='<div class="boxofficeResult">';

                html +='<h3 class="rank">'+'랭크:'+parsedData.boxOfficeResult.weeklyBoxOfficeList[1].rank +'</h3>';
                html +='<div class="movieNm">'+'영화제목:'+'+parsedData.boxOfficeResult.weeklyBoxOfficeList[1].movieNm' + '</div>';
                html +='<div class="auditcnt">'+'관객수:'+'parsedData.boxOfficeResult.weeklyBoxOfficeList[1].auditcnt+'+'</div>';
                html +='</div>';
                $('#show').append(html);
            });// end each
        });// end json
        return false;
    });// end click

});*/

