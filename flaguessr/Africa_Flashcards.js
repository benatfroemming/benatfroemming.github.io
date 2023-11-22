//Africa_flashcards.js

//Array that stores all countries in America
let countries = new Array ("Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde",
                           "Central African Republic", "Chad", "Comoros", "Republic of the Congo", "Democratic Republic of the Congo", "Ivory Coast",
                           "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia",
                           "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi",
                           "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "São Tomé and Príncipe",
                           "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania",
                           "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe");

//Array that stores all links to American flags
let links = new Array ("https://flagcdn.com/h120/dz.png",
                      "https://flagcdn.com/h120/ao.png",
                      "https://flagcdn.com/h120/bj.png",
                      "https://flagcdn.com/h120/bw.png",
                      "https://flagcdn.com/h120/bf.png",
                      "https://flagcdn.com/h120/bi.png",
                      "https://flagcdn.com/h120/cm.png",
                      "https://flagcdn.com/h120/cv.png",
                      "https://flagcdn.com/h120/cf.png",
                      "https://flagcdn.com/h120/td.png",
                      "https://flagcdn.com/h120/km.png",
                      "https://flagcdn.com/h120/cg.png",
                      "https://flagcdn.com/h120/cd.png",
                      "https://flagcdn.com/h120/ci.png",
                      "https://flagcdn.com/h120/dj.png",
                      "https://flagcdn.com/h120/eg.png",
                      "https://flagcdn.com/h120/gq.png",
                      "https://flagcdn.com/h120/er.png",
                      "https://flagcdn.com/h120/sz.png",
                      "https://flagcdn.com/h120/et.png",
                      "https://flagcdn.com/h120/ga.png",
                      "https://flagcdn.com/h120/gm.png",
                      "https://flagcdn.com/h120/gh.png",
                      "https://flagcdn.com/h120/gn.png",
                      "https://flagcdn.com/h120/gw.png",
                      "https://flagcdn.com/h120/ke.png",
                      "https://flagcdn.com/h120/ls.png",
                      "https://flagcdn.com/h120/lr.png",
                      "https://flagcdn.com/h120/ly.png",
                      "https://flagcdn.com/h120/mg.png",
                      "https://flagcdn.com/h120/mw.png",
                      "https://flagcdn.com/h120/ml.png",
                      "https://flagcdn.com/h120/mr.png",
                      "https://flagcdn.com/h120/mu.png",
                      "https://flagcdn.com/h120/ma.png",
                      "https://flagcdn.com/h120/mz.png",
                      "https://flagcdn.com/h120/na.png",
                      "https://flagcdn.com/h120/ne.png",
                      "https://flagcdn.com/h120/ng.png",
                      "https://flagcdn.com/h120/rw.png",
                      "https://flagcdn.com/h120/st.png",
                      "https://flagcdn.com/h120/sn.png",
                      "https://flagcdn.com/h120/sc.png",
                      "https://flagcdn.com/h120/sl.png",
                      "https://flagcdn.com/h120/so.png",
                      "https://flagcdn.com/h120/za.png",
                      "https://flagcdn.com/h120/ss.png",
                      "https://flagcdn.com/h120/sd.png",
                      "https://flagcdn.com/h120/tz.png",
                      "https://flagcdn.com/h120/tg.png",
                      "https://flagcdn.com/h120/tn.png",
                      "https://flagcdn.com/h120/ug.png",
                      "https://flagcdn.com/h120/zm.png",
                      "https://flagcdn.com/h120/zw.png");

//Array that stores all links to small American flags
let links2 = new Array ("https://flagcdn.com/80x60/dz.png",
                      "https://flagcdn.com/80x60/ao.png",
                      "https://flagcdn.com/80x60/bj.png",
                      "https://flagcdn.com/80x60/bw.png",
                      "https://flagcdn.com/80x60/bf.png",
                      "https://flagcdn.com/80x60/bi.png",
                      "https://flagcdn.com/80x60/cm.png",
                      "https://flagcdn.com/80x60/cv.png",
                      "https://flagcdn.com/80x60/cf.png",
                      "https://flagcdn.com/80x60/td.png",
                      "https://flagcdn.com/80x60/km.png",
                      "https://flagcdn.com/80x60/cg.png",
                      "https://flagcdn.com/80x60/cd.png",
                      "https://flagcdn.com/80x60/ci.png",
                      "https://flagcdn.com/80x60/dj.png",
                      "https://flagcdn.com/80x60/eg.png",
                      "https://flagcdn.com/80x60/gq.png",
                      "https://flagcdn.com/80x60/er.png",
                      "https://flagcdn.com/80x60/sz.png",
                      "https://flagcdn.com/80x60/et.png",
                      "https://flagcdn.com/80x60/ga.png",
                      "https://flagcdn.com/80x60/gm.png",
                      "https://flagcdn.com/80x60/gh.png",
                      "https://flagcdn.com/80x60/gn.png",
                      "https://flagcdn.com/80x60/gw.png",
                      "https://flagcdn.com/80x60/ke.png",
                      "https://flagcdn.com/80x60/ls.png",
                      "https://flagcdn.com/80x60/lr.png",
                      "https://flagcdn.com/80x60/ly.png",
                      "https://flagcdn.com/80x60/mg.png",
                      "https://flagcdn.com/80x60/mw.png",
                      "https://flagcdn.com/80x60/ml.png",
                      "https://flagcdn.com/80x60/mr.png",
                      "https://flagcdn.com/80x60/mu.png",
                      "https://flagcdn.com/80x60/ma.png",
                      "https://flagcdn.com/80x60/mz.png",
                      "https://flagcdn.com/80x60/na.png",
                      "https://flagcdn.com/80x60/ne.png",
                      "https://flagcdn.com/80x60/ng.png",
                      "https://flagcdn.com/80x60/rw.png",
                      "https://flagcdn.com/80x60/st.png",
                      "https://flagcdn.com/80x60/sn.png",
                      "https://flagcdn.com/80x60/sc.png",
                      "https://flagcdn.com/80x60/sl.png",
                      "https://flagcdn.com/80x60/so.png",
                      "https://flagcdn.com/80x60/za.png",
                      "https://flagcdn.com/80x60/ss.png",
                      "https://flagcdn.com/80x60/sd.png",
                      "https://flagcdn.com/80x60/tz.png",
                      "https://flagcdn.com/80x60/tg.png",
                      "https://flagcdn.com/80x60/tn.png",
                      "https://flagcdn.com/80x60/ug.png",
                      "https://flagcdn.com/80x60/zm.png",
                      "https://flagcdn.com/80x60/zw.png");

//Array that stores all capital cities of American countries
let capitalArray = new Array ("Algiers", "Luanda", "Porto-Novo", "Gaborone", "Ouagadougou", "Gitega", "Yaoundé", "Praia", "Bangui", "N'Djamena", "Moroni", "Brazzaville", "Kinshasa",
                              "Yamoussoukro", "Djibouti", "Cairo", "Malabo", "Asmara", "Lobamba", "Addis Ababa", "Libreville", "Banjul", "Accra", "Conakry", "Bissau", "Nairobi",
                              "Maseru", "Monrovia", "Tripoli", "Antananarivo", "Lilongwe", "Bamako", "Nouakchott", "Port Louis", "Rabat", "Maputo", "Windhoek", "Niamey", "Abuja", "Kigali",
                              "São Tomé", "Dakar", "Victoria", "Freetown", "Mogadishu", "Pretoria, Bloemfontein, Cape Town", "Juba", "Khartoum", "Dodoma", "Lomé", "Tunis", "Kampala",
                              "Lusaka", "Harare");

//Array that stores all populations of American countries
let populationArray = new Array ("43 000 000 (2019)", "31 127 674 (2020)", "11 733 059 (2019)", "2 338 851 (2019)", "20 870 060 (2019)", "10 953 317 (2019)", "25 876 000 (2019)",
                                 "550 483 (2019)", "5 496 011 (2019)", "15 692 969 (2019)", "873 724 (2019)", "5 380 508 (2019)", "86 790 567 (2019)", "25 823 071 (2019)",
                                 "1 078 373 (2019)", "100 052 943 (2020)", "1 358 276 (2018)", "3 497 117 (2019)", "1 093 238 (2017)", "98 665 000 (2019)", "2 172 579 (2019)",
                                 "2 347 706 (2019)", "30 280 811 (2019)", "12 218 357 (2019)", "1 604 528 (2019)", "47 564 296 (2019)", "2 007 201 (2016)", "4 475 353 (2019)",
                                 "6 777 452 (2019)", "25 680 342 (2018)", "17 563 749 (2018)", "19 973 000 (2019)", "4 077 347 (2019)", "1 265 985 (2019)", "35 821 024 (2020)",
                                 "28 571 310 (2019)", "2 458 936 (2019)", "22 314 743 (2019)", "200 963 599 (2019)", "12 374 397 (2019)", "201 784 (2018)", "16 209 125 (2019)", "97 625 (2019)",
                                 "7 901 454 (2019)", "15 442 905 (2019)", "58 775 022 (2019)", "12 778 250 (2019)", "42 295 645 (2020)", "55 890 747 (2019)", "7 538 000 (2019)",
                                 "11 722 038 (2019)", "40 299 300 (2019)", "17 381 168 (2019)", "15 159 624 (2019)");

//Array that stores all total areas of American countries
let areaArray = new Array ("2 381 740", "1 246 700", "114 763", "581 730", "274 222", "27 834", "475 442", "4 033", "622 984", "1 284 000", "1 862", "342 000", "2 344 860", "322 463", "23 200", "	1 002 450", "28 051", "	117 600", "17 364", "1 104 300", "267 668", "11 295", "238 533", "245 857", "36 125", "	580 367", "30 355", "111 369",
                           "1 759 540", "587 041", "118 484", "1 240 190", "1 030 700", "2 040", "446 550", "801 590", "825 615", "1 267 000","923 768", "26 338", "964", "196 722", "452", "71 740",
                           "637 657", "1 221 040", "644 329", "1 861 480", "945 087", "56 785", "163 610", "241 550", "752 612", "390 757");

//Array that stores all languages of American countries
let languageArray = new Array ("Standard Algerian Berber, Arabic", "Portuguese", "French", "English, Tswana","French", "Kirundi, French", "French, English", "Portuguese", "Sango, French", "French, Arabic",
                               "Comorian, French", "French", "French", "French", "French, Arabic", "Arabic", "Spanish, French", "Tigrinya", "Swazi, English", "Amharic", "French", "English",
                               "English", "French", "Portugueses", "Swahili, English", "Sesotho, English", "English", "Arabic", "Malagasy, French", "Chewa, Enlgish", "French", "Arabic",
                               "French, English", "Berber, Arabic", "Portuguese", "English", "French", "English", "French, English", "Portuguese", "French", "French, English", "English", "Arabic, Somali", "11 official languages",
                               "Arabic", "Arabic, English", "Swahili", "French", "Arabic", "Swahili, English", "English", "Shona, English" );


//Array that stores all google maps links
let mapsArray = new Array ("https://www.google.com/maps/place/Argelia/@27.8180416,-7.3718796,5z/data=!3m1!4b1!4m5!3m4!1s0xd7e8a6a28037bd1:0x7140bee3abd7f8a2!8m2!3d28.033886!4d1.659626",
                           "https://www.google.com/maps/place/Angola/@-11.1689724,13.2712357,6z/data=!3m1!4b1!4m5!3m4!1s0x1a51f24ecaad8b27:0x590a289d0d4a4e3d!8m2!3d-11.202692!4d17.873887",
                           "https://www.google.com/maps/place/Benin/@9.3057332,0.0594439,7z/data=!3m1!4b1!4m5!3m4!1s0x1023542b047a5695:0xecb277f8cb622ef5!8m2!3d9.30769!4d2.315834",
                           "https://www.google.com/maps/place/Botswana/@-22.2703639,20.1813793,6z/data=!3m1!4b1!4m5!3m4!1s0x1ea44321d1452211:0xf1647c2a8715af7b!8m2!3d-22.328474!4d24.684866",
                           "https://www.google.com/maps/place/Burkina+Faso/@12.2434744,-3.8042214,7z/data=!3m1!4b1!4m5!3m4!1s0xe2dca26d5a6709b:0x27930aed46836dab!8m2!3d12.238333!4d-1.561593", 
                           "https://www.google.com/maps/place/Burundi/@-3.3879956,29.3634086,9z/data=!3m1!4b1!4m5!3m4!1s0x19c144d33654f15b:0xb1234d0e5631ec8d!8m2!3d-3.373056!4d29.918886",
                           "https://www.google.com/maps/place/Camer%C3%BAn/@7.3579867,7.785756,6z/data=!3m1!4b1!4m5!3m4!1s0x10613753703e0f21:0x2b03c44599829b53!8m2!3d7.369722!4d12.354722",
                           "https://www.google.com/maps/place/Cape+Verde/@16.022841,-25.1127172,8z/data=!3m1!4b1!4m5!3m4!1s0x9358f2159115131:0x6b1af236f918ea1f!8m2!3d16.5388!4d-23.0418",
                           "https://www.google.com/maps/place/Central+African+Republic/@6.6111375,16.4279708,6z/data=!3m1!4b1!4m5!3m4!1s0x10b8e9538d86a2b7:0xb89bc6025a5c8024!8m2!3d6.611111!4d20.939444",
                           "https://www.google.com/maps/place/Chad/@15.411218,14.2276855,6z/data=!3m1!4b1!4m5!3m4!1s0x10e73978bd677361:0x3b60835bcec0809c!8m2!3d15.454166!4d18.732207",
                           "https://www.google.com/maps/place/Comoros/@-11.901146,43.318922,9z/data=!3m1!4b1!4m5!3m4!1s0x1898e3036408a48d:0xf70a7fbee4dfd4db!8m2!3d-11.6455!4d43.3333",
                           "https://www.google.com/maps/place/Republic+of+the+Congo/@-0.681144,10.3754345,1976451m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1a60a563dda31309:0x55017acf14fc6c8f!8m2!3d-0.228021!4d15.827659",
                           "https://www.google.com/maps/place/Democratic+Republic+of+the+Congo/@-3.9612485,12.6625608,3943737m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1979facf9a7546bd:0x4c63e5eac93f141!8m2!3d-4.038333!4d21.758664",
                           "https://www.google.com/maps/place/C%C3%B4te+d'Ivoire/@7.4662693,-7.7975006,979916m/data=!3m2!1e3!4b1!4m5!3m4!1s0xf961387b049a067:0x1f91e627cb9ee40!8m2!3d7.539989!4d-5.54708",
                           "https://www.google.com/maps/place/Djibouti/@11.8141177,42.0655217,241840m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1622d46734f9f601:0x1472bba7ef0f5b88!8m2!3d11.825138!4d42.590275",
                           "https://www.google.com/maps/place/Egypt/@26.8444377,26.3715951,1763585m/data=!3m2!1e3!4b1!4m5!3m4!1s0x14368976c35c36e9:0x2c45a00925c4c444!8m2!3d26.820553!4d30.802498",
                           "https://www.google.com/maps/place/Equatorial+Guinea/@1.1486169,6.1876171,988097m/data=!3m2!1e3!4b1!4m5!3m4!1s0x10643a605fae87a7:0xc870a2a22c10de7a!8m2!3d1.650801!4d10.267895",
                           "https://www.google.com/maps/place/Eritrea/@15.1817098,37.5825555,991532m/data=!3m2!1e3!4b1!4m5!3m4!1s0x166d5a3f9dba8565:0x17c208f02f120efa!8m2!3d15.179384!4d39.782334",
                           "https://www.google.com/maps/place/Eswatini/@-26.5153314,30.9009492,221085m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1ee8cee147320f07:0xc13dc62f180d7069!8m2!3d-26.522503!4d31.465866",
                           "https://www.google.com/maps/place/Ethiopia/@9.1322145,35.9908602,1951537m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1635d0cedd6cfd2b:0x7bf6a67f5348c55a!8m2!3d9.145!4d40.489673",
                           "https://www.google.com/maps/place/Gabon/@-0.9175344,9.2239861,988169m/data=!3m2!1e3!4b1!4m5!3m4!1s0x107f3b8a5438f3ed:0x7b0cc30e36786b15!8m2!3d-0.803689!4d11.609444",
                           "https://www.google.com/maps/place/Gambia/@13.4181934,-15.9307369,249835m/data=!3m2!1e3!4b1!4m5!3m4!1s0xec29c2965af3807:0x9e4a4c406b139d2a!8m2!3d13.443182!4d-15.310139",
                           "https://www.google.com/maps/place/Ghana/@7.9038964,-3.2802509,1017627m/data=!3m2!1e3!4b1!4m5!3m4!1s0xfd75acda8dad6c7:0x54d7f230d093d236!8m2!3d7.946527!4d-1.023194",
                           "https://www.google.com/maps/place/Guinea/@9.9307981,-13.7097449,1011994m/data=!3m2!1e3!4b1!4m5!3m4!1s0xf01b321bcce953f:0xe8737bcbd75a2df6!8m2!3d9.945587!4d-9.696645",
                           "https://www.google.com/maps/place/Guinea-Bissau/@11.7012748,-16.4132973,483878m/data=!3m2!1e3!4b1!4m5!3m4!1s0xee43c74af82a9f1:0xbbe88e3f571e084e!8m2!3d11.803749!4d-15.180413",
                           "https://www.google.com/maps/place/Kenya/@0.1650949,33.3994914,1976582m/data=!3m2!1e3!4b1!4m5!3m4!1s0x182780d08350900f:0x403b0eb0a1976dd9!8m2!3d-0.023559!4d37.906193",
                           "https://www.google.com/maps/place/Lesotho/@-29.6160642,27.1095399,429590m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1e8c4827d65f8ceb:0x232d57b878d11eb3!8m2!3d-29.609988!4d28.233608",
                           "https://www.google.com/maps/place/Liberia/@6.4123505,-10.5764973,510480m/data=!3m2!1e3!4b1!4m5!3m4!1s0xf09f803d4a9fcc1:0x7fd3286b32d16373!8m2!3d6.428055!4d-9.429499",
                           "https://www.google.com/maps/place/Libya/@26.2995413,12.824645,1771994m/data=!3m2!1e3!4b1!4m5!3m4!1s0x13a892d98ece010d:0xfa076041c7f9c22a!8m2!3d26.3351!4d17.228331",
                           "https://www.google.com/maps/place/Madagascar/@-18.761264,42.3614896,1945598m/data=!3m2!1e3!4b1!4m5!3m4!1s0x21d1a4e3ea238545:0x5244e3c1977b1388!8m2!3d-18.766947!4d46.869107",
                           "https://www.google.com/maps/place/Malawi/@-13.2331688,32.0457795,962053m/data=!3m2!1e3!4b1!4m5!3m4!1s0x18d85bdd9313c0d7:0x44a32e1729668543!8m2!3d-13.254308!4d34.301525",
                           "https://www.google.com/maps/place/Mali/@17.5339257,-8.493849,1884756m/data=!3m2!1e3!4b1!4m5!3m4!1s0xe143e881b1073cf:0xbb3a5be2a0bdcf80!8m2!3d17.570692!4d-3.996166",
                           "https://www.google.com/maps/place/Mauritania/@20.9695407,-15.4573025,1918689m/data=!3m2!1e3!4b1!4m5!3m4!1s0xe80b8c314b3394f:0x83220bebd6be534e!8m2!3d21.00789!4d-10.940835",
                           "https://www.google.com/maps/place/Mauritius/@-20.2004972,56.5514884,463753m/data=!3m2!1e3!4b1!4m5!3m4!1s0x217c504df94474c9:0x4203d9c2116bd031!8m2!3d-20.348404!4d57.552152",
                           "https://www.google.com/maps/place/Morocco/@31.730893,-11.6545234,1681145m/data=!3m2!1e3!4b1!4m5!3m4!1s0xd0b88619651c58d:0xd9d39381c42cffc3!8m2!3d31.791702!4d-7.09262",
                           "https://www.google.com/maps/place/Mozambique/@-18.3997735,26.7543925,3899458m/data=!3m2!1e3!4b1!4m5!3m4!1s0x18d4aceae6fd4ac5:0x12bbbfb9ae16a115!8m2!3d-18.665695!4d35.529562",
                           "https://www.google.com/maps/place/Namibia/@-22.8932768,13.8601642,1820897m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1bf53c7e6ed37521:0xd3b9e5a5a8ecb261!8m2!3d-22.95764!4d18.49041",
                           "https://www.google.com/maps/place/Niger/@17.5562981,3.573012,1884523m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1199ec7ac6a1af5d:0xc933920a158e24d4!8m2!3d17.607789!4d8.081666",
                           "https://www.google.com/maps/place/Nigeria/@9.0172581,4.169342,2029380m/data=!3m2!1e3!4b1!4m5!3m4!1s0x104e0baf7da48d0d:0x99a8fe4168c50bc8!8m2!3d9.081999!4d8.675277",
                           "https://www.google.com/maps/place/Rwanda/@-1.9421905,29.3185833,9z/data=!3m1!4b1!4m5!3m4!1s0x19c29654e73840e3:0x7490b026cbcca103!8m2!3d-1.940278!4d29.873888",
                           "https://www.google.com/maps/place/S%C3%A3o+Tom%C3%A9+and+Pr%C3%ADncipe/@0.8999762,6.431631,247043m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1070ecf90b9ad889:0x6251230c557630ea!8m2!3d0.18636!4d6.613081",
                           "https://www.google.com/maps/place/Senegal/@14.473562,-16.7666189,994781m/data=!3m2!1e3!4b1!4m5!3m4!1s0xec172f5b3c5bb71:0x5a46a55099615940!8m2!3d14.497401!4d-14.452362",
                           "https://www.google.com/maps/place/Seychelles/@-7.0795224,48.9382506,1019555m/data=!3m2!1e3!4b1!4m5!3m4!1s0x225c21fd70bead3b:0x32d3d0a0d349daf7!8m2!3d-4.679574!4d55.491977",
                           "https://www.google.com/maps/place/Sierra+Leone/@8.4234078,-12.9615849,488817m/data=!3m2!1e3!4b1!4m5!3m4!1s0xf0106183aabf343:0x5369e9cdc72cf719!8m2!3d8.460555!4d-11.779889",
                           "https://www.google.com/maps/place/Somalia/@5.2419207,41.7957146,2046181m/data=!3m2!1e3!4b1!4m5!3m4!1s0x181d2ea7ecd15b83:0x9e393ace5ce9e5be!8m2!3d5.152149!4d46.199616",
                           "https://www.google.com/maps/place/South+Africa/@-34.2773802,18.2296339,3266596m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1c34a689d9ee1251:0xe85d630c1fa4e8a0!8m2!3d-30.559482!4d22.937506",
                           "https://www.google.com/maps/place/South+Sudan/@7.8495659,25.1862794,1958070m/data=!3m2!1e3!4b1!4m5!3m4!1s0x171930b53d3e3119:0xdbf043637eb6bc97!8m2!3d6.8769919!4d31.3069788",
                           "https://www.google.com/maps/place/Sudan/@15.7502623,25.7465378,1902378m/data=!3m2!1e3!4b1!4m5!3m4!1s0x15d91cc41072b195:0xd2bf70462a612b37!8m2!3d12.862807!4d30.217636",
                           "https://www.google.com/maps/place/Tanzania/@-6.3423266,30.4817795,2042199m/data=!3m2!1e3!4b1!4m5!3m4!1s0x184b51314869a111:0x885a17314bc1c430!8m2!3d-6.369028!4d34.888822",
                           "https://www.google.com/maps/place/Togo/@8.6093081,-1.4174033,1015811m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1023e1c113185419:0xfaae5b301ad19360!8m2!3d8.619543!4d0.824782",
                           "https://www.google.com/maps/place/Tunisia/@33.809176,5.057577,1642340m/data=!3m2!1e3!4b1!4m5!3m4!1s0x125595448316a4e1:0x3a84333aaa019bef!8m2!3d33.886917!4d9.537499",
                           "https://www.google.com/maps/place/Uganda/@1.3725987,30.0533658,1027093m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1771a69f6499f945:0x874155ce43014549!8m2!3d1.373333!4d32.290275",
                           "https://www.google.com/maps/place/Zambia/@-13.0903921,23.3469301,2001379m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1940f4a5fcfc0b71:0xf19ff9ac7e583e45!8m2!3d-13.133897!4d27.849332",
                           "https://www.google.com/maps/place/Zimbabwe/@-18.9968122,26.9032243,934469m/data=!3m2!1e3!4b1!4m5!3m4!1s0x1931a4e706b17161:0xa1c0385fc5cbbfee!8m2!3d-19.015438!4d29.154857");

let wikiArray = new Array ("https://en.wikipedia.org/wiki/Algeria",
                           "https://en.wikipedia.org/wiki/Angola",
                           "https://en.wikipedia.org/wiki/Benin",
                           "https://en.wikipedia.org/wiki/Botswana",
                           "https://en.wikipedia.org/wiki/Burkina_Faso",
                           "https://en.wikipedia.org/wiki/Burundi",
                           "https://en.wikipedia.org/wiki/Cameroon",
                           "https://en.wikipedia.org/wiki/Cape_Verde",
                           "https://en.wikipedia.org/wiki/Central_African_Republic",
                           "https://en.wikipedia.org/wiki/Chad",
                           "https://en.wikipedia.org/wiki/Comoros",
                           "https://en.wikipedia.org/wiki/Republic_of_the_Congo",
                           "https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo",
                           "https://en.wikipedia.org/wiki/Ivory_Coast",
                           "https://en.wikipedia.org/wiki/Djibouti",
                           "https://en.wikipedia.org/wiki/Egypt",
                           "https://en.wikipedia.org/wiki/Equatorial_Guinea",
                           "https://en.wikipedia.org/wiki/Eritrea",
                           "https://en.wikipedia.org/wiki/Eswatini",
                           "https://en.wikipedia.org/wiki/Ethiopia",
                           "https://en.wikipedia.org/wiki/Gabon",
                           "https://en.wikipedia.org/wiki/The_Gambia",
                           "https://en.wikipedia.org/wiki/Ghana",
                           "https://en.wikipedia.org/wiki/Guinea",
                           "https://en.wikipedia.org/wiki/Guinea-Bissau",
                           "https://en.wikipedia.org/wiki/Kenya",
                           "https://en.wikipedia.org/wiki/Lesotho",
                           "https://en.wikipedia.org/wiki/Liberia",
                           "https://en.wikipedia.org/wiki/Libya",
                           "https://en.wikipedia.org/wiki/Madagascar",
                           "https://en.wikipedia.org/wiki/Malawi",
                           "https://en.wikipedia.org/wiki/Mali",
                           "https://en.wikipedia.org/wiki/Mauritania",
                           "https://en.wikipedia.org/wiki/Mauritius",
                           "https://en.wikipedia.org/wiki/Morocco",
                           "https://en.wikipedia.org/wiki/Mozambique",
                           "https://en.wikipedia.org/wiki/Namibia",
                           "https://en.wikipedia.org/wiki/Niger",
                           "https://en.wikipedia.org/wiki/Nigeria",
                           "https://en.wikipedia.org/wiki/Rwanda",
                           "https://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe",
                           "https://en.wikipedia.org/wiki/Senegal",
                           "https://en.wikipedia.org/wiki/Seychelles",
                           "https://en.wikipedia.org/wiki/Sierra_Leone",
                           "https://en.wikipedia.org/wiki/Somalia",
                           "https://en.wikipedia.org/wiki/South_Africa",
                           "https://en.wikipedia.org/wiki/South_Sudan",
                           "https://en.wikipedia.org/wiki/Sudan",
                           "https://en.wikipedia.org/wiki/Tanzania",
                           "https://en.wikipedia.org/wiki/Togo",
                           "https://en.wikipedia.org/wiki/Tunisia",
                           "https://en.wikipedia.org/wiki/Uganda",
                           "https://en.wikipedia.org/wiki/Zambia",
                           "https://en.wikipedia.org/wiki/Zimbabwe"
                           );                           


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
    if (code == 'R' || code == 'r'){
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