$(document).ready(function () {
    let row = `
<div>
<input type="text" size="50" style="margin-bottom: 15px">
<i style="cursor: pointer" class="bi bi-x-lg p-2 remove"></i>
</div>`;

    $(document).on("click", ".add", function () {
        $(".content").append(row);
    });

    $(document).on("click", ".remove", function () {
        $(this).parent().remove();
    });

    $(document).on("click", ".show", function () {
        $(".fixed").animate({ width: "40rem" }, 75);
        $(".fixed").animate({ height: "40rem" }, 200, function () {
            $(".bi-arrow-bar-up").addClass("bi-arrow-bar-down").removeClass("bi-arrow-bar-up");
            $(".show").addClass("hide").removeClass("show");
            $(".fixed").css({
                overflowY: "auto",
                backgroundColor: "white",
                color: "#dc3545"
            });
        });
    });

    $(document).on("click", ".hide", function () {
        $(".fixed").animate({ height: "60px" }, 200);
        $(".fixed").animate({ width: "75px" }, 75, function () {
            $(".bi-arrow-bar-down").addClass("bi-arrow-bar-up").removeClass("bi-arrow-bar-down");
            $(".hide").addClass("show").removeClass("hide");
            $(".fixed").attr("style", "");
        });
    });

    $(".toggle").click(function () {
        $("body, body *").toggleClass("theme");
    });
});
