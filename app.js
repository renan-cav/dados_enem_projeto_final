/* Cria array com as frases a serem mostradas de forma aleatória no site */
let fatos = ['<li>A nota media na redação do ENEM em todo o Brasil foi <b>590,40</b>.</li>',
'<li>Entre os participantes que fizeram a redação em todo o país, apenas <b>28</b> tiraram a nota máxima.</li>',
'<li>O <b>Rio de Janeiro</b> é o estado com o maior número de redações com nota máxima: <b>7</b>.</li>',
'<li>Participantes do sexo feminino tiveram mais notas máximas do que homens. <b>20</b> contra <b>8</b>, respectivamente.</li>',
'<li>O estado com a melhor média nas notas de redação foi <b>Minas Gerais</b>: <b>619,60</b>.</li>',
'<li><b>Acre</b> foi o estado com a menor média nas notas da redação: <b>544,75</b>.</li>',
'<li><b>5.783.133</b>alunos se inscreveram para o ENEM 2020. Desses, <b>2.754.164</b> fizeram a redação.</li>',
]

/* Cria propriedade com as médias das notas do país e de cada estado */
let mediaUf = { "br" : 590.40,
"ro" : 548.63,
"ac" : 544.75,
"am" : 553.57,
"rr" : 546.63,
"pa" : 567.69,
"ap" : 547.23,
"to" : 556.43,
"ma" : 559.47,
"pi" : 581.24,
"ce" : 595.21,
"rn" : 593.78,
"pb" : 587.27,
"pe" : 584.33,
"al" : 578.22,
"se" : 603.05,
"ba" : 573.66,
"mg" : 619.60,
"es" : 602.51,
"rj" : 612.98,
"sp" : 605.64,
"pr" : 585.79,
"sc" : 597.10,
"rs" : 592.83,
"ms" : 566.47,
"mt" : 567.09,
"go" : 593.79,
"df" : 593.81
}

/* Cria propriedade com a distribuição das notas do país e de cada estado */
let profic = { "br" : [199, 1939, 66988, 353464, 331851, 670072, 537652, 279558, 249840, 183373],
"ro" : [4, 24, 872, 3954, 3747, 6598, 4427, 1883, 1522, 885],
"ac" : [2, 18, 689, 3249, 3022, 5581, 3574, 1418, 762],
"am" : [6, 27, 936, 6478, 6488, 18133, 10362, 3402, 2299, 1094],
"rr" : [1, 8, 231, 1104, 1067, 1861, 1185, 490, 398, 258],
"pa" : [15, 132, 4603, 23169, 23068, 43600, 30048, 13763, 11508, 8633],
"ap" : [1, 12, 555, 3278, 3098, 6249, 3885, 1452, 1047, 697],
"to" : [5, 36, 888, 4302, 3957, 7009, 4584, 2130, 1873, 1292],
"ma" : [12, 112, 3580, 18068, 17850, 32322, 21364, 9466, 7783, 5865],
"pi" : [9, 87, 2193, 10025, 9366, 16651, 12307, 6188, 5963, 5330],
"ce" : [43, 264, 4688, 21538, 19765, 36745, 33213, 17833, 16033, 12455],
"rn" : [4, 50, 1681, 8745, 8042, 16864, 13685, 7122, 6254, 4991],
"pb" : [10, 64, 2395, 12504, 10878, 21476, 17493, 8919, 7942, 6278],
"pe" : [15, 140, 4348, 21031, 20678, 38075, 30171, 15647, 14066, 10074],
"al" : [7, 47, 1463, 7627, 13848, 10579, 4960, 4417, 3370],
"se" : [4, 30, 1132, 5706, 5333, 10064, 8528, 4683, 4613, 4053],
"ba" : [19, 253, 7162, 30812, 28891, 54256, 41139, 20527, 17520, 12235],
"mg" : [9, 119, 5699, 31838, 28678, 57925, 52516, 30357, 31906, 27907],
"es" : [3, 40, 1267, 6338, 5363, 11117, 9957, 5177, 4920, 4229],
"rj" : [6, 69, 3550, 19952, 19887, 42765, 37150, 20793, 19395, 15894],
"sp" : [7, 124, 7111, 46007, 43465, 98474, 88140, 50528, 43147, 25196],
"pr" : [3, 40, 2239, 14284, 13412, 29902, 24186, 12212, 9637, 5425],
"sc" : [2, 10, 1025, 7219, 5926, 13559, 12024, 6314, 5569, 3296],
"rs" : [3, 42, 2305, 15735, 13015, 30558, 24051, 12317, 10775, 7804],
"ms" : [0, 25, 1028, 5213, 4955, 9068, 6253, 3081, 2707, 1702],
"mt" : [3, 36, 1409, 6355, 6100, 10695, 7779, 3649, 3235, 2348],
"go" : [5, 90, 2711, 12195, 12392, 22737, 17344, 9496, 9356, 7733],
"df" : [1, 40, 1228, 6738, 6134, 13940, 11708, 5751, 4937, 3558]
}

let fem = { "br" : [87, 838, 29373, 191679, 197239, 407122, 328958, 177821, 164863, 125603, 20],
"ro" : [2, 13, 402, 2237, 2337, 4185, 2927, 1245, 1032, 598, 0],
"ac" : [0, 9, 262, 1769, 1794, 3491, 2202, 864, 634, 497, 0],
"am" : [2, 9, 472, 3819, 3584, 10748, 6066, 2081, 1425, 726, 1],
"rr" : [1, 4, 97, 591, 679, 1188, 782, 324, 260, 178, 0],
"pa" : [6, 61, 2088, 12800, 14236, 27487, 18685, 8655, 7258, 5593, 2],
"ap" : [7, 241, 1737, 1803, 3783, 2387, 860, 651, 439, 0],
"to" : [3, 15, 366, 2450, 2461, 4481, 2996, 1417, 1255, 854, 0],
"ma" : [5, 61, 1669, 9957, 11119, 20577, 13288, 6023, 4886, 3677, 1],
"pi" : [5, 41, 970, 5499, 5767, 10492, 7658, 3847, 3809, 3497, 0],
"ce" : [22, 109, 1909, 11101, 11420, 21416, 19573, 10673, 9920, 7907, 1],
"rn" : [0, 28, 744, 4552, 4753, 9867, 7958, 4212, 3907, 3206, 0],
"pb" : [5, 22, 988, 6433, 6342, 12703, 10495, 5457, 4994, 4095, 2],
"pe" : [4, 52, 1870, 11246, 12206, 22862, 18259, 9960, 9289, 6823, 0],
"al" : [3, 21, 683, 4128, 4353, 8422, 6436, 3180, 2969, 2327, 1],
"se" : [2, 18, 560, 3191, 3312, 6150, 5174, 2903, 2909, 2723, 0],
"ba" : [8, 125, 3433, 17860, 18603, 35045, 26224, 13379, 11862, 8578, 0],
"mg" : [3, 41, 2481, 17802, 17244, 35554, 32365, 19280, 21140, 19719, 1],
"es" : [2, 14, 542, 3468, 3144, 6713, 6097, 3285, 3151, 2928, 1],
"rj" : [5, 33, 1656, 10808, 11576, 25385, 22181, 12902, 12892, 11245, 6],
"sp" : [2, 51, 2900, 23729, 24161, 57151, 52851, 32436, 29038, 17603, 2],
"pr" : [1, 12, 881, 7462, 7513, 17924, 14965, 8115, 6661, 3869, 0],
"sc" : [1, 4, 400, 3834, 3386, 8149, 7667, 4265, 3960, 2356, 0],
"rs" : [3, 13, 947, 8483, 7652, 18590, 15209, 8276, 7519, 5568, 0],
"ms" : [0, 12, 446, 2793, 2943, 5615, 3837, 1994, 1813, 1182, 0],
"mt" : [1, 14, 625, 3552, 3792, 6722, 4904, 2398, 2138, 1628, 0],
"go" : [1, 28, 1167, 6594, 7439, 14155, 10713, 6149, 6161, 5264, 0],
"df" : [0, 21, 574, 3784, 3620, 8267, 7059, 3641, 3330, 2523, 2],
}

/* Cria objeto com a distribuição das notas da redação do ENEM do país e por estado desgregadas por sexo */
let masc = {"br" : [112, 1101, 37615, 161785, 134612, 262950, 208694, 101737, 84977, 57742, 8],
"ro" : [2, 11, 470, 1717, 1410, 2.413, 1500, 638, 490, 287, 0],
"ac" : [2, 9, 427, 1480, 1228, 2090, 1372, 554, 384, 265, 0],
"am" : [4, 18, 464, 2659, 2904, 7385, 4296, 1321, 874, 367, 0],
"rr" : [0, 4, 134, 513, 388, 673, 403, 166, 138, 80, 0],  
"pa" : [9, 71, 2515, 10369, 8832, 16113, 11363, 5108, 4250, 3038, 0],
"ap" : [1, 5, 314, 1541, 1295, 2466, 1498, 592, 396, 258, 0],
"to" : [2, 21, 522, 1852, 1496, 2528, 1588, 713, 618, 438, 0],
"ma" : [7, 51, 1911, 8111, 6731, 11745, 8076, 3443, 2897, 2187, 0],
"pi" : [4, 46, 1223, 4526, 3599, 6159, 4649, 2341, 2154, 1833, 0],
"ce" : [21, 155, 2779, 10437, 8345, 15329, 13640, 7160, 6113, 4546, 1],
"rn" : [4, 22, 937, 4.193, 3.289, 6997, 5727, 2910, 2347, 1784, 1],
"pb" : [5, 42, 1407, 6071, 4536, 8773, 6998, 3462, 2948, 2181, 0],
"pe" : [11, 88, 2478, 9785, 8472, 15213, 11912, 5687, 4777, 3250, 1],
"al" : [4,26, 780, 3499, 2831, 5426, 4143, 1780, 1448, 1041, 1],
"se" : [2, 12, 572, 2515, 2021, 3914, 3354, 1780, 1704, 1329, 1],
"ba" : [11, 128, 3729, 12952, 10378, 19211, 14915, 7148, 5658, 3655, 2],
"mg" : [6, 78, 3218, 14036, 11434, 22371, 20151, 11077, 10766, 8187, 0],
"es" : [1, 26, 725, 2870, 2219, 4404, 3860, 1892, 1769, 1300, 0],
"rj" : [1, 36, 1894, 9144, 8311, 17380, 14969, 7891, 6503, 4649, 1],
"sp" : [5, 73, 4211, 22278, 19304, 41323, 35289, 18092, 14109, 7591, 0],
"pr" : [2, 28, 1358, 6822, 5899, 11978, 9221, 4097, 2976, 1556, 0],
"sc" : [1, 6, 625, 3385, 2540, 5410, 4357, 2049, 1609, 940, 0],
"rs" : [0, 29, 1358, 7252, 5363, 11968, 8842, 4041, 3256, 2236, 0],
"ms" : [0, 13, 582, 2420 , 2012, 3453, 2416, 1087, 894, 520, 0],
"mt" : [2, 22, 784, 2803, 2308, 3973, 2875, 1251, 1097, 720, 0],
"go" : [4, 62, 1544, 5601, 4953, 8582, 6631, 3347, 3195, 2469, 0],
"df" : [1, 19, 654, 2954, 2514, 5673, 4649, 2110, 1607, 1035, 0]
}

/* Cria objeto com a distribuição das notas da redação do ENEM do país e por estado desgregadas por raça */
let raca = {"br" : {"nd":[4, 52, 1411, 6644, 6350, 12294, 10187, 5468, 4957, 3988, 1],
"branca":[28, 377, 16495, 108037, 98301, 223254, 213854, 129942, 127669, 101174, 13],
"preta":[34, 329, 11523, 50143, 48479, 91304, 63687, 27209, 20169, 11.809, 2],
"parda":[118, 1100, 35442, 178030, 168361, 324139, 235929, 109868, 90939, 62185, 12],
"amarela":[6, 41, 1474, 7970, 7796, 14854, 11669, 6218, 5531, 3907, 0],
"indigena":[9, 40, 643, 2640, 2564, 4227, 2326, 853, 575, 282, 0]
},
"ro" : {"nd":[0, 2, 14, 49, 62, 109, 78, 33, 26, 18, 0],
"branca":[0, 1, 152, 779, 765, 1459, 1173, 595, 501, 351, 0],
"preta":[0, 0, 112, 445, 449, 719, 481, 150, 126, 69, 0],
"parda":[4, 19, 553, 2532, 2324, 4059, 2568, 1040, 825, 428, 0],
"amarela":[0, 2, 30, 120, 121, 193, 104, 55, 42, 18, 0],
"indigena":[0, 0, 11, 29, 26, 59, 23, 10, 2, 1, 0]
},
"ac" : {"nd":[ 0, 0, 11, 56, 56, 88, 48, 34, 22, 24, 0],
"branca":[1, 5, 75, 482, 370, 801, 598, 284, 246, 214, 0],
"preta":[0, 0, 110, 381, 348, 660, 399, 164, 90, 56, 0],
"parda":[1, 12, 460, 2189, 2107, 3795, 2398, 885, 622, 455, 0],
"amarela":[0, 0, 23, 109, 108, 196, 111, 45, 32, 12, 0],
"indigena":[0, 1, 10, 32, 33, 41, 20, 6, 6, 1, 0]
},
"am" : {"nd":[1, 1, 24, 126, 114, 370, 190, 72, 60, 27, 0],
"branca":[0, 2, 100, 783, 787, 2448, 1840, 740, 654, 338, 1],
"preta":[0, 1, 55, 359, 408, 1043, 607, 170, 101, 55, 0],
"parda":[2, 18, 698, 4880, 4831, 13426, 7301, 2308, 1425, 632, 0],
"amarela":[0, 14, 115, 124, 332, 194, 59, 38, 29, 0],
"indigena":[3, 5, 45, 215, 224, 514, 230, 53, 21, 12, 0]
},
"rr" : {"nd":[0, 0, 3, 14, 16, 37, 22, 13, 11, 7, 0],
"branca":[0, 0, 26, 150, 157, 298, 271, 115, 105, 84, 0],
"preta":[0, 0, 21, 83, 88, 134, 89, 39, 33, 18, 0],
"parda":[0, 7, 174, 772, 738, 1295, 753, 296, 236, 141, 0],
"amarela":[0, 0, 1, 8, 17, 20, 12, 10, 5, 3, 0],
"indigena":[1, 1, 6, 77, 51, 77, 38, 17, 8, 5, 0]
},
"pa" : {"nd":[0, 3, 73, 330, 352, 629, 439, 212, 213, 144, 0],
"branca":[1, 21, 544, 3067, 3021, 5992, 4884, 2817, 2836, 2553, 0],
"preta":[2, 13, 686, 2952, 3068, 5759, 3961, 1668, 1300, 758, 0],
"parda":[11, 93, 3175, 16226, 15999, 30133, 19977, 8748, 6890, 4976, 2],
"amarela":[1, 1, 91, 431, 438, 809, 618, 251, 240, 177, 0],
"indigena":[0, 1, 34, 163, 190, 278, 169, 67, 29, 23, 0]
},
"ap" : {"nd":[0, 1, 11, 57, 43, 132, 78, 26, 22, 25, 0],
"branca":[0, 0, 66, 472, 414, 951, 744, 360, 277, 238, 0],
"preta":[1, 0, 81, 479, 458, 860, 504, 186, 124, 54, 0],
"parda":[0, 9, 381, 2186, 2089, 4180, 2476, 854, 610, 367, 0],
"amarela":[0, 0, 5, 49, 64, 83, 64, 21, 12, 13, 0],
"indigena":[0, 2, 11, 35, 30, 43, 19, 5, 2, 0, 0]
},
"to" : {"nd":[0, 2, 15, 75, 77, 108, 72, 47, 43, 33, 0],
"branca":[0, 1, 121, 713, 598, 1175, 1014, 575, 592, 467, 0],
"preta":[0, 11, 197, 725, 672, 1157, 675, 249, 194, 113, 0],
"parda":[4, 14, 515, 2591, 2411, 4285, 2632, 1191, 983, 646, 0],
"amarela":[0, 3, 25, 161, 172, 250, 175, 61, 50, 28, 0],
"indigena":[1, 5, 15, 37, 27, 34, 16, 7, 11, 5, 0]
},
"ma" : {"nd":[0, 3, 62, 247, 233, 444, 292, 136, 108, 98, 0],
"branca":[1, 15, 551, 2842, 2720, 5443, 4210, 2344, 2158, 1927, 1],
"preta":[2, 21, 590, 2795, 2722, 4841, 3035, 1179, 890, 589, 0],
"parda":[9, 71,	2304, 11816, 11824, 20953, 13462, 5624, 4483, 3143, 0],
"amarela":[0, 1, 63, 309, 281, 529, 315, 165, 127, 98, 0],
"indigena":[0, 1, 10, 59, 70, 112, 50, 18, 17, 9, 0]
},
"pi" : {"nd":[0, 4, 30,	170, 163, 273, 222, 118, 150, 115, 0],
"branca":[2, 13, 260, 1469, 1233, 2681, 2352, 1474, 1632, 1735, 0],
"preta":[0, 22, 415, 1582, 1553, 2559, 1802, 759, 637, 475, 0],
"parda":[5, 47, 1403, 6490, 6088, 10572, 7542, 3648, 3388, 2863, 0],
"amarela":[1, 1, 66, 259, 272, 481, 342, 164, 140, 138, 0],
"indigena":[1, 19, 55, 57, 85, 47, 25, 16, 4, 0]
},
"ce" : {"nd":[2, 9, 145, 612, 588, 933, 792, 420, 402, 335, 0],
"branca":[3, 36, 677, 3806, 3418, 7205,	7920, 5226, 5484, 4988, 0],
"preta":[2, 17, 362, 1704, 1577, 3062, 2799, 1334, 945, 598, 0],
"parda":[32, 192, 3389, 14800, 13650, 24515, 20859, 10394, 8816, 6249, 2],
"amarela":[3, 5, 73, 469, 383, 783, 676, 415, 346, 269, 0],
"indigena":[1, 5, 42, 147, 149, 247, 167, 44, 40, 14, 0]
},
"rn" : {"nd":[0, 0, 48, 121, 115, 249, 242, 122, 97, 79, 0],
"branca":[1, 18, 504, 2834, 2541, 5628, 5261, 3079, 3087, 2747, 1],
"preta":[1, 2, 203, 933, 888, 1739, 1254, 597, 380, 246, 0],
"parda":[2, 28, 880, 4613, 4261, 8821, 6649, 3189, 2586, 1848, 0],
"amarela":[2, 39, 209, 201, 362, 243, 127, 95, 66, 0],
"indigena":[0, 0, 7, 35, 36, 65, 36, 8,	9, 4, 0]
},
"pb" : {"nd":[0, 0, 56, 232, 202, 364, 320, 177, 143, 116, 0],
"branca":[2, 11, 539, 3063, 2610, 5523, 5213, 3131, 3166, 2866, 1],
"preta":[3, 9, 293, 1288, 1176, 2255, 1650, 670, 475, 295, 0],
"parda":[5, 42, 1400, 7361, 6367, 12392, 9697, 4640, 3937, 2828, 1],
"amarela":[0, 1, 60, 383, 355, 730, 502, 238, 183, 151, 0],
"indigena":[0, 1, 47, 177, 168, 212, 111, 63, 38, 20, 0]
},
"pe" : {"nd":[0, 3, 97, 449, 477, 761, 617, 332, 322, 253, 0],
"branca":[3, 28, 1027, 5356, 5236, 10548, 9694, 5796, 5785, 4655, 0],
"preta":[1, 17, 644, 2722, 2706, 4701, 3471, 1532, 1163, 709, 1],
"parda":[10, 81, 2415, 11623, 11367, 20417, 15262, 7506, 6376, 4190, 0],
"amarela":[6, 102, 570, 597, 1120, 779, 368, 314, 203, 0],
"indigena":[1, 5, 63, 311, 295, 528, 348, 113, 106, 63, 0]
},
"al" : {"nd":[1, 2, 43, 148, 151, 314, 233, 107, 113, 82, 0],
"branca":[2, 8, 273, 1456, 1398, 2895, 2659, 1477, 1554, 1315, 1],
"preta":[1, 3, 178, 970, 882, 1600, 1118, 474, 346, 210, 1],
"parda":[3, 31, 895, 4674, 4381, 8380, 6134, 2706, 2253, 1666, 0],
"amarela":[0, 2, 59, 313, 304, 557, 372, 167, 135, 85, 0],
"indigena":[0, 1, 15, 66, 68, 102, 63, 29, 16, 10, 0]
},
"se" : {"nd":[0, 4, 31, 111, 108, 195, 165, 92, 97, 99, 0],
"branca":[0, 4, 143, 821, 765, 1483, 1536, 1003, 1161, 1356, 0],
"preta":[1, 227, 961, 903, 1813, 1336, 656, 577, 434, 0],
"parda":[3, 22, 681, 3579, 3330, 6200, 5186, 2786, 2641, 2054, 1],
"amarela":[0, 0, 43, 183, 179, 309, 247, 131, 121, 95, 0],
"indigena":[0, 0, 7, 51, 48, 64, 58, 15, 16, 14, 0]
},
"ba" : {"nd":[0, 5, 172, 735, 710, 1324, 915, 470, 397, 305, 0],
"branca":[3, 35, 806, 3878, 3706, 7531, 7320, 4741, 4685, 3648, 1],
"preta":[7, 78,	2364, 9228, 8715, 15621, 10775, 4695, 3331, 1939, 0],
"parda":[8, 132, 3591, 15923, 14861, 28011, 20957, 10092, 8693, 6090, 1],
"amarela":[1, 2, 164, 798, 758, 1374, 974, 456, 362, 228, 0],
"indigena":[0, 1, 65, 250, 231, 395, 198, 73, 52, 23, 0]
},
"mg" : {"nd":[0, 2, 94, 568, 476, 944, 1102, 715, 776, 718, 0],
"branca":[2, 21, 1464, 10186, 9058, 19834, 21524, 14529, 17343, 16908, 1],
"preta":[3, 29, 1110, 5103, 4828, 9056, 6779, 3105, 2505, 1604, 0],
"parda":[4, 59, 2846, 15063, 13496, 26602, 21957, 11451, 10751, 8328, 0],
"amarela":[0, 5, 142, 752, 672, 1262, 1024, 509, 495, 334, 0],
"indigena":[0, 3, 43, 166, 148, 227, 130, 48, 36, 14, 0]
},
"es" : {"nd":[0, 1, 9, 93, 75, 144, 148, 98, 69, 95, 0],
"branca":[0, 10, 306, 1843, 1518, 3468, 3840, 2398, 2605, 2522, 1],
"preta":[1, 11, 276, 1043, 928, 1844, 1349, 551, 429, 235, 0],
"parda":[2, 18, 633, 3223, 2701, 5404, 4448, 2052, 1756, 1330, 0],
"amarela":[0, 0, 27, 95, 109, 183, 128, 64, 49, 41, 0],
"indigena":[0, 0, 16, 41, 32, 74, 44, 14, 12, 5, 0]
},
"rj" : {"nd":[0, 1, 85, 435, 426, 864, 874, 495, 399, 351, 1],
"branca":[3, 18, 980, 6759, 6849, 16030, 16746,	11046, 11568, 10743, 1],
"preta":[2, 20, 879, 4168, 4250, 8686, 6302, 2711, 2026, 1208, 0],
"parda":[0, 29, 1538, 8192, 7969, 16405, 12636, 6251, 5179, 3403, 5],
"amarela":[0, 1, 46, 319, 324, 627, 506, 257, 194, 171, 0],
"indigena":[1, 22, 79, 69, 153, 86, 33, 29, 18, 0]
},
"sp" : {"nd":[0, 4, 127, 720, 654, 1397, 1288, 730, 541, 359, 0],
"branca":[2, 44, 2956, 23085, 21500, 52858, 53603, 33883, 30700, 18880, 2],
"preta":[2, 21, 1115, 5510, 5355, 11021, 7747, 3307, 2292, 983, 0],
"parda":[3, 49, 2737, 15530, 14826, 30735, 23004, 10893, 7938, 3917, 0],
"amarela":[0, 5, 133, 952, 907, 2091, 2298, 1626, 1622,	1037, 0],
"indigena":[0, 1, 43, 210, 223, 372, 200, 89, 54, 18, 0]
},
"pr" : {"nd":[0, 47, 233, 231, 524, 407, 177, 135, 72, 0],
"branca":[0, 14, 1245, 8809, 8076, 19020, 16730, 8989, 7351, 4286, 0],
"preta":[0, 13, 199, 808, 794, 1609, 988, 426, 246, 110, 0],
"parda":[3, 13, 699, 4142, 4007, 8124, 5487, 2242, 1593, 732, 0],
"amarela":[0, 0, 39, 264, 264, 565, 540, 358, 306, 223, 0],
"indigena":[0, 0, 10, 28, 40, 60, 34, 20, 6, 2, 0]
},
"sc" : {"nd":[0, 0, 9, 124, 117, 230, 198, 114,	87, 34, 0],
"branca":[0, 6, 650, 5116, 4142, 9790, 9370, 5232, 4733, 2890, 0],
"preta":[1, 3, 96, 391, 318, 693, 444, 169, 119, 51, 0],
"parda":[1, 1, 253, 1490, 1264, 2689, 1897, 752, 583, 300, 0],
"amarela":[0, 0, 13, 74, 67, 126, 88, 41, 42, 19, 0],
"indigena":[0, 0, 4, 24, 18, 31, 27, 6, 5, 2, 0]
},
"rs" : {"nd":[0, 1, 48,	280, 246, 604, 428, 217, 165, 115, 0],
"branca":[1, 28, 1543, 11680, 9359, 22706, 19147, 10371, 9420, 7006, 0],
"preta":[2, 7, 315, 1379, 1273, 2590, 1419, 447, 289, 135, 0],
"parda":[0, 6, 384, 2271, 2047,	4485, 2924, 1224, 859, 520, 0],
"amarela":[0, 0, 10, 94, 71, 129, 99, 43, 34, 27, 0],
"indigena":[0, 0, 5, 31, 19, 44, 34, 15, 8, 1, 0]
},
"ms" : {"nd":[0, 0, 14, 70, 75, 139, 107, 50, 54, 44, 0],
"branca":[0, 10, 341, 1933, 1811, 3664, 3030, 1721, 1669, 1100, 0],
"preta":[0, 1, 96, 442, 434, 763, 419, 140, 127, 55, 0],
"parda":[11, 497, 2479, 2384, 4100, 2486, 1070,	760, 423, 0],
"amarela":[0, 1, 26, 101, 83, 205, 140, 71, 83, 76, 0],
"indigena":[0, 2, 54, 188, 168, 197, 71, 29, 14, 4, 0]
},
"mt" : {"nd":[0, 0, 35, 126, 112, 225, 150, 85, 68, 52, 0],
"branca":[0, 5, 272, 1732, 1506, 3068, 2732, 1455, 1457, 1206, 0],
"preta":[2, 7, 251, 941, 983, 1463, 940, 378, 295, 163, 0],
"parda":[1, 20, 799, 3366, 3319, 5636, 3758, 1632, 1329, 872, 0],
"amarela":[0, 0, 38, 145, 138, 234, 174, 90, 78, 51, 0],
"indigena":[0, 4, 14, 45, 42, 69, 25, 9, 8, 4, 0]
},
"go" : {"nd":[0, 3, 79, 305, 333, 592, 474, 220, 290, 270, 0],
"branca":[1, 17, 627, 3193, 3246, 6593, 6116, 4091, 4506, 4255, 0],
"preta":[0, 18, 424, 1607, 1643, 2791, 1779, 808, 687, 379, 0],
"parda":[4, 48, 1457, 6529, 6518, 11770, 8269, 4070, 3566, 2591, 0],
"amarela":[0, 3, 111, 505, 581, 904, 655, 288, 296, 236, 0],
"indigena":[0, 1, 13, 56, 71, 87, 51, 19, 11, 2, 0]
},
"df" : {"nd":[0, 1, 29, 158, 138, 301, 286, 156, 147, 118, 0],
"branca":[0, 6, 247, 1730, 1497, 4162, 4327, 2470, 2394, 1896, 2],
"preta":[0, 5, 224, 1144, 1060, 2265, 1565, 645, 442, 268, 0],
"parda":[1, 28, 685, 3490, 3202, 6755, 5210, 2324, 1861, 1193, 0],
"amarela":[0, 0, 31, 183, 206, 400, 289, 138, 90, 79, 0],
"indigena":[0, 0, 12, 33, 31, 57, 31, 18, 3, 4, 0]
}
}

/* Cria a função par aleatorizar as frases mostradas no HTML */
function aleat(fatos){
  let max = fatos.length
  let min = 0
  let indice = Math.floor(Math.random()* max)

  return indice
}

/* Seleciona a ul na qual seram mostradas as frases */
let listaFatos = document.querySelector('.carrossel')

/* Cria loop para que as frases mostradas não apareçam repetidas */
for ( let i = 0; i < 3; i++ ) {
  let indice = aleat(fatos)
  listaFatos.innerHTML = listaFatos.innerHTML + fatos [indice]
  fatos.splice(indice, 1)
}

/* Cria as variáveis para selecionar os elementos de entrada e saída das informações de média de notas */
let seletorMedia = document.getElementById('media')
let mostrarMedia = document.querySelector('output.mostraMedia')

/* Cria função que mostra a informação escolhida no HTML */
function mostra(){
  let localMedia = seletorMedia.value
  let media = mediaUf [localMedia]
  mostrarMedia.textContent = media
}

/* Cria o evento que escuta a troca de estado no select */
seletorMedia.addEventListener('change', mostra)

/* Cria as variáveis para selecionar os elementos de entrada e saída das informações da distribuição das notas */
let seletorProfic = document.getElementById('proficiencia')
let mostrarProfic = document.querySelector('.barras > div')

/* Cria função para pegar os valores da propriedade javascript e mostrá-los em um histograma na página HTML */
function mostraProfic(){
  let localProfic = seletorProfic.value
  let listaProfic = profic [localProfic]
  let graphProfic = document.querySelectorAll('.barras > div')
  
  let indice = 0

  /* Cria divisor para padronizar histograma */
  let divisor = 3000

  /* Cria condição para que as barras dos estados não fiquem pequenas no histograma */
  if (localProfic != 'br'){
    divisor = 400
  }

  /* Loop para alterar o tamanho das barras de acordo com o local escolhido */
  for (let numero of listaProfic){

    /* Cria variável para criar a altura padronizada das barras no histograma */
    let altura = numero / divisor

    /* Condição para que as barras do histograma tenham um tamanho mínimo */
    if(altura < 1){
      altura = 4
    }

    /* Muda o CSS para que as barras mudem de tamanho */
    graphProfic[indice].style.height = altura + 'px'
        
    /* Muda o texto do HTML para inserir valores dentro das barras do histograma */
    graphProfic[indice].innerHTML = '<span>' + numero + '<span>'
    
    indice++
  }
}

/* Cria o evento que escuta a troca de estado no select */
seletorProfic.addEventListener('change', mostraProfic)

let seletorFem = document.getElementById('sexoPart')
let mostrarFem = document.querySelectorAll('.barrasFem > div')

function mostraFem(){

  let localFem = seletorFem.value
  let listaFem = fem[localFem]
  let graphFem = document.querySelectorAll('.barrasFem > div')

  let indice = 0

  /* Cria divisor para padronizar histograma */
  let divisor = 3000

  /* Cria condição para que as barras dos estados não fiquem pequenas no histograma */
  if (localFem != 'br'){
    divisor = 400
  }

  /* Loop para alterar o tamanho das barras de acordo com o local escolhido */
  for (let numero of listaFem){

    /* Cria variável para criar a altura padronizada das barras no histograma */
    let altura = numero / divisor

    /* Condição para que as barras do histograma tenham um tamanho mínimo */
    if(altura < 1){
      altura = 4
    }

    /* Muda o CSS para que as barras mudem de tamanho */
    graphFem[indice].style.height = altura + 'px'
        
    /* Muda o texto do HTML para inserir valores dentro das barras do histograma */
    graphFem[indice].innerHTML = '<span>' + numero + '<span>'
    
    indice++
  }
}

seletorFem.addEventListener('change', mostraFem)

let seletorMasc = document.getElementById('sexoPart')
let mostrarMasc = document.querySelectorAll('.barrasMasc > div')

function mostraMasc(){

  let localMasc = seletorMasc.value
  let listaMasc = masc[localMasc]
  let graphMasc = document.querySelectorAll('.barrasMasc > div')

  let indice = 0

  /* Cria divisor para padronizar histograma */
  let divisor = 3000

  /* Cria condição para que as barras dos estados não fiquem pequenas no histograma */
  if (localMasc != 'br'){
    divisor = 400
  }

  /* Loop para alterar o tamanho das barras de acordo com o local escolhido */
  for (let numero of listaMasc){

    /* Cria variável para criar a altura padronizada das barras no histograma */
    let altura = numero / divisor

    /* Condição para que as barras do histograma tenham um tamanho mínimo */
    if(altura < 1){
      altura = 4
    }

    /* Muda o CSS para que as barras mudem de tamanho */
    graphMasc[indice].style.height = altura + 'px'
        
    /* Muda o texto do HTML para inserir valores dentro das barras do histograma */
    graphMasc[indice].innerHTML = '<span>' + numero + '<span>'
    
    indice++
  }
}

seletorMasc.addEventListener('change', mostraMasc)
