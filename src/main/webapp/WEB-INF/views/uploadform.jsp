<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
<form action="uploadFormAction" method="post" enctype="multipart/form-data">
	<input type="file" name="uploadFile" multiple>
	<input type="submit" value="파일전송">
</form>


</body>
</html>