const headerElements = { //Zapisanie w postaci obiektu elementów DOM należących do menu
    header: document.querySelector('.js-header'),
    toggleNav: document.querySelector('.js-header-toggle'),
    anchors: document.querySelectorAll('a[href*="#"]')
}

const newsPosts = [ //Tablica wpisów - aktualności, które zostaną wyświetlone na stronie
    {
        id: 0,
        date: "2021-05-06",
        title: "Zimna majówka – ospałe szczupaki",
        image: "images/news/news-1.jpg",
        excerpt: "Moja majówka rozpoczęła się porannym szronem na trawie. Potem było ołowiane niebo z chwilowymi przejaśnieniami, deszcz, ziąb i silny wiatr.",
        text: 
            `Moja majówka rozpoczęła się porannym szronem na trawie. Potem było ołowiane niebo z chwilowymi przejaśnieniami, deszcz, ziąb i silny wiatr.  Ale, jak głosi znane powiedzenie, nie ma złej pogody – może być tylko złe ubranie.
            <br /><br />
            Dwa elementy nie sprzyjały dobrym braniom. Po pierwsze, według mojej oceny wiosna jest opóźniona o co najmniej miesiąc. Woda w kaszubskich jeziorach, nawet tych najpłytszych, ma temperaturę zaledwie 9-10 stopni. Nie widać jeszcze liści grążeli, a na kiełkujących listkach rdestnicy kędzierzawej znalazłem zlepki świeżej ikry – prawdopodobnie okoni. Po drugie, podczas majowego weekendu w rejonie moich ulubionych jezior ciśnienie atmosferyczne przez cały czas spadało (z wyjątkiem poranka 3 maja), co znacznie wyhamowało brania szczupaków.
            <br /><br />
            Nie przeszkodziło mi to w złowieniu kilku przyzwoitych ryb, choć jeszcze wychudzonych po niedawno odbytym tarle.  A receptą na szczupakową anemię było zastosowanie dużej przynęty (ripper 25 cm) i jej bardzo wolna prezentacja. Nieźle działały też neutralne dżerki, ale prowadzone znacznie łagodniej niż jesienią.
            <br /><br />
            A jakie przynęty sprawdziły się podczas Waszej majówki?`
    },
    {
        id: 1,
        date: "2021-05-04",
        title: "Swing-tip niesłusznie zapomniany",
        image: "images/news/news-2.jpg",
        excerpt: "Metoda swing-tip przywędrowała nad nasze wody razem z drgającą szczytówką na początku lat dziewięćdziesiątych. W sklepach, oprócz lekkich pickerów z delikatnymi szczytówkami, pojawiły się również wędziska wyposażone w dodatkową „złamaną” końcówkę.",
        text: 
            `<strong>Metoda swing-tip przywędrowała nad nasze wody razem z drgającą szczytówką na początku lat dziewięćdziesiątych. W sklepach, oprócz lekkich pickerów z delikatnymi szczytówkami, pojawiły się również wędziska wyposażone w dodatkową „złamaną” końcówkę.</strong>
            <br /><br />
            Jednak swing-tip dłużej u nas nie zagościł. Został zapomniany przez wędkarzy i wędkarski rynek. Zapewniam, że zupełnie niesłusznie. (…)
            <br /><br />
            Swing-tip doskonale wpisuje się w specyfikę łowisk linowych czy karasiowych, czyli niewielkich i płytkich stawów, glinianek, starorzeczy, niewielkich zaporówek oraz przybrzeżnych stref większych zbiorników. Sprawdza się podczas łowienia ostrożnie żerujących leszczy. Potrafi być również nieoceniony przy połowie delikatnie biorących ryb w zimnych porach roku. Sam byłem też świadkiem łowienia ta metoda niedużych karpi w jednym z komercyjnych łowisk. Jedną z największych zalet swing-tipu …”`
    },
    {
        id: 2,
        date: "2021-05-03",
        title: "Okoniowa niepogoda",
        image: "images/news/news-3.jpg",
        excerpt: "W czerwcu, jak zapewne wielu spinningistów, koncentruje się głównie na sandaczu – te magiczne pstryki, atomowe brania i niepewne dotknięcia zmuszające do kreatywności. Ale kiedy tylko zapowiadają wiatr i deszcz, zostawiam sandacze w spokoju i ruszam na grube, jeziorowe okonie.",
        text: 
            `<strong>W czerwcu, jak zapewne wielu spinningistów, koncentruje się głównie na sandaczu – te magiczne pstryki, atomowe brania i niepewne dotknięcia zmuszające do kreatywności. Ale kiedy tylko zapowiadają wiatr i deszcz, zostawiam sandacze w spokoju i ruszam na grube, jeziorowe okonie. (...)</strong>
            <br /><br />
            Zawsze pamiętam, aby wybierać nawietrzną część zbiornika. Im większe fale rozbijają się o brzeg, z którego łowię, tym lepsze efekty. Jestem niemal przekonany, że drapieżniki podpływające pod trzciny nie szukają tylko i wyłącznie małych ryb, które tam mają swoje schronienie. Fale nanoszą mnóstwo drobnych organizmów pod brzeg, za tym ciągną płocie, leszcze czy karasie, a za nimi kolejne w łańcuchu pokarmowym drapieżniki.`
    },
    {
        id: 3,
        date: "2021-05-01",
        title: "Ogromny sum wyłowiony w centrum Krakowa",
        image: "images/news/news-4.jpg",
        excerpt: "Pasjonat wędkarstwa Kamil Walicki złowił gigantycznego suma w Wiśle w centrum Krakowa. Długość ryby przekroczyła magiczną barierę dwóch metrów. Łowca ochrzcił ją imieniem Smok Wawelski i po chwili wypuścił z powrotem do wody.",
        text: 
            `<strong>Pasjonat wędkarstwa Kamil Walicki złowił gigantycznego suma w Wiśle w centrum Krakowa. Długość ryby przekroczyła magiczną barierę dwóch metrów. Łowca ochrzcił ją imieniem "Smok Wawelski" i po chwili wypuścił z powrotem do wody.</strong>
            <br /><br />
            Fanatyk wędkarstwa oraz dziennikarz "Wiadomości Wędkarskich" złowił prawdziwego giganta wraz z Pawłem Kabatem, specjalistą w łowieniu sumów. - Kręciliśmy się po wodzie, aż w końcu Paweł znalazł miejsce, w którym pływało kilka dwumetrowych sumów. Na obszarze 100 metrów widzieliśmy kilka wielkich ryb, więc nie odpuszczaliśmy tego miejsca - relacjonuje Kamil Walicki na swojej stronie internetowej.`
    },
    {
        id: 4,
        date: "2019-07-28",
        title: "Świętokrzyskie: tona śniętych ryb w zbiorniku. Winna susza?",
        image: "images/news/news-5.jpg",
        excerpt: "W zbiorniku Buczyna w Bogorii usunięto prawie tonę śniętych ryb. Według Zarządu Polskiego Związku Wędkarskiego w Tarnobrzegu, winę ponosi przepompowania ścieków komunalnych. Innego zdania jest wójt miejscowości - informuje Radio Zet.",
        text: 
            `<strong>W zbiorniku Buczyna w Bogorii usunięto prawie tonę śniętych ryb. Według Zarządu Polskiego Związku Wędkarskiego w Tarnobrzegu, winę ponosi przepompowania ścieków komunalnych. Innego zdania jest wójt miejscowości - informuje Radio Zet.</strong>
            <br /><br />
            Organizacja przekazała, że problem istnieje od dwóch tygodni. Wędkarze mieli co kilka dni usuwać po 100, 150 kilogramów śniętych ryb. Wśród nich takie gatunki jak szczupak, okoń, leszcz czy sandacz.
            <br /><br />
            Wójt Bogorii zapewnia, że sprawa jest wyjaśniana, a przepompowania została skontrolowana. Nie wykazano żadnych naruszeń. Zdaniem wójta winna jest... susza, która doprowadziła do zmniejszenia przepływu wody.`
    },
    {
        id: 5,
        date: "2019-05-01",
        title: "Policjanci zatrzymali okrutnego kłusownika",
        image: "images/news/news-6.jpg",
        excerpt: "Zielonogórscy policjanci wraz ze Strażą Rybacką zatrzymali kłusownika, który łowił ryby w okresie ochronnym okrutną metodą na tzw. szarpaka powodującą rany w ciałach ryb.",
        text: 
            `<strong>Zielonogórscy policjanci wraz ze Strażą Rybacką zatrzymali kłusownika, który łowił ryby w okresie ochronnym okrutną metodą na tzw. "szarpaka" powodującą rany w ciałach ryb.</strong>
            <br /><br />
            Kłusownik działał w starorzeczu Odry w miejscowości Wielobłota. 37-latek łowił ryby z gatunku Świnka w okresie ochronnym. Metoda połowu była wyjątkowo okrutna - na tzw. "szarpaka" – powoduje rany w ciałach ryb nie tylko tych złowionych, ale także w takich, które zostały zahaczone i odpłynęły.
            <br /><br />
            37-latek usłyszał zarzut z art. 27c Ustawy o rybactwie śródlądowym i przyznał się do winy. Strażnicy znaleźli już na brzegu kilkadziesiąt sztuk martwych ryb. Mężczyźnie grozi kara grzywny, kara ograniczenia wolności lub do 2 lat więzienia.`
    },
];

const products = [ //Tablica produktów, które zostaną wyświetlone na stronie
    {
        id: 0,
        name: "Kołowrotek Okuma 8K 5+1bb",
        description:
            `Kołowrotek karpiowy Okuma 8K wyposażono w 5 łożysk kulkowych oraz rolkowe łożysko oporowe Quick-Set - wykonanych ze stali nierdzewnej.
            <br /><br />
            W kołowrotku zastosowano wielotarczowy hamulec wyposażony w podkładki z olejowanego filcu oraz w wodoodporne okładziny hamulca Hydro Block,
            <br /><br />
            Szybki progresywny hamulec. Oznacza to, że przejście z bardzo niewielkiego nacisku do pełnego zablokowania odbywa się przy obrocie pokrętła hamulca o mniej niż 360 stopni (1 obrót).
            <br /><br />
            Jest to doskonałe rozwiązanie dla kołowrotków bez wolnego biegu.
            <br /><br />
            Korpus Okuma 8K wykonano z grafitu i jest w pełni odporny na korozję.
            <br /><br />
            Wałek zębaty jest precyzyjnie wycinany z mosiądzu.
            <br /><br />
            Rotor dla zwiększenia dokładności wyważono cyfrowo i zastosowano w nim system blokady.
            <br /><br />
            Szpula kołowrotka Okuma 8K jest wykonana z wytrzymałego aluminium.
            <br /><br />
            Wyposażony został w dwa klipsy do linki.
            <br /><br />
            Zastosowano precyzyjną przekładnię o wolnej oscylacji.
            <br /><br />
            Kabłąk wykonano z pełnego aluminium
            <br /><br />
            W kołowrotku Okuma 8K zastosowano ślimakowy posuw szpuli oraz system CFR - cyklonicznego przepływu powietrza wywołanego przez rotor.`,
        image: "images/products/product-1.jpg",
        price: "349,00"
    },
    {
        id: 1,
        name: "Kołowrotek Okuma Custom Black Feeder 7+1bb",
        description:
            `Doskonałej jakości kołowrotek Okuma Custom Black Feeder, o korpusie wykonanym z odpornego na korozję grafitu, wyposażono w 7 łożysk kulkowych i 1 łożysko oporowe, bezstopniowy system anty-rewersu Quick-Set oraz rotor, który podczas pracy generuje wirowy przepływ powietrza.
            <br /><br />
            Kołowrotek posiada płytką aluminiową szpulę, oraz zapasową szpulę jest o standardowej głębokości także wykonaną z aluminium. Klips do linki o okrągłym kształcie. Zastosowano wytrzymały wielotarczowy hamulec z podkładkami japońskimi wykonanymi z olejowanego filcu.
            <br /><br />
            Kołowrotek Okuma Custom Black Feeder wyposażono w metalową korbę z uchwytem z materiału EVA. Zastosowano precyzyjną szybką przekładnię eliptyczną. Wałek zębaty wycięto z mosiądzu. Kabłąk wykonany został z pełnego aluminium. Cyfrowo wyważony rotor oraz łożyskowana rolka kabłąka.`,
        image: "images/products/product-2.jpg",
        price: "209,00"
    },
    {
        id: 2,
        name: "Kołowrotek Mikado Carus",
        description:
            `Mikado Carus to seria uniwersalnych kołowrotków spinningowych. Korpus kołowrotka wykonano ze wzmocnionego kompozytu grafitowego. Wzmocniono także oś główną.
            Kołowrotki Mikado Carus dzięki doskonale dopasanym elementom przekładni oraz 5 wysokiej klasy łożyskom kulkowym charakteryzują się wysoką precyzją nawoju linki i płynnością pracy.
            <br /><br />
            Kołowrotki te posiadają przełożenie rzędu 5.51 umożliwiające stosowanie ich we wszystkich technikach spinningowych.
            <br /><br />
            Jak przystało na dobry kołowrotek spinningowy Mikado Carus posiad bardzo precyzyjny i płynnie działający hamulec przedni. Dzięki temu wędkarz uzyskuje duża przewagę podczas holu okazowych ryb. Kołowrotki te oferowane są w trzech wersjach wielkości: 200, 3000 i 4000. W zestawie z kołowrotkiem oferowana jest także szpula zapasowa.`,
        image: "images/products/product-3.jpg",
        price: "92,00"
    },
    {
        id: 3,
        name: "Wędka Dragon Express Spinn 30 275cm 10-30g",
        description:
            `Dobre wędzisko spinningowe Dragon Express Spinn. Skonstruowane zostało z lekkich i trwałych materiałów. Charakteryzuje się szczytowym ugięciem i średnio szybką akcją, a także płynną pracą podczas holu.
            <br /><br />
            Czuła szczytówka bardzo dobrze przenosi drgania na blank. Czujemy każdy ruch przynęty, podwodne przeszkody oraz brania drapieżników. Dzięki dobremu ładowaniu podczas zarzucania bardzo łatwo można oddawać dalekie i precyzyjne rzuty.
            <br /><br />
            Wędziska o mniejszej gramaturze bardzo dobrze sprawdzą się podczas łowienia lekkimi przynętami z łodzi, okoni i kleni. Wędki o większym wagomiarze to doskonałe rozwiązanie przy połowie sandaczy i szczupaków
            <br /><br />
            Blank wykonany z połączenia grafitu 24mln PSI i sztywniejszego 30mln PSI. Zewnętrzną warstwę dodatkowo wzmocniono wytrzymałościowym grafitem nowej generacji 24mln PSI Hi-Impact. W rdzeniu natomiast umieszczono wzmacniające maty szklane typu epoxy glass.
            <br /><br />
            W wędzisku Dragon Express zastosowano lekkie i wytrzymałe przelotki klasy SiC, z omotkami pokrytymi epoksydowym lakierem o długiej żywotności.
            <br /><br />
            Mocowanie kołowrotka DPS wykonano z solidnego grafitu, wygodnego w użytkowaniu.
            <br /><br />
            Komfortową rękojeść skonstruowano z twardej i trwałej pianki EVA.
            <br /><br />
            Wędka ta jest bardzo dobrym wyborem spośród budżetowych wędzisk spinningowych.`,
        image: "images/products/product-4.jpg",
        price: "164,00"
    },
    {
        id: 4,
        name: "Wędka Dragon Black Rock II 198cm 3-18g",
        description:
            `Rewelacyjna wędka spinningowa Dragon Black Rock II. Wykonana została z wysokiej jakości japońskich włókien węglowych Toray. Smukły blank charakteryzuje się wysoką czułością, szczytowym ugięciem i szybką akcją.
            <br /><br />
            Wędzisko jest świetnie wyważone. Modele o c.w. do 20 gramów doskonale sprawdzają się podczas łowienia z łodzi - kleni, okoni i finezyjnie sandaczy. Modele o większej masie wyrzutowej doskonale nadają się do łowienia szczupaków i sandaczy.
            <br /><br />
            Do budowy rdzenia i środkowej części wędziska Dragon Black Rock II wykorzystano wysokomodułowy grafit 24 i 30 mln PSI. W zewnętrznej warstwie zastosowano grafity o podwyższonej sztywności 42 mln PSI.
            <br /><br />
            Dla uzyskania jak najwyższej wytrzymałości na uszkodzenia mechaniczne zastosowano nawój z kilku bardzo cienkich oraz precyzyjnie szlifowanych warstw taśmy węglowej, w technologii Matrix Shield.
            <br /><br />
            Blank uzbrojony został w minimalistyczne i bardzo lekkie przelotki typu SiC. Kołowrotek mocowany jest do bardzo wygodnego uchwytu. Dzielona rękojeść z pianki EVA jest bardzo komfortowa i nie męczy ręki nawet przy wielogodzinnym łowieniu.`,
        image: "images/products/product-5.png",
        price: "239,00"
    },
    {
        id: 5,
        name: "Wędka Berkley E-Motion Drop Shot 5-20g",
        description:
            `Berkley E – Motion Drop Shot to seria wędek przeznaczona przede wszystkim do łowienia z łodzi metodą Drop Shot.
            <br /><br />
            Blank wędki wykonano z wysokomodułowego włókna węglowego 24 T. Charakteryzuje się on dużą mocą, czułością oraz dobrą amortyzacją podczas holu.
            <br /><br />
            Pełna, węglowa szczytówka doskonale transmituje nawet bardzo delikatne brania. Wędka uzbrojona jest w przelotki typu K – series Anty Twist ograniczające skręcanie plecionki. Dolnik wędki wykonano z trwałej pianki EVA.`,
        image: "images/products/product-6.jpg",
        price: "245,00"
    },
];

const initLocalStorage = () => { //Funkcja inicjalizująca localStorage
    if(localStorage.getItem("products") === null) {
        localStorage.setItem("products", JSON.stringify([]));
    }
}
initLocalStorage();

const initToggle = () => { //Funkcja dodająca obsługę zdarzenia kliknięcia w przycisk menu na urządzeniach mobilnych
    const { header, toggleNav } = headerElements; //Zapisanie do zmiennych elementów DOM

    if( header && toggleNav ) { //Jeżeli na stronie znajduje się menu
        toggleNav.addEventListener('click', () => { //Dodanie obsługi zdarzenia kliknięcia
            header.classList.toggle('is-open'); //Jeżeli nie ma klasy is-open zostaje ona dodana, w przeciwnym wypadku - usunięta
            toggleNav.classList.toggle('is-open'); //Jeżeli nie ma klasy is-open zostaje ona dodana, w przeciwnym wypadku - usunięta
        });
    }
}
initToggle(); //Wywołanie funkcji


const initLinks = () => { //Funkcja obsługująca rozwijanie listy w mnu na urządzeniach mobilnych
    const links = headerElements.header.querySelectorAll('a'); //Zapisujemy w zmiennej wszystkie linki
    links.forEach(link => { //Dla każdego linku
        const parent = link.parentElement; //Zapisujemy w zmiennej rodzica linku
        if( parent.classList.contains('has-children')) { //Jeżeli rodzic ma klasę has-children
            link.addEventListener( "click", event => { //Dodajemy obsługę zdarzenia kliknięcia
                if( window.innerWidth < 992 && !link.parentElement.classList.contains('is-open') ) { //Jeżeli jest to urządzenie o szerokości wyświetlacza < 992px i lista nie jest jeszcze otwarta
                    event.preventDefault(); //Blokujemy domyślną obsługę kliknięcia
                    event.stopImmediatePropagation(); 
                    const activeSiblings = parent.parentElement.querySelectorAll('li.is-open'); //Zapisujemy w zmiennej wszystkie otwarte listy
                    activeSiblings.forEach(sibling => { sibling.classList.remove('is-open')}); //Zamykamy wszystkie otwarte listy
                    link.parentElement.classList.add('is-open'); //Otwieramy wybraną listę - przez dodanie klasy is-open
                }
            });
        }
    });   
}
initLinks();

$(function(){ //Slider jQuery
    let currentPosition = 0; //Zmienna przechowująca indeks obecnie wyświetlananego slajdu
    let photo = $('.photo'); //Zapisanie wszystkich slajdów w zmiennej
    let photoNums = photo.length; //Zapisanie w zmiennej liczby slajdów
    
    let speed = 600; //Zmienna przechowująca czas trawnia animacji przejścia
    let timeout = 5000; //Zmienna przechowująca czas po jakim slajd zostanie zmieniony
    $('.photo').eq(0).show(); //Wyświetlenie pierwszego slajdu
    
    function move() { //Funkcja zmieniająca slajd
      let nextPhoto = (currentPosition + 1) % photoNums; //Zapisanie w zmiennej kolejnego slajdu
      photo.eq(currentPosition).fadeOut(speed); //Ukrycie poprzedniego slajdu
      photo.eq(nextPhoto).fadeIn(speed); //Wyswietlenie kolejnego slajdu
      currentPosition = nextPhoto; //Aktualizacja wartości zmiennej przechowującej indeks obecnie wyświetlanego slajdu
    }
    setInterval(move, timeout); //Ustawienie wywołania funkcji zmiany slajdu co czas określony w zmiennej timeout
});

const displayWeatherData = (data) => { //Zmienna wyświetlająca przekazane dane o pogodzie
    const container = document.querySelector('.js-weather'); //Zapisanie w zmiennej elementu DOM, gdzie zostaną wyświetlone informacje

    if( !container ) { return; } //Jeżelnie nie ma takiego elementu na stronie wychodzimy z funkcji

    const tempContainer = container.querySelector('.js-weather-temp'); //Zapisanie w zmiennych elementów DOM
    const iconContainer = container.querySelector('.js-weather-icon');
    const windSpeedContainer = container.querySelector('.js-weather-wind-speed');
    const windDirectionContainer = container.querySelector('.js-weather-wind-direction');
    const humidityContainer = container.querySelector('.js-weather-humidity');
    const airPressureContainer = container.querySelector('.js-weather-air-pressure');
    const precipitationAmountContainer = container.querySelector('.js-precipitation-amount');

    let dataNow = data.properties.timeseries[0].data.instant.details; //Zapisanie w zmiennej danych o pogodzie w obecnej chwili

    let tempNow = dataNow.air_temperature; //Przypisanie do zmiennych odpowiednich wartości
    let airPressureNow = dataNow.air_pressure_at_sea_level; 
    let humidityNow = dataNow.relative_humidity;
    let windSpeedNow = dataNow.wind_speed;
    let windDirectionNow = dataNow.wind_from_direction;
    let data1Hour = data.properties.timeseries[0].data.next_1_hours;
    let symbolCode = data1Hour.summary.symbol_code;
    let precipitationAmount = data1Hour.details.precipitation_amount;

    tempContainer.innerHTML = tempNow + "&deg;"; //Wyświetlenie temperatury w przygotowanym elemencie

    let icon = document.createElement('img'); //Utworzenie elementu img, który będzie ikoną pogody
    icon.src = `images/weathericons/${symbolCode}.png`; //ustawienie źródła obrazu
    iconContainer.appendChild(icon); //Dodanie ikony do elementu DOM

    windSpeedContainer.innerHTML = windSpeedNow + " m/s"; //Wyświetlenie prędkości wiatru w przygotowanym elemencie

    let windDirectionIcon = document.createElement('i'); //Utworzenie elementu i, który będzie strzałką określającą kierunek wiatru
    windDirectionIcon.classList.add('bi'); //Dodanie odpowiednich klas Bootstrap
    windDirectionIcon.classList.add('bi-arrow-down');
    windDirectionIcon.style.display = 'inline-block';
    windDirectionIcon.style.transform = `rotate(${windDirectionNow}deg)`; //Obrócenie elementu o wartość pobraną z API

    windDirectionContainer.append(windDirectionIcon); //Dodanie ikony do elementu DOM

    humidityContainer.innerHTML = humidityNow + "%"; //Wyświetlenie wilgotności w przygotowanym elemencie
    airPressureContainer.innerHTML = airPressureNow + " hPa"; //Wyświetlenie ciśnienia atmosferycznego w przygotowanym elemencie
    precipitationAmountContainer.innerHTML = precipitationAmount + " mm"; //Wyświetlenie opadów w przygotowanym elemencie

    let timeNow =  new Date(data.properties.timeseries[0].time); //Pobranie daty z danych pochodzących z API w celu określenia, ile godzin brakuje do kolejnych dni (aby określić indeks w danych z API) 
    let FirstDayAfter = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate() + 1, 12, 0, 0); //Utworzenie daty następnego dnia o 12
    let SecondDayAfter = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate() + 2, 12, 0, 0); //Utworzenie daty za 2 dni o 12
    let ThirdDayAfter = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate() + 3, 12, 0, 0); //Utworzenie daty za 3 dni o 12

    let FirstDayAfterIndex = (FirstDayAfter - timeNow)/3600000; //Obliczenie ilości godzin, pozostałych do kolejnego dnia o 12
    let SecondDayAfterIndex = (SecondDayAfter - timeNow)/3600000; //Obliczenie ilości godzin, pozostałych do daty za 2 dni o 12
    let ThirdDayAfterIndex = (ThirdDayAfter - timeNow)/3600000; //Obliczenie ilości godzin, pozostałych do daty za 3 dni o 12

    displayTile(FirstDayAfterIndex, data, FirstDayAfter); //Wywołanie funkcji wyświetlającej kafelek z informacją o pogodzie za 1 dzien
    displayTile(SecondDayAfterIndex, data, SecondDayAfter); //Wywołanie funkcji wyświetlającej kafelek z informacją o pogodzie za 2 dni
    displayTile(ThirdDayAfterIndex, data, ThirdDayAfter); //Wywołanie funkcji wyświetlającej kafelek z informacją o pogodzie za 3 dni

    container.classList.add('is-initialized'); //Dodanie klasy do elementu DOM, co spowoduje jego wyświetlenie
}

const getDayName = (date) => { //Funckja zwracająca nazwę dnia tygodnia dla podanej daty
    let days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    let dayName = days[date.getDay()];

    return dayName;
}

const displayTile = (index, data, date) => { //Funckja wyświetlająca kafelek zawierający informację o pogodzie dla danej daty
    const tilesContainer = document.querySelector('.js-weather-tiles'); //Zapisanie elementu DOM - rodzica kafelków w zmiennej

    let col = document.createElement('div'); //Utworzenie elementu div z odpowiednimi klasami Bootstrap
    col.classList.add('col-12');
    col.classList.add('col-md-4');

    let day = getDayName(date); //Pobranie nazwy dnia dla daty
    let symbolCode; //Zmienna przechowująca nazwę ikony

    if(data.properties.timeseries[index].data.next_6_hours) { //Jeżeli dostępne są dane o pogodzie za 6 godzin
        symbolCode = data.properties.timeseries[index].data.next_6_hours.summary.symbol_code; //Zapisujemy nazwę ikony do zmiennej
    } else if(data.properties.timeseries[index].data.next_1_hours) { //Jeżeli dostępne są dane o pogodzie za 1 godzinę
        symbolCode = data.properties.timeseries[index].data.next_1_hours.summary.symbol_code; //Zapisujemy nazwę ikony do zmiennej
    } else {
        return;
    }

    let temp = data.properties.timeseries[index].data.instant.details.air_temperature + "&deg;"; //Zapisanie w zmienej temperatury

    let tile = document.createElement('div'); //Utowrzenie elementu div
    tile.classList.add('o-tile'); //Dodanie klas
    tile.classList.add('c-weather-tile');

    tile.innerHTML = `<div class="c-weather-tile__day">${day}</div>
                    <div class="c-weather-tile__icon"><img src="images/weathericons/${symbolCode}.png" /></div>
                    <div class="c-weather-tile__temp">${temp}</div>`; //Ustawienie zawartości kafelka

    col.append(tile); //Dodanie kafelka do rodzica
    tilesContainer.append(col); //Dodanie rodzica do kontenera
} 

const initWeather = (position) => { //Funkcja pobierajca dane o pogodzie z API dla danej lokalizacji 
    const container = document.querySelector('.js-weather'); //Zapisanie w zmiennej elementu DOM

    if( !container ) { return; } //Jeżeli nie ma takiego elementu, wychodzimy z funkcji

    fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${position.coords.latitude}&lon=${position.coords.longitude}`).then((response) => {
        return response.json(); //Połączenie z API
    }).then(function (data) { //Jeżeli udało się połączyć wywołujemy funkcję wyświetlającą dane o pogodzie
        displayWeatherData(data);
    }).catch(function (err) { //Jeżeli nie, wyświetlamy w konsoli błąd
        console.warn('Something went wrong.', err);
    });
}

const getLocation = () => { //Funckja pobierająca lokalizację
    if( !navigator.geolocation || !document.body.classList.contains('is-index') ) { return; } //Jeżeli geolokalizacja nie jest obsługiwana lub jest to strona inna niż główna wychodzimy z funkcji
    navigator.geolocation.getCurrentPosition(initWeather); //Pobieramy lokalizację i wywołujemy funkcję do pobrania informacji o pogodzie
}
getLocation();

const initPostsPage = () => { //Funkcja wyświetlająca posty aktualności na stronie archiwum aktualności
    const container = document.querySelector('.js-news-container'); //Zapisanie w zmiennej elementu DOM

    if( !container ) { return; } //Jeżeli nie ma takiego elementu wychodzimy z funkcji

    if( newsPosts.length > 0 ) { //Jeżeli są posty
        newsPosts.forEach(post => { //Dla każdego posta
            let col = document.createElement('div'); //Tworzymy element DOM
            col.classList.add('col-12'); //Dodajemy klasy Bootstrap
            col.classList.add('col-md-6');
            col.classList.add('col-lg-4');

            let tile = document.createElement('div'); //Tworzymy element DOM
            tile.classList.add('c-news-tile'); //Dodajemy klasy
            tile.classList.add('o-tile');

            tile.innerHTML = 
                    `<a href="single-news.html?id=${post.id}">
                        <div class="c-news-tile__image" style="background-image: url(${post.image});"></div>
                        <div class="c-news-tile__title">${post.title}</div>
                        <div class="c-news-tile__excerpt">${post.excerpt}</div>
                    </a>`; //Wstawiamy zawartość kafelka aktualności, link ustawiamy na stronę pojedynczej aktualności z parametrem id przekazanym w linku

            col.append(tile); //Dodanie elementów do DOM
            container.append(col);
        });
    }
}
initPostsPage();

const getPost = (index) => { //Funckja zwracająca post aktualności z tablicy postów o podanym indeksie
    for(let i = 0; i < newsPosts.length; i++) { //Przechodzimy po całej tablicy
        if(newsPosts[i].id == index) { //Jeżeli znaleźliśmy id, zwracamy post i wychodzimy z funkcji
            return newsPosts[i];
        }
    }
    return false;
}

const initSinglePostPage = () => { //Funkcja wyświetlająca dane posta na stropnie pojedynczego posta
    if( !document.body.classList.contains('is-single-news') ) { return; } //Jeżeli element body nie ma klasy is-single-news opuszczamy funckję

    let url = new URL(window.location.href); //Zapisanie obecnego linku w zmiennej
    let newsID = url.searchParams.get('id'); //Pobranie parametru id z linku

    if( !newsID ) { window.location.href = 'index.html'; } //Jeżeli nie ma id, przekierowujemy na stronę główną

    const post = getPost(newsID); //Pobieramy post o danym id

    if( !post ) { return; } //Jeżeli nie ma takiego posta, wychodzimy z funkcji

    const titleContainer = document.querySelector('.js-single-news-title'); //Zapisanie w zmiennych elementów DOM
    const dateContainer = document.querySelector('.js-single-news-date');
    const imageContainer = document.querySelector('.js-single-news-image');
    const textContainer = document.querySelector('.js-single-news-text');

    titleContainer.innerHTML = post.title; //Uzupełnienie elementów danymi pobranymi z tablicy postów
    dateContainer.innerHTML = post.date;
    imageContainer.style.backgroundImage = `url(${post.image})`;
    textContainer.innerHTML = post.text;
}
initSinglePostPage();

const initTopNews = () => { //Funkcja wyświetlająca 3 pierwsze posty aktualności
    const container = document.querySelector('.js-top-news'); //Zapisanie w zmiennej elementu DOM

    if( !container ) { return; } //Jeżeli nie ma takiego elementu, wychodzimy z funkcji

    let end = newsPosts.length >= 3 ? 3 : newsPosts.length; //Określenie końca pętli, jeżeli są zapisane przynajmniej 3 posty jest to 3, w przeciwnym wypadku jest to ilośc postów

    for(let i = 0; i < end; i++) { //Przechodzimy po każdym poście do wyświetlenia
        let tile = document.createElement('div'); //Towrzymy element DOM
        tile.classList.add('c-news-tile'); //Dodajemy klasy
        tile.classList.add('c-news-tile--vertical');
        tile.classList.add('o-tile');

        tile.innerHTML = 
                        `<a href="single-news.html?id=${newsPosts[i].id}">
                            <div class="c-news-tile__image" style="background-image: url(${newsPosts[i].image});"></div>
                            <div class="c-news-tile__title">${newsPosts[i].title}</div>
                        </a>`; //Ustawiamy zawartość kafelka, link ustawiamy na stronę pojedynczego posta z id jako parametr

        container.append(tile); //Dodajemy kafelek
    }
}
initTopNews();

const initProductsPage = () => { //Funckja wyświetlająca produkty na stronie "Katalog"
    const container = document.querySelector('.js-products-container'); //Zapisanie w zmiennej elementu DOM

    if( !container ) { return; } //Jeżeli nie ma takiego elementu, wychodzimy z funkcji

    if( products.length > 0 ) { //Jeżeli są dodane produkty
        let saved = JSON.parse(localStorage.getItem('products')); //W zmiennej zapisujemy pobraną z localStorage, przekonwertowaną z JSON, tablicę id obserwowanych produktów

        products.forEach(product => { //Dla każdego produktu
            let col = document.createElement('div'); //Towrzymy element div
            col.classList.add('col-12'); //Dodajemy klasy Bootstrap 
            col.classList.add('col-md-6');
            col.classList.add('col-lg-4');

            let tile = document.createElement('div'); //Tworzymy element div 
            tile.classList.add('c-product-tile'); //Dodajemy klasy
            tile.classList.add('o-tile');

            let added = saved.includes(product.id) ? "is-added" : ""; //Jeżeli produkt, dla którego obecnie generujemy kafelek jest obserwowany, czyli jego id znajduje się w tablicy saved, zapisujemy w zmiennej tekst is-added

            tile.innerHTML = 
                    `<a href="single-product.html?id=${product.id}">
                        <div class="c-product-tile__image" style="background-image: url(${product.image});"></div>
                        <div class="row my-2 mb-4">
                            <div class="col-10">
                                <div class="c-product-tile__name">${product.name}</div>
                            </div>
                            <div class="col-2">
                                <span class="c-product-tile__add ${added} js-product-add" data-id="${product.id}"><i class="bi bi-heart"></i></span>
                            </div>
                        </div>
                    </a>`; //Uzupełniamy kafelek danymi, jeżeli produkt jest obserwowany do przycisku obserwacji zostaje dodana klasa is-added, link prowadzi do podstrony pojedynczego produktu z id przekazanym w parametrze

            col.append(tile); //Dodanie elementów do DOM
            container.append(col);
        });
    }
}
initProductsPage();

const getProduct = (index) => { //Funckja zwracająca produkt o podanym id z tablicy produktów, analogiczna do funckji getPost(index)
    for(let i = 0; i < products.length; i++) {
        if(products[i].id == index) {
            return products[i];
        }
    }
    return false;
}

const validForm = (form) => { //Funkcja sprawdzająca poprawność wypełnienia formularza
    if( !form ) { return; }

    const name = form.querySelector('#name'); //Zapisujemy w zmiennych elementy DOM
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    let valid = true; //Zmienna przechowująca czy formularz został wypełniony poprawnie
    const patterns = []; //Tablica reguł poprawności pól
    patterns["name"] = "^[A-Za-z ,.'-]+$";
    patterns["email"] = "^\\S+@\\S+$";

    if( name && email && message ) { 
        [name, email, message].forEach(el => { //Dla każdego pola
            if( !el.value ) { //Sprawdzamy czy pole nie jest puste
                el.classList.add('not-valid'); //Jeżeli jest puste dodajemy klasę
                valid = false; //Oraz zminiamy wartosc zmiennej okreslajacej poprawnosc formularza
            } else if( el.id in patterns && !(new RegExp(patterns[el.id]).test(el.value)) ) { //Jezeli istnieje regula dla danego pola i wartosc jej nie spelnia
                el.classList.add('not-valid'); //Dodajemy klasę
                valid = false; //Oraz zminiamy wartosc zmiennej okreslajacej poprawnosc formularza
            } else {
                el.classList.remove('not-valid'); //Jeżeli pole jest wypełnione poprawnie, usuwamy klasę not-valid
            }
        });
    } else {
        return false;
    }
    return valid; //Zwracamy zmienną valid
}

const intitProductForm = (name) => { //Funkcja pzrygotowująca formularz na stronie produktu
    const form = document.querySelector('.js-product-form'); //Zapisujemy w zmiennej formularz

    if( !form ) { return; } //Jeżeli nie ma formularza, wychodzimy z funkcji

    const submitBtn = form.querySelector('.js-product-form-submit'); //Zapisanie w zmiennych elementów DOM
    const productInput = form.querySelector('#product');

    productInput.value = name; //Wstawienie nazwy produktu do odpowiedniego pola

    if( submitBtn ) {
        submitBtn.addEventListener('click', (e) => { //Dodanie obsługi zdarzenia kliknięcia w przycisk wysłania formularza
            if( validForm(form) ) { //Jeżeli formularz jest poprawny
                form.submit(); //Wysyłamy go
            } else {
                e.preventDefault(); //Jeżeli formularz nie jest poprawny, blokujemy wysłanie
            }
        })
    }
}

const initSingleProductPage = () => { //Funckja wyświetlająca dane na stronie pojedynczego produktu
    if( !document.body.classList.contains('is-single-product') ) { return; } //Jeżeli element body nie ma klasy is-single-product, wychodzimy z funkcji

    let url = new URL(window.location.href); //Zapisanie obecnego linku w zmiennej
    let prodID = url.searchParams.get('id'); //Pobranie parametru id z linku

    if( !prodID ) { window.location.href = 'index.html'; } //Jeżeli nie ma parametru id, przekierowujemy na stronę główną

    const product = getProduct(prodID); //Pobieramy produkt o danym id

    let saved = JSON.parse(localStorage.getItem('products')); //W zmiennej zapisujemy pobraną z localStorage, przekonwertowaną z JSON, tablicę id obserwowanych produktów

    if( !product ) { return; } //Jeżeli nie ma takiego produktu, opuszczamy funkcję

    const nameContainer = document.querySelector('.js-single-product-name'); //Zapisujemy w zmiennych odpowiednie elementy DOM
    const descContainer = document.querySelector('.js-single-product-desc');
    const imageContainer = document.querySelector('.js-single-product-image');
    const priceContainer = document.querySelector('.js-single-product-price');
    const actionContainer = document.querySelector('.js-single-product-action');

    nameContainer.innerHTML = product.name; //Uzupełnienie elementów danymi pobranymi z tablicy produktów
    descContainer.innerHTML = product.description;
    imageContainer.style.backgroundImage = `url(${product.image})`;
    priceContainer.innerHTML = product.price + " zł";

    let addButton = document.createElement('span'); //Utworzenie elementu, który będzie przyciskiem do obserwacji produktu
    addButton.classList.add('o-button'); //Dodanie klas
    addButton.classList.add('o-button--black');

    if( saved.includes(product.id) ) { //Jeżeli produkt jest już obserwowany (id znajduje się w tablicy saved)
        addButton.classList.add('is-added'); //Dodajemy do przycisku klasę is-added
    }
    addButton.classList.add('js-product-add'); //Dodajemy klasy
    addButton.dataset.id = product.id; //Ustawiamy atrybut data-id przycisku

    if( saved.includes(product.id) ) { //Ustawiamy tekst przycisku w zależności od tego czy jest obserwowany
        addButton.innerHTML = "Obserwowane";
    } else { 
        addButton.innerHTML = "Obserwuj";
    }

    actionContainer.append(addButton); //Dodajemy przycisk do DOM

    intitProductForm(product.name);
}
initSingleProductPage();

const initProductAdd = () => { //Funkcja dodająca obsługę zdarzenia kliknięcia w przycisk obserwacji produktu
    const buttons = document.querySelectorAll('.js-product-add'); //Pobranie do zmiennej wszystkich przycisków

    if( buttons.length == 0 ) { return; } //Jeżeli nie ma przycisków, wychodzimy z funkcji

    buttons.forEach(button => { //Dla każdego przycisku
        button.addEventListener('click', (e) => { //Dodajemy obsługę zdarzenia kliknięcia
            e.preventDefault(); //Blokujemy domyślne działanie linków
            let id = parseInt(button.dataset.id); //Pobieramy wartość artybutu data-id przycisku - określa on produkt, którego dotyczy 
            let saved = JSON.parse(localStorage.getItem('products'));  //W zmiennej zapisujemy pobraną z localStorage, przekonwertowaną z JSON, tablicę id obserwowanych produktów

            if( saved.includes(id) ) { //Jeżeli produkt jest już obserwowany
                saved = saved.filter(item => item !== id); //Usuwamy id produktu z tablicy pobranej z localStorage
                button.classList.remove('is-added'); //Usuwamy klasę is-added 

                if( document.body.classList.contains('is-single-product') ) { //Jeżeli jest to przycisk na stronie pojedynczego produktu (element body posiada klasę is-single-product)
                    button.innerHTML = "Obserwuj"; //Ustawiamy odpowiedni tekst przycisku
                }
            } else { //Jeżeli produkt nie jest jeszcze obserwowany
                saved.push(id); //Dodajemy id produktu do tablicy produktów obserwowanych
                button.classList.add('is-added'); //Dodajemy klasę do przycisku

                if( document.body.classList.contains('is-single-product') ) { //Jeżeli jest to przycisk na stronie pojedynczego produktu (element body posiada klasę is-single-product)
                    button.innerHTML = "Obserwowane"; //Ustawiamy odpowiedni tekst przycisku
                }
            }
            localStorage.setItem('products', JSON.stringify(saved)); //Aktualizujemy tablicę przechowywaną w localStorage, konwertując ją na JSON
        });
    });
}
initProductAdd();

const initSavedProductsPage = () => {
    const container = document.querySelector('.js-saved-products'); //Zapisanie w zmiennej elementu DOM

    if( !container ) { return; } //Jeżeli nie ma takiego elementu, wychodzimy z funkcji

    let saved = JSON.parse(localStorage.getItem('products'));  //W zmiennej zapisujemy pobraną z localStorage, przekonwertowaną z JSON, tablicę id obserwowanych produktów

    const tableBody = container.querySelector('.js-saved-products-table'); //Zapisanie w zmiennej elementu DOM

    if( saved.length > 0 ) {
        saved.forEach(id => { //Dla każdego zapisanego id produktu
            let product = getProduct(id); //Pobieramy produkt z tablicy
    
            if( !product ) { return; } //Jeżeli nie ma takiego elementu, wychodzimy z funkcji
            
            let row = document.createElement('tr'); //Tworzymy wiersz tabeli
                row.classList.add('o-table__row'); //Dodajemy klasę
                row.innerHTML = 
                `<td class="c-saved__table-image"><a href="single-product.html?id=${product.id}"><img src="${product.image}" /></a></td>
                <td class="c-saved__table-name" data-title="Nazwa"><a href="single-product.html?id=${product.id}">${product.name}</a></td>
                <td class="c-saved__table-price" data-title="Cena">${product.price} zł</td>`; //Uzupełniamy zawartość wiersza
        
                tableBody.append(row); //Dodajemy wiersz do tabeli
        });
    } else {
        tableBody.innerHTML = 
                            `<td colspan="3">Brak zapisanych produktów</td>`;
    }
}
initSavedProductsPage();

