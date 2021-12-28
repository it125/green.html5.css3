$(function () {
    var gnbFlag = false;
    var gnbIndex;

    // nav메뉴에 마우스를 올렸을 때
    $(".nav li").on({
        "mouseenter": function () {
            // lnb show
            if (gnbIndex != undefined) {
                $(".lnb").eq(gnbIndex).css("display", "none");
            }
            gnbIndex = $(this).index();
            gnbFlag = true;

            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");
            $(".lnb_container").show();

            $(".lnb").eq(gnbIndex).css("display", "block");

            // 액티브 바 show
            $(".active_bar").show();

            // 선택된 li의 left와 width를 구해 active_bar의 위치와 길이를 조절
            var listLeft = $(this).offset().left;
            var listWidth = $(this).width();

            $(".active_bar").width(listWidth);
            $(".active_bar").offset({ left: listLeft + 17 }); // 기존 padding 값에 17을 더해줌.

            // 하위메뉴 안 보이게
            $(".lnb_container").on({
                "mouseleave": function () {
                    if (gnbFlag) {
                        $(".lnb_container").removeClass("appear");
                        $(".lnb_container").addClass("disappear");
                        $(".lnb_container").hide();
                        $(".active_bar").hide();

                    } else {
                        return;
                    }

                }
            });

        }


    });
});
