let $gameContent = $("#gameContent");

$(() => {
    $gameContent.on("click", "#makeFirstApp", () => {
        //===================================== PRV PREGLED ==========================================
        $gameContent.append(`
        <div class="fragment">
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
        </div>
        `);
        $("#makeFirstApp").hide();
    });


    $gameContent.on("click", "#continueBtn", () => {
        $gameContent.append(`
            <div class="fragment">
                <div class="row addBorder">
                    <div class="col">
                        <div><h5>Можни опции доколку одлучите да продолжите со бременоста:</h5></div>
                    </div>
                </div>
                <div class="row addBorder">
                        <div class="col-6">
                            <button id="nextAppBtn" class="btn btn-primary appointmentBtn">Закажи го следниот преглед</button>
                        </div>
                        <div class="col-6">
                            <button id="jumpAppBtn" class="btn btn-primary appointmentBtn">Скокни го следниот преглед</button>
                        </div>
                </div>
            </div>
        `);
         $("#continueBtn").hide();
         $("#abortBtn").hide();
    });

    $gameContent.on("click", "#jumpAppBtn", () => {
        $gameContent.append(`
            <div class="fragment">
                <div class="row addBorder">
                    <div class="cow">
                        <div>
                            <h3>Не откривте дека вашиот плод има аномалија!</h3>
                            <p><h6>Предупредување:</h6>Кај жените со тенденција за пропуштање или доцнење со одредени прегледи се зголемува опасноста од спонтан абортус или појавување на одредени проблеми во понтамошниот развој на фетусот.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <button id="nextAppBtnAnommaly" class="btn btn-primary appointmentBtn">Закажи следен преглед</button>
                    </div>
                    <div class="col-6">
                        <button id="jumpAllApp" class="btn btn-primary appointmentBtn">Скокни ги сите прегледи</button>
                    </div>
                </div>
            </div>
        `);
        $("#nextAppBtn").hide();
        $("#jumpAppBtn").hide();
    });

});