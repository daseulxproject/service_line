


  var obTimeOut; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨
  
  var ObjectArray = new Array ();
  ObjectArray[1] = "image/service_line_01.png";   
  ObjectArray[2] = "image/service_line_02.png";   
  ObjectArray[3] = "image/service_line_03.png";   
  ObjectArray[4] = "image/service_line_04.png";  
  ObjectArray[5] = "image/service_line_05.png";
  ObjectArray[6] = "image/service_line_06.png";

  var nObjectCnt = 0;	
     
  function ShowDefaultRotate() // 스스로 자신을 호출하는 재귀함수 (Recursive Function)
  {
    nObjectCnt++;
    if( nObjectCnt < ObjectArray.length )  // 배열의 갯수 이내일때만 실행
    {   
      document.getElementById("slideshow").src = ObjectArray[nObjectCnt];		         
      obTimeOut = setTimeout("ShowDefaultRotate()",700);  // 1초후에 자기자신을 호출
      /*
      if(nObjectCnt >= ObjectArray.length){
      nObjectCnt=0;
    }  */
    }
    else if(nObjectCnt >= ObjectArray.length){
      nObjectCnt = 0;
      ShowDefaultRotate();

    }
    else   
    {   
      clearTimeout(obTimeOut); // 배열의 갯수만큼 반복하여 변환시킨 후에는 Timeout 을 중지시킨다     
    }	    
  }
  
 
  function startAnimation()
  {
        obTimeOut = window.setTimeout(ShowDefaultRotate,100); // 윈도우 로드 후 0.1초 후에 반복함수를 호출합니다.
  }
  
   window.onload = startAnimation; // 윈도우 로드시 이미지 변환함수 실행 