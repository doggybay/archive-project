
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pictures').del()
    .then(function () {
      // Inserts seed entries
      return knex('pictures').insert([
  {
    "archive_item_id": 133,
    "pic": "https://picsum.photos/200/300?random=602"
  },
  {
    "archive_item_id": 9,
    "pic": "https://picsum.photos/200/300?random=1366"
  },
  {
    "archive_item_id": 137,
    "pic": "https://picsum.photos/200/300?random=1073"
  },
  {
    "archive_item_id": 45,
    "pic": "https://picsum.photos/200/300?random=1750"
  },
  {
    "archive_item_id": 3,
    "pic": "https://picsum.photos/200/300?random=1011"
  },
  {
    "archive_item_id": 109,
    "pic": "https://picsum.photos/200/300?random=449"
  },
  {
    "archive_item_id": 25,
    "pic": "https://picsum.photos/200/300?random=751"
  },
  {
    "archive_item_id": 18,
    "pic": "https://picsum.photos/200/300?random=1739"
  },
  {
    "archive_item_id": 177,
    "pic": "https://picsum.photos/200/300?random=1195"
  },
  {
    "archive_item_id": 62,
    "pic": "https://picsum.photos/200/300?random=447"
  },
  {
    "archive_item_id": 129,
    "pic": "https://picsum.photos/200/300?random=1719"
  },
  {
    "archive_item_id": 5,
    "pic": "https://picsum.photos/200/300?random=1381"
  },
  {
    "archive_item_id": 126,
    "pic": "https://picsum.photos/200/300?random=1045"
  },
  {
    "archive_item_id": 199,
    "pic": "https://picsum.photos/200/300?random=1086"
  },
  {
    "archive_item_id": 187,
    "pic": "https://picsum.photos/200/300?random=544"
  },
  {
    "archive_item_id": 22,
    "pic": "https://picsum.photos/200/300?random=351"
  },
  {
    "archive_item_id": 26,
    "pic": "https://picsum.photos/200/300?random=25"
  },
  {
    "archive_item_id": 33,
    "pic": "https://picsum.photos/200/300?random=68"
  },
  {
    "archive_item_id": 17,
    "pic": "https://picsum.photos/200/300?random=1483"
  },
  {
    "archive_item_id": 56,
    "pic": "https://picsum.photos/200/300?random=1523"
  },
  {
    "archive_item_id": 46,
    "pic": "https://picsum.photos/200/300?random=154"
  },
  {
    "archive_item_id": 11,
    "pic": "https://picsum.photos/200/300?random=1602"
  },
  {
    "archive_item_id": 3,
    "pic": "https://picsum.photos/200/300?random=1874"
  },
  {
    "archive_item_id": 42,
    "pic": "https://picsum.photos/200/300?random=999"
  },
  {
    "archive_item_id": 57,
    "pic": "https://picsum.photos/200/300?random=360"
  },
  {
    "archive_item_id": 154,
    "pic": "https://picsum.photos/200/300?random=1348"
  },
  {
    "archive_item_id": 7,
    "pic": "https://picsum.photos/200/300?random=1203"
  },
  {
    "archive_item_id": 184,
    "pic": "https://picsum.photos/200/300?random=1712"
  },
  {
    "archive_item_id": 162,
    "pic": "https://picsum.photos/200/300?random=1243"
  },
  {
    "archive_item_id": 62,
    "pic": "https://picsum.photos/200/300?random=1869"
  },
  {
    "archive_item_id": 46,
    "pic": "https://picsum.photos/200/300?random=529"
  },
  {
    "archive_item_id": 200,
    "pic": "https://picsum.photos/200/300?random=243"
  },
  {
    "archive_item_id": 139,
    "pic": "https://picsum.photos/200/300?random=344"
  },
  {
    "archive_item_id": 115,
    "pic": "https://picsum.photos/200/300?random=71"
  },
  {
    "archive_item_id": 2,
    "pic": "https://picsum.photos/200/300?random=922"
  },
  {
    "archive_item_id": 163,
    "pic": "https://picsum.photos/200/300?random=1982"
  },
  {
    "archive_item_id": 41,
    "pic": "https://picsum.photos/200/300?random=489"
  },
  {
    "archive_item_id": 199,
    "pic": "https://picsum.photos/200/300?random=348"
  },
  {
    "archive_item_id": 89,
    "pic": "https://picsum.photos/200/300?random=308"
  },
  {
    "archive_item_id": 127,
    "pic": "https://picsum.photos/200/300?random=908"
  },
  {
    "archive_item_id": 154,
    "pic": "https://picsum.photos/200/300?random=846"
  },
  {
    "archive_item_id": 75,
    "pic": "https://picsum.photos/200/300?random=1282"
  },
  {
    "archive_item_id": 154,
    "pic": "https://picsum.photos/200/300?random=546"
  },
  {
    "archive_item_id": 151,
    "pic": "https://picsum.photos/200/300?random=990"
  },
  {
    "archive_item_id": 12,
    "pic": "https://picsum.photos/200/300?random=1284"
  },
  {
    "archive_item_id": 165,
    "pic": "https://picsum.photos/200/300?random=27"
  },
  {
    "archive_item_id": 95,
    "pic": "https://picsum.photos/200/300?random=430"
  },
  {
    "archive_item_id": 74,
    "pic": "https://picsum.photos/200/300?random=603"
  },
  {
    "archive_item_id": 161,
    "pic": "https://picsum.photos/200/300?random=1695"
  },
  {
    "archive_item_id": 139,
    "pic": "https://picsum.photos/200/300?random=306"
  },
  {
    "archive_item_id": 70,
    "pic": "https://picsum.photos/200/300?random=1139"
  },
  {
    "archive_item_id": 14,
    "pic": "https://picsum.photos/200/300?random=444"
  },
  {
    "archive_item_id": 153,
    "pic": "https://picsum.photos/200/300?random=1174"
  },
  {
    "archive_item_id": 67,
    "pic": "https://picsum.photos/200/300?random=350"
  },
  {
    "archive_item_id": 17,
    "pic": "https://picsum.photos/200/300?random=591"
  },
  {
    "archive_item_id": 61,
    "pic": "https://picsum.photos/200/300?random=1409"
  },
  {
    "archive_item_id": 127,
    "pic": "https://picsum.photos/200/300?random=1671"
  },
  {
    "archive_item_id": 92,
    "pic": "https://picsum.photos/200/300?random=371"
  },
  {
    "archive_item_id": 55,
    "pic": "https://picsum.photos/200/300?random=619"
  },
  {
    "archive_item_id": 163,
    "pic": "https://picsum.photos/200/300?random=1317"
  },
  {
    "archive_item_id": 114,
    "pic": "https://picsum.photos/200/300?random=649"
  },
  {
    "archive_item_id": 55,
    "pic": "https://picsum.photos/200/300?random=1548"
  },
  {
    "archive_item_id": 82,
    "pic": "https://picsum.photos/200/300?random=594"
  },
  {
    "archive_item_id": 19,
    "pic": "https://picsum.photos/200/300?random=841"
  },
  {
    "archive_item_id": 23,
    "pic": "https://picsum.photos/200/300?random=1825"
  },
  {
    "archive_item_id": 56,
    "pic": "https://picsum.photos/200/300?random=1756"
  },
  {
    "archive_item_id": 120,
    "pic": "https://picsum.photos/200/300?random=1694"
  },
  {
    "archive_item_id": 140,
    "pic": "https://picsum.photos/200/300?random=1449"
  },
  {
    "archive_item_id": 119,
    "pic": "https://picsum.photos/200/300?random=793"
  },
  {
    "archive_item_id": 133,
    "pic": "https://picsum.photos/200/300?random=294"
  },
  {
    "archive_item_id": 199,
    "pic": "https://picsum.photos/200/300?random=960"
  },
  {
    "archive_item_id": 89,
    "pic": "https://picsum.photos/200/300?random=79"
  },
  {
    "archive_item_id": 63,
    "pic": "https://picsum.photos/200/300?random=824"
  },
  {
    "archive_item_id": 135,
    "pic": "https://picsum.photos/200/300?random=1023"
  },
  {
    "archive_item_id": 60,
    "pic": "https://picsum.photos/200/300?random=20"
  },
  {
    "archive_item_id": 172,
    "pic": "https://picsum.photos/200/300?random=671"
  },
  {
    "archive_item_id": 40,
    "pic": "https://picsum.photos/200/300?random=1904"
  },
  {
    "archive_item_id": 160,
    "pic": "https://picsum.photos/200/300?random=1336"
  },
  {
    "archive_item_id": 97,
    "pic": "https://picsum.photos/200/300?random=904"
  },
  {
    "archive_item_id": 47,
    "pic": "https://picsum.photos/200/300?random=644"
  },
  {
    "archive_item_id": 1,
    "pic": "https://picsum.photos/200/300?random=472"
  },
  {
    "archive_item_id": 41,
    "pic": "https://picsum.photos/200/300?random=810"
  },
  {
    "archive_item_id": 102,
    "pic": "https://picsum.photos/200/300?random=1145"
  },
  {
    "archive_item_id": 86,
    "pic": "https://picsum.photos/200/300?random=626"
  },
  {
    "archive_item_id": 30,
    "pic": "https://picsum.photos/200/300?random=1760"
  },
  {
    "archive_item_id": 64,
    "pic": "https://picsum.photos/200/300?random=212"
  },
  {
    "archive_item_id": 49,
    "pic": "https://picsum.photos/200/300?random=231"
  },
  {
    "archive_item_id": 14,
    "pic": "https://picsum.photos/200/300?random=606"
  },
  {
    "archive_item_id": 11,
    "pic": "https://picsum.photos/200/300?random=1907"
  },
  {
    "archive_item_id": 35,
    "pic": "https://picsum.photos/200/300?random=509"
  },
  {
    "archive_item_id": 24,
    "pic": "https://picsum.photos/200/300?random=1947"
  },
  {
    "archive_item_id": 173,
    "pic": "https://picsum.photos/200/300?random=1060"
  },
  {
    "archive_item_id": 15,
    "pic": "https://picsum.photos/200/300?random=1743"
  },
  {
    "archive_item_id": 86,
    "pic": "https://picsum.photos/200/300?random=1919"
  },
  {
    "archive_item_id": 21,
    "pic": "https://picsum.photos/200/300?random=1941"
  },
  {
    "archive_item_id": 18,
    "pic": "https://picsum.photos/200/300?random=1426"
  },
  {
    "archive_item_id": 13,
    "pic": "https://picsum.photos/200/300?random=972"
  },
  {
    "archive_item_id": 34,
    "pic": "https://picsum.photos/200/300?random=56"
  },
  {
    "archive_item_id": 159,
    "pic": "https://picsum.photos/200/300?random=1234"
  },
  {
    "archive_item_id": 74,
    "pic": "https://picsum.photos/200/300?random=595"
  },
  {
    "archive_item_id": 152,
    "pic": "https://picsum.photos/200/300?random=125"
  },
  {
    "archive_item_id": 154,
    "pic": "https://picsum.photos/200/300?random=1130"
  },
  {
    "archive_item_id": 60,
    "pic": "https://picsum.photos/200/300?random=180"
  },
  {
    "archive_item_id": 153,
    "pic": "https://picsum.photos/200/300?random=1050"
  },
  {
    "archive_item_id": 19,
    "pic": "https://picsum.photos/200/300?random=1273"
  },
  {
    "archive_item_id": 141,
    "pic": "https://picsum.photos/200/300?random=418"
  },
  {
    "archive_item_id": 61,
    "pic": "https://picsum.photos/200/300?random=1927"
  },
  {
    "archive_item_id": 181,
    "pic": "https://picsum.photos/200/300?random=1120"
  },
  {
    "archive_item_id": 159,
    "pic": "https://picsum.photos/200/300?random=1144"
  },
  {
    "archive_item_id": 35,
    "pic": "https://picsum.photos/200/300?random=349"
  },
  {
    "archive_item_id": 137,
    "pic": "https://picsum.photos/200/300?random=1190"
  },
  {
    "archive_item_id": 28,
    "pic": "https://picsum.photos/200/300?random=1231"
  },
  {
    "archive_item_id": 123,
    "pic": "https://picsum.photos/200/300?random=741"
  },
  {
    "archive_item_id": 109,
    "pic": "https://picsum.photos/200/300?random=698"
  },
  {
    "archive_item_id": 36,
    "pic": "https://picsum.photos/200/300?random=1170"
  },
  {
    "archive_item_id": 93,
    "pic": "https://picsum.photos/200/300?random=35"
  },
  {
    "archive_item_id": 45,
    "pic": "https://picsum.photos/200/300?random=121"
  },
  {
    "archive_item_id": 4,
    "pic": "https://picsum.photos/200/300?random=1181"
  },
  {
    "archive_item_id": 32,
    "pic": "https://picsum.photos/200/300?random=1592"
  },
  {
    "archive_item_id": 147,
    "pic": "https://picsum.photos/200/300?random=1110"
  },
  {
    "archive_item_id": 54,
    "pic": "https://picsum.photos/200/300?random=1757"
  },
  {
    "archive_item_id": 75,
    "pic": "https://picsum.photos/200/300?random=1013"
  },
  {
    "archive_item_id": 95,
    "pic": "https://picsum.photos/200/300?random=987"
  },
  {
    "archive_item_id": 23,
    "pic": "https://picsum.photos/200/300?random=1953"
  },
  {
    "archive_item_id": 74,
    "pic": "https://picsum.photos/200/300?random=86"
  },
  {
    "archive_item_id": 26,
    "pic": "https://picsum.photos/200/300?random=446"
  },
  {
    "archive_item_id": 125,
    "pic": "https://picsum.photos/200/300?random=1147"
  },
  {
    "archive_item_id": 62,
    "pic": "https://picsum.photos/200/300?random=901"
  },
  {
    "archive_item_id": 122,
    "pic": "https://picsum.photos/200/300?random=1502"
  },
  {
    "archive_item_id": 119,
    "pic": "https://picsum.photos/200/300?random=588"
  },
  {
    "archive_item_id": 182,
    "pic": "https://picsum.photos/200/300?random=1484"
  },
  {
    "archive_item_id": 90,
    "pic": "https://picsum.photos/200/300?random=229"
  },
  {
    "archive_item_id": 71,
    "pic": "https://picsum.photos/200/300?random=1893"
  },
  {
    "archive_item_id": 76,
    "pic": "https://picsum.photos/200/300?random=1412"
  },
  {
    "archive_item_id": 9,
    "pic": "https://picsum.photos/200/300?random=283"
  },
  {
    "archive_item_id": 90,
    "pic": "https://picsum.photos/200/300?random=230"
  },
  {
    "archive_item_id": 81,
    "pic": "https://picsum.photos/200/300?random=844"
  },
  {
    "archive_item_id": 5,
    "pic": "https://picsum.photos/200/300?random=1376"
  },
  {
    "archive_item_id": 181,
    "pic": "https://picsum.photos/200/300?random=134"
  },
  {
    "archive_item_id": 107,
    "pic": "https://picsum.photos/200/300?random=1217"
  },
  {
    "archive_item_id": 20,
    "pic": "https://picsum.photos/200/300?random=1702"
  },
  {
    "archive_item_id": 32,
    "pic": "https://picsum.photos/200/300?random=1638"
  },
  {
    "archive_item_id": 70,
    "pic": "https://picsum.photos/200/300?random=55"
  },
  {
    "archive_item_id": 15,
    "pic": "https://picsum.photos/200/300?random=1384"
  },
  {
    "archive_item_id": 159,
    "pic": "https://picsum.photos/200/300?random=1972"
  },
  {
    "archive_item_id": 192,
    "pic": "https://picsum.photos/200/300?random=1786"
  },
  {
    "archive_item_id": 104,
    "pic": "https://picsum.photos/200/300?random=213"
  },
  {
    "archive_item_id": 83,
    "pic": "https://picsum.photos/200/300?random=462"
  },
  {
    "archive_item_id": 185,
    "pic": "https://picsum.photos/200/300?random=1555"
  },
  {
    "archive_item_id": 38,
    "pic": "https://picsum.photos/200/300?random=428"
  },
  {
    "archive_item_id": 49,
    "pic": "https://picsum.photos/200/300?random=677"
  },
  {
    "archive_item_id": 184,
    "pic": "https://picsum.photos/200/300?random=653"
  },
  {
    "archive_item_id": 81,
    "pic": "https://picsum.photos/200/300?random=427"
  },
  {
    "archive_item_id": 87,
    "pic": "https://picsum.photos/200/300?random=1176"
  },
  {
    "archive_item_id": 165,
    "pic": "https://picsum.photos/200/300?random=1015"
  },
  {
    "archive_item_id": 35,
    "pic": "https://picsum.photos/200/300?random=884"
  },
  {
    "archive_item_id": 52,
    "pic": "https://picsum.photos/200/300?random=829"
  },
  {
    "archive_item_id": 148,
    "pic": "https://picsum.photos/200/300?random=1323"
  },
  {
    "archive_item_id": 68,
    "pic": "https://picsum.photos/200/300?random=436"
  },
  {
    "archive_item_id": 131,
    "pic": "https://picsum.photos/200/300?random=1506"
  },
  {
    "archive_item_id": 2,
    "pic": "https://picsum.photos/200/300?random=574"
  },
  {
    "archive_item_id": 184,
    "pic": "https://picsum.photos/200/300?random=1950"
  },
  {
    "archive_item_id": 133,
    "pic": "https://picsum.photos/200/300?random=1185"
  },
  {
    "archive_item_id": 58,
    "pic": "https://picsum.photos/200/300?random=1404"
  },
  {
    "archive_item_id": 147,
    "pic": "https://picsum.photos/200/300?random=81"
  },
  {
    "archive_item_id": 103,
    "pic": "https://picsum.photos/200/300?random=985"
  },
  {
    "archive_item_id": 191,
    "pic": "https://picsum.photos/200/300?random=413"
  },
  {
    "archive_item_id": 117,
    "pic": "https://picsum.photos/200/300?random=1956"
  },
  {
    "archive_item_id": 31,
    "pic": "https://picsum.photos/200/300?random=866"
  },
  {
    "archive_item_id": 73,
    "pic": "https://picsum.photos/200/300?random=370"
  },
  {
    "archive_item_id": 70,
    "pic": "https://picsum.photos/200/300?random=225"
  },
  {
    "archive_item_id": 2,
    "pic": "https://picsum.photos/200/300?random=1439"
  },
  {
    "archive_item_id": 75,
    "pic": "https://picsum.photos/200/300?random=1128"
  },
  {
    "archive_item_id": 102,
    "pic": "https://picsum.photos/200/300?random=732"
  },
  {
    "archive_item_id": 141,
    "pic": "https://picsum.photos/200/300?random=786"
  },
  {
    "archive_item_id": 55,
    "pic": "https://picsum.photos/200/300?random=163"
  },
  {
    "archive_item_id": 31,
    "pic": "https://picsum.photos/200/300?random=778"
  },
  {
    "archive_item_id": 70,
    "pic": "https://picsum.photos/200/300?random=1611"
  },
  {
    "archive_item_id": 104,
    "pic": "https://picsum.photos/200/300?random=1369"
  },
  {
    "archive_item_id": 147,
    "pic": "https://picsum.photos/200/300?random=254"
  },
  {
    "archive_item_id": 119,
    "pic": "https://picsum.photos/200/300?random=783"
  },
  {
    "archive_item_id": 166,
    "pic": "https://picsum.photos/200/300?random=1616"
  },
  {
    "archive_item_id": 51,
    "pic": "https://picsum.photos/200/300?random=299"
  },
  {
    "archive_item_id": 137,
    "pic": "https://picsum.photos/200/300?random=1306"
  },
  {
    "archive_item_id": 184,
    "pic": "https://picsum.photos/200/300?random=700"
  },
  {
    "archive_item_id": 150,
    "pic": "https://picsum.photos/200/300?random=1152"
  },
  {
    "archive_item_id": 137,
    "pic": "https://picsum.photos/200/300?random=1573"
  },
  {
    "archive_item_id": 174,
    "pic": "https://picsum.photos/200/300?random=1297"
  },
  {
    "archive_item_id": 137,
    "pic": "https://picsum.photos/200/300?random=705"
  },
  {
    "archive_item_id": 37,
    "pic": "https://picsum.photos/200/300?random=926"
  },
  {
    "archive_item_id": 139,
    "pic": "https://picsum.photos/200/300?random=1676"
  },
  {
    "archive_item_id": 52,
    "pic": "https://picsum.photos/200/300?random=410"
  },
  {
    "archive_item_id": 27,
    "pic": "https://picsum.photos/200/300?random=1682"
  },
  {
    "archive_item_id": 70,
    "pic": "https://picsum.photos/200/300?random=1331"
  },
  {
    "archive_item_id": 62,
    "pic": "https://picsum.photos/200/300?random=74"
  },
  {
    "archive_item_id": 61,
    "pic": "https://picsum.photos/200/300?random=1534"
  },
  {
    "archive_item_id": 15,
    "pic": "https://picsum.photos/200/300?random=10"
  },
  {
    "archive_item_id": 12,
    "pic": "https://picsum.photos/200/300?random=38"
  },
  {
    "archive_item_id": 53,
    "pic": "https://picsum.photos/200/300?random=1051"
  },
  {
    "archive_item_id": 49,
    "pic": "https://picsum.photos/200/300?random=1856"
  }
]);
    });
};
