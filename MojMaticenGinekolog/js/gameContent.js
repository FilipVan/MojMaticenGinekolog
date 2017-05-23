let $gameContent = $("#gameContent");

$(() => {
    $gameContent.on("click", "#makeFirstApp", () => {
//===================================== PRV PREGLED ==========================================
        $gameContent.append(`
            <div class="row">
                <div class="col">
                    <div><h1>Прв Преглед (5-6 недела на бременост)</h1></div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div>
                        <ul id="list_firstAppointment"><span id="listHead">Анализи и испитувања, генерален тек:</span>
                            <li>Ехо Преглед - потрврдување не бременост.</li>
                            <li>Добивање на мајчинска книшка</li>
                            <li>Анализа на крвна слика, крвен притисок, тежина и урина</li>
                            <li>Препораки за стандардна витаминска терапија</li>
                        </ul>
                    </div>
                    <div><h5>Можни опции:</h5></div>
                </div>                
            </div>
            <div class="row">
                <div class="col-6">
                    <button id="continueBtn" class="btn btn-primary appointmentBtn">Продолжи со бременост</button>
                </div>
                <div class="col-6">
                    <button id="abortBtn" class="btn btn-primary appointmentBtn">Абортирај</button>
                </div>
            </div>
        `);
        $("#makeFirstApp").hide();
    });
    $gameContent.on("click", "")

});