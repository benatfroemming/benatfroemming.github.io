//Asia_flashcards.js

//Array that stores all countries in America
let countries = new Array ('Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China',
                           'Egypt', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', "Japan", "Jordan", "Kazakhstan", 
                           "North Korea", "South Korea", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia",
                           "Myanmar", "Nepal", "Oman", "Pakistan", "Philippines", "Qatar", "Russia", "Saudi Arabia", "Singapore", "Sri Lanka", 
                           "Syria", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan",
                           "Vietnam", "Yemen");

//Array that stores all links to American flags
let links = new Array ("https://flagcdn.com/h120/af.png",
                      "https://flagcdn.com/h120/am.png",
                      "https://flagcdn.com/h120/az.png",
                      "https://flagcdn.com/h120/bh.png",
                      "https://flagcdn.com/h120/bd.png",
                      "https://flagcdn.com/h120/bt.png",
                      "https://flagcdn.com/h120/bn.png",
                      "https://flagcdn.com/h120/kh.png",
                      "https://flagcdn.com/h120/cn.png",
                      "https://flagcdn.com/h120/eg.png",
                      "https://flagcdn.com/h120/ge.png",
                      "https://flagcdn.com/h120/in.png",
                      "https://flagcdn.com/h120/id.png",
                      "https://flagcdn.com/h120/ir.png",
                      "https://flagcdn.com/h120/iq.png",
                      "https://flagcdn.com/h120/il.png",
                      "https://flagcdn.com/h120/jp.png",
                      "https://flagcdn.com/h120/jo.png",
                      "https://flagcdn.com/h120/kz.png",
                      "https://flagcdn.com/h120/kp.png",
                      "https://flagcdn.com/h120/kr.png",
                      "https://flagcdn.com/h120/kw.png",
                      "https://flagcdn.com/h120/kg.png",
                      "https://flagcdn.com/h120/la.png",
                      "https://flagcdn.com/h120/lb.png",
                      "https://flagcdn.com/h120/my.png",
                      "https://flagcdn.com/h120/mv.png",
                      "https://flagcdn.com/h120/mn.png",
                      "https://flagcdn.com/h120/mm.png",
                      "https://flagcdn.com/h120/np.png",
                      "https://flagcdn.com/h120/om.png",
                      "https://flagcdn.com/h120/pk.png",
                      "https://flagcdn.com/h120/ph.png",
                      "https://flagcdn.com/h120/qa.png",
                      "https://flagcdn.com/h120/ru.png",
                      "https://flagcdn.com/h120/sa.png",
                      "https://flagcdn.com/h120/sg.png",
                      "https://flagcdn.com/h120/lk.png",
                      "https://flagcdn.com/h120/sy.png",
                      "https://flagcdn.com/h120/tj.png",
                      "https://flagcdn.com/h120/th.png",
                      "https://flagcdn.com/h120/tl.png",
                      "https://flagcdn.com/h120/tr.png",
                      "https://flagcdn.com/h120/tm.png",
                      "https://flagcdn.com/h120/ae.png",
                      "https://flagcdn.com/h120/uz.png",
                      "https://flagcdn.com/h120/vn.png",
                      "https://flagcdn.com/h120/ye.png",
                      );

//Array that stores all links to small American flags
let links2 = new Array ("https://flagcdn.com/80x60/af.png",
                      "https://flagcdn.com/80x60/am.png",
                      "https://flagcdn.com/80x60/az.png",
                      "https://flagcdn.com/80x60/bh.png",
                      "https://flagcdn.com/80x60/bd.png",
                      "https://flagcdn.com/80x60/bt.png",
                      "https://flagcdn.com/80x60/bn.png",
                      "https://flagcdn.com/80x60/kh.png",
                      "https://flagcdn.com/80x60/cn.png",
                      "https://flagcdn.com/80x60/eg.png",
                      "https://flagcdn.com/80x60/ge.png",
                      "https://flagcdn.com/80x60/in.png",
                      "https://flagcdn.com/80x60/id.png",
                      "https://flagcdn.com/80x60/ir.png",
                      "https://flagcdn.com/80x60/iq.png",
                      "https://flagcdn.com/80x60/il.png",
                      "https://flagcdn.com/80x60/jp.png",
                      "https://flagcdn.com/80x60/jo.png",
                      "https://flagcdn.com/80x60/kz.png",
                      "https://flagcdn.com/80x60/kp.png",
                      "https://flagcdn.com/80x60/kr.png",
                      "https://flagcdn.com/80x60/kw.png",
                      "https://flagcdn.com/80x60/kg.png",
                      "https://flagcdn.com/80x60/la.png",
                      "https://flagcdn.com/80x60/lb.png",
                      "https://flagcdn.com/80x60/my.png",
                      "https://flagcdn.com/80x60/mv.png",
                      "https://flagcdn.com/80x60/mn.png",
                      "https://flagcdn.com/80x60/mm.png",
                      "https://flagcdn.com/80x60/np.png",
                      "https://flagcdn.com/80x60/om.png",
                      "https://flagcdn.com/80x60/pk.png",
                      "https://flagcdn.com/80x60/ph.png",
                      "https://flagcdn.com/80x60/qa.png",
                      "https://flagcdn.com/80x60/ru.png",
                      "https://flagcdn.com/80x60/sa.png",
                      "https://flagcdn.com/80x60/sg.png",
                      "https://flagcdn.com/80x60/lk.png",
                      "https://flagcdn.com/80x60/sy.png",
                      "https://flagcdn.com/80x60/tj.png",
                      "https://flagcdn.com/80x60/th.png",
                      "https://flagcdn.com/80x60/tl.png",
                      "https://flagcdn.com/80x60/tr.png",
                      "https://flagcdn.com/80x60/tm.png",
                      "https://flagcdn.com/80x60/ae.png",
                      "https://flagcdn.com/80x60/uz.png",
                      "https://flagcdn.com/80x60/vn.png",
                      "https://flagcdn.com/80x60/ye.png",
                      );

//Array that stores all capital cities of American countries
let capitalArray = new Array ("Kabul", "Yerevan", "Baku", "Manama", "Dhaka", "Thimphu", "Bandar Seri Begawan", "Phnom Penh", "Beijing", "Cairo", "Tbilisi", "New Delhi",
                              "Jakarta", "Tehran", "Baghdad", "Jerusalem", "Tokyo", "Amman", "Nur-Sultan", "Pyongyang", "Seoul", "Kuwait City", "Bishkek", "Vientiane",
                              "Beirut", "Kuala Lumpur", "Malé", "Ulan Bator", "Naypyidaw", "Kathmandu", "Muscat", "Islamabad", "Manila", "Doha", "Moscow", "Riyadh",
                              "Singapore", "Colombo", "	Damascus", "Dushanbe", "Bangkok", "	Dili", "Ankara", "Ashgabat", "Abu Dhabi", "Tashkent", "Hanoi", "Sana'a");

//Array that stores all populations of American countries
let populationArray = new Array ("32 225 560 (2019)", "2 957 500 (2019)", "10 067 108 (2020)", "1 543 300 (2019)", "168 163 758 (2020)", "741 672 (2019)", "442 400 (2018)", "15 288 489 (2019)",
                                 "1 401 492 920 (2020)", "100 052 943", "3 723 464 (2019)", "1 359 072 550 (2020)", "266 911 900 (2019)", "83 230 120 (2020)", "39 127 900 (2019)", "9 164 160 (2020)",
                                 "126 010 000 (2020)", "10 622 608 (2020)", "18 651 680 (2020)", "25 450 000 (2019)", "51 780 579 (2020)", "4 420 110 (2019)", "6 490 300 (2019)", "7 123 205 (2019)",
                                 "6 855 713 (2019)", "32 700 760 (2020)", "374 775 (2018)", "3 304 526 (2020)", "54 339 766 (2019)", "29 609 623 (2019)", "4 664 790 (2020)", "218 741 520 (2020)",
                                 "108 323 702 (2020)", "2 747 282 (2019)", "146 780 720 (2019)", "34 218 169 (2019)", "5 703 600 (2019)", "	21 803 000 (2019)", "17 070 135 (2019)", "9 127 000 (2019)",
                                 "66 474 267 (2020)", "	1 387 149 (2019)", "83 154 997 (2019)", "5 942 089 (2019)", "9 770 529 (2019)", "34 034 952 (2020)", "96 208 984 (2019)", "29 161 922 (2019)");

//Array that stores all total areas of American countries
let areaArray = new Array ("652 230", "29 743", "86 600", "778", "147 570", "38 394", "5 765", "181 035", "9 596 960", "1 002 450", "69 700", "3 287 260", "1 910 930", "1 648 200", "438 317",
                           "20 770", "377 975", "89 342", "2 724 900", "120 540", "100 210", "17 818", "199 951", "236 800", "10 452", "330 803", "300", "1 564 110", "676 578", "147 181", "309 500",
                           "907 132", "300 000", "11 586", "17 098 200", "2 149 690", "716", "65 610", "185 180", "143 100", "513 120", "14 919", "783 562", "488 100", "83 600", "447 400", "331 212", "527 968");

//Array that stores all languages of American countries
let languageArray = new Array ("Pashto, Dari", "Armenian", "Azerbaijani", "Arabic", "Bengali", "Dzongkha", "Malay", "Khmer", "Standard Chinese", "Arabic", "Abkhaz, Georgian", "23 official languages",
                               "Indonesian", "Persian", "Arabic, Kurdish", "Modern Hebrew", "Japanese", "Arabic", "Kazakh, Russian", "Korean", "Korean", "Modern Standard Arabic", "Kyrgyz", "Lao", "Arabic",
                               "Malaysian", "Divehi", "Mongolian", "Burmese", "Nepali", "Arabic", "Urdu, English", "Filipino, English", "Arabic", "Russian", "Modern Standard Arabic", "Mandarin, Malay",
                               "Sinhala, Tamil", "Arabic", "Tajik", "Thai", "Tetum, Portuguese", "Turkish", "Turkmen", "Arabic", "Uzbek", "Vietnamese", "Arabic");


//Array that stores all google maps links
let mapsArray = new Array ("https://www.google.com/maps/place/Afghanistan/@33.605794,58.699678,5z/data=!3m1!4b1!4m5!3m4!1s0x38d16eb6f8ff026d:0xf3b5460dbe96da78!8m2!3d33.93911!4d67.709953",
                           "https://www.google.com/maps/place/Armenia/@40.0489837,42.7975973,7z/data=!3m1!4b1!4m5!3m4!1s0x40155684e773bac7:0xd0b4757aeb822d23!8m2!3d40.069099!4d45.038189",
                           "https://www.google.com/maps/place/Azerbaijan/@40.0890875,43.2649492,6z/data=!3m1!4b1!4m5!3m4!1s0x40307cd91aa21ddf:0xe6c9526b3e83cd08!8m2!3d40.143105!4d47.576927",
                           "https://www.google.com/maps/place/Bahrain/@25.9398717,50.0271177,9z/data=!3m1!4b1!4m5!3m4!1s0x3e48524e6a47a211:0x2e9450e2dbda1046!8m2!3d26.0667!4d50.5577",
                           "https://www.google.com/maps/place/Bangladesh/@23.4421733,85.8495612,6z/data=!3m1!4b1!4m5!3m4!1s0x30adaaed80e18ba7:0xf2d28e0c4e1fc6b!8m2!3d23.684994!4d90.356331",
                           "https://www.google.com/maps/place/Bhutan/@27.4565168,88.1920315,7z/data=!3m1!4b1!4m5!3m4!1s0x375b92a573c595cf:0xbb0cac652836bcda!8m2!3d27.514162!4d90.433601",
                           "https://www.google.com/maps/place/Brunei/@4.5493542,113.598586,8z/data=!3m1!4b1!4m5!3m4!1s0x3218994b04b8b9d1:0x5dfe3580dd09dad6!8m2!3d4.535277!4d114.727669",
                           "https://www.google.com/maps/place/Cambodia/@12.1417311,102.7307266,966187m/data=!3m2!1e3!4b1!4m5!3m4!1s0x310787bfd4dc3743:0xe4b7bfe089f41253!8m2!3d12.565679!4d104.990963",
                           "https://www.google.com/maps/place/China/@35.780287,104.1374349,6596511m/data=!3m2!1e3!4b1!4m5!3m4!1s0x31508e64e5c642c1:0x951daa7c349f366f!8m2!3d35.86166!4d104.195397",
                           "https://www.google.com/maps/place/Egypt/@26.8444377,26.3715951,1763585m/data=!3m2!1e3!4b1!4m5!3m4!1s0x14368976c35c36e9:0x2c45a00925c4c444!8m2!3d26.820553!4d30.802498",
                           "https://www.google.com/maps/place/Georgia/@42.2331863,38.8691842,1505106m/data=!3m2!1e3!4b1!4m5!3m4!1s0x40440cd7e64f626b:0x4f907964122d4ac2!8m2!3d42.315407!4d43.356892",
                           "https://www.google.com/maps/place/India/@20.0919548,64.4682848,4z/data=!3m1!4b1!4m5!3m4!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288",
                           "https://www.google.com/maps/place/Indonesia/@-1.8810938,78.1501193,3z/data=!3m1!4b1!4m5!3m4!1s0x2c4c07d7496404b7:0xe37b4de71badf485!8m2!3d-0.789275!4d113.921327",
                           "https://www.google.com/maps/place/Iran/@32.2943779,53.6830157,5z/data=!3m1!4b1!4m5!3m4!1s0x3ef7ec2ec16b1df1:0x40b095d39e51face!8m2!3d32.427908!4d53.688046",
                           "https://www.google.com/maps/place/Iraq/@33.1489954,39.2109911,6z/data=!3m1!4b1!4m5!3m4!1s0x1557823d54f54a11:0x6da561bba2061602!8m2!3d33.223191!4d43.679291",
                           "https://www.google.com/maps/place/Israel/@31.3913098,32.8325905,7z/data=!3m1!4b1!4m5!3m4!1s0x1500492432a7c98b:0x6a6b422013352cba!8m2!3d31.046051!4d34.851612",
                           "https://www.google.com/maps/place/Japan/@33.5001886,137.1538646,5z/data=!3m1!4b1!4m5!3m4!1s0x34674e0fd77f192f:0xf54275d47c665244!8m2!3d36.204824!4d138.252924",
                           "https://www.google.com/maps/place/Jordan/@31.2023613,32.5148945,7z/data=!3m1!4b1!4m5!3m4!1s0x15006f476664de99:0x8d285b0751264e99!8m2!3d30.585164!4d36.238414",
                           "https://www.google.com/maps/place/Kazakhstan/@47.6674245,57.9102851,5z/data=!3m1!4b1!4m5!3m4!1s0x38a91007ecfca947:0x5f7b842fe4b30e1b!8m2!3d48.019573!4d66.923684",
                           "https://www.google.com/maps/place/North+Korea/@40.2828169,125.1753363,7z/data=!3m1!4b1!4m5!3m4!1s0x357e02dae64f4337:0x3a0b871c3e1d861c!8m2!3d40.339852!4d127.510093",
                           "https://www.google.com/maps/place/South+Korea/@35.8025609,125.6242993,7z/data=!3m1!4b1!4m5!3m4!1s0x356455ebcb11ba9b:0x91249b00ba88db4b!8m2!3d35.907757!4d127.766922",
                           "https://www.google.com/maps/place/Kuwait/@29.2953182,45.2920818,7z/data=!3m1!4b1!4m5!3m4!1s0x3fc5363fbeea51a1:0x74726bcd92d8edd2!8m2!3d29.31166!4d47.481766",
                           "https://www.google.com/maps/place/Kyrgyzstan/@40.8723288,65.7528562,5z/data=!3m1!4b1!4m5!3m4!1s0x3897381dfce927f3:0x281058b74e88c433!8m2!3d41.20438!4d74.766098",
                           "https://www.google.com/maps/place/Laos/@18.15704,99.3635594,6z/data=!3m1!4b1!4m5!3m4!1s0x31149057b0824589:0xec592481f99cd81!8m2!3d19.85627!4d102.495496",
                           "https://www.google.com/maps/place/Lebanon/@33.8684813,34.7262383,8z/data=!3m1!4b1!4m5!3m4!1s0x151f17028422aaad:0xcc7d34096c00f970!8m2!3d33.854721!4d35.862285",
                           "https://www.google.com/maps/place/Malaysia/@4.1388481,105.1092979,1971436m/data=!3m2!1e3!4b1!4m5!3m4!1s0x3034d3975f6730af:0x745969328211cd8!8m2!3d4.210484!4d101.975766",
                           "https://www.google.com/maps/place/Maldives/@3.1134823,68.7314773,1973673m/data=!3m2!1e3!4b1!4m5!3m4!1s0x24b599bfaafb7bbd:0x414509e181956289!8m2!3d3.202778!4d73.22068",
                           "https://www.google.com/maps/place/Mongolia/@41.1108954,68.6829487,12252628m/data=!3m2!1e3!4b1!4m5!3m4!1s0x3627050669aa6d4b:0xe0dd213937e6e096!8m2!3d46.862496!4d103.846656",
                           "https://www.google.com/maps/place/Myanmar+(Burma)/@18.8006248,87.6160156,3742262m/data=!3m2!1e3!4b1!4m5!3m4!1s0x305652a7714e2907:0xba7b0ee41c622b11!8m2!3d21.916221!4d95.955974",
                           "https://www.google.com/maps/place/Nepal/@28.3837472,81.8807851,869486m/data=!3m2!1e3!4b1!4m5!3m4!1s0x3995e8c77d2e68cf:0x34a29abcd0cc86de!8m2!3d28.394857!4d84.124008",
                           "https://www.google.com/maps/place/Oman/@21.2046878,47.1238548,3644527m/data=!3m2!1e3!4b1!4m5!3m4!1s0x3dd69f66a9d59bbf:0x3a064c7665b1a817!8m2!3d21.4735329!4d55.975413",
                           "https://www.google.com/maps/place/Pakistan/@30.3593034,68.9966984,6z/data=!3m1!4b1!4m5!3m4!1s0x38db52d2f8fd751f:0x46b7a1f7e614925c!8m2!3d30.375321!4d69.345116",
                           "https://www.google.com/maps/place/Philippines/@11.67342,118.1134904,1935708m/data=!3m2!1e3!4b1!4m5!3m4!1s0x324053215f87de63:0x784790ef7a29da57!8m2!3d12.879721!4d121.774017",
                           "https://www.google.com/maps/place/Qatar/@25.3442848,50.6559122,223293m/data=!3m2!1e3!4b1!4m5!3m4!1s0x3e45c534ffdce87f:0x1cfa88cf812b4032!8m2!3d25.354826!4d51.183884",
                           "https://www.google.com/maps/place/Russia/@49.7693911,68.6904143,10212896m/data=!3m2!1e3!4b1!4m5!3m4!1s0x453c569a896724fb:0x1409fdf86611f613!8m2!3d61.52401!4d105.318756",
                           "https://www.google.com/maps/place/Saudi+Arabia/@23.975077,36.0273268,3612110m/data=!3m2!1e3!4b1!4m5!3m4!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162",
                           "https://www.google.com/maps/place/Singapore/@1.3143394,103.7038204,61752m/data=!3m2!1e3!4b1!4m5!3m4!1s0x31da11238a8b9375:0x887869cf52abf5c4!8m2!3d1.352083!4d103.819836",
                           "https://www.google.com/maps/place/Sri+Lanka/@9.4760938,75.7233082,3382559m/data=!3m1!1e3!4m5!3m4!1s0x3ae2593cf65a1e9d:0xe13da4b400e2d38c!8m2!3d7.873054!4d80.771797",
                           "https://www.google.com/maps/place/Syria/@34.7987369,36.7534508,811550m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1518e6dc413cc6a7:0x877546f4882af620!8m2!3d34.802075!4d38.996815",
                           "https://www.google.com/maps/place/Tajikistan/@38.8581784,71.2479843,7z/data=!3m1!4b1!4m5!3m4!1s0x38b176737abcb3cd:0x25c331844f1988b5!8m2!3d38.861034!4d71.276093",
                           "https://www.google.com/maps/place/Thailand/@13.0108529,96.9820119,1925847m/data=!3m2!1e3!4b1!4m5!3m4!1s0x304d8df747424db1:0x9ed72c880757e802!8m2!3d15.870032!4d100.992541",
                           "https://www.google.com/maps/place/Timor-Leste/@-8.7849691,124.6049737,488351m/data=!3m2!1e3!4b1!4m5!3m4!1s0x2cfde50986e4a129:0x3e5c68387e85b3c!8m2!3d-8.874217!4d125.727539",
                           "https://www.google.com/maps/place/Turkey/@39.0876459,35.1777724,5z/data=!3m1!4b1!4m5!3m4!1s0x14b0155c964f2671:0x40d9dbd42a625f2a!8m2!3d38.963745!4d35.243322",
                           "https://www.google.com/maps/place/Turkmenistan/@38.617823,50.5199874,5z/data=!3m1!4b1!4m5!3m4!1s0x3f65cb5574bc6ccb:0x7edd826b4169a491!8m2!3d38.969719!4d59.556278",
                           "https://www.google.com/maps/place/United+Arab+Emirates/@24.2877781,49.4613139,6z/data=!3m1!4b1!4m5!3m4!1s0x3e5e48dfb1ab12bd:0x33d32f56c0080aa7!8m2!3d23.424076!4d53.847818",
                           "https://www.google.com/maps/place/Uzbekistan/@39.9638065,46.5967635,4z/data=!3m1!4b1!4m5!3m4!1s0x38ae8b20a5d676b1:0xca0a6dad7e841e20!8m2!3d41.377491!4d64.585262",
                           "https://www.google.com/maps/place/Vietnam/@15.7477376,101.4142083,1956487m/data=!3m2!1e3!4b1!4m5!3m4!1s0x31157a4d736a1e5f:0xb03bb0c9e2fe62be!8m2!3d14.058324!4d108.277199",
                           "https://www.google.com/maps/place/Yemen/@15.2164194,39.0544983,3923037m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1603dbac7c34bc5f:0x92f129377eae77ae!8m2!3d15.552727!4d48.516388");

let wikiArray = new Array ("https://en.wikipedia.org/wiki/Afghanistan",
                           "https://en.wikipedia.org/wiki/Armenia",
                           "https://en.wikipedia.org/wiki/Azerbaijan",
                           "https://en.wikipedia.org/wiki/Bahrain",
                           "https://en.wikipedia.org/wiki/Bangladesh",
                           "https://en.wikipedia.org/wiki/Bhutan",
                           "https://en.wikipedia.org/wiki/Brunei",
                           "https://en.wikipedia.org/wiki/Cambodia",
                           "https://en.wikipedia.org/wiki/China",
                           "https://en.wikipedia.org/wiki/Egypt",
                           "https://en.wikipedia.org/wiki/Georgia_(country)",
                           "https://en.wikipedia.org/wiki/India",
                           "https://en.wikipedia.org/wiki/Indonesia",
                           "https://en.wikipedia.org/wiki/Iran",
                           "https://en.wikipedia.org/wiki/Iraq",
                           "https://en.wikipedia.org/wiki/Israel",
                           "https://en.wikipedia.org/wiki/Japan",
                           "https://en.wikipedia.org/wiki/Jordan",
                           "https://en.wikipedia.org/wiki/Kazakhstan",
                           "https://en.wikipedia.org/wiki/North_Korea",
                           "https://en.wikipedia.org/wiki/South_Korea",
                           "https://en.wikipedia.org/wiki/Kuwait",
                           "https://en.wikipedia.org/wiki/Kyrgyzstan",
                           "https://en.wikipedia.org/wiki/Laos",
                           "https://en.wikipedia.org/wiki/Lebanon",
                           "https://en.wikipedia.org/wiki/Malaysia",
                           "https://en.wikipedia.org/wiki/Maldives",
                           "https://en.wikipedia.org/wiki/Mongolia",
                           "https://en.wikipedia.org/wiki/Myanmar",
                           "https://en.wikipedia.org/wiki/Nepal",
                           "https://en.wikipedia.org/wiki/Oman",
                           "https://en.wikipedia.org/wiki/Pakistan",
                           "https://en.wikipedia.org/wiki/Philippines",
                           "https://en.wikipedia.org/wiki/Qatar",
                           "https://en.wikipedia.org/wiki/Russia",
                           "https://en.wikipedia.org/wiki/Saudi_Arabia",
                           "https://en.wikipedia.org/wiki/Singapore",
                           "https://en.wikipedia.org/wiki/Sri_Lanka",
                           "https://en.wikipedia.org/wiki/Syria",
                           "https://en.wikipedia.org/wiki/Tajikistan",
                           "https://en.wikipedia.org/wiki/Thailand",
                           "https://en.wikipedia.org/wiki/East_Timor",
                           "https://en.wikipedia.org/wiki/Turkey",
                           "https://en.wikipedia.org/wiki/Turkmenistan",
                           "https://en.wikipedia.org/wiki/United_Arab_Emirates",
                           "https://en.wikipedia.org/wiki/Uzbekistan",
                           "https://en.wikipedia.org/wiki/Vietnam",
                           "https://en.wikipedia.org/wiki/Yemen");                           


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

