let $gameContent = $("#gameContent");

$gameContent.on("click", "#makeFirstApp", () => {
    $gameContent.append(`
        <div>Jas sum prviot div</div>
        <div> Jas sum kontent</div>
        <button class="btn btn-danger">Jas sum dugme</button><button class="btn btn-danger">I jas sum dugme</button>
    `);
    $("#makeFirstApp").hide();
});