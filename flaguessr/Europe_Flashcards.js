//Asia_flashcards.js

//Array that stores all countries in America
let countries = new Array ("Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia",
                           "Cyprus", "Czechia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland",
                           "Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco",
                           "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia",
                           "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine",
                           "United Kingdom", "Vatican City");

//Array that stores all links to American flags
let links = new Array ("https://flagcdn.com/h120/al.png",
                      "https://flagcdn.com/h120/ad.png",
                      "https://flagcdn.com/h120/at.png",
                      "https://flagcdn.com/h120/by.png",
                      "https://flagcdn.com/h120/be.png",
                      "https://flagcdn.com/h120/ba.png",
                      "https://flagcdn.com/h120/bg.png",
                      "https://flagcdn.com/h120/hr.png",
                      "https://flagcdn.com/h120/cy.png",
                      "https://flagcdn.com/h120/cz.png",
                      "https://flagcdn.com/h120/dk.png",
                      "https://flagcdn.com/h120/ee.png",
                      "https://flagcdn.com/h120/fi.png",
                      "https://flagcdn.com/h120/fr.png",
                      "https://flagcdn.com/h120/de.png",
                      "https://flagcdn.com/h120/gr.png",
                      "https://flagcdn.com/h120/hu.png",
                      "https://flagcdn.com/h120/is.png",
                      "https://flagcdn.com/h120/ie.png",
                      "https://flagcdn.com/h120/it.png",
                      "https://flagcdn.com/h120/lv.png",
                      "https://flagcdn.com/h120/li.png",
                      "https://flagcdn.com/h120/lt.png",
                      "https://flagcdn.com/h120/lu.png",
                      "https://flagcdn.com/h120/mt.png",
                      "https://flagcdn.com/h120/md.png",
                      "https://flagcdn.com/h120/mc.png",
                      "https://flagcdn.com/h120/me.png",
                      "https://flagcdn.com/h120/nl.png",
                      "https://flagcdn.com/h120/mk.png",
                      "https://flagcdn.com/h120/no.png",
                      "https://flagcdn.com/h120/pl.png",
                      "https://flagcdn.com/h120/pt.png",
                      "https://flagcdn.com/h120/ro.png",
                      "https://flagcdn.com/h120/ru.png",
                      "https://flagcdn.com/h120/sm.png",
                      "https://flagcdn.com/h120/rs.png",
                      "https://flagcdn.com/h120/sk.png",
                      "https://flagcdn.com/h120/si.png",
                      "https://flagcdn.com/h120/es.png",
                      "https://flagcdn.com/h120/se.png",
                      "https://flagcdn.com/h120/ch.png",
                      "https://flagcdn.com/h120/tr.png",
                      "https://flagcdn.com/h120/ua.png",
                      "https://flagcdn.com/h120/gb.png",
                      "https://flagcdn.com/h120/va.png");

//Array that stores all links to small American flags
let links2 = new Array ("https://flagcdn.com/80x60/al.png",
                      "https://flagcdn.com/80x60/ad.png",
                      "https://flagcdn.com/80x60/at.png",
                      "https://flagcdn.com/80x60/by.png",
                      "https://flagcdn.com/80x60/be.png",
                      "https://flagcdn.com/80x60/ba.png",
                      "https://flagcdn.com/80x60/bg.png",
                      "https://flagcdn.com/80x60/hr.png",
                      "https://flagcdn.com/80x60/cy.png",
                      "https://flagcdn.com/80x60/cz.png",
                      "https://flagcdn.com/80x60/dk.png",
                      "https://flagcdn.com/80x60/ee.png",
                      "https://flagcdn.com/80x60/fi.png",
                      "https://flagcdn.com/80x60/fr.png",
                      "https://flagcdn.com/80x60/de.png",
                      "https://flagcdn.com/80x60/gr.png",
                      "https://flagcdn.com/80x60/hu.png",
                      "https://flagcdn.com/80x60/is.png",
                      "https://flagcdn.com/80x60/ie.png",
                      "https://flagcdn.com/80x60/it.png",
                      "https://flagcdn.com/80x60/lv.png",
                      "https://flagcdn.com/80x60/li.png",
                      "https://flagcdn.com/80x60/lt.png",
                      "https://flagcdn.com/80x60/lu.png",
                      "https://flagcdn.com/80x60/mt.png",
                      "https://flagcdn.com/80x60/md.png",
                      "https://flagcdn.com/80x60/mc.png",
                      "https://flagcdn.com/80x60/me.png",
                      "https://flagcdn.com/80x60/nl.png",
                      "https://flagcdn.com/80x60/mk.png",
                      "https://flagcdn.com/80x60/no.png",
                      "https://flagcdn.com/80x60/pl.png",
                      "https://flagcdn.com/80x60/pt.png",
                      "https://flagcdn.com/80x60/ro.png",
                      "https://flagcdn.com/80x60/ru.png",
                      "https://flagcdn.com/80x60/sm.png",
                      "https://flagcdn.com/80x60/rs.png",
                      "https://flagcdn.com/80x60/sk.png",
                      "https://flagcdn.com/80x60/si.png",
                      "https://flagcdn.com/80x60/es.png",
                      "https://flagcdn.com/80x60/se.png",
                      "https://flagcdn.com/80x60/ch.png",
                      "https://flagcdn.com/80x60/tr.png",
                      "https://flagcdn.com/80x60/ua.png",
                      "https://flagcdn.com/80x60/gb.png",
                      "https://flagcdn.com/80x60/va.png");

//Array that stores all capital cities of American countries
let capitalArray = new Array ("Tirana", "Andorra la Vella", "Vienna", "Minsk", "Brussels", "Sarajevo", "Sofia", "Zagreb", "Nicosia", "Prague", "Copenhagen", "Tallinn", "Helsinki",
                              "Paris", "Berlin", "Athens", "Budapest", "Reykjavik", "Dublin", "Rome", "Riga", "Vaduz", "Vilnius", "Luxembourg", "Valletta", "Chisinau", "Monaco",
                              "Podgorica", "Amsterdam", "Skopje", "Oslo", "Warsaw", "Lisbon", "Bucharest", "Moscow", "San Marino", "Belgrade", "Bratislava", "Ljubljana", "Madrid",
                              "Stockholm", "Bern", "Ankara", "Kyiv", "London", "Vatican City");

//Array that stores all populations of American countries
let populationArray = new Array ("2 862 427 (2019)", "77 543 (2019)", "8 902 600 (2020)", "9 413 446 (2019)", "11 522 169 (2019)", "3 301 000 (2019)", "7 000 039 (2018)", "4 076 246 (2018)",
                                 "875 900 (2018)", "10 681 161 (2019)", "5 822 763 (2020)", "1 328 360 (2020)", "5 527 573 (2019)", "67 064 000 (2020)", "83 149 300 (2019)", "10 724 599 (2019)",
                                 "9 772 756 (2019)", "364 260 (2019)", "4 921 500 (2019)", "60 247 214 (2019)", "1 906 800 (2020)", "38 557 (2019)", "2 793 350 (2020)", "613 894 (2019)", "493 559 (2018)",
                                 "2 681 735 (2019)", "38 300 (2018)", "	622 359 (2018)", "17 438 081 (2020)", "2 077 132 (2018)", "5 356 789 (2019)", "38 386 000 (2019)", "10 276 617 (2018)",
                                 "19 405 156 (2019)", "146 780 720 (2019)", "33 574 (2019)", "6 963 764 (2019)", "5 456 362 (2019)", "2 094 060 (2019)", "47 100 396 (2019)", "10 327 589 (2019)",
                                 "8 586 550 (2019)", "83 154 997 (2019)", "41 902 416 (2020)", "66 435 600 (2018)", "799 (2019)");

//Array that stores all total areas of American countries
let areaArray = new Array ("28 748", "468", "83 871", "207 600", "30 528", "51 209", "111 002", "56 594", "9 251", "78 865", "43 094", "45 227", "338 424", "640 679", "357 114", "131 957",
                           "93 028", "103 000", "70 273", "301 339", "64 559", "160", "65 300", "2 586", "316", "33 846", "2", "13 812", "41 850", "25 713", "323 802", "312 696", "92 090",
                           "238 397", "17 098 200", "61", "88 361", "49 037", "20 273", "505 992", "450 295", "41 284", "783 562", "603 500", "242 495", "0.44");

//Array that stores all languages of American countries
let languageArray = new Array ("Albanian", "Catalan", "German", "Belarusian, Russian", "French, Dutch", "Bosnian, Serbian", "Bulgarian", "Croatian", "Greek, Turkish", "Czech", "Danish",
                               "Estonian", "Finnish, Swedish", "French", "German", "Greek", "Hungarian", "Icelandic", "Irish, English", "Italian", "Latvian", "German", "Lithuanian",
                               "German, French", "English, Maltese", "Romanian", "French", "Montenegrin", "Dutch", "Macedonian, Albanian", "Sámi, Norwegian", "Polish", "Portuguese",
                               "Romanian", "Russian", "Italian", "Serbian", "Slovak", "Slovene", "Spanish", "Swedish", "German, French", "Turkish", "Ukrainian", "English", "Italian");


//Array that stores all google maps links
let mapsArray = new Array ("https://www.google.com/maps/place/Albania/@41.1311894,17.8464739,7z/data=!3m1!4b1!4m5!3m4!1s0x13453bf3bd274c2d:0x77ce589d6983bee!8m2!3d41.153332!4d20.168331",
                           "https://www.google.com/maps/place/Andorra/@42.5419419,1.3175123,10z/data=!3m1!4b1!4m5!3m4!1s0x12a5f52e989ef095:0x7c93ed778ea7f92!8m2!3d42.506285!4d1.521801",
                           "https://www.google.com/maps/place/Austria/@47.6782101,11.097523,7z/data=!3m1!4b1!4m5!3m4!1s0x476d079b259d2a7f:0x1012d47bdde4c1af!8m2!3d47.516231!4d14.550072",
                           "https://www.google.com/maps/place/Belarus/@53.6991525,25.7296542,7z/data=!3m1!4b1!4m5!3m4!1s0x46da2584e2ad4881:0xa1d181ec8c10!8m2!3d53.709807!4d27.953389",
                           "https://www.google.com/maps/place/Belgium/@50.4973958,3.3423469,8z/data=!3m1!4b1!4m5!3m4!1s0x47c17d64edf39797:0x47ebf2b439e60ff2!8m2!3d50.503887!4d4.469936",
                           "https://www.google.com/maps/place/Bosnia+and+Herzegovina/@43.8949491,15.3788791,8z/data=!3m1!4b1!4m5!3m4!1s0x134ba215c737a9d7:0x6df7e20343b7e90c!8m2!3d43.915886!4d17.679076",
                           "https://www.google.com/maps/place/Bulgaria/@42.7219013,24.4194365,8z/data=!3m1!4b1!4m5!3m4!1s0x40a8fec1c85bf089:0xa01269bf4c10!8m2!3d42.733883!4d25.48583",
                           "https://www.google.com/maps/place/Croatia/@44.4286296,14.1576309,7z/data=!3m1!4b1!4m5!3m4!1s0x133441080add95ed:0xa0f3c024e1661b7f!8m2!3d45.1!4d15.2000001",
                           "https://www.google.com/maps/place/Cyprus/@35.1686259,32.8633787,9z/data=!3m1!4b1!4m5!3m4!1s0x14de1767ca494d55:0x324c3c807fc4146e!8m2!3d35.126413!4d33.429859",
                           "https://www.google.com/maps/place/Czechia/@49.7855618,13.2267374,7z/data=!3m1!4b1!4m5!3m4!1s0x470b948fd7dd8243:0xf8661c75d3db586f!8m2!3d49.817492!4d15.472962",
                           "https://www.google.com/maps/place/Denmark/@56.2127558,9.294738,7z/data=!3m1!4b1!4m5!3m4!1s0x464b27b6ee945ffb:0x528743d0c3e092cd!8m2!3d56.26392!4d9.501785",
                           "https://www.google.com/maps/place/Estonia/@58.6169402,23.8084704,8z/data=!3m1!4b1!4m5!3m4!1s0x4692949c82a04bfd:0x40ea9fba4fb425c3!8m2!3d58.595272!4d25.0136071",
                           "https://www.google.com/maps/place/Finland/@64.6313675,17.0670169,5z/data=!3m1!4b1!4m5!3m4!1s0x4681cadf4b32f6dd:0x146d63c75a810!8m2!3d61.92411!4d25.7481511",
                           "https://www.google.com/maps/place/France/@46.1385605,-2.4472037,6z/data=!3m1!4b1!4m5!3m4!1s0xd54a02933785731:0x6bfd3f96c747d9f7!8m2!3d46.227638!4d2.213749",
                           "https://www.google.com/maps/place/Germany/@51.0964003,5.9570576,6z/data=!3m1!4b1!4m5!3m4!1s0x479a721ec2b1be6b:0x75e85d6b8e91e55b!8m2!3d51.165691!4d10.451526",
                           "https://www.google.com/maps/place/Greece/@38.0685406,19.98012,6z/data=!3m1!4b1!4m5!3m4!1s0x135b4ac711716c63:0x363a1775dc9a2d1d!8m2!3d39.074208!4d21.824312",
                           "https://www.google.com/maps/place/Hungary/@47.1428947,17.2566982,7z/data=!3m1!4b1!4m5!3m4!1s0x4741837bdf37e4c3:0xc4290c1e1010!8m2!3d47.162494!4d19.5033041",
                           "https://www.google.com/maps/place/Iceland/@64.801083,-23.7400983,6z/data=!3m1!4b1!4m5!3m4!1s0x48d22b52a3eb6043:0x6f8a0434e5c1459a!8m2!3d64.963051!4d-19.020835",
                           "https://www.google.com/maps/place/Ireland/@53.2982971,-12.8140408,7z/data=!3m1!4b1!4m5!3m4!1s0x4859bae45c4027fb:0xcf7c1234cedbf408!8m2!3d53.41291!4d-8.24389",
                           "https://www.google.com/maps/place/Italy/@41.2114137,8.2114737,6z/data=!3m1!4b1!4m5!3m4!1s0x12d4fe82448dd203:0xe22cf55c24635e6f!8m2!3d41.87194!4d12.56738",
                           "https://www.google.com/maps/place/Latvia/@56.8629935,22.2962816,7z/data=!3m1!4b1!4m5!3m4!1s0x46e930677b8a9afd:0xcfcd68f2fc10!8m2!3d56.879635!4d24.603189",
                           "https://www.google.com/maps/place/Liechtenstein/@47.1592941,9.2669016,11z/data=!3m1!4b1!4m5!3m4!1s0x479b31441d472ffd:0x60eab536dd5ab189!8m2!3d47.1410392!4d9.520935",
                           "https://www.google.com/maps/place/Lithuania/@55.0901806,19.2879872,7z/data=!3m1!4b1!4m5!3m4!1s0x46dd94140f33be13:0xf30a54d3a55dbab9!8m2!3d55.169438!4d23.881275",
                           "https://www.google.com/maps/place/Luxembourg/@49.8148281,5.5715319,9z/data=!3m1!4b1!4m5!3m4!1s0x479545b9ca212147:0x64db60f602d392ef!8m2!3d49.815273!4d6.129583",
                           "https://www.google.com/maps/place/Malta/@35.9426462,14.2379223,11z/data=!3m1!4b1!4m5!3m4!1s0x130e45281d8647c5:0xf582d86136be4239!8m2!3d35.937496!4d14.375416",
                           "https://www.google.com/maps/place/Moldova/@46.9614752,26.1416551,7z/data=!3m1!4b1!4m5!3m4!1s0x40c97c3628b769a1:0x258119acdf53accb!8m2!3d47.411631!4d28.369885",
                           "https://www.google.com/maps/place/Monaco/@43.7378811,7.4082999,14z/data=!3m1!4b1!4m5!3m4!1s0x12cdc26f7b3f8531:0x74f7784c3ac49cfc!8m2!3d43.7384176!4d7.4246158",
                           "https://www.google.com/maps/place/Montenegro/@42.6904915,18.2695228,8z/data=!3m1!4b1!4m5!3m4!1s0x134c3217242c1fcb:0x384c9d866effd346!8m2!3d42.708678!4d19.37439",
                           "https://www.google.com/maps/place/Netherlands/@52.194999,3.0313487,7z/data=!3m1!4b1!4m5!3m4!1s0x47c609c3db87e4bb:0xb3a175ceffbd0a9f!8m2!3d52.132633!4d5.291266",
                           "https://www.google.com/maps/place/North+Macedonia/@41.1166091,21.1121268,8z/data=!3m1!4b1!4m5!3m4!1s0x1354159f70bc4809:0xe0f25ad6c81fc5b1!8m2!3d41.608635!4d21.745275",
                           "https://www.google.com/maps/place/Norway/@64.2946334,8.754457,5z/data=!3m1!4b1!4m5!3m4!1s0x461268458f4de5bf:0xa1b03b9db864d02b!8m2!3d60.472024!4d8.468946",
                           "https://www.google.com/maps/place/Poland/@51.8747806,14.6376077,6z/data=!3m1!4b1!4m5!3m4!1s0x47009964a4640bbb:0x97573ca49cc55ea!8m2!3d51.919438!4d19.145136",
                           "https://www.google.com/maps/place/Portugal/@37.1454409,-23.3287273,6z/data=!3m1!4b1!4m5!3m4!1s0xb32242dbf4226d5:0x2ab84b091c4ef041!8m2!3d39.399872!4d-8.224454",
                           "https://www.google.com/maps/place/Romania/@45.923672,22.7716632,7z/data=!3m1!4b1!4m5!3m4!1s0x40b1ff26958976c3:0x84ef4f92a804b194!8m2!3d45.943161!4d24.96676",
                           "https://www.google.com/maps/place/Russia/@49.7693911,68.6904143,3z/data=!3m1!4b1!4m5!3m4!1s0x453c569a896724fb:0x1409fdf86611f613!8m2!3d61.52401!4d105.318756",
                           "https://www.google.com/maps/place/San+Marino/@43.9429174,12.3884207,13z/data=!3m1!4b1!4m5!3m4!1s0x132ceb5ff5e63f79:0xf39982342010!8m2!3d43.94236!4d12.457777",
                           "https://www.google.com/maps/place/Serbia/@44.1926648,18.6620158,7z/data=!3m1!4b1!4m5!3m4!1s0x47571ddff2898095:0x55e50ea3723865d!8m2!3d44.016521!4d21.005859",
                           "https://www.google.com/maps/place/Slovakia/@48.668831,18.575734,8z/data=!3m1!4b1!4m5!3m4!1s0x471460b9ae7cc67f:0xcd6b6167b1723a7d!8m2!3d48.669026!4d19.699024",
                           "https://www.google.com/maps/place/Slovenia/@46.1486533,14.4242675,9z/data=!3m1!4b1!4m5!3m4!1s0x476524e75e968361:0xe740451e25e2d465!8m2!3d46.151241!4d14.995463",
                           "https://www.google.com/maps/place/Spain/@40.1296836,-8.2140672,6z/data=!3m1!4b1!4m5!3m4!1s0xc42e3783261bc8b:0xa6ec2c940768a3ec!8m2!3d40.463667!4d-3.74922",
                           "https://www.google.com/maps/place/Sweden/@61.7509659,8.4175681,5z/data=!3m1!4b1!4m5!3m4!1s0x465cb2396d35f0f1:0x22b8eba28dad6f62!8m2!3d60.128161!4d18.643501",
                           "https://www.google.com/maps/place/Switzerland/@46.809568,7.1004009,8z/data=!3m1!4b1!4m5!3m4!1s0x478c64ef6f596d61:0x5c56b5110fcb7b15!8m2!3d46.818188!4d8.227512",
                           "https://www.google.com/maps/place/Turkey/@39.0095998,30.6763156,6z/data=!3m1!4b1!4m5!3m4!1s0x14b0155c964f2671:0x40d9dbd42a625f2a!8m2!3d38.963745!4d35.243322",
                           "https://www.google.com/maps/place/Ukraine/@48.2554217,26.6806988,6z/data=!3m1!4b1!4m5!3m4!1s0x40d1d9c154700e8f:0x1068488f64010!8m2!3d48.379433!4d31.1655799",
                           "https://www.google.com/maps/place/United+Kingdom/@54.2297665,-13.452106,5z/data=!3m1!4b1!4m5!3m4!1s0x25a3b1142c791a9:0xc4f8a0433288257a!8m2!3d55.378051!4d-3.435973",
                           "https://www.google.com/maps/place/Vatican+City/@41.9038243,12.4476731,16z/data=!3m1!4b1!4m5!3m4!1s0x1325890a57d42d3d:0x94f9ab23a7eb0!8m2!3d41.902916!4d12.453389");

let wikiArray = new Array ("https://en.wikipedia.org/wiki/Albania",
                           "https://en.wikipedia.org/wiki/Andorra",
                           "https://en.wikipedia.org/wiki/Austria",
                           "https://en.wikipedia.org/wiki/Belarus",
                           "https://en.wikipedia.org/wiki/Belgium",
                           "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina",
                           "https://en.wikipedia.org/wiki/Bulgaria", 
                           "https://en.wikipedia.org/wiki/Croatia",
                           "https://en.wikipedia.org/wiki/Cyprus",
                           "https://en.wikipedia.org/wiki/Czech_Republic",
                           "https://en.wikipedia.org/wiki/Denmark",
                           "https://en.wikipedia.org/wiki/Estonia",
                           "https://en.wikipedia.org/wiki/Finland",
                           "https://en.wikipedia.org/wiki/France",
                           "https://en.wikipedia.org/wiki/Germany",
                           "https://en.wikipedia.org/wiki/Greece",
                           "https://en.wikipedia.org/wiki/Hungary",
                           "https://en.wikipedia.org/wiki/Iceland",
                           "https://en.wikipedia.org/wiki/Ireland",
                           "https://en.wikipedia.org/wiki/Italy",
                           "https://en.wikipedia.org/wiki/Latvia",
                           "https://en.wikipedia.org/wiki/Liechtenstein",
                           "https://en.wikipedia.org/wiki/Lithuania",
                           "https://en.wikipedia.org/wiki/Luxembourg",
                           "https://en.wikipedia.org/wiki/Malta",
                           "https://en.wikipedia.org/wiki/Moldova",
                           "https://en.wikipedia.org/wiki/Monaco",
                           "https://en.wikipedia.org/wiki/Montenegro",
                           "https://en.wikipedia.org/wiki/Netherlands",
                           "https://en.wikipedia.org/wiki/North_Macedonia",
                           "https://en.wikipedia.org/wiki/Norway",
                           "https://en.wikipedia.org/wiki/Poland",
                           "https://en.wikipedia.org/wiki/Portugal",
                           "https://en.wikipedia.org/wiki/Romania",
                           "https://en.wikipedia.org/wiki/Russia",
                           "https://en.wikipedia.org/wiki/San_Marino",
                           "https://en.wikipedia.org/wiki/Serbia",
                           "https://en.wikipedia.org/wiki/Slovakia",
                           "https://en.wikipedia.org/wiki/Slovenia",
                           "https://en.wikipedia.org/wiki/Spain",
                           "https://en.wikipedia.org/wiki/Sweden",
                           "https://en.wikipedia.org/wiki/Switzerland",
                           "https://en.wikipedia.org/wiki/Turkey",
                           "https://en.wikipedia.org/wiki/Ukraine",
                           "https://en.wikipedia.org/wiki/United_Kingdom",
                           "https://en.wikipedia.org/wiki/Vatican_City");                           


//Flip card when clicked on it
let state = 0;
const card = document.querySelector('.card_inner');
card.addEventListener('click', () => {
    card.classList.remove('is-flipped1');
    card.style.transition = '0.8s';
    card.classList.toggle('is-flipped');
    if (state == 0){
        state = 1;
    }else{
        state = 0;
    }
});

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === ' '){
        card.classList.remove('is-flipped1');
        card.style.transition = '0.8s';
        card.classList.toggle('is-flipped');
        if (state == 0){
            state = 1;
        }else{
            state = 0;
        }
    }
});

//selects card image and creates variable
const front_ = document.querySelector('.face--front');
var img = front_.querySelector('.image');
const back_ = document.querySelector('.face--back');
var img2 = back_.querySelector('.image2');
//selects card title and creates variable
const back = document.querySelector('.content');
var title = back.querySelector('.content h1');
//selects card data and creates variables
const info = document.querySelector('.info');
const capital = info.querySelector('.capital');
const population = info.querySelector('.population');
const area = info.querySelector('.area');
const language = info.querySelector('.language');
const map = info.querySelector('.maps');
const wiki = info.querySelector('.wiki');
//selects arrows and creates variables
const arrow1 = document.querySelector('.arrow1');
var arr1 = arrow1.querySelector('.arrow i');
const arrow2 = document.querySelector('.arrow2');
var arr2 = arrow2.querySelector('.arrow i');

//initializes the first card with correct data and creates a count variable 0
//that will indicate in which card the user is.
var count = 0;
arrow1.classList.toggle('hide');
img.src = links[count];
img2.src = links2[count];
title.textContent = countries[count];
capital.textContent = capitalArray[count];
population.textContent = populationArray[count];
area.textContent = areaArray[count];
language.textContent = languageArray[count];
map.href = mapsArray[count];
wiki.href = wikiArray[count];

//code that restarts the flashcards by going to card in index 0.
const button2 = document.querySelector('.start');
button2.addEventListener('click', () => {
    if (count != 0){
        count = 0;
        arrow1.classList.toggle('hide');
        arrow2.classList.remove('hide');
        card.style.transition = '0.0s';
        if (state == 1){
            card.classList.remove('is-flipped');
            state = 0;
        }else{
            card.classList.toggle('is-flipped1');
            state = 0; 
        }
        img.src = "";
        img.src = links[count];
        title.textContent = countries[count];
        capital.textContent = capitalArray[count];
        population.textContent = populationArray[count];
        area.textContent = areaArray[count];
        language.textContent = languageArray[count];
        map.href = mapsArray[count];
        wiki.href = wikiArray[count];
        img2.src = "";
        img2.src = links2[count];
    }else{
        card.style.transition = '0.0s';
        card.classList.remove('is-flipped');
    }
});

//restarts the key 'r'
document.addEventListener('keyup', (event) => {
    var code = event.key;
    if (code == 'r' || code == 'R'){
        if (count != 0){
            count = 0;
            arrow1.classList.toggle('hide');
            arrow2.classList.remove('hide');
            card.style.transition = '0.0s';
            if (state == 1){
                card.classList.remove('is-flipped');
                state = 0;
            }else{
                card.classList.toggle('is-flipped1');
                state = 0; 
            }
            img.src = "";
            img.src = links[count];
            title.textContent = countries[count];
            capital.textContent = capitalArray[count];
            population.textContent = populationArray[count];
            area.textContent = areaArray[count];
            language.textContent = languageArray[count];
            map.href = mapsArray[count];
            wiki.href = wikiArray[count];
            img2.src = "";
            img2.src = links2[count];
        }else{
            card.style.transition = '0.0s';
            card.classList.remove('is-flipped');
        }
    }
});

//code for right arrow that increases index by 1 to go to next card
arrow2.addEventListener('click', () => {

    count = count + 1;
    if (count == 1){
        arrow1.classList.remove('hide');
    }
    if (count == links.length - 1){
        arrow2.classList.toggle('hide');
    }
    card.style.transition = '0.0s';
    if (state == 1){
        card.classList.remove('is-flipped');
        state = 0;
    }else{
        card.classList.toggle('is-flipped1');
        state = 0; 
    }
    img.src = "";
    img.src = links[count];
    title.textContent = countries[count];
    capital.textContent = capitalArray[count];
    population.textContent = populationArray[count];
    area.textContent = areaArray[count];
    language.textContent = languageArray[count];
    map.href = mapsArray[count];
    wiki.href = wikiArray[count];
    img2.src = "";
    img2.src = links2[count];
});

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'ArrowRight' && count < links.length - 1) {
        count = count + 1;
        if (count == 1){
            arrow1.classList.remove('hide');
        }
        if (count == links.length - 1){
            arrow2.classList.toggle('hide');
        }
        card.style.transition = '0.0s';
        if (state == 1){
            card.classList.remove('is-flipped');
            state = 0;
        }else{
            card.classList.toggle('is-flipped1');
            state = 0; 
        }
        img.src = "";
        img.src = links[count];
        title.textContent = countries[count];
        capital.textContent = capitalArray[count];
        population.textContent = populationArray[count];
        area.textContent = areaArray[count];
        language.textContent = languageArray[count];
        map.href = mapsArray[count];
        wiki.href = wikiArray[count];
        img2.src = "";
        img2.src = links2[count];
    }
});

//code for left arrow that decreases index by 1 to go to previous card
arrow1.addEventListener('click', () => {
    count = count - 1;
    if (count == links.length - 2){
        arrow2.classList.remove('hide');
    }
    if (count == 0){
        arrow1.classList.toggle('hide');
    }
    card.style.transition = '0.0s';
    if (state == 1){
        card.classList.remove('is-flipped');
        state = 0;
    }else{
        card.classList.toggle('is-flipped1');
        state = 0; 
    }
    img.src = "";
    img.src = links[count];
    title.textContent = countries[count];
    capital.textContent = capitalArray[count];
    population.textContent = populationArray[count];
    area.textContent = areaArray[count];
    language.textContent = languageArray[count];
    map.href = mapsArray[count];
    wiki.href = wikiArray[count];
    img2.src = "";
    img2.src = links2[count];
});

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'ArrowLeft' && count > 0) {
        count = count - 1;
        if (count == links.length - 2){
            arrow2.classList.remove('hide');
        }
        if (count == 0){
            arrow1.classList.toggle('hide');
        }
        card.style.transition = '0.0s';
        if (state == 1){
            card.classList.remove('is-flipped');
            state = 0;
        }else{
            card.classList.toggle('is-flipped1');
            state = 0; 
        }
        img.src = "";
        img.src = links[count];
        title.textContent = countries[count];
        capital.textContent = capitalArray[count];
        population.textContent = populationArray[count];
        area.textContent = areaArray[count];
        language.textContent = languageArray[count];
        map.href = mapsArray[count];
        wiki.href = wikiArray[count];
        img2.src = "";
        img2.src = links2[count];
    }
});

//code for home button to take user back to home screen
const button1 = document.querySelector('.home');
button1.addEventListener('click', () => {
    window.location.assign('index');
});

//exit when pressed the key 'e'
document.addEventListener('keyup', (event) => {
    var code = event.key;
    if (code == 'e' || code == 'E'){
        window.location.assign('index');
    }
});

//opens map when pressed the key 'm'
document.addEventListener('keyup', (event) => {
    var code = event.key;
    if ((code == 'm' || code == 'M') && state == 1){
        window.open(mapsArray[count], '_blank');
    }
});

//opens wikipedia when pressed the key 'w'
document.addEventListener('keyup', (event) => {
    var code = event.key;
    if ((code == 'w' || code == 'W') && state == 1){
        window.open(wikiArray[count], '_blank');
    }
});