$(document).ready(function(){
   flag=1;
    $("#nex").click(function(){
       if(flag==0)
        {
            $("#side1").css("z-index","999");
            $("#side5").css("z-index","9");
            $("#side2").css("z-index","9");
            $("#side3").css("z-index","9");
            $("#side4").css("z-index","9");
            $("#side1").css("transform","translateX(-150px) ");
            $("#side2").css("transform","translateX(-100px) ");
            $("#side3").css("transform","translateX(-50px)");
            $("#side4").css("transform","translateX(0px)");
            $("#side5").css("transform","translateX(50px)");
            flag=1;
          }
            else if(flag==1)
            {
                $("#side2").css("z-index","999");
                $("#side5").css("z-index","9");
                $("#side3").css("z-index","9");
                $("#side1").css("z-index","9");
                $("#side4").css("z-index","9");
                $("#side2").css("transform","translateX(-350px) ");
                $("#side3").css("transform","translateX(-300px) ");
                $("#side1").css("transform","translateX(-105px)");
                $("#side4").css("transform","translateX(-250px)");
                $("#side5").css("transform","translateX(-200px)");
                flag=2;
            }

        else if(flag==2)
        {
            $("#side3").css("z-index","999");
            $("#side5").css("z-index","9");
            $("#side2").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side4").css("z-index","9");
            $("#side3").css("transform","translateX(-600px) ");
            $("#side1").css("transform","translateX(-111px) ");
            $("#side5").css("transform","translateX(-510px)");
            $("#side2").css("transform","translateX(-356px)");
            $("#side4").css("transform","translateX(-550px) ");
            flag=3;
        }
        else if(flag==3)
        {
            $("#side4").css("z-index","999");
            $("#side5").css("z-index","9");
            $("#side3").css("z-index","9");
            $("#side2").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side4").css("transform","translateX(-790px) ");
            $("#side2").css("transform","translateX(-303px) ");
            $("#side5").css("transform","translateX(-720px)");
            $("#side1").css("transform","translateX(-57px)");
            $("#side3").css("transform","translateX(-547px) ");
            flag=0;
        }


    });
    $("#pre").click(function(){
       if(flag==0)
        {
          $("#side4").css("z-index","999");
          $("#side5").css("z-index","9");
          $("#side3").css("z-index","9");
          $("#side2").css("z-index","9");
          $("#side1").css("z-index","9");
          $("#side4").css("transform","translateX(-790px) ");
          $("#side2").css("transform","translateX(-303px) ");
          $("#side5").css("transform","translateX(-720px)");
          $("#side1").css("transform","translateX(-57px)");
          $("#side3").css("transform","translateX(-547px) ");
            flag=3;
        }
        else if(flag==1)
        {
          $("#side1").css("z-index","999");
          $("#side5").css("z-index","9");
          $("#side2").css("z-index","9");
          $("#side3").css("z-index","9");
          $("#side4").css("z-index","9");
          $("#side1").css("transform","translateX(-150px) ");
          $("#side2").css("transform","translateX(-100px) ");
          $("#side3").css("transform","translateX(-50px)");
          $("#side4").css("transform","translateX(0px)");
          $("#side5").css("transform","translateX(50px)");
            flag=0;
        }
        else if(flag==3)
        { $("#side3").css("z-index","999");
        $("#side5").css("z-index","9");
        $("#side2").css("z-index","9");
        $("#side1").css("z-index","9");
        $("#side4").css("z-index","9");
        $("#side3").css("transform","translateX(-600px) ");
        $("#side1").css("transform","translateX(-111px) ");
        $("#side5").css("transform","translateX(-510px)");
        $("#side2").css("transform","translateX(-358px)");
        $("#side4").css("transform","translateX(-550px) ");
            flag=2;
        }
        else if(flag==2)
        {
          $("#side2").css("z-index","999");
          $("#side5").css("z-index","9");
          $("#side3").css("z-index","9");
          $("#side1").css("z-index","9");
          $("#side4").css("z-index","9");
          $("#side2").css("transform","translateX(-350px) ");
          $("#side3").css("transform","translateX(-300px) ");
          $("#side1").css("transform","translateX(-105px)");
          $("#side4").css("transform","translateX(-250px)");
          $("#side5").css("transform","translateX(-200px)");
            flag=1;
        }
    });
});
