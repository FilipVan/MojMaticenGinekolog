// VAZNO: DA SE NAPRAVI KLASA ZA KOPCETO zA ZAKAZUVANJE NA SLEDEN PREGLED ZA DA SE POEDNOSTAVI KODOT


let $gameContent = $("#gameContent");

$(() => {
    $gameContent.on("click", "#makeFirstApp", () => {
        //===================================== PRV PREGLED ==========================================
        $gameContent.append(`
            <div class="row addMargin">
                <div class="col">
                    <div><h1>Прв Преглед (5-6 недела на бременост)</h1></div>
                </div>
            </div>
            <div class="row addMargin">
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
            <div class="row addMargin">
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


    // =======================Abortion Section=========================
    $gameContent.on("click", "#abortBtn", () => {
        $gameContent.append(`
            <div id="" class="row abortionIntro addMargin">
                <div class="col">
                    <div>
                        <ul>
                            <h4>Процедура за абортус:<h4>
                            <li>Поднеси барање за абортус во најблиската болница треба да се чека 3 дена пред комисија да го разгледа вашето барање</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row abortionIntro addMargin">
                <div class="col-6">
                    <button id="submitAbortBtn" class="btn btn-primary appointmentBtn">Поднеси барање</button>
                </div>
                <div class="col-6">
                    <button id="" class="btn btn-primary backBtn">Назад</button>
                </div>
            </div>
        `)
    });

    // Rollback on all last decisions by pressing the buttons with class .backBtn
    $gameContent.on("click", ".backBtn", () => {
        $(".abortionIntro").empty();
        $(".carryOnIntro").empty();
    })


    $gameContent.on("click", "#submitAbortBtn", () => {
        let numbers = [1, 2]
        let number = numbers[Math.floor(Math.random() * numbers.length)];

        if (number == 1) {
            $gameContent.append(`
                <div id="firstCommisionDiv" class="row addMargin">
                    <div class="col">
                        <div>
                            <h5>Не добивте дозвола за прекинување на бременоста, дали сакате да поднесете барање до второстепена комисија?<h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas fugiat eaque dolores at mollitia, recusandae libero ut, officiis deserunt dicta reprehenderit rerum beatae voluptatem vitae modi error temporibus.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <button id="secCommisionYesBtn" class="btn btn-primary appointmentBtn">Да</button>
                    </div>
                    <div class="col-6">
                        <button id="secCommisionNoBtn" class="btn btn-primary appointmentBtn">Не</button>
                    </div>
                </div>
        `);
        } else {
            $gameContent.append(`
            <div class="row addMargin">
                <div class="col">
                    <div>
                        <h5>Добивте дозвола за абортус, дали сакате да закажете абортус во болница?</h5>
                        <p>Информации со статистика за абортуси во Република Македонија<p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <button id="" class="btn btn-primary appointmentBtn finishAbortion">Да</button>
                </div>
                <div class="col-6">
                    <button id="" class="btn btn-primary appointmentBtn">Не</button>
                </div>
            </div>
        `);
        }
    });

    //==============================================================
    $gameContent.on("click", "#secCommisionYesBtn", () => {
        let numbers = [1, 2]
        let number = numbers[Math.floor(Math.random() * numbers.length)];

        if (number == 1) {
            $gameContent.append(`
                <div class="row addMargin">
                    <div class="col">
                        <div>
                            <h5>Второстепената комисија не го одобри вашето барање за абортус, приморани сте да продолжите so бременоста.</h5>
                            <p>Рокот за безбеден абортус истече</p>
                        </div>
                    </div>
                </div>
                <div class="row addMargin">
                    <div class="col">
                        <button id="" class="btn btn-primary appointmentBtn">Закажи го следниот преглед</button>
                    </div>
                </div>
        

            
            `)
        } else {
            $gameContent.append(`
                        <div class="row addMargin">
                            <div class="col">
                                <div>
                                    <h5>Добивте дозвола за абортус, дали сакате да закажете абортус во болница?</h5>
                                    <p>Информации со статистика за абортуси во Република Македонија<p>
                                </div>
                            </div>
                        </div>

                        <div class="row addMargin">
                            <div class="col-6">
                                <button id="" class="btn btn-primary appointmentBtn finishAbortion">Да</button>
                            </div>
                            <div class="col-6">
                                <button id="" class="btn btn-primary appointmentBtn">Не</button>
                            </div>
                        </div>
                    `)
        }
    });


    $gameContent.on("click", "#secCommisionNoBtn", () => {
        $("#firstCommisionDiv").empty();
    })

    //this is the event where you end the game by going through with an abortion applied on all the instances of the button class restartBtn
    $gameContent.on("click", ".finishAbortion", () => {
        $gameContent.append(`
            <div class="row addMargin">
                <div clas="col">
                    <h1>GAME OVER</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button id="restartBtn" class="btn btn-primary appointmentBtn restartBtn" data-toggle="modal" data-target="#myModal">Пробајте повторно</button>
                </div>
            </div>
        `)
    })



    //======================Continue with pregnany section===========================
    $gameContent.on("click", "#continueBtn", () => {
        $gameContent.append(`
        <div class="row addMargin carryOnIntro">
            <div class="col">
                <div><h5>Можни опции доколку одлучите да продолжите со бременоста:</h5></div>
            </div>
        </div>
         <div class="row addMargin carryOnIntro">
                <div class="col-4">
                    <button id="nextAppBtn" class="btn btn-primary appointmentBtn">Закажи го следниот преглед</button>
                </div>
                <div class="col-4">
                    <button id="jumpAppBtn" class="btn btn-primary appointmentBtn">Скокни го следниот преглед</button>
                </div>
                <div class="col-4">
                    <button id="" class="btn btn-primary appointmentBtn backBtn">Назад</button>
                </div>
         </div>`)
    });

    $gameContent.on("click", "#jumpAppBtn", () => {
        $gameContent.append(`
            <div class="row addMargin">
                <div class="col">
                    <div>
                        <h3>Не откривте дека вашиот плод има аномалија!</h3>
                        <p><h6>Предупредување:</h6>Кај жените со тенденција за пропуштање или доцнење со одредени прегледи се зголемува опасноста од спонтан абортус или појавување на одредени проблеми во понтамошниот развој на фетусот.</p>
                    </div>
                </div>
            </div>
            <div class="row addMargin">
                <div class="col-6">
                    <button id="nextAppBtnAnommaly" class="btn btn-primary appointmentBtn">Закажи следен преглед</button>
                </div>
                <div class="col-6">
                    <button id="jumpAllAppBtn" class="btn btn-primary appointmentBtn">Скокни ги сите прегледи</button>
                </div>
            </div>
        `)
    });

    $gameContent.on("click", "#jumpAllAppBtn", () => {
        $gameContent.append(`
            <div class="row addMargin">
                <div clas="col">
                    <h1>GAME OVER</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button id="restartBtn" class="btn btn-primary appointmentBtn restartBtn" data-toggle="modal" data-target="#myModal">Пробајте повторно</button>
                </div>
            </div>
        `)
    });

    //restart game (not finished)
    $gameContent.on("click", "#restartBtn", () => {
        $gameContent.remove();
    });
});