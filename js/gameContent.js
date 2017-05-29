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
                    <div class="row">
                        <div class="col-4">
                            <div>
                                <ul id="list_firstAppointment"><span id="listHead">Анализи и испитувања, генерален тек:</span>
                                    <li>Ехо Преглед - потрврдување не бременост.</li>
                                    <li>Добивање на мајчинска книшка</li>
                                    <li>Анализа на крвна слика, крвен притисок, тежина и урина</li>
                                    <li>Препораки за стандардна витаминска терапија</li>
                                </ul>
                            </div>
                        </div>     
                        <div class="col-8">
                            <img class="card-img-top" src="Assets/pregnant.jpg">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div><h5>Можни опции:</h5></div>
                        </div>
                    </div> 
                </div>               
            </div>
            <div class="row">
                <div class="col-6">
                    <button id="continueBtn" class="btn btn-primary appointmentBtn">Продолжи со бременост</button>

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
        </div>
        `);
    });


    $gameContent.on("click", "#continueBtn", () => {
        $gameContent.append(`
            <div class="fragment">
                <div class="row">
                    <div class="col">
                        <div><h5>Можни опции доколку одлучите да продолжите со бременоста:</h5></div>
                    </div>
                </div>
                <div class="row">
                        <div class="col-6">

                            <button id="nextAppBtn" class="btn btn-primary appointmentBtn makeSecApp">Закажи го следниот преглед</button>

                        </div>
                        <div class="col-6">
                            <button id="jumpAppBtn" class="btn btn-primary appointmentBtn">Скокни го следниот преглед</button>
                        </div>
                </div>
            </div>
        `);


        $("#abortBtn").prop("disabled", true);
        $("#abortBtn").addClass("unpickedChoice");

        $("#continueBtn").prop("disabled", true);
        $("#continueBtn").addClass("pickedChoice");

    });

    $gameContent.on("click", "#jumpAppBtn", () => {
        $gameContent.append(`
            <div class="fragment">
                <div class="row">
                    <div class="col">
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
        $("#nextAppBtn").prop("disabled", true);
        $("#nextAppBtn").addClass("unpickedChoice");


        $("#jumpAppBtn").prop("disabled", true);
        $("#jumpAppBtn").addClass("pickedChoice");
    });


    $gameContent.on("click", "#abortBtn", () => {
        $gameContent.append(`
            <div class="fragment abortionIntro">
                <div id="" class="row">
                    <div class="col">
                        <div>
                            <ul>
                                <h4>Процедура за абортус:<h4>
                                <li>Поднеси барање за абортус во најблиската болница треба да се чека 3 дена пред комисија да го разгледа вашето барање</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <button id="submitAbortBtn" class="btn btn-primary appointmentBtn">Поднеси барање</button>
                    </div>
                    <div class="col-6">

                        <button id="backBtn" class="btn btn-primary backBtn">Назад</button>
                    </div>
                </div>
            </div>
        `)

        $("#continueBtn").prop("disabled", true);
        $("#continueBtn").addClass("unpickedChoice");

        $("#abortBtn").prop("disabled", true);
        $("#abortBtn").addClass("pickedChoice");
    });

    $gameContent.on("click", "#submitAbortBtn", () => {
        let numbers = [1, 2]
        let number = numbers[Math.floor(Math.random() * numbers.length)];

        if (number == 1) {
            $gameContent.append(`
                <div class="fragment firstCommision">
                    <div id="" class="row">
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
                            <button id="secCommisionNoBtn" class="btn btn-primary appointmentBtn cancelAbortion">Не</button>
                        </div>
                    </div>
                </div>
        `);
        } else {
            $gameContent.append(`
                <div class="fragment firstCommision">
                    <div class="row">
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
                            <button id="" class="btn btn-primary appointmentBtn cancelAbortion">Не</button>
                        </div>
                    </div>
                </div>
            `);
        }

        $("#backBtn").prop("disabled", true);
        $("#backBtn").addClass("unpickedChoice");

        $("#submitAbortBtn").prop("disabled", true);
        $("#submitAbortBtn").addClass("pickedChoice");
    });

    $gameContent.on("click", "#secCommisionYesBtn", () => {
        let numbers = [1, 2]
        let number = numbers[Math.floor(Math.random() * numbers.length)];
        //NE ZABORAVAJ NA GMETO PODOLE ZA ZAKAZI SLEDEN PREGLED!
        if (number == 1) {
            $gameContent.append(`
                <div class="fragment">
                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <div class="col-5">
                                    <div>
                                        <h5>Второстепената комисија не го одобри вашето барање за абортус, приморани сте да продолжите so бременоста.</h5>
                                        <p>Рокот за безбеден абортус истече</p>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <div>
                                        <img class="card-img-top" src="Assets/administrativeStop.jpg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button id="" class="btn btn-primary appointmentBtn makeSecApp">Закажи го следниот преглед</button> 
                        </div>
                    </div>
                </div>
            `)
        } else {
            $gameContent.append(`
                <div class="fragment secondCommision">
                    <div class="row">
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
                            <button id="" class="btn btn-primary appointmentBtn cancelAbortion">Не</button>
                        </div>
                    </div>
                </div>
            `)
        }

        $("#secCommisionNoBtn").prop("disabled", true);
        $("#secCommisionNoBtn").addClass("unpickedChoice");

    });

    $gameContent.on("click", ".finishAbortion", () => {
        debugger;
        $gameContent.append(`
                <div class="fragment">
                    <div class="row">
                        <div=class"col">
                            <div class="row">
                                <div class="col-5">
                                    <div>
                                        <h5>Второстепената комисија не го одобри вашето барање за абортус, приморани сте да продолжите so бременоста.</h5>
                                        <p>Рокот за безбеден абортус истече</p>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <div>
                                        <img class="card-img-top" src="Assets/administrativeStop.jpg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button id="" class="btn btn-primary appointmentBtn makeSecApp">Закажи го следниот преглед</button> 
                        </div>
                    </div>
                </div>
            `)
    });

    $gameContent.on("click", ".backBtn", () => {
        $(".abortionIntro").hide();
        $(".carryOnIntro").hide();

        // $("#submitAbortBtn").prop("disabled", true);
        // $("#submitAbortBtn").addClass("unpickedChoice");
        // $("#backBtn").prop("disabled", true);
        // $("#backBtn").addClass("pickedChoice");

        $("#abortBtn").prop("disabled", false);
        $("#abortBtn").removeClass("pickedChoice");


        $("#continueBtn").prop("disabled", false);
        $("#continueBtn").removeClass("unpickedChoice");

    });

    $gameContent.on("click", ".cancelAbortion", () => {
        $(".abortionIntro").hide();
        $(".firstCommision").hide();
        $(".secondCommision").hide();

        $("#abortBtn").prop("disabled", false);
        $("#abortBtn").removeClass("pickedChoice");


        $("#continueBtn").prop("disabled", false);
        $("#continueBtn").removeClass("unpickedChoice");
    });

    $gameContent.on("click", "#jumpAllApp", () => {
        $gameContent.append(`
            <div class="fragment">
                <div class="row">
                    <div clas="col">
                        <h1>GAME OVER</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button id="restartBtn" class="btn btn-primary appointmentBtn restartBtn" data-toggle="modal" data-target="#myModal">Пробајте повторно</button>

                        <button id="" class="btn btn-primary backBtn">Назад</button>

                    </div>
                </div>
            </div>
        `)

        $("#nextAppBtnAnommaly").prop("disabled", true);
        $("#nextAppBtnAnommaly").addClass("unpickedChoice");
        $("#jumpAllApp").prop("disabled", true);
        $("#jumpAllApp").addClass("pickedChoice");
    });
    
    $gameContent.on("click", "#submitAbortBtn", () => {
        let numbers = [1, 2]
        let number = numbers[Math.floor(Math.random() * numbers.length)];

        if (number == 1) {
            $gameContent.append(`
                <div class="fragment firstCommision">
                    <div id="" class="row">
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
                            <button id="secCommisionNoBtn" class="btn btn-primary appointmentBtn cancelAbortion">Не</button>
                        </div>
                    </div>
                </div>
        `);
        } else {
            $gameContent.append(`
                <div class="fragment firstCommision">
                    <div class="row">
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
                            <button id="" class="btn btn-primary appointmentBtn cancelAbortion">Не</button>
                        </div>
                    </div>
                </div>
            `);
        }
    });

    $gameContent.on("click", "#secCommisionYesBtn", () => {
        let numbers = [1, 2]
        let number = numbers[Math.floor(Math.random() * numbers.length)];

        if (number == 1) {
            $gameContent.append(`
                <div class="fragment">
                    <div class="row">
                        <div class="col">
                            <div>
                                <h5>Второстепената комисија не го одобри вашето барање за абортус, приморани сте да продолжите so бременоста.</h5>
                                <p>Рокот за безбеден абортус истече</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button id="" class="btn btn-primary appointmentBtn">Закажи го следниот преглед</button>
                        </div>
                    </div>
                </div>
            `)
        } else {
            $gameContent.append(`
                <div class="fragment secondCommision">
                    <div class="row">
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
                            <button id="" class="btn btn-primary appointmentBtn cancelAbortion">Не</button>
                        </div>
                    </div>
                </div>
            `)
        }
    });

    $gameContent.on("click", ".backBtn", () => {
        $(".abortionIntro").hide();
        $(".carryOnIntro").hide();
    });

    $gameContent.on("click", ".cancelAbortion", () => {
        $(".abortionIntro").hide();
        $(".firstCommision").hide();
        $(".secondCommision").hide();
    });

    $gameContent.on("click", "#jumpAllApp", () => {
        $gameContent.append(`
            <div class="fragment">
                <div class="row">
                    <div clas="col">
                        <h1>GAME OVER</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button id="restartBtn" class="btn btn-primary appointmentBtn restartBtn" data-toggle="modal" data-target="#myModal">Пробајте повторно</button>
                    </div>
                </div>
            </div>
        `);
    });

    $gameContent.on("click", "#nextAppBtnAnommaly", () => {
        $gameContent.append(`
            <div class="fragment">
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <h1>Трет преглед (18 - 22 гестациска недела)</>
                            </div>
                        </div> 
                        <div class="row">
                            <div class="col-4">
                                <div>Ехо преглед за аномалии на поединечни органи кај овластен гинеколог за генетски скрининг (матичен) (неможе соекој да го направи)</div>
                                <div>Закажете преглед за:</div>
                                <ul>
                                    <li>
                                        притисок, крвна слика, урина, тежина, биохемиски анализи во најблиската болница или поликлиника
                                    </li>
                                </ul>
                            </div>
                            <div class="col-8">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <div class="card btnDescription">
                            <div class="card-block">
                                <p class="card-text">Плодот не е жив, закажете прекин на бременоста</p>
                            </div>
                            <button id="death" class="btn btn-primary">Изберете</button>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card btnDescription">
                            <div class="card-block">
                                <p class="card-text">Плодот е со аномалии провокација за породување за прекин на бременоста</p>
                            </div>
                            <button id="anomalyAbortion" class="btn btn-primary">Изберете</button>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card btnDescription">
                            <div class="card-block">
                                <p class="card-text">Плодот е со аномалии продолжи со бременоста</p>
                            </div>
                            <button id="anomalyContinue" class="btn btn-primary">Изберете</button>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card btnDescription ">
                            <div class="card-block">
                                <p class="card-text">Резултатие се во ред закажете следен преглед</p>
                            </div>
                            <button class="btn btn-primary">Изберете</button>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });

    //restart game (not finished)
    $gameContent.on("click", "#restartBtn", () => {
        $gameContent.hide();
    });
});



    //restart game (not finished)
    $gameContent.on("click", "#restartBtn", () => {
        $gameContent.hide();
    });


    //====================  VTOR PREGLED    ===============================
    $gameContent.on("click", ".makeSecApp", () => {
        $("#jumpAppBtn").prop("disabled", true);
        $("#jumpAppBtn").addClass("unpickedChoice");
        $("#nextAppBtn").prop("disabled", true);
        $("#nextAppBtn").addClass("pickedChoice");

        $gameContent.append(`
            <div class="row">
                <div class="col">
                    RABOTI
                </div>
            </div>
        `)
    });

});





$("#testBtn").on("click", () => {
    $gameContent.removeClass("hide");
    $gameContent.append(`
                <div class="fragment">
                    <div class="row">
                        <div=class"col">
                            <div class="row">
                                <div class="col-5">
                                    <div>
                                        <h5>Второстепената комисија не го одобри вашето барање за абортус, приморани сте да продолжите so бременоста.</h5>
                                        <p>Рокот за безбеден абортус истече</p>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <div>
                                        <img class="card-img-top" src="Assets/administrativeStop.jpg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <button id="" class="btn btn-primary appointmentBtn makeSecApp">Закажи го следниот преглед</button> 
                        </div>
                    </div>
                </div>
            `)

});

//=================================== TRET PREGLED =================================================

