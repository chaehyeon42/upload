/**
 * 댓글 관련 javascript 처리
 */

$(document).ready(function() { // jquery 준비
	// 함수 호출
	// detail.jsp가 시작되자마자 bno값을 가져오려면 $(document).ready 아래에 선언
	var bnoValue = $("input[name='bno']").val();

	// detail.jsp가 시작되자마자 댓글 목록리스트 함수를 호출
	list(bnoValue);

	// 댓글 쓰기버튼을 클릭하면 댓글쓰기를 하기 위한 함수 호출
	$("#add").on("click", function() {
		// 댓글쓰기 버튼을 클릭했을 당시에 댓글내용을 가져올려면 $("#add").on("click", function(){ 아래에
		// 선언
		var replyValue = $("#reply").val();
		var idValue = "aab";

		add({
			bno : bnoValue,
			reply : replyValue,
			id : idValue
		}); 
	})
		// 댓글쓰기를 하기 위한 함수 호출
		// 댓글 수정버튼을 클릭했을때
	$("#chat").on("click",".update" ,function() {
		// 댓글번호와 댓글내용을 수집해서
		var rno = $(this).data("rno");
		var reply = $("#replycontent"+rno).val();
		// 댓글수정을 하기 위한 함수 호출(댓글번호,댓글내용)
		modify({
			rno : rno,
			reply : reply
		});
	})
	
	//댓글 삭제 버튼을 클릭하면
	$("#chat").on("click",".remove",function(){
		//댓글번호를 수집해서
		var rno = $(this).data("rno");
		//댓글 삭제를 하기 위한 함수 호출(댓글번호)
		remove(rno);
		
	})
})
// jquery 끝

//함수선언
//댓글 삭제를 하기 위한 함수 선언
function remove(rno){
	console.log(rno);
	$.ajax({
		type:"delete",
		url:"/replies/remove/"+rno,
		success : function(result) {
			if (result == "sucess") {
				alert("댓글삭제 성공")
			}
		}		
	})
}





// 함수 선언(댓글 수정을 하기 위한 함수 선언)
function modify(reply) {
	console.log(reply);
	$.ajax({ // ajax 준비 (비동기식으로 준비)
		type : "put", // method 방식(get,post,put,delete)
		url : "/replies/modify",
		data : JSON.stringify(reply),
		// contentType : ajax ->Controller로 데이터 전송 시 타입
		// contentType을 생략하면 web Browser에 위임하게 됨
		contentType : "application/json; charset=utf-8",
		success : function(result) {
			if (result == "sucess") {
				alert("댓글수정 성공")
			}
		}
	})
}

 function add(reply) { // add 함수 선언 시작
	console.log(reply);
	$.ajax({ // ajax 준비 (비동기식으로 준비)
		type : "post", // method 방식(get,post,put,delete)
		url : "/replies/new",
		data : JSON.stringify(reply),
		// contentType : ajax ->Controller로 데이터 전송 시 타입
		// contentType을 생략하면 web Browser에 위임하게 됨
		contentType : "application/json; charset=utf-8",
		success : function(result) {
			if (result == "sucess") {
				alert("댓글수정 성공")
			}
		}
	})
} // add 함수 선언 끝

function list(bno) { // list 함수 선언 시작

	$.getJSON("/replies/" + bno + ".json", function(data) {

		var str = "";

		for (var i = 0; i < data.length; i++) {
			str += "<li>" + data[i].id + "</li>"
			str += "<li><textarea id='replycontent" + data[i].rno+"'>" + "</textarea></li>"
			str +="<li>"
			str += "<input class='update' type='button' value='수정' data-rno="+data[i].rno+">"
			str +="<input class='remove' type='button' value='삭제' data-rno="+data[i].rno+">"
			str +="</li>"
		}
		$("#replyUL").html(str);
	});
}// list함수 선언 끝
