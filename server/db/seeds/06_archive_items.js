
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('archive_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('archive_items').insert([
  {
    "user_id": 1,
    "type_id": 5,
    "make": "proident",
    "model": "labore",
    "serial_num": "tempor101D",
    "price": 6277,
    "description": "Nisi aliquip enim Lorem irure cupidatat in reprehenderit. Velit elit pariatur et Lorem cillum aliquip enim consequat velit anim aliqua laborum sunt. Ex officia fugiat velit non pariatur amet ut irure est dolor deserunt non reprehenderit. Esse est velit ut occaecat sunt minim quis non duis duis ut. Enim exercitation nostrud reprehenderit ullamco adipisicing. Ad sunt do sit nostrud.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 3,
    "make": "ipsum",
    "model": "nulla",
    "serial_num": "adipisicing43g",
    "price": 4979,
    "description": "Dolor irure occaecat ad cupidatat pariatur dolor in. Et cupidatat fugiat id elit adipisicing officia laborum dolor qui. Quis ullamco et sit proident sit in consequat ad Lorem cupidatat consectetur. Labore officia Lorem fugiat occaecat. Ex deserunt aute id exercitation ex incididunt ipsum eu aute. Ad elit ea labore officia aliqua occaecat quis labore. Ad sint duis reprehenderit irure.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 20,
    "make": "magna",
    "model": "voluptate",
    "serial_num": "nisi262K",
    "price": 2205,
    "description": "Reprehenderit amet id pariatur exercitation. Nostrud sit ex ut veniam aliquip irure irure amet ex. Mollit deserunt qui ipsum eu. Voluptate exercitation qui ex duis aute enim ullamco.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 21,
    "make": "consectetur",
    "model": "pariatur",
    "serial_num": "pariatur207J",
    "price": 1774,
    "description": "Amet aliqua dolore excepteur ea dolor ad officia aute duis excepteur officia sit consectetur. In eiusmod deserunt sunt occaecat ut duis est fugiat excepteur ea est. Lorem magna cupidatat consectetur nisi magna. Culpa culpa sunt incididunt nostrud ex dolore duis qui.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 18,
    "make": "officia",
    "model": "duis",
    "serial_num": "reprehenderit12h",
    "price": 7579,
    "description": "Amet dolor reprehenderit dolor do est commodo Lorem laborum dolore nostrud sint minim anim excepteur. Aute velit velit cillum laboris Lorem anim cupidatat excepteur id. Qui ex non dolor adipisicing aliquip anim elit.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 6,
    "make": "amet",
    "model": "mollit",
    "serial_num": "adipisicing168C",
    "price": 2759,
    "description": "Cillum excepteur laboris anim quis irure labore officia consequat. Enim proident qui elit sunt. Labore consequat velit elit incididunt do esse ex exercitation laborum. Id mollit et enim eu duis non. Ea exercitation anim Lorem qui proident enim ipsum occaecat eiusmod. Eu est commodo officia consectetur dolor velit aliqua ad proident et. Et magna occaecat exercitation officia ut consectetur ipsum proident deserunt Lorem labore deserunt culpa enim.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 12,
    "make": "ut",
    "model": "ullamco",
    "serial_num": "adipisicing128h",
    "price": 8165,
    "description": "Sint magna labore id qui ad non qui cillum nostrud tempor officia duis aliqua. Magna reprehenderit quis do velit elit cillum officia velit. Officia eiusmod do in occaecat deserunt culpa.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 10,
    "make": "excepteur",
    "model": "nostrud",
    "serial_num": "dolor188e",
    "price": 3781,
    "description": "Qui mollit excepteur deserunt culpa ea esse voluptate excepteur esse ullamco veniam. Aliqua mollit ex sunt est dolore dolor ex elit fugiat. Voluptate id id sunt magna consectetur ea consectetur tempor. Ex eiusmod quis dolore consequat non deserunt aliqua occaecat eiusmod dolore sint duis. Consectetur ad eiusmod amet velit aliqua elit nulla incididunt dolor. Ullamco esse nulla commodo irure et deserunt. Sunt dolore id pariatur labore dolore fugiat nulla nisi.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 12,
    "make": "enim",
    "model": "mollit",
    "serial_num": "consequat91i",
    "price": 9063,
    "description": "Voluptate incididunt aute incididunt sit sint do pariatur cupidatat. Est magna magna cillum esse commodo cupidatat ipsum in nulla et. Nostrud non eu do adipisicing pariatur adipisicing laboris incididunt consectetur voluptate esse aliquip laboris elit. Elit esse magna ea velit sint ullamco deserunt elit enim. Officia et elit eiusmod Lorem reprehenderit aute quis anim dolore aute aliquip. Eiusmod magna proident laboris minim ullamco reprehenderit reprehenderit exercitation aute ut nulla Lorem.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 5,
    "make": "aute",
    "model": "eiusmod",
    "serial_num": "adipisicing104A",
    "price": 8275,
    "description": "Magna do sunt mollit laborum mollit labore do voluptate consequat ut ea cupidatat. Reprehenderit sint laborum duis aliqua esse pariatur est consequat dolore qui qui. Ex deserunt ut adipisicing cupidatat. Elit dolore incididunt aliquip enim cillum sit deserunt eiusmod nulla proident aliqua deserunt.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 19,
    "make": "culpa",
    "model": "reprehenderit",
    "serial_num": "pariatur192F",
    "price": 5020,
    "description": "Incididunt consectetur fugiat esse id et irure laboris. Aliqua fugiat in commodo anim esse anim mollit. Ipsum labore dolore enim tempor exercitation ullamco dolore. Sunt et sint pariatur id aliqua laborum id laboris amet ad duis consequat.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 6,
    "make": "velit",
    "model": "occaecat",
    "serial_num": "dolore124h",
    "price": 713,
    "description": "Labore anim mollit occaecat anim cupidatat proident dolore aliquip sint cupidatat. Aliquip occaecat est officia esse proident id sit incididunt minim commodo deserunt adipisicing. Sunt eu commodo aliquip aute elit mollit. Aute qui ea tempor laborum nisi incididunt Lorem officia aliquip tempor fugiat. Fugiat voluptate culpa quis aute aliquip ad proident quis sunt exercitation. Magna reprehenderit minim reprehenderit cupidatat laboris reprehenderit nostrud.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 16,
    "make": "magna",
    "model": "pariatur",
    "serial_num": "sit75B",
    "price": 2997,
    "description": "Laboris voluptate adipisicing dolor est fugiat culpa cupidatat amet in deserunt est duis. Sint quis amet aliqua aliqua nulla velit enim do eiusmod. Laborum officia nulla eu aliqua ad do deserunt sunt ullamco nostrud duis. Consequat incididunt incididunt occaecat excepteur qui incididunt do deserunt dolor in do. Nostrud magna eu mollit pariatur cupidatat consectetur.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 12,
    "make": "incididunt",
    "model": "laboris",
    "serial_num": "tempor90e",
    "price": 3354,
    "description": "Labore ipsum magna ex dolore aute fugiat fugiat qui irure nulla duis minim nostrud id. Nostrud consequat incididunt laborum magna ad ea duis dolore reprehenderit velit nostrud. Est duis sit sit mollit laborum do aliqua minim fugiat anim esse magna. Magna nostrud non esse ad in id et sit adipisicing enim proident adipisicing. Dolore Lorem consectetur id ipsum. Ad exercitation tempor reprehenderit irure et duis do enim. Aliqua minim veniam laboris exercitation enim dolor.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 9,
    "make": "eiusmod",
    "model": "anim",
    "serial_num": "elit256h",
    "price": 6125,
    "description": "Labore sint pariatur deserunt elit. Labore deserunt ut adipisicing ullamco tempor proident aute do elit magna nulla ad labore. Deserunt esse quis veniam enim amet Lorem adipisicing officia Lorem sint. Cupidatat labore ad sit esse amet anim commodo irure commodo excepteur eiusmod. Ex dolor est cupidatat est fugiat.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 16,
    "make": "fugiat",
    "model": "reprehenderit",
    "serial_num": "exercitation247K",
    "price": 1988,
    "description": "Cupidatat adipisicing dolor quis ullamco consectetur ut. Laborum esse voluptate qui magna officia eu quis nisi. Nulla duis ut reprehenderit nostrud excepteur aliqua enim dolor. Laboris qui sunt dolor exercitation et dolor reprehenderit ipsum consequat nostrud. Amet sint ullamco aliquip dolor aliquip. Aliquip sint tempor deserunt reprehenderit proident ad.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 20,
    "make": "sit",
    "model": "adipisicing",
    "serial_num": "fugiat186C",
    "price": 4507,
    "description": "Et officia cillum reprehenderit commodo nulla. Ullamco eiusmod elit fugiat fugiat consectetur esse nisi id fugiat ex sunt dolor culpa. Do consectetur amet eiusmod laboris amet deserunt cupidatat amet in proident. Aute tempor anim occaecat fugiat ex ea do incididunt laborum adipisicing mollit. Est dolor eiusmod laboris aliquip occaecat culpa laboris id. Aliqua eu veniam deserunt in excepteur ex exercitation incididunt Lorem laboris occaecat.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 4,
    "make": "ut",
    "model": "qui",
    "serial_num": "occaecat147h",
    "price": 2483,
    "description": "Cillum occaecat tempor consequat Lorem et. Aliquip eiusmod fugiat adipisicing do tempor laboris aliquip ipsum velit. Ipsum esse velit irure tempor minim ut laborum nostrud ut commodo. Mollit qui anim tempor eu dolore occaecat culpa. Occaecat minim ex laboris aliquip laboris culpa nulla fugiat aliquip consectetur irure exercitation ea mollit. Est elit minim esse non eu Lorem velit. In dolore quis id veniam.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 3,
    "make": "enim",
    "model": "deserunt",
    "serial_num": "ipsum93F",
    "price": 4433,
    "description": "Labore et qui adipisicing sit enim consequat laborum aliqua fugiat consequat est magna. Pariatur duis quis excepteur Lorem irure proident fugiat ipsum Lorem eiusmod. Fugiat nisi velit quis nulla consectetur. Minim commodo aliqua commodo cupidatat ex amet duis culpa pariatur. Laborum aliquip exercitation nisi occaecat non officia aute nostrud fugiat est fugiat commodo. Tempor non do aute officia sunt incididunt reprehenderit.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 18,
    "make": "quis",
    "model": "occaecat",
    "serial_num": "nostrud265g",
    "price": 3687,
    "description": "Veniam pariatur duis laboris enim veniam. Reprehenderit in culpa nulla cillum eu exercitation velit irure. Qui dolor officia labore et magna esse commodo.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 18,
    "make": "reprehenderit",
    "model": "labore",
    "serial_num": "id20g",
    "price": 2517,
    "description": "Culpa laborum nulla eiusmod nostrud quis. Esse amet anim labore labore ea elit. Irure consectetur commodo amet amet quis proident aute velit fugiat exercitation esse dolor. Consequat commodo do veniam esse.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 20,
    "make": "reprehenderit",
    "model": "aliquip",
    "serial_num": "minim145g",
    "price": 5379,
    "description": "Irure Lorem aliquip et eiusmod. Mollit ad mollit veniam pariatur exercitation dolor amet dolor nostrud consectetur. Proident labore sint fugiat proident ad incididunt cillum qui dolore aute.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 12,
    "make": "anim",
    "model": "aliquip",
    "serial_num": "et133A",
    "price": 1556,
    "description": "Commodo id deserunt deserunt fugiat officia non voluptate quis proident veniam eiusmod amet exercitation nostrud. Labore ullamco et cillum ullamco duis dolor. Velit sint exercitation nisi ex esse consequat reprehenderit culpa labore laborum esse. Fugiat voluptate labore pariatur ad adipisicing sit est sunt est laborum magna eiusmod commodo do. Do excepteur sint aliqua id enim consequat. Aliqua qui reprehenderit non aliquip anim ipsum quis aliqua magna in.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 17,
    "make": "veniam",
    "model": "minim",
    "serial_num": "et256D",
    "price": 5780,
    "description": "Ex exercitation consectetur Lorem aliqua mollit duis. Laboris excepteur eiusmod laborum fugiat officia nisi eu ut incididunt. Incididunt deserunt tempor veniam aute mollit duis sunt est eiusmod. Labore ex adipisicing voluptate non amet id exercitation reprehenderit adipisicing ullamco in est aute sint. Quis in aute culpa occaecat laborum consequat tempor. Dolor officia anim anim dolor sunt et minim irure anim occaecat laborum fugiat.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 19,
    "make": "pariatur",
    "model": "sunt",
    "serial_num": "velit57C",
    "price": 2117,
    "description": "Duis culpa laborum tempor labore laboris enim ullamco laboris reprehenderit Lorem. Quis voluptate dolor sunt mollit id aliquip consectetur. Minim amet magna deserunt sit occaecat consequat culpa sint consectetur qui eiusmod Lorem. Ullamco enim veniam ad nostrud duis non eu. Ipsum tempor ex voluptate minim culpa culpa. Est consequat do dolore sit ut et exercitation ad id proident enim commodo culpa. Consequat magna in elit qui.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 16,
    "make": "in",
    "model": "tempor",
    "serial_num": "ut204K",
    "price": 7508,
    "description": "Nisi nulla occaecat sunt fugiat eiusmod ut proident exercitation excepteur elit irure voluptate reprehenderit. Amet adipisicing amet amet consequat irure elit Lorem adipisicing ea consectetur ullamco consequat. Voluptate excepteur cillum est et duis officia. Labore incididunt dolore occaecat enim do ut excepteur Lorem do veniam do mollit reprehenderit cupidatat.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 16,
    "make": "amet",
    "model": "sint",
    "serial_num": "veniam197F",
    "price": 3144,
    "description": "Mollit esse in consequat culpa aliqua Lorem quis exercitation incididunt nulla eu aliquip ad adipisicing. Dolor sit dolore tempor amet duis excepteur aute tempor laboris velit reprehenderit elit. Nisi quis consectetur aliquip quis culpa velit. Ut aute occaecat dolor excepteur nisi laboris ullamco.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 11,
    "make": "fugiat",
    "model": "irure",
    "serial_num": "excepteur151D",
    "price": 4144,
    "description": "Et irure velit fugiat do id tempor quis non anim proident amet cupidatat voluptate in. Irure ullamco nisi proident enim mollit. Cupidatat in magna et ut veniam enim minim eiusmod aliqua laboris occaecat. Mollit est magna voluptate officia est fugiat voluptate ullamco magna ipsum minim irure nostrud dolor. Aliquip non culpa reprehenderit laborum veniam pariatur mollit aliquip deserunt esse velit qui est.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 2,
    "make": "do",
    "model": "sunt",
    "serial_num": "nisi250h",
    "price": 1827,
    "description": "Incididunt labore ipsum fugiat culpa aliquip ea labore enim consequat tempor in in ex. Cupidatat exercitation culpa ad tempor cillum exercitation consectetur amet. Laborum adipisicing dolor esse proident ut culpa deserunt quis. Ullamco esse deserunt commodo ullamco eiusmod veniam sit voluptate dolore aliqua dolor id. Ad mollit adipisicing ullamco officia cupidatat labore adipisicing laboris id reprehenderit ullamco. Consequat consequat incididunt laboris ut commodo ea. Id ea laboris ex fugiat velit velit dolore veniam.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 1,
    "make": "amet",
    "model": "amet",
    "serial_num": "officia56g",
    "price": 713,
    "description": "Proident deserunt voluptate Lorem dolor eiusmod veniam aliquip veniam et minim consectetur amet et id. Ut laborum ullamco cupidatat in Lorem. Id pariatur laboris minim ad amet non aute et ea deserunt est ad. Duis pariatur deserunt magna dolore qui. Irure eu occaecat reprehenderit duis ullamco qui ipsum quis adipisicing dolor.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 1,
    "make": "sint",
    "model": "elit",
    "serial_num": "veniam106F",
    "price": 8430,
    "description": "Ea ea enim incididunt exercitation fugiat. Occaecat nisi aliquip voluptate esse pariatur enim aliqua consectetur in consequat cupidatat quis labore. Sit cupidatat magna laboris labore aliqua labore consequat id nostrud fugiat. Aliquip amet tempor sint aliqua eiusmod ex cupidatat exercitation cupidatat aliqua.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 3,
    "make": "cupidatat",
    "model": "laborum",
    "serial_num": "amet58h",
    "price": 250,
    "description": "Ea Lorem amet id officia reprehenderit ex excepteur id enim anim quis cillum ex incididunt. Voluptate laborum consequat amet fugiat dolor nisi consectetur Lorem dolor amet. Excepteur incididunt est et sunt velit magna non. Non esse exercitation dolore aliquip quis elit anim et dolore.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 1,
    "make": "proident",
    "model": "voluptate",
    "serial_num": "eu277B",
    "price": 4329,
    "description": "Reprehenderit non ex incididunt do aliquip ut elit dolore sunt. Nulla deserunt laboris et dolore quis cillum veniam. Mollit dolore labore est est. Sint nulla est pariatur incididunt voluptate occaecat anim incididunt laborum sunt cillum et ullamco. Culpa cillum esse irure nisi labore fugiat Lorem do culpa labore.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 13,
    "make": "enim",
    "model": "et",
    "serial_num": "exercitation275g",
    "price": 2347,
    "description": "Ullamco qui qui minim nulla ut labore culpa in nisi fugiat. Nisi aliqua veniam ullamco ea tempor labore id qui qui ut. Velit ex mollit ex amet consectetur amet dolor reprehenderit sint elit voluptate. Aute elit elit nisi minim duis dolor ipsum quis aliqua velit mollit mollit et. Occaecat aliquip velit non tempor nostrud adipisicing sint proident fugiat qui non ut. Fugiat Lorem et nostrud laborum aute esse duis dolore pariatur adipisicing ipsum.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 9,
    "make": "qui",
    "model": "amet",
    "serial_num": "ut84e",
    "price": 6009,
    "description": "Laborum dolor irure elit pariatur ad aute officia reprehenderit. Aute aliquip officia fugiat deserunt voluptate. Irure nisi consectetur pariatur esse do aliqua ipsum qui duis. Et proident ipsum Lorem laboris elit voluptate cupidatat deserunt aliqua et. Officia non culpa laborum commodo proident nisi do pariatur amet aute laborum id pariatur aute.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 13,
    "make": "amet",
    "model": "ea",
    "serial_num": "et182h",
    "price": 1554,
    "description": "Excepteur occaecat laboris ex aliqua ipsum. Eiusmod pariatur voluptate qui in aliquip dolore. Velit exercitation enim voluptate in do. Aute sit aliqua adipisicing dolore ipsum laboris aute in irure enim. Sunt enim consectetur sunt ut dolore ipsum incididunt velit. Nisi officia mollit adipisicing mollit non exercitation ad ad dolor tempor officia ad exercitation. Ea irure laborum culpa labore culpa ipsum ipsum dolore cupidatat cupidatat consectetur.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 17,
    "make": "sint",
    "model": "anim",
    "serial_num": "eu269e",
    "price": 515,
    "description": "Irure fugiat consectetur occaecat fugiat labore qui amet excepteur. Velit ea tempor cillum nulla sunt occaecat cupidatat excepteur consectetur elit enim aliqua consectetur elit. Ea duis dolor laborum incididunt quis labore voluptate pariatur nulla nulla nulla labore. Nulla exercitation ut reprehenderit qui ullamco dolore esse occaecat. Pariatur consequat proident dolor consequat cillum duis nulla minim est veniam officia amet cillum est.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 9,
    "make": "pariatur",
    "model": "sint",
    "serial_num": "amet90D",
    "price": 9266,
    "description": "Et nisi duis et occaecat aute sunt deserunt. Exercitation eiusmod esse dolore amet ex. Amet amet adipisicing esse consequat exercitation elit eiusmod id. In ad qui culpa qui mollit est anim enim consectetur. Amet est aliqua laborum aliqua consectetur et aliquip magna do officia magna Lorem nostrud. Dolore nisi est ipsum mollit et incididunt sit exercitation in sunt incididunt elit. Cupidatat magna pariatur excepteur amet ea ex.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 21,
    "make": "laboris",
    "model": "officia",
    "serial_num": "laboris62J",
    "price": 4468,
    "description": "Deserunt anim nostrud exercitation eu est voluptate anim cillum duis consectetur dolore voluptate esse. Tempor mollit ad nostrud elit sit voluptate proident dolor amet. Proident ullamco consectetur in esse non pariatur Lorem pariatur adipisicing excepteur Lorem consequat culpa non.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 6,
    "make": "proident",
    "model": "occaecat",
    "serial_num": "minim40B",
    "price": 1770,
    "description": "Laboris dolore incididunt dolor quis do. Dolore fugiat consectetur consectetur excepteur pariatur ipsum velit et occaecat do sint sunt. Nisi aute mollit ipsum veniam velit. Consequat occaecat dolore veniam nostrud cillum nisi in. Qui culpa qui exercitation enim nisi qui sint deserunt anim. Ex duis voluptate magna laboris sit nulla consectetur laborum. In irure magna dolore amet.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 19,
    "make": "cupidatat",
    "model": "elit",
    "serial_num": "aliqua264A",
    "price": 7553,
    "description": "Lorem dolore ipsum exercitation sunt. Velit adipisicing velit voluptate aliqua do aliqua nostrud adipisicing adipisicing magna irure quis ad nostrud. Reprehenderit duis dolor dolore elit et nulla in. Laborum in et ut minim do tempor aute tempor cupidatat ut cillum proident pariatur.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 21,
    "make": "veniam",
    "model": "sint",
    "serial_num": "occaecat137D",
    "price": 2540,
    "description": "Id non commodo qui deserunt elit adipisicing adipisicing quis mollit mollit et nostrud id. Laboris fugiat sunt eiusmod labore ea voluptate amet laboris labore veniam. Lorem sunt quis eu ea in proident et. Laboris minim eu reprehenderit aliqua. Elit sit ex eiusmod ut minim est enim est. Dolore laboris enim ullamco quis mollit sit est et incididunt dolore aute excepteur duis eiusmod. Veniam tempor nulla irure ea enim.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 9,
    "make": "voluptate",
    "model": "consectetur",
    "serial_num": "esse93h",
    "price": 6070,
    "description": "Incididunt ipsum ullamco laboris non labore esse cillum eiusmod nulla aute quis culpa id. Dolor ea veniam dolore amet irure aliqua nostrud nisi proident pariatur labore qui ipsum. Velit cillum quis consectetur consequat elit ea quis sint aliquip commodo eiusmod voluptate. Ut fugiat culpa amet officia qui sunt qui. Cupidatat officia minim mollit est commodo dolore quis et reprehenderit.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 4,
    "make": "labore",
    "model": "nulla",
    "serial_num": "nostrud30C",
    "price": 6282,
    "description": "Aliqua nulla sint tempor commodo enim. Esse dolor non non irure eiusmod. Dolore cillum proident duis officia laboris. Nisi sunt est nostrud id nisi excepteur nisi et ad ad ex occaecat occaecat qui. Nostrud aute aliquip exercitation magna incididunt velit deserunt ipsum pariatur nulla eiusmod.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 6,
    "make": "ad",
    "model": "in",
    "serial_num": "mollit99A",
    "price": 1293,
    "description": "Deserunt et nostrud nulla ullamco est proident dolore. Exercitation nisi fugiat sit ullamco pariatur. Enim commodo aute qui non tempor minim. Non non incididunt aliquip commodo id irure ad elit. Deserunt id adipisicing ut sit velit sint ex sit. Voluptate ea laborum exercitation eiusmod dolor reprehenderit eiusmod elit exercitation adipisicing ullamco id. Cupidatat tempor laborum tempor commodo.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 17,
    "make": "magna",
    "model": "labore",
    "serial_num": "est12e",
    "price": 833,
    "description": "Ullamco sit aliquip cillum id commodo cillum sit aliqua quis duis. Mollit cillum irure magna qui. Magna magna ut exercitation ut sint exercitation non enim laborum labore cillum consequat. Cupidatat labore ad velit proident ipsum sint ea cupidatat veniam ad veniam. Dolor enim nostrud incididunt exercitation. Irure id pariatur ea consequat aliquip commodo qui esse irure sint dolore ullamco cupidatat.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 8,
    "make": "aute",
    "model": "voluptate",
    "serial_num": "sit108B",
    "price": 3299,
    "description": "Commodo magna non aute commodo irure. Lorem aliqua magna enim enim ea occaecat eu velit esse est. Incididunt officia fugiat magna dolor id ex. Nostrud tempor officia labore commodo aute consectetur ad irure occaecat occaecat veniam eiusmod dolor.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 12,
    "make": "cupidatat",
    "model": "aliqua",
    "serial_num": "excepteur62g",
    "price": 7371,
    "description": "Tempor ea cupidatat ipsum ut laboris mollit est Lorem anim laboris ea aute. Dolore ea ea magna dolor irure sunt excepteur mollit consequat veniam consequat. Anim mollit nulla dolor deserunt aliqua dolore deserunt laboris. Nulla voluptate consequat in ea aliqua amet qui. Reprehenderit sint enim irure eiusmod cupidatat ex. Minim adipisicing minim officia cillum qui consectetur adipisicing aliquip excepteur sint excepteur labore est ex.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 5,
    "make": "amet",
    "model": "cillum",
    "serial_num": "duis44e",
    "price": 2013,
    "description": "Cillum est ad ullamco cillum culpa aliqua ullamco. Eu anim deserunt ex dolore tempor culpa enim adipisicing eu tempor et sit officia. Nisi tempor esse nisi laboris quis consequat irure nulla magna id velit magna minim.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 11,
    "make": "irure",
    "model": "dolore",
    "serial_num": "eu18K",
    "price": 9803,
    "description": "Exercitation do duis minim excepteur. Laboris tempor consectetur cillum non ullamco irure Lorem non. Non exercitation deserunt non reprehenderit labore labore. Mollit non est enim veniam qui occaecat adipisicing reprehenderit ad elit fugiat ipsum est anim. In et minim culpa ullamco aute est sint et sint eiusmod nostrud occaecat. Ea consequat labore adipisicing irure ad dolor ex cupidatat aliquip aliquip. Adipisicing do culpa incididunt minim ex enim mollit.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 11,
    "make": "dolore",
    "model": "adipisicing",
    "serial_num": "irure78K",
    "price": 4382,
    "description": "Nostrud amet est velit labore commodo incididunt consequat aliquip aliqua veniam ea nisi ipsum ullamco. Incididunt veniam adipisicing id nisi commodo et ut est ut. Sint nostrud sint est qui Lorem in. Proident ullamco do est tempor excepteur nostrud. Duis est commodo ea aliqua Lorem in incididunt ut reprehenderit veniam cillum incididunt ad.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 14,
    "make": "laborum",
    "model": "mollit",
    "serial_num": "laboris205K",
    "price": 4805,
    "description": "Officia laborum amet velit commodo eiusmod. Aute magna nulla ut labore nulla. Labore eiusmod magna deserunt consequat culpa laboris. Deserunt elit ad excepteur amet proident reprehenderit. Magna quis non laborum mollit sit irure fugiat. Consequat est ea veniam Lorem aliqua eu anim nulla labore occaecat ullamco. Dolore do incididunt labore ipsum consectetur quis incididunt consectetur nostrud officia quis irure dolore nostrud.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 15,
    "make": "officia",
    "model": "adipisicing",
    "serial_num": "non108e",
    "price": 8834,
    "description": "Culpa commodo aliquip culpa incididunt voluptate do sit nulla ex deserunt ipsum magna eu. Fugiat sunt ut amet sunt incididunt anim voluptate ex cillum eu nisi veniam minim veniam. Nisi et pariatur tempor ad aute anim anim adipisicing adipisicing.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 16,
    "make": "eu",
    "model": "cillum",
    "serial_num": "pariatur145h",
    "price": 252,
    "description": "Reprehenderit cupidatat consequat ex proident nostrud incididunt eiusmod reprehenderit minim cillum magna irure. Labore sunt irure sunt voluptate tempor quis fugiat in nisi excepteur. Quis nostrud labore amet eu est irure magna. Tempor laborum quis ex proident aliquip cupidatat. Cupidatat nisi magna adipisicing qui elit consectetur tempor quis.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 2,
    "make": "adipisicing",
    "model": "tempor",
    "serial_num": "tempor169i",
    "price": 4505,
    "description": "Commodo irure aute incididunt nostrud minim mollit Lorem elit duis. Anim labore do cupidatat adipisicing in quis exercitation ut. Qui elit dolor et reprehenderit aliquip quis magna ex voluptate excepteur do eiusmod in. Labore sit consequat officia pariatur eu in eu do nostrud consectetur cupidatat sit dolore. Mollit et eiusmod nulla magna nostrud incididunt sunt. Deserunt duis magna nisi ea est ut cupidatat culpa voluptate cillum ut nulla. Deserunt magna nisi qui nisi est.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 10,
    "make": "ut",
    "model": "sint",
    "serial_num": "esse261K",
    "price": 2896,
    "description": "Excepteur exercitation magna ullamco ea enim consectetur reprehenderit elit qui dolore do amet aliqua pariatur. Tempor dolor proident minim enim. Exercitation fugiat occaecat voluptate sit esse labore mollit aliqua pariatur non fugiat tempor tempor. Eiusmod quis qui aliquip incididunt ex aliquip minim laborum veniam nulla in. Ea incididunt irure veniam et laboris ipsum. Exercitation est veniam velit et est eiusmod laboris irure veniam sunt exercitation.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 21,
    "make": "deserunt",
    "model": "esse",
    "serial_num": "Lorem273h",
    "price": 1731,
    "description": "Lorem sunt ipsum excepteur consectetur do. Deserunt pariatur consectetur exercitation aliqua officia adipisicing. Voluptate deserunt do quis eu nisi tempor sint consectetur id non velit fugiat. Tempor sit fugiat fugiat commodo anim aute et consequat. Nostrud do anim velit dolore excepteur irure. Cupidatat minim eu Lorem proident adipisicing pariatur qui fugiat sunt qui eiusmod nostrud.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 12,
    "make": "exercitation",
    "model": "anim",
    "serial_num": "ut103e",
    "price": 4149,
    "description": "Incididunt officia nulla dolor ipsum aliquip. Deserunt commodo proident duis consectetur non nisi. Nostrud officia excepteur qui deserunt. Consectetur non labore esse qui culpa et magna cupidatat adipisicing. Ut deserunt ullamco officia incididunt deserunt voluptate officia exercitation et adipisicing.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 19,
    "make": "fugiat",
    "model": "ullamco",
    "serial_num": "eu150A",
    "price": 9216,
    "description": "Esse occaecat nulla non sunt adipisicing deserunt. Veniam consequat Lorem esse Lorem tempor magna consectetur. Ea consectetur esse consectetur eiusmod cupidatat irure voluptate elit quis est. Consectetur proident ut aliquip non commodo irure labore nisi sit velit.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 1,
    "make": "incididunt",
    "model": "est",
    "serial_num": "ut207g",
    "price": 1489,
    "description": "Tempor proident adipisicing laborum aliqua adipisicing do nisi excepteur. Excepteur ipsum laborum officia reprehenderit. Sint aliquip sunt voluptate aliqua ut dolor adipisicing cillum veniam voluptate labore aliquip. Dolore enim eu ipsum nisi eu tempor ad laboris qui quis in. Fugiat et quis culpa aliqua commodo sint. Amet dolore aute fugiat exercitation Lorem fugiat aliqua adipisicing nostrud ut. Laborum anim incididunt aliqua duis veniam pariatur nostrud aliquip culpa duis occaecat laboris.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "non",
    "model": "laborum",
    "serial_num": "magna218h",
    "price": 4775,
    "description": "Quis culpa fugiat est officia excepteur ea cillum fugiat irure ut. Est magna ea elit minim anim nostrud et sint ad ipsum ipsum labore. Occaecat eu labore proident enim ea cupidatat mollit sit deserunt quis veniam esse. Laboris elit sint esse laboris exercitation excepteur reprehenderit ullamco ex. Nostrud tempor labore elit tempor ipsum et id quis eiusmod. Minim cillum consectetur consectetur amet Lorem eu enim mollit do consectetur incididunt ea veniam velit.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 9,
    "make": "exercitation",
    "model": "anim",
    "serial_num": "proident256K",
    "price": 5480,
    "description": "Deserunt consectetur velit aliquip adipisicing pariatur anim aliqua est eu magna. Esse dolore anim eiusmod quis minim in. Anim proident nisi fugiat ex ad. Duis sint aliquip commodo aliquip mollit nostrud occaecat enim officia elit voluptate nulla. Id proident consectetur consequat deserunt sunt aliqua ea est enim cupidatat nostrud velit. Ea nostrud incididunt do proident nulla Lorem deserunt velit irure eu.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 5,
    "make": "aliqua",
    "model": "aliqua",
    "serial_num": "velit83C",
    "price": 3423,
    "description": "Culpa consequat sint ipsum reprehenderit tempor minim amet nisi ipsum incididunt et elit anim exercitation. Duis amet eu veniam et exercitation culpa. Sint sint aute aliqua aliquip dolore ipsum.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 14,
    "make": "excepteur",
    "model": "consectetur",
    "serial_num": "laborum276g",
    "price": 7045,
    "description": "Pariatur fugiat incididunt deserunt sint fugiat voluptate culpa cupidatat minim exercitation commodo pariatur enim. Proident labore et cupidatat sint consequat fugiat esse magna elit culpa. Est aliquip elit cillum id dolore excepteur qui qui ea labore eiusmod veniam laboris. Duis consequat cupidatat ut deserunt mollit fugiat ut. Nulla laborum eiusmod excepteur aliquip laborum minim veniam Lorem nostrud aliqua esse dolore ipsum. Id consectetur culpa ex est est adipisicing est reprehenderit reprehenderit.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 18,
    "make": "consectetur",
    "model": "cupidatat",
    "serial_num": "in136F",
    "price": 1983,
    "description": "Nulla veniam eiusmod tempor commodo occaecat nisi. Lorem cillum non culpa amet Lorem qui enim deserunt magna. Ea duis officia voluptate aute ut est enim. Minim fugiat eu amet proident enim id qui officia. Lorem proident labore commodo nulla amet nulla labore nulla commodo adipisicing. Sint nisi voluptate reprehenderit fugiat id.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 6,
    "make": "excepteur",
    "model": "Lorem",
    "serial_num": "culpa235i",
    "price": 6543,
    "description": "Veniam minim sit eiusmod mollit. Exercitation officia fugiat quis exercitation id consequat. Quis ullamco aliqua enim officia ad et non labore dolore magna.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 7,
    "make": "enim",
    "model": "dolore",
    "serial_num": "amet33i",
    "price": 9200,
    "description": "Duis minim exercitation aliquip in incididunt ut. Culpa ex dolor quis eiusmod elit occaecat qui incididunt irure aliquip aute laboris. Esse ut adipisicing ex sunt do reprehenderit magna. In quis aliqua adipisicing qui occaecat voluptate officia qui. Fugiat sunt nostrud aliquip mollit veniam. Consequat ut commodo do dolor non incididunt occaecat dolore nulla qui proident incididunt. Id consectetur occaecat proident veniam aute aliqua dolore adipisicing sunt eu dolore laborum laboris magna.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 1,
    "make": "proident",
    "model": "minim",
    "serial_num": "ad144D",
    "price": 9203,
    "description": "Anim excepteur in enim incididunt anim in ea. Ut sunt ipsum incididunt ex ad non. Amet consectetur reprehenderit irure mollit nulla ut dolor incididunt enim tempor deserunt deserunt. Magna occaecat dolor et incididunt incididunt exercitation in. Proident nisi adipisicing proident nostrud sint mollit anim ut pariatur ut commodo culpa sint. Qui ipsum cupidatat enim irure sit minim sunt nisi eiusmod.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 8,
    "make": "aliquip",
    "model": "sint",
    "serial_num": "aliquip259J",
    "price": 4945,
    "description": "Incididunt ipsum culpa nisi magna nostrud. Veniam esse consequat tempor incididunt anim ullamco laboris in incididunt sunt eu et sit ex. Et est irure do proident esse cillum mollit ut id aliqua.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 1,
    "make": "sint",
    "model": "commodo",
    "serial_num": "proident93B",
    "price": 1781,
    "description": "Non incididunt minim proident excepteur laboris velit irure dolore. Et duis esse magna incididunt mollit dolor minim nisi eu tempor elit. Cillum exercitation commodo aliqua voluptate sunt sint esse elit. Ut sint ut dolor anim magna non magna dolor in nulla laboris ex qui. Reprehenderit ea esse culpa id ex ex anim pariatur occaecat irure tempor Lorem. Amet reprehenderit sunt nostrud occaecat magna occaecat.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 20,
    "make": "duis",
    "model": "eu",
    "serial_num": "exercitation193i",
    "price": 6818,
    "description": "In quis ut fugiat exercitation et esse eiusmod ad non. Anim pariatur irure aute nulla eu amet ut reprehenderit deserunt aute adipisicing veniam. Duis adipisicing cupidatat aute officia qui elit cupidatat aliqua elit ipsum sunt deserunt. Pariatur cupidatat irure reprehenderit proident officia quis reprehenderit ad. Labore sunt ullamco ullamco nostrud ipsum aliquip esse mollit officia.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 14,
    "make": "ea",
    "model": "eiusmod",
    "serial_num": "elit87i",
    "price": 4881,
    "description": "Sit aute quis mollit ex adipisicing. Excepteur voluptate cillum Lorem consectetur ad proident. Nisi est enim dolore minim sint ad eiusmod. Consectetur ullamco aliquip adipisicing consequat exercitation ut elit sint dolor duis velit duis. Irure reprehenderit aliquip ad anim reprehenderit sunt.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 18,
    "make": "pariatur",
    "model": "commodo",
    "serial_num": "laborum155J",
    "price": 3112,
    "description": "Fugiat deserunt eiusmod cillum elit aliqua Lorem non. Non adipisicing irure sunt nostrud anim ullamco consectetur ut deserunt aliquip. Consectetur proident sint elit in exercitation minim officia enim amet id excepteur enim.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 17,
    "make": "qui",
    "model": "ullamco",
    "serial_num": "qui14A",
    "price": 2483,
    "description": "Officia fugiat ullamco deserunt proident in exercitation exercitation elit do ut occaecat consectetur sit amet. Aliqua irure do eiusmod laborum pariatur. Reprehenderit eu non ullamco nulla ullamco non quis irure non eu irure laboris. Nisi elit in culpa consectetur pariatur minim dolore cupidatat ea sint et irure laborum occaecat.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 14,
    "make": "fugiat",
    "model": "aute",
    "serial_num": "veniam233B",
    "price": 4770,
    "description": "Nulla amet reprehenderit aute adipisicing in deserunt culpa ut nulla pariatur elit est reprehenderit velit. In labore consequat dolore pariatur officia mollit. Anim do nisi dolor sunt laboris dolore consequat mollit minim.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 4,
    "make": "quis",
    "model": "quis",
    "serial_num": "dolore123i",
    "price": 781,
    "description": "Incididunt ea est fugiat id ea cillum ea deserunt. Incididunt cupidatat non reprehenderit laborum aliquip ea minim aliquip consectetur enim sit eu mollit. Aliquip mollit ullamco est pariatur sint cillum elit elit eu esse excepteur nostrud. Sunt esse minim irure laborum. Minim pariatur aliquip minim ea sint est officia nulla nulla officia officia. Incididunt officia adipisicing ea occaecat qui nostrud incididunt labore esse pariatur aliquip exercitation sint est. Mollit cupidatat ad minim amet do tempor aliquip voluptate ullamco adipisicing reprehenderit sunt.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 16,
    "make": "qui",
    "model": "consequat",
    "serial_num": "cupidatat121g",
    "price": 7239,
    "description": "Culpa Lorem sunt do consequat consequat cupidatat ea tempor id duis. Incididunt aliqua nulla ullamco et occaecat. Qui exercitation quis excepteur anim occaecat occaecat ea duis commodo id aliquip nostrud officia. Elit sint laboris eu exercitation ad magna exercitation amet.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 14,
    "make": "aliquip",
    "model": "Lorem",
    "serial_num": "et78e",
    "price": 6986,
    "description": "Tempor dolor irure esse veniam qui velit dolore incididunt officia aliquip qui aliquip cupidatat laborum. Labore minim ullamco qui pariatur aliquip fugiat incididunt commodo cillum ipsum exercitation ea consequat. Laboris do veniam laboris esse laboris sit voluptate. Occaecat velit tempor elit excepteur laboris et.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 16,
    "make": "nisi",
    "model": "quis",
    "serial_num": "enim43F",
    "price": 1934,
    "description": "Deserunt ullamco eu dolore id elit. Mollit quis nisi et minim ad occaecat exercitation aliquip. Esse commodo esse occaecat aute velit est consequat laboris nulla incididunt qui nulla et aliquip. Fugiat reprehenderit veniam aliqua ut voluptate.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 5,
    "make": "consectetur",
    "model": "cillum",
    "serial_num": "voluptate156A",
    "price": 9927,
    "description": "Deserunt cillum eiusmod officia Lorem ex ea occaecat in laboris laboris culpa aute mollit laborum. Minim enim officia commodo esse exercitation quis eu et do adipisicing fugiat. Ut minim in id anim do ut consectetur nisi consequat ullamco aute officia. Velit fugiat laboris duis deserunt ea mollit consectetur reprehenderit eu enim. Elit esse laboris nostrud in enim amet.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 11,
    "make": "sunt",
    "model": "nisi",
    "serial_num": "ad119i",
    "price": 7763,
    "description": "Pariatur nostrud aliquip sunt nisi nulla id Lorem ad. Pariatur adipisicing sint aliqua commodo id proident est ex laboris laboris aliqua qui. Esse veniam aliquip deserunt occaecat officia est anim sint. Occaecat ullamco sint consectetur excepteur. Tempor qui cupidatat ad culpa commodo ad reprehenderit esse. Laboris ex cupidatat labore esse ullamco Lorem anim labore adipisicing aliqua eu sint velit. Magna velit ea veniam minim in pariatur quis consectetur consequat ea non quis et.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 1,
    "make": "commodo",
    "model": "cupidatat",
    "serial_num": "duis212A",
    "price": 1022,
    "description": "Tempor labore deserunt aliqua amet non labore cillum qui laborum sunt. Cillum nulla fugiat eu labore sit est quis eiusmod excepteur. Labore quis ea qui proident ullamco officia ullamco ullamco occaecat aliqua anim cillum. Eu exercitation aliquip nulla aute laboris non laborum tempor commodo sunt consequat veniam in. Cillum ullamco est laboris occaecat sit duis veniam ut. Adipisicing et eu laborum incididunt ipsum incididunt laboris proident. Adipisicing qui excepteur culpa reprehenderit eu eu.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 20,
    "make": "magna",
    "model": "commodo",
    "serial_num": "aliqua237C",
    "price": 6069,
    "description": "Et voluptate exercitation enim quis amet aute consectetur amet culpa minim ipsum duis mollit. Ea in do cupidatat elit id ipsum et magna id esse aute. Amet velit exercitation esse fugiat est sint magna laboris labore aliquip aliquip.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 3,
    "make": "exercitation",
    "model": "est",
    "serial_num": "incididunt138B",
    "price": 4118,
    "description": "Non incididunt aliquip ea Lorem in. Fugiat nulla ex sint cillum dolore consectetur consectetur duis incididunt aliquip minim. Aute consequat qui cillum proident ad amet fugiat elit irure deserunt pariatur non ex laboris. Mollit sint consequat anim excepteur amet aliqua irure sunt officia sunt culpa.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 14,
    "make": "dolor",
    "model": "aliqua",
    "serial_num": "laboris210i",
    "price": 2455,
    "description": "Elit fugiat velit in cupidatat laboris aliqua laboris incididunt occaecat non exercitation officia irure. Non enim veniam adipisicing reprehenderit veniam veniam nulla est. Fugiat nostrud aliquip labore do duis aliqua sunt ut eiusmod eu in non quis id. Est proident incididunt aute dolor id. Fugiat deserunt elit veniam ex magna reprehenderit proident.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 3,
    "make": "proident",
    "model": "qui",
    "serial_num": "qui56h",
    "price": 6430,
    "description": "Mollit elit consequat sit quis laborum irure. Ea id reprehenderit veniam et aute esse ex excepteur deserunt. Enim in ex elit in sunt commodo exercitation proident ea do cillum officia deserunt. Nostrud magna velit in incididunt ad qui dolor magna sint anim aliqua. Officia sunt nulla sit sit fugiat ad pariatur proident aute incididunt Lorem elit laboris ut. Consectetur laboris reprehenderit excepteur aliquip magna reprehenderit proident tempor et.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 1,
    "make": "id",
    "model": "cupidatat",
    "serial_num": "do247i",
    "price": 6015,
    "description": "Ut minim fugiat fugiat non dolore commodo in dolor cillum ipsum fugiat est. Lorem ad deserunt dolore amet minim tempor est eiusmod anim. Excepteur occaecat excepteur anim sint enim officia in velit sunt. Sit proident commodo dolor aliqua amet pariatur amet ut. Adipisicing deserunt ex qui ipsum nostrud exercitation aute cillum consectetur velit eiusmod aliquip.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 7,
    "make": "eu",
    "model": "ullamco",
    "serial_num": "velit241i",
    "price": 3060,
    "description": "Nulla laborum ut fugiat est eiusmod ipsum in commodo ea eiusmod. Commodo nostrud ullamco ipsum cupidatat nulla duis exercitation consectetur. Reprehenderit aute aute consequat eiusmod dolore tempor incididunt aute mollit qui non occaecat sit. Voluptate id consectetur aute proident cillum nostrud reprehenderit ad esse et est. In sit culpa nisi minim proident est. Pariatur velit cupidatat ullamco est.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 13,
    "make": "minim",
    "model": "reprehenderit",
    "serial_num": "esse222D",
    "price": 1425,
    "description": "Sunt mollit eiusmod sit exercitation in incididunt culpa sunt duis. Labore minim incididunt nostrud officia commodo. Tempor anim ullamco sunt tempor enim velit pariatur ea magna sunt. Sint in occaecat nulla ea ex aliqua. Veniam id et irure excepteur ut incididunt do dolore consectetur eu quis irure excepteur. Sint dolor laborum excepteur eiusmod.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 15,
    "make": "proident",
    "model": "nostrud",
    "serial_num": "amet78i",
    "price": 9374,
    "description": "Do voluptate ex occaecat Lorem officia aute ex eu. Dolor sit nostrud amet et nulla. Voluptate culpa deserunt excepteur elit proident. Sunt in sunt quis occaecat quis do Lorem eu. Incididunt non ipsum veniam veniam minim dolor quis. Id reprehenderit proident commodo laborum dolore anim pariatur anim ea. Ea reprehenderit esse et sunt ullamco nulla consequat cillum mollit deserunt ad exercitation sunt exercitation.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 21,
    "make": "aute",
    "model": "do",
    "serial_num": "commodo236F",
    "price": 6929,
    "description": "Minim tempor cillum qui velit eiusmod consequat. Duis aute mollit mollit Lorem consectetur. Ex consequat occaecat occaecat excepteur irure ad commodo deserunt sit nisi sit ex qui. Eiusmod id nisi incididunt laborum labore nostrud culpa cillum sit aute.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 11,
    "make": "ipsum",
    "model": "anim",
    "serial_num": "proident253J",
    "price": 2367,
    "description": "Irure esse cupidatat incididunt fugiat reprehenderit esse adipisicing duis. Eiusmod amet irure consectetur eiusmod id amet non adipisicing. Pariatur consequat irure nostrud aliquip eiusmod est cupidatat non sunt. Eu aliqua adipisicing Lorem laboris esse sit sit laborum et.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 19,
    "make": "anim",
    "model": "dolor",
    "serial_num": "et179e",
    "price": 3395,
    "description": "Commodo dolor occaecat laborum id occaecat. Adipisicing deserunt exercitation ea ad tempor exercitation sint pariatur duis ullamco deserunt in sunt sunt. Eu nisi velit irure irure proident pariatur ipsum voluptate. Magna labore et qui cillum commodo elit.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 4,
    "make": "quis",
    "model": "sint",
    "serial_num": "commodo172h",
    "price": 7129,
    "description": "Est ipsum cupidatat nulla veniam. Laboris minim occaecat cupidatat culpa nostrud. Cillum Lorem in aute pariatur elit ad eu nulla mollit.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 16,
    "make": "eiusmod",
    "model": "commodo",
    "serial_num": "nulla272e",
    "price": 9547,
    "description": "Labore dolor proident proident proident minim magna irure. Nulla labore mollit magna sint elit aute incididunt. Aute mollit sunt eiusmod excepteur dolor incididunt.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 14,
    "make": "reprehenderit",
    "model": "dolor",
    "serial_num": "duis181C",
    "price": 3977,
    "description": "Id sint reprehenderit ea consectetur veniam do deserunt velit. Magna magna in incididunt anim voluptate. Est ut cillum eu culpa ea. Labore esse ut laborum officia commodo voluptate culpa eiusmod occaecat deserunt sint incididunt dolor et.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 18,
    "make": "Lorem",
    "model": "dolore",
    "serial_num": "dolor14B",
    "price": 3230,
    "description": "Aliquip fugiat consectetur eu nostrud do commodo cillum culpa exercitation enim. Anim in duis dolore eiusmod nostrud. Velit excepteur commodo minim velit dolor elit incididunt eiusmod sint elit exercitation dolor. Do id laboris veniam incididunt aliquip ut tempor consequat ut enim dolor velit cillum sint. Nulla ea et ex excepteur enim sint voluptate esse ipsum elit consequat ad proident. Ad reprehenderit excepteur commodo cupidatat qui non dolore sit incididunt tempor ut consequat proident. Cupidatat ut incididunt fugiat dolore tempor ullamco elit ea excepteur.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "officia",
    "model": "quis",
    "serial_num": "eu83C",
    "price": 1753,
    "description": "Ipsum laboris et laboris minim reprehenderit pariatur. Anim non anim pariatur fugiat amet commodo cupidatat. Magna est ipsum enim fugiat aliqua. Do reprehenderit dolor cillum magna non deserunt aliquip elit. Nisi amet incididunt deserunt duis ea esse. Voluptate sunt excepteur aute ea nostrud laborum ut laboris aliqua dolore consectetur. In irure cillum culpa sit deserunt ut elit commodo.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 21,
    "make": "excepteur",
    "model": "et",
    "serial_num": "ut260F",
    "price": 8090,
    "description": "Pariatur esse ullamco ullamco non amet. Amet nulla ex quis est quis id do consequat est. Cillum exercitation reprehenderit eiusmod ut. Adipisicing nulla mollit ex est occaecat velit eiusmod ea nisi nulla deserunt. Exercitation adipisicing fugiat cillum proident.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 5,
    "make": "enim",
    "model": "id",
    "serial_num": "magna198e",
    "price": 8416,
    "description": "Velit amet commodo veniam deserunt nisi quis irure magna laboris esse aliquip cillum. Quis duis velit veniam amet minim adipisicing. Lorem ipsum labore consequat duis sunt esse. Anim amet minim excepteur pariatur aute. Occaecat ex anim irure exercitation commodo nostrud sunt. Sunt ea aliqua sit in tempor. In Lorem minim deserunt cillum nulla.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 12,
    "make": "cillum",
    "model": "eiusmod",
    "serial_num": "Lorem145e",
    "price": 737,
    "description": "Sunt fugiat excepteur do laborum tempor dolore tempor reprehenderit est quis. Fugiat aute magna voluptate exercitation minim. Nulla aute aute exercitation amet velit dolore consectetur est. Ex mollit Lorem esse magna qui dolor nisi do irure ullamco velit aliqua. Excepteur ex tempor deserunt culpa amet ad tempor.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 21,
    "make": "ut",
    "model": "do",
    "serial_num": "anim214F",
    "price": 322,
    "description": "Qui tempor mollit magna cillum consectetur enim consectetur proident reprehenderit cillum sint deserunt. Dolore exercitation cillum exercitation deserunt enim incididunt ad voluptate reprehenderit est reprehenderit fugiat ea. Proident sunt voluptate enim elit excepteur aliqua id pariatur. Qui dolor in proident proident consectetur sit dolor cillum nostrud consectetur voluptate voluptate. Mollit nulla officia ad aliquip pariatur exercitation irure.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 10,
    "make": "ea",
    "model": "dolore",
    "serial_num": "ullamco57g",
    "price": 5821,
    "description": "Laboris magna enim quis est est occaecat eiusmod id cupidatat. Dolore irure esse occaecat voluptate consectetur quis culpa enim consequat tempor. Ad ea ullamco culpa occaecat cupidatat ea. Anim adipisicing mollit mollit velit ad. Aliquip pariatur sunt dolor non dolor exercitation incididunt incididunt labore in deserunt velit reprehenderit.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 4,
    "make": "exercitation",
    "model": "nostrud",
    "serial_num": "amet236e",
    "price": 9998,
    "description": "Ex pariatur ullamco laboris deserunt consectetur labore eu do ex occaecat sunt. Culpa est ipsum ex occaecat. Officia eu eiusmod enim sunt anim ea in excepteur excepteur. Nostrud commodo in aute dolor veniam.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 4,
    "make": "exercitation",
    "model": "veniam",
    "serial_num": "reprehenderit259J",
    "price": 1171,
    "description": "Ex magna dolor proident sit ex Lorem reprehenderit cillum consequat tempor aliqua eu. Non est occaecat qui reprehenderit ex est dolore esse pariatur ipsum eu sint ad. Magna enim deserunt in deserunt. Consequat anim laborum sint velit amet quis consequat nulla aute exercitation elit magna irure. Sit nostrud laboris nisi dolore non ea magna. Excepteur occaecat ipsum aliquip irure elit officia minim.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 21,
    "make": "incididunt",
    "model": "culpa",
    "serial_num": "reprehenderit283B",
    "price": 6007,
    "description": "Labore pariatur aute amet nisi. Aliquip anim id ex qui sit sit reprehenderit et qui est adipisicing culpa dolore. Cillum velit nisi in non. In fugiat reprehenderit sunt laborum Lorem mollit. Labore excepteur pariatur nisi do consectetur enim veniam.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 8,
    "make": "consequat",
    "model": "qui",
    "serial_num": "et64A",
    "price": 348,
    "description": "Exercitation laboris ipsum adipisicing exercitation irure cupidatat et. Sint exercitation commodo voluptate labore sit nulla voluptate proident ipsum amet irure. Duis sunt consequat ex dolor ea consectetur ut qui dolore ex duis pariatur anim. Sunt duis pariatur ad eu Lorem commodo voluptate ex aliqua est irure laborum.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 3,
    "make": "est",
    "model": "voluptate",
    "serial_num": "proident141K",
    "price": 3654,
    "description": "Sit proident mollit elit anim. Elit qui aliqua magna eu adipisicing eiusmod. Ad aliqua officia pariatur qui. Aliquip irure est Lorem et Lorem do exercitation ea sunt sint dolore voluptate. Amet et tempor proident deserunt sunt aute aliqua consequat nostrud sit minim dolor nostrud ea. Minim duis deserunt proident velit aliquip veniam proident culpa consectetur enim. Enim dolor laboris qui velit magna consectetur eu consectetur nostrud ad aute velit velit dolore.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 4,
    "make": "cillum",
    "model": "aliqua",
    "serial_num": "proident101e",
    "price": 1187,
    "description": "Officia sit culpa ipsum ad incididunt irure Lorem laborum occaecat commodo eiusmod sit adipisicing est. Nulla exercitation qui sit consectetur culpa nostrud minim ad nisi non. Qui ipsum commodo sint nisi consectetur exercitation quis fugiat duis irure magna. Pariatur ad voluptate est Lorem.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 10,
    "make": "commodo",
    "model": "voluptate",
    "serial_num": "voluptate95e",
    "price": 3980,
    "description": "Do ipsum duis exercitation ea eiusmod proident. Lorem eu aliqua irure et Lorem voluptate. Quis id duis quis anim laborum reprehenderit mollit tempor pariatur tempor amet est.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 15,
    "make": "labore",
    "model": "voluptate",
    "serial_num": "sit228D",
    "price": 8083,
    "description": "Dolor labore velit amet minim sit. Velit qui veniam laborum amet laboris labore deserunt enim. Laborum magna sint ullamco commodo nisi. Exercitation ex nostrud ad mollit non. Exercitation Lorem sit amet commodo deserunt non consectetur elit irure. Officia exercitation elit tempor reprehenderit ullamco ipsum nostrud sunt do in.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 10,
    "make": "incididunt",
    "model": "enim",
    "serial_num": "nisi235A",
    "price": 5719,
    "description": "Irure ex dolor nostrud sit ea dolore pariatur adipisicing id aliqua pariatur esse. Aliquip esse ut adipisicing irure incididunt ipsum mollit veniam. Dolor non proident esse sint nulla. Aliquip nostrud est dolor eiusmod ullamco. Esse sint minim culpa labore. Labore quis occaecat occaecat nostrud. Sit eiusmod incididunt occaecat non commodo qui nisi.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 19,
    "make": "ad",
    "model": "id",
    "serial_num": "aliqua182h",
    "price": 1296,
    "description": "Amet sunt adipisicing consectetur duis Lorem dolore adipisicing do dolor pariatur. Duis elit ex culpa sint sint aliquip reprehenderit duis. Est deserunt magna culpa exercitation laboris laborum proident occaecat sit incididunt pariatur amet. Ut Lorem cillum irure adipisicing culpa adipisicing non quis enim nulla cillum incididunt. Qui ipsum duis duis veniam do culpa.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 2,
    "make": "occaecat",
    "model": "nulla",
    "serial_num": "non174F",
    "price": 7534,
    "description": "Minim fugiat duis cupidatat consectetur. Deserunt sit voluptate nostrud ut cupidatat. Sint culpa voluptate irure mollit dolor sunt ullamco magna id ad pariatur aute exercitation elit. Fugiat ut tempor do exercitation est Lorem. Veniam eiusmod pariatur non voluptate fugiat nisi ipsum Lorem elit. Mollit mollit tempor dolor sit duis magna veniam sint adipisicing laborum elit.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 8,
    "make": "fugiat",
    "model": "labore",
    "serial_num": "nisi225C",
    "price": 9900,
    "description": "Ex mollit reprehenderit officia cillum. Excepteur proident exercitation dolor aliqua. Eu laborum eiusmod cupidatat fugiat sunt dolore do. Incididunt ipsum nisi dolor tempor qui sint deserunt magna qui anim sint duis est. Labore cillum fugiat labore voluptate dolore elit velit velit excepteur exercitation. Esse amet veniam occaecat minim fugiat anim qui aliqua adipisicing magna enim.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 18,
    "make": "quis",
    "model": "eiusmod",
    "serial_num": "enim39g",
    "price": 4609,
    "description": "Consectetur nulla cillum nisi Lorem sit ut et. Qui eu ex duis ut proident exercitation consectetur pariatur enim nisi officia deserunt. Do dolore excepteur duis labore consectetur. Labore tempor in aliqua aliquip consequat aute labore laboris proident. Enim dolore voluptate nostrud mollit. Occaecat culpa culpa anim proident reprehenderit ad consectetur in dolor elit deserunt ad cillum veniam.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 2,
    "make": "do",
    "model": "mollit",
    "serial_num": "ex214C",
    "price": 7905,
    "description": "Ex nulla do Lorem dolor enim. Incididunt nisi minim eiusmod deserunt. Veniam amet aliqua fugiat nisi nisi quis exercitation. Id esse cillum cupidatat laboris dolor non mollit velit qui excepteur labore. Reprehenderit eu labore nostrud anim laborum aute nulla amet duis et.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 14,
    "make": "sunt",
    "model": "duis",
    "serial_num": "consequat255F",
    "price": 6066,
    "description": "Elit enim minim ea mollit ea reprehenderit pariatur do nulla nostrud fugiat. Aliquip proident in culpa quis do mollit voluptate mollit ullamco. Minim fugiat ullamco veniam elit enim nostrud elit dolore mollit Lorem. Adipisicing excepteur reprehenderit cillum laboris eu ut proident adipisicing et occaecat velit. Laboris non cillum excepteur ullamco incididunt labore qui mollit. Ad exercitation duis commodo nulla anim Lorem labore dolor dolore ullamco nisi dolore minim. Enim velit id commodo non ut dolor commodo exercitation ex est occaecat adipisicing aliqua deserunt.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 12,
    "make": "esse",
    "model": "aute",
    "serial_num": "consequat189i",
    "price": 5643,
    "description": "Commodo anim excepteur voluptate cillum et ipsum aliqua. Ipsum laboris officia sunt dolore voluptate anim sint. Duis pariatur ullamco aliqua tempor mollit et excepteur eiusmod proident veniam voluptate. Ea velit dolore voluptate duis Lorem deserunt reprehenderit minim. Laborum adipisicing esse aliqua est exercitation quis dolore.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 20,
    "make": "magna",
    "model": "do",
    "serial_num": "ut177C",
    "price": 8301,
    "description": "Minim nulla laboris cupidatat mollit. Voluptate labore Lorem culpa minim ex labore ullamco. Occaecat consequat irure minim culpa eu excepteur culpa cillum nisi amet. Amet laboris ullamco id nostrud elit nostrud eu anim id. Laborum mollit ex aliqua velit voluptate minim quis. Officia anim aliqua nulla officia magna fugiat adipisicing exercitation enim reprehenderit elit aute anim ex.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 14,
    "make": "voluptate",
    "model": "elit",
    "serial_num": "sunt45h",
    "price": 1117,
    "description": "Velit duis ex culpa Lorem officia. Sint id dolor eiusmod minim amet consectetur ex qui. Dolor Lorem quis ex nostrud ad Lorem. Consequat aliquip do laborum adipisicing exercitation occaecat. Qui nulla occaecat reprehenderit sit nostrud irure consequat reprehenderit ipsum ullamco. Excepteur sint officia laborum ullamco.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 1,
    "make": "laboris",
    "model": "nostrud",
    "serial_num": "aliqua12A",
    "price": 1574,
    "description": "Ut do excepteur eu eiusmod dolore et est. Officia minim reprehenderit deserunt deserunt ex. Consectetur commodo sint duis pariatur ullamco quis commodo minim fugiat id eu exercitation aliqua. Proident culpa cillum veniam pariatur laboris ullamco voluptate et aliquip. Exercitation et fugiat aute id proident do sit voluptate eiusmod et cupidatat. Mollit velit consectetur ullamco elit sint dolore duis aliqua commodo cupidatat minim occaecat labore in. Quis dolore ex laboris aliquip.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 7,
    "make": "commodo",
    "model": "cupidatat",
    "serial_num": "reprehenderit214K",
    "price": 4335,
    "description": "Est esse ex eu culpa officia dolore eu sunt quis occaecat laborum dolore qui non. Labore in cillum ipsum irure laborum incididunt ipsum id do sit eu culpa est do. Est laborum deserunt cupidatat ea nulla ipsum reprehenderit. Incididunt dolor anim elit minim ut aliqua duis in. Ad minim proident aliqua eiusmod aliquip laboris veniam enim. Commodo veniam commodo enim duis voluptate. Ut laboris laboris occaecat officia id tempor eiusmod dolore officia anim adipisicing culpa anim.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 2,
    "make": "commodo",
    "model": "ipsum",
    "serial_num": "nulla212e",
    "price": 4753,
    "description": "Dolore ipsum do ad labore laboris elit est ipsum irure culpa. Id nisi ullamco dolore pariatur minim laborum est laboris id irure fugiat amet consequat. Tempor excepteur culpa labore consectetur officia sit proident irure voluptate. Ullamco est fugiat sit officia eiusmod enim.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 8,
    "make": "ut",
    "model": "nostrud",
    "serial_num": "labore36C",
    "price": 260,
    "description": "Exercitation Lorem occaecat veniam dolore. Laboris aute id qui aute laborum officia ullamco dolore. Lorem deserunt magna ipsum ullamco excepteur in id ullamco. Culpa sit sint ex ea occaecat laborum in duis mollit laboris cillum ipsum officia adipisicing. Labore sint nostrud esse tempor ad ullamco aliqua dolor occaecat adipisicing. Ad excepteur exercitation elit et anim reprehenderit. Qui ex consequat in aliquip velit nisi eiusmod elit dolor commodo enim id laboris non.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 1,
    "make": "veniam",
    "model": "laboris",
    "serial_num": "laboris115h",
    "price": 5053,
    "description": "Ullamco aute exercitation consectetur consequat nostrud. Amet labore elit ex aliqua minim officia mollit Lorem velit ex consectetur. Voluptate cillum qui eiusmod dolore veniam elit magna eu anim tempor excepteur officia.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 1,
    "make": "incididunt",
    "model": "ad",
    "serial_num": "minim248K",
    "price": 3206,
    "description": "Nostrud ut laboris pariatur minim cillum nulla anim incididunt minim magna velit. Laborum nulla laborum laboris ullamco. Ex labore in adipisicing laborum sint tempor irure commodo commodo ex ut cupidatat. Labore nulla et elit minim. Laboris nostrud veniam enim labore consequat laboris enim ipsum. Esse ut mollit consectetur occaecat deserunt ea sit amet sunt et.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 17,
    "make": "eu",
    "model": "mollit",
    "serial_num": "mollit110D",
    "price": 8054,
    "description": "Ullamco aliqua deserunt est Lorem enim nostrud mollit qui in quis ut nostrud reprehenderit anim. Incididunt est id voluptate cupidatat nulla consectetur quis incididunt nostrud. Excepteur magna commodo aute proident adipisicing enim nostrud minim enim eu. Magna ut culpa consequat eu duis adipisicing voluptate. Sunt commodo sunt ut minim in dolor enim culpa pariatur. Cupidatat nisi nostrud aliqua fugiat nulla laboris veniam eu elit laborum irure.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 15,
    "make": "ipsum",
    "model": "ipsum",
    "serial_num": "ex73B",
    "price": 9225,
    "description": "Dolore esse nostrud adipisicing ex pariatur. Qui enim tempor minim est laborum est est aliquip nostrud eu ullamco labore tempor. Minim occaecat eiusmod dolore magna pariatur nostrud anim deserunt occaecat magna Lorem. Id incididunt cillum nisi culpa proident ea sint.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 14,
    "make": "id",
    "model": "id",
    "serial_num": "velit232C",
    "price": 2855,
    "description": "Amet anim reprehenderit sint reprehenderit ipsum fugiat do quis tempor enim consectetur exercitation velit. Eiusmod non pariatur ipsum non. Culpa occaecat laboris sunt deserunt. Ut esse ex est tempor pariatur consequat do non.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 11,
    "make": "esse",
    "model": "dolore",
    "serial_num": "cupidatat281D",
    "price": 4484,
    "description": "Occaecat ipsum in excepteur pariatur ullamco nostrud exercitation enim est exercitation aute irure ut. Laborum sint ut exercitation sit est quis commodo tempor labore. Voluptate culpa et irure excepteur duis culpa dolore eu ullamco qui tempor esse amet proident. Voluptate quis officia voluptate proident do commodo. Qui ut eu ea magna eu.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 6,
    "make": "Lorem",
    "model": "ipsum",
    "serial_num": "cillum276B",
    "price": 9371,
    "description": "Nostrud do aute ea officia duis. Nulla laborum ullamco nostrud ex non dolore dolor esse aute. Velit occaecat cillum qui officia eiusmod ex in aute enim sit. Officia proident nisi veniam enim. Exercitation anim sint ipsum nulla cillum est pariatur adipisicing ipsum aliquip. Ea esse deserunt magna consequat culpa fugiat officia minim consequat. Anim nisi id sit irure commodo enim id labore ut anim amet.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 12,
    "make": "aliqua",
    "model": "in",
    "serial_num": "sint191J",
    "price": 3307,
    "description": "Elit qui incididunt eu aute qui anim sint et quis eiusmod. Dolor nisi mollit aute duis. Voluptate qui enim quis quis nisi reprehenderit fugiat voluptate laboris. Veniam cupidatat enim excepteur anim officia. Voluptate laboris in anim culpa labore nostrud pariatur eiusmod eu eu sit id nostrud. Culpa nisi quis non ea consequat do labore duis adipisicing.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 6,
    "make": "aliqua",
    "model": "sit",
    "serial_num": "duis138C",
    "price": 5902,
    "description": "Deserunt labore non laborum eu anim occaecat eu. Anim Lorem aute reprehenderit ex dolor et anim. Lorem reprehenderit do qui duis sunt veniam officia. Id occaecat enim sint dolor id consequat do. Amet eu incididunt aute non dolor. Laboris fugiat elit est do commodo duis. Culpa aliqua anim cillum laborum Lorem.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 15,
    "make": "officia",
    "model": "occaecat",
    "serial_num": "qui129K",
    "price": 7967,
    "description": "Deserunt ut adipisicing dolore anim. Cillum nisi duis dolor et anim sit occaecat. Irure nisi culpa minim nulla tempor et sint elit commodo proident aliqua ipsum nisi. Ad cupidatat ex labore id dolore.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 13,
    "make": "pariatur",
    "model": "aute",
    "serial_num": "anim67C",
    "price": 2422,
    "description": "Lorem ea amet duis aute. Cillum amet irure cupidatat reprehenderit eiusmod deserunt est aute nulla nulla quis deserunt. Laboris commodo ullamco reprehenderit adipisicing. Sit reprehenderit commodo et elit dolore ut labore id eiusmod do. Ad ea exercitation incididunt ut id sunt excepteur aliqua ea proident. Nostrud officia cupidatat cillum consectetur elit excepteur id quis.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 7,
    "make": "est",
    "model": "in",
    "serial_num": "deserunt165D",
    "price": 5995,
    "description": "Labore do enim dolore sit nostrud amet tempor culpa do mollit Lorem non proident cillum. Fugiat ut proident aliquip sunt mollit cillum occaecat nisi minim eu. Eu cillum cupidatat laborum aute amet elit labore elit velit nulla pariatur officia laborum qui. Sunt deserunt qui laboris id consectetur in commodo laboris culpa deserunt magna sunt reprehenderit adipisicing. Est commodo est consequat Lorem enim amet eiusmod. Enim sint eiusmod magna est eu cillum culpa consectetur ad ut voluptate id.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 11,
    "make": "irure",
    "model": "eiusmod",
    "serial_num": "dolor243i",
    "price": 6827,
    "description": "Id cupidatat nisi excepteur aliqua in est. Amet non aliqua labore eu duis consectetur laborum mollit eiusmod enim velit excepteur sint. Tempor est ex laborum eu voluptate officia laborum commodo ut. Aliquip voluptate eu ullamco mollit esse pariatur.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 10,
    "make": "deserunt",
    "model": "aute",
    "serial_num": "excepteur173e",
    "price": 2160,
    "description": "Ex aliquip et enim ut nostrud. Non culpa commodo magna veniam excepteur proident. Sint voluptate do velit aliquip voluptate aute eu non fugiat aute laborum excepteur nulla. Commodo aute labore laboris pariatur cupidatat magna. Ex proident pariatur culpa dolor ad incididunt dolor dolore esse ad.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 14,
    "make": "dolor",
    "model": "adipisicing",
    "serial_num": "irure44K",
    "price": 2026,
    "description": "Mollit minim occaecat tempor dolor adipisicing irure aute non irure occaecat ex in. Esse cillum dolore et fugiat deserunt minim laborum reprehenderit ex laborum eiusmod minim. In labore ipsum sunt in incididunt. Anim commodo dolore adipisicing amet eu pariatur amet. Anim in enim et laborum laborum ex non est labore incididunt laborum cupidatat cillum. Eu ad velit dolor ad esse culpa.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "eu",
    "model": "ullamco",
    "serial_num": "adipisicing141B",
    "price": 2569,
    "description": "Esse dolore laborum nisi adipisicing adipisicing sunt occaecat non. Ullamco aute consequat exercitation aute laboris aliquip aliqua dolore dolore ea minim eiusmod reprehenderit commodo. Qui deserunt officia id reprehenderit ut.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 6,
    "make": "ad",
    "model": "est",
    "serial_num": "cupidatat126J",
    "price": 2503,
    "description": "Consectetur excepteur amet officia anim esse culpa dolore dolor labore velit adipisicing. Pariatur quis consectetur irure consectetur aliqua consectetur est. Quis sit enim aliquip amet ea sint dolor ea consectetur id sit occaecat. Nisi eiusmod sint labore voluptate ut id et est duis in esse. Eu minim duis nostrud nostrud veniam nulla sint exercitation enim mollit cupidatat cillum id exercitation. Ut excepteur veniam cillum culpa consequat sint mollit officia commodo. Sit dolore incididunt eiusmod officia anim voluptate Lorem quis labore excepteur.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 15,
    "make": "adipisicing",
    "model": "ad",
    "serial_num": "irure124F",
    "price": 8869,
    "description": "Ea et amet commodo eiusmod minim sint quis irure fugiat incididunt in non exercitation. Quis duis ullamco labore adipisicing veniam adipisicing. Ipsum mollit enim cupidatat fugiat. Proident qui qui veniam ex amet eiusmod ut ut id cillum labore.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 19,
    "make": "officia",
    "model": "ipsum",
    "serial_num": "esse268A",
    "price": 2464,
    "description": "Ut eu velit ullamco eiusmod reprehenderit et proident ipsum non mollit eiusmod duis aute. Sit adipisicing dolore irure enim occaecat nisi nulla sint nostrud laborum irure ea duis occaecat. Dolore deserunt amet eu et esse veniam do irure culpa cillum enim pariatur est. Quis do Lorem exercitation sunt officia sunt commodo in consequat duis proident irure laboris incididunt. Elit tempor aute pariatur aliquip. Excepteur fugiat esse laborum incididunt et nisi officia culpa irure cillum exercitation labore proident elit.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 15,
    "make": "magna",
    "model": "dolore",
    "serial_num": "reprehenderit31D",
    "price": 6568,
    "description": "Reprehenderit irure adipisicing ullamco sint cupidatat proident ipsum mollit officia laboris pariatur nulla excepteur proident. Anim eu ipsum Lorem laboris. Sit consectetur occaecat eiusmod et aliqua officia nulla cupidatat aliqua sit reprehenderit duis laboris. Veniam esse deserunt proident non dolore. Irure ut elit sint Lorem ad.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 7,
    "make": "voluptate",
    "model": "elit",
    "serial_num": "proident69e",
    "price": 4843,
    "description": "Dolore nisi mollit excepteur nulla fugiat ex ut mollit ea tempor ex ipsum. Sunt veniam laborum consequat veniam quis fugiat duis elit velit non labore veniam irure. Tempor veniam aliqua dolor qui fugiat exercitation do est reprehenderit reprehenderit minim deserunt. Aute pariatur nulla esse adipisicing sit. Ut enim ipsum cillum veniam voluptate non officia tempor. Consequat dolore excepteur adipisicing duis ad duis ad eu commodo commodo eiusmod incididunt.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 11,
    "make": "nostrud",
    "model": "est",
    "serial_num": "nostrud222h",
    "price": 2154,
    "description": "Nisi velit labore aliqua enim tempor deserunt nostrud. Voluptate enim occaecat duis magna nulla ullamco sint aute veniam ullamco occaecat eu id. Sit amet qui eu ea esse fugiat velit elit nostrud. Incididunt adipisicing id minim pariatur id non nisi commodo nulla. Non nisi laborum aliquip pariatur nulla laborum consectetur deserunt mollit.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 16,
    "make": "nulla",
    "model": "deserunt",
    "serial_num": "proident178C",
    "price": 5369,
    "description": "Quis voluptate nisi deserunt laborum et id et officia voluptate. Nostrud ad enim consectetur dolore exercitation duis. Aliqua sint eiusmod velit aute reprehenderit adipisicing minim mollit ut ipsum Lorem eiusmod nisi laboris.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "dolore",
    "model": "laboris",
    "serial_num": "adipisicing195A",
    "price": 5995,
    "description": "Irure excepteur cillum elit laborum est fugiat sunt in minim exercitation. Adipisicing mollit reprehenderit laborum deserunt id labore anim cupidatat occaecat proident laboris dolore ea tempor. Ullamco proident consectetur mollit anim dolor nisi dolore non minim ex nostrud. Elit qui sint deserunt reprehenderit labore ad esse. Veniam sint aliqua in voluptate pariatur labore. Amet elit aute mollit incididunt reprehenderit adipisicing in culpa irure magna.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 9,
    "make": "commodo",
    "model": "est",
    "serial_num": "ex73K",
    "price": 1999,
    "description": "In duis anim consectetur ad deserunt esse laboris cillum nisi qui excepteur cillum duis nostrud. Incididunt in voluptate ex ullamco veniam ad enim est. Ut magna esse sit et. Labore culpa quis esse excepteur. Nostrud ea fugiat officia laboris ex nostrud ad id est do id reprehenderit in fugiat. Fugiat officia pariatur reprehenderit ullamco sit ea Lorem laborum labore est elit proident et.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 11,
    "make": "nulla",
    "model": "eiusmod",
    "serial_num": "culpa152J",
    "price": 4079,
    "description": "Enim proident laboris veniam laboris nisi esse velit dolore commodo. Esse occaecat voluptate elit consequat ad ad excepteur incididunt. Nisi eu incididunt aliqua aliqua exercitation quis eu minim esse labore proident. Esse qui anim fugiat ullamco consequat elit enim velit est sint adipisicing elit velit. Nostrud mollit esse occaecat officia incididunt proident dolor amet eu eu non commodo voluptate. Elit nulla laborum sunt aliquip ad aliqua pariatur aliquip consectetur sint ex cillum commodo ea. Magna esse ea nisi officia dolor eu.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 1,
    "make": "minim",
    "model": "elit",
    "serial_num": "nisi69i",
    "price": 3309,
    "description": "Magna laboris occaecat sunt Lorem consequat qui dolore et velit in quis sit. Dolore aliqua culpa veniam cillum tempor officia dolore tempor eu ipsum consequat. Ex quis eu ea laboris ipsum consequat voluptate ipsum sunt ullamco. Sunt cupidatat ut ullamco duis amet Lorem laborum Lorem tempor velit ut.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 20,
    "make": "ipsum",
    "model": "aliquip",
    "serial_num": "elit233F",
    "price": 5489,
    "description": "Nisi enim magna pariatur occaecat nulla cillum nisi adipisicing tempor mollit in minim. Commodo incididunt velit aute anim Lorem cupidatat voluptate reprehenderit do aute sunt. Ad tempor officia consequat officia anim do nostrud id quis officia nostrud culpa. Magna ipsum velit eiusmod labore ea qui nisi duis sunt fugiat.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 6,
    "make": "aute",
    "model": "proident",
    "serial_num": "aliqua196g",
    "price": 9957,
    "description": "Ad est incididunt incididunt id aute minim. Est irure do ullamco irure officia irure dolore ex excepteur. Nulla velit ipsum aliquip est duis non magna consequat laboris veniam. Sint aute ut esse in anim velit. Est excepteur mollit ad ad adipisicing sunt dolor. Exercitation non culpa labore nisi commodo ea. Ad do pariatur excepteur qui ea officia id ipsum labore tempor pariatur.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 10,
    "make": "do",
    "model": "veniam",
    "serial_num": "minim48h",
    "price": 5817,
    "description": "Reprehenderit magna ut veniam laboris culpa aute magna ex incididunt officia irure dolor. Ut quis aliquip laboris adipisicing. Cupidatat dolor veniam cillum Lorem non Lorem ullamco ipsum qui laborum incididunt eu. Do sit cupidatat occaecat cupidatat ipsum. Anim commodo laboris est proident veniam sit sit nisi enim in fugiat.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 20,
    "make": "labore",
    "model": "commodo",
    "serial_num": "sint25A",
    "price": 2730,
    "description": "In ipsum eu exercitation minim est occaecat excepteur et adipisicing consequat pariatur magna enim dolore. Laboris amet laboris esse incididunt deserunt do id velit qui culpa ipsum ullamco ipsum id. Nostrud veniam et quis velit. In exercitation duis tempor nulla. Elit reprehenderit duis est pariatur do pariatur non. Ea reprehenderit fugiat fugiat commodo. Aliqua ea mollit ad fugiat ea eu duis mollit.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 14,
    "make": "amet",
    "model": "irure",
    "serial_num": "laborum101C",
    "price": 1655,
    "description": "Amet dolor proident ut anim officia occaecat consequat tempor officia minim laboris qui irure mollit. Non qui duis non nostrud sunt fugiat et aliquip laboris laboris. Occaecat velit esse do culpa consequat. Duis consequat tempor cupidatat adipisicing quis deserunt minim aliqua anim aliqua nisi. Consectetur irure exercitation elit do aliqua anim ad occaecat nostrud. Veniam quis do eiusmod adipisicing sunt id enim minim esse Lorem consequat adipisicing adipisicing. Aliquip ut velit ad do deserunt cupidatat cillum.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 15,
    "make": "officia",
    "model": "dolore",
    "serial_num": "sit167D",
    "price": 2983,
    "description": "Mollit eu quis fugiat ex laboris ea nulla nostrud. Cupidatat eiusmod eu dolor do est commodo ullamco in aliqua consequat ipsum velit exercitation dolore. Id velit nostrud deserunt irure. Sunt nulla duis duis ipsum officia. Qui tempor quis est excepteur ipsum nulla eiusmod mollit fugiat ea elit ipsum incididunt.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 3,
    "make": "sunt",
    "model": "sint",
    "serial_num": "exercitation176D",
    "price": 5260,
    "description": "Reprehenderit exercitation do quis adipisicing mollit minim sit eiusmod veniam voluptate enim fugiat. Laboris veniam in sint mollit nostrud ad magna magna elit. Laborum nostrud tempor dolor sunt do ex tempor dolore incididunt nulla incididunt nisi.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 19,
    "make": "reprehenderit",
    "model": "elit",
    "serial_num": "sunt19i",
    "price": 5139,
    "description": "Cupidatat elit esse pariatur magna enim in sint dolore reprehenderit adipisicing consequat nulla quis deserunt. Occaecat laborum dolore anim pariatur minim enim ullamco Lorem Lorem exercitation ea. Labore nostrud officia nulla fugiat commodo minim minim do do deserunt consectetur. Sunt adipisicing exercitation irure ex excepteur in enim duis sint pariatur amet amet. Aliquip cupidatat veniam do pariatur mollit sit consequat id veniam veniam. Esse non anim laboris consectetur labore veniam enim sint do occaecat nisi veniam dolor nisi. Ullamco duis sit laborum ea enim dolore duis ad dolore anim eu.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 13,
    "make": "proident",
    "model": "excepteur",
    "serial_num": "non38K",
    "price": 8588,
    "description": "Reprehenderit pariatur fugiat amet anim dolore amet culpa exercitation cillum incididunt officia officia Lorem cupidatat. Eu est culpa irure et consectetur irure consectetur irure aliqua ipsum sit. Dolor ut commodo culpa deserunt Lorem ipsum irure mollit culpa cupidatat. Ex adipisicing eiusmod proident sunt officia dolor ex. Labore eu aute quis mollit dolore. Consectetur pariatur voluptate eu cillum do non est nulla reprehenderit enim velit. Excepteur quis ad voluptate aliqua non mollit id ut dolor.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 14,
    "make": "dolore",
    "model": "cupidatat",
    "serial_num": "aliqua196B",
    "price": 2874,
    "description": "Ad amet exercitation pariatur sint. Aute amet aute irure consectetur aliquip sint esse id anim proident aliqua. Aliquip sint culpa duis proident eiusmod. Mollit deserunt voluptate sint voluptate minim. Laboris aliquip amet labore duis elit voluptate. Est eiusmod commodo Lorem adipisicing consectetur eu in aute sint id consequat proident duis.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 8,
    "make": "ipsum",
    "model": "amet",
    "serial_num": "amet282C",
    "price": 6245,
    "description": "Commodo nulla laboris in quis adipisicing adipisicing aliquip nostrud reprehenderit sint velit. Eu cillum ullamco adipisicing nulla dolore dolor laboris proident in laboris laboris culpa. Reprehenderit culpa consectetur elit non eu ex cupidatat irure cillum laborum culpa.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 17,
    "make": "ullamco",
    "model": "enim",
    "serial_num": "reprehenderit24e",
    "price": 927,
    "description": "Excepteur officia magna in irure mollit eu esse culpa esse ullamco incididunt Lorem pariatur velit. Lorem cillum adipisicing pariatur tempor commodo. Reprehenderit nostrud velit elit laboris excepteur exercitation adipisicing labore quis. Minim veniam do ea consequat ullamco deserunt commodo do enim minim commodo elit anim fugiat. Dolor consequat aliqua labore irure incididunt nisi deserunt. Amet sint nostrud do amet exercitation Lorem. Fugiat eu ipsum labore pariatur magna laborum ipsum id in ullamco qui.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 10,
    "make": "officia",
    "model": "et",
    "serial_num": "commodo123B",
    "price": 8089,
    "description": "Cillum mollit minim cillum irure culpa velit quis. Anim anim est minim exercitation amet amet ut proident voluptate. Exercitation eiusmod dolor excepteur duis pariatur exercitation et velit occaecat deserunt cillum nisi.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 5,
    "make": "veniam",
    "model": "do",
    "serial_num": "labore154F",
    "price": 6708,
    "description": "Id cupidatat do deserunt id aliqua dolore in sint. Aute ullamco reprehenderit commodo velit anim excepteur magna eu commodo ad eu ex cillum. Sunt aliquip veniam aliquip laborum elit velit tempor Lorem laboris ea mollit ex. Nostrud adipisicing exercitation do mollit est proident ad cillum elit esse. Quis est tempor anim deserunt consequat laboris dolore minim laborum incididunt id dolore. Ut velit ut voluptate nisi excepteur et culpa mollit laboris cillum. Dolor ullamco consectetur in officia quis adipisicing non culpa proident amet ad sunt.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 8,
    "make": "velit",
    "model": "ullamco",
    "serial_num": "velit144B",
    "price": 876,
    "description": "Aliqua est pariatur commodo ad aliqua. Fugiat est sit ut sit labore id dolor ullamco fugiat irure deserunt anim. Laborum sit pariatur magna aliqua velit duis aliquip ullamco officia dolor veniam. Amet eiusmod esse sunt sit do cillum ad aliqua magna et. Proident quis enim quis eiusmod nulla nostrud dolore dolor occaecat nisi occaecat.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 14,
    "make": "officia",
    "model": "aliquip",
    "serial_num": "elit253h",
    "price": 2538,
    "description": "Deserunt cillum eiusmod eu excepteur reprehenderit pariatur nisi est elit nostrud laboris veniam aliquip velit. Aute fugiat labore consequat ut aliquip cillum eu adipisicing commodo aliqua consectetur aute velit. Velit do nisi laborum velit aliqua esse deserunt nostrud laboris anim cupidatat veniam.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 8,
    "make": "eiusmod",
    "model": "non",
    "serial_num": "occaecat77B",
    "price": 6392,
    "description": "Fugiat do esse sunt adipisicing aliqua sunt minim proident sint dolore fugiat sint deserunt minim. Nulla est in aliqua ut irure et voluptate nostrud. Pariatur aliqua duis est officia.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 18,
    "make": "amet",
    "model": "amet",
    "serial_num": "cupidatat270i",
    "price": 5024,
    "description": "Sit voluptate pariatur cupidatat Lorem. Nisi ut quis cupidatat et ex nulla commodo. Adipisicing id veniam id aliqua. Sunt proident reprehenderit sunt dolor fugiat anim ipsum.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 6,
    "make": "veniam",
    "model": "mollit",
    "serial_num": "incididunt19B",
    "price": 2268,
    "description": "Consequat adipisicing magna fugiat ex cillum exercitation laborum nulla. Non eiusmod adipisicing ut aliquip sunt. Nostrud mollit deserunt dolor culpa magna ut elit. Aliqua occaecat in ut cillum exercitation proident magna anim incididunt adipisicing incididunt amet. Ullamco cillum anim qui deserunt officia excepteur ut voluptate fugiat mollit ex aute. Do dolore sunt Lorem minim.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 17,
    "make": "deserunt",
    "model": "reprehenderit",
    "serial_num": "qui54i",
    "price": 9114,
    "description": "Voluptate ullamco do elit nisi nostrud eiusmod amet tempor magna fugiat. Minim nulla do elit ut aute consectetur. Enim occaecat nostrud sint deserunt pariatur. Quis ullamco mollit tempor aliqua dolore aliqua non exercitation eu sunt dolore aliqua officia Lorem. Adipisicing nostrud duis adipisicing nulla sunt irure esse sint exercitation quis quis officia laboris adipisicing.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 15,
    "make": "id",
    "model": "nisi",
    "serial_num": "sit269B",
    "price": 1675,
    "description": "Excepteur Lorem eu dolor ad laborum nostrud amet ut. Mollit sint et nostrud amet sint do eiusmod reprehenderit qui incididunt veniam. Sit exercitation elit officia laborum proident ipsum aliqua minim quis aliquip. Sit laboris nisi non fugiat exercitation fugiat Lorem ad labore.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 17,
    "make": "id",
    "model": "in",
    "serial_num": "incididunt198g",
    "price": 8169,
    "description": "Laboris quis nostrud aliquip nostrud adipisicing proident culpa. Exercitation ex deserunt aliqua minim consequat aliqua aliqua minim eiusmod minim sint. Officia consectetur qui est aute id quis aliquip voluptate magna labore sit exercitation. Adipisicing Lorem dolor adipisicing aliquip officia irure nisi et qui cillum in magna dolore ut. Amet quis deserunt eu et irure consectetur laborum amet cupidatat deserunt cupidatat ut. Ipsum occaecat consectetur veniam duis ad.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 2,
    "make": "excepteur",
    "model": "nulla",
    "serial_num": "ipsum31J",
    "price": 6715,
    "description": "Aliquip incididunt ex ullamco sunt. Qui esse occaecat culpa aute amet cupidatat qui aute pariatur irure magna minim. Labore et qui in mollit eiusmod sit cillum laborum elit reprehenderit laboris exercitation proident. Nulla enim aute non sint eu esse cillum exercitation ullamco. Esse sunt fugiat nulla officia elit commodo in aliqua consequat in magna culpa. Ut cupidatat reprehenderit mollit nulla pariatur consectetur id sint dolore proident. Eiusmod mollit elit esse laborum.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 19,
    "make": "cupidatat",
    "model": "pariatur",
    "serial_num": "labore86C",
    "price": 7400,
    "description": "Anim cupidatat in nulla ad tempor. Laborum esse minim dolore elit exercitation ex officia esse laboris irure in sint id. Dolor aute velit do reprehenderit consequat nulla.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 20,
    "make": "velit",
    "model": "veniam",
    "serial_num": "proident42g",
    "price": 4933,
    "description": "Lorem esse est excepteur est. Labore dolore ut eu laboris. Lorem reprehenderit qui fugiat aliquip id quis est mollit ipsum mollit et cupidatat ipsum laboris.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 13,
    "make": "magna",
    "model": "irure",
    "serial_num": "amet44F",
    "price": 6256,
    "description": "Anim sint adipisicing excepteur culpa ea elit eu occaecat exercitation nostrud. Sunt mollit sunt in voluptate proident ea cupidatat non laborum excepteur mollit velit cillum. Reprehenderit dolor occaecat sint ullamco nisi reprehenderit deserunt proident. Aliquip consequat incididunt dolore minim incididunt culpa excepteur labore aliquip cillum nostrud mollit voluptate occaecat. Velit elit aliqua consectetur ut duis excepteur deserunt anim nisi ea non dolor sit sint.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "quis",
    "model": "enim",
    "serial_num": "cupidatat118K",
    "price": 230,
    "description": "Amet esse fugiat sint irure. Excepteur cillum ullamco labore aute nostrud incididunt mollit dolor laborum. Aliquip ex duis id ex in. Elit consectetur eu ea esse excepteur mollit. Duis ea labore eiusmod veniam cupidatat non anim ut et enim Lorem consectetur amet.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 6,
    "make": "deserunt",
    "model": "duis",
    "serial_num": "do109D",
    "price": 4200,
    "description": "Sint esse dolore occaecat reprehenderit enim irure tempor labore. Amet Lorem est ullamco non. Consectetur aliqua tempor enim cillum laboris cupidatat sunt nostrud consectetur et sint tempor cillum tempor. Enim cupidatat officia esse occaecat dolore cupidatat deserunt exercitation fugiat id ut dolore culpa ea.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 10,
    "make": "Lorem",
    "model": "eu",
    "serial_num": "in44F",
    "price": 5049,
    "description": "Ad esse est duis ea duis esse irure officia adipisicing eiusmod. Eiusmod fugiat velit fugiat sint eiusmod commodo ea velit non aliqua et. Anim laboris fugiat sunt est dolor quis. Voluptate est ullamco deserunt ipsum.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 14,
    "make": "tempor",
    "model": "non",
    "serial_num": "dolore216g",
    "price": 4204,
    "description": "Adipisicing dolore est pariatur et qui aliquip duis id. Eiusmod esse proident mollit mollit cupidatat dolore nostrud commodo laboris. Elit aliquip magna ullamco elit et quis. Sint qui velit labore exercitation excepteur amet deserunt ad minim occaecat in irure ipsum ex. Ullamco voluptate duis ex aliquip ex sit consectetur.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 7,
    "make": "laborum",
    "model": "aute",
    "serial_num": "commodo188J",
    "price": 6762,
    "description": "Excepteur adipisicing incididunt aliqua enim. Esse est anim enim aliqua culpa magna duis enim sunt nostrud pariatur cupidatat. Nisi consequat consectetur exercitation et enim. Pariatur et excepteur labore duis adipisicing enim Lorem nisi sunt fugiat. Elit sunt nostrud consectetur laborum reprehenderit ullamco. Aliquip laboris consequat velit sunt eiusmod labore cupidatat commodo officia aliquip sint ea.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 12,
    "make": "veniam",
    "model": "eu",
    "serial_num": "laboris26J",
    "price": 3202,
    "description": "Cupidatat ipsum sunt elit quis cillum magna pariatur proident qui ad ullamco tempor exercitation. Aliqua proident consequat exercitation do fugiat magna id. Aute tempor elit et officia magna irure consequat commodo nostrud cillum eu et est. Anim labore reprehenderit dolore amet ex consequat cupidatat sit Lorem occaecat commodo exercitation et.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 15,
    "make": "ex",
    "model": "est",
    "serial_num": "do169F",
    "price": 6560,
    "description": "Velit aliquip fugiat excepteur irure ad laboris ipsum. Magna consequat duis laborum cupidatat in nisi adipisicing anim proident. Sunt dolor consequat ea irure culpa culpa. Est incididunt eu ex dolore in ad cillum sunt ut.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 4,
    "make": "nisi",
    "model": "laboris",
    "serial_num": "amet163C",
    "price": 9592,
    "description": "Non et aliquip quis et magna labore esse. Quis sit officia fugiat aute ex incididunt aute excepteur excepteur pariatur. Anim eu Lorem excepteur sunt non commodo duis officia aliquip pariatur deserunt. Labore consectetur laboris consectetur magna ex deserunt mollit et enim esse sunt. Nulla ea tempor voluptate in eu dolore sit minim minim adipisicing Lorem id quis.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 10,
    "make": "dolore",
    "model": "anim",
    "serial_num": "nisi65A",
    "price": 2976,
    "description": "Id laboris ut pariatur exercitation minim. Esse et proident officia veniam sunt exercitation veniam do commodo tempor ipsum qui. Ullamco ea id sunt ut Lorem aliquip. Duis incididunt laboris id irure anim aliquip in labore ex ut irure labore. Qui elit ea ut Lorem id veniam consequat ullamco laborum sit. Elit consectetur consequat incididunt consequat laborum commodo ea aliqua.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 4,
    "make": "ullamco",
    "model": "ad",
    "serial_num": "enim150g",
    "price": 6316,
    "description": "Officia ex irure nisi sit ullamco nisi nulla commodo eu minim. Occaecat fugiat eiusmod qui aute fugiat occaecat cupidatat eu. Ullamco aliquip laboris eu magna Lorem id cupidatat aliquip ullamco adipisicing quis cupidatat cupidatat.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 19,
    "make": "nisi",
    "model": "cupidatat",
    "serial_num": "ad181J",
    "price": 9094,
    "description": "Est ullamco excepteur pariatur labore velit in. Adipisicing enim esse tempor proident eiusmod laborum non eu occaecat duis esse reprehenderit consequat. Esse nulla duis tempor elit incididunt quis.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 7,
    "make": "dolor",
    "model": "qui",
    "serial_num": "excepteur201C",
    "price": 4083,
    "description": "Sunt in in ut amet minim magna duis incididunt. Dolor ut minim laborum nulla. Cupidatat dolor tempor eiusmod tempor aliquip ad mollit veniam velit do velit nulla. Nisi in quis velit deserunt veniam anim sunt incididunt. Aliquip non ut laboris officia id id duis eiusmod proident. Duis nulla occaecat incididunt aliqua esse tempor quis cupidatat veniam nostrud eiusmod culpa. Ut enim cillum laboris minim incididunt est Lorem consequat do adipisicing.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "consectetur",
    "model": "commodo",
    "serial_num": "duis138K",
    "price": 1992,
    "description": "Id laboris adipisicing nisi enim consequat ullamco ullamco officia ipsum culpa pariatur. Lorem reprehenderit reprehenderit consectetur do excepteur tempor esse veniam veniam commodo labore. Enim consequat enim consectetur est. Nisi aliqua quis veniam officia est.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 18,
    "make": "sit",
    "model": "deserunt",
    "serial_num": "non91F",
    "price": 2408,
    "description": "Commodo elit eu in commodo aute adipisicing veniam aliqua in proident consectetur consectetur. Voluptate in enim officia eiusmod reprehenderit. Anim esse enim excepteur dolore occaecat. Consectetur sint eiusmod aliquip nostrud occaecat qui.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 3,
    "make": "cupidatat",
    "model": "aute",
    "serial_num": "aliquip33K",
    "price": 8964,
    "description": "Ex commodo proident ipsum fugiat pariatur voluptate officia. Labore elit veniam amet nisi elit minim ut exercitation aliquip nisi velit labore nulla ut. Mollit ad laborum occaecat cupidatat ea ea nulla.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 5,
    "make": "ullamco",
    "model": "enim",
    "serial_num": "laborum197D",
    "price": 9391,
    "description": "Sunt dolor ut in mollit aliqua duis irure do velit laboris culpa aliquip cillum in. Enim et labore nulla laborum reprehenderit. Deserunt dolor sit ipsum pariatur. Magna labore et quis nulla anim magna dolore velit eu deserunt. Aute cupidatat occaecat laboris deserunt amet sunt. Quis quis incididunt velit fugiat incididunt elit fugiat commodo consectetur.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 11,
    "make": "dolore",
    "model": "sunt",
    "serial_num": "officia13i",
    "price": 8572,
    "description": "Nulla eiusmod nulla exercitation amet ut proident ea minim minim tempor anim sunt. Fugiat voluptate ipsum incididunt in non. Aute elit fugiat incididunt ut ut esse in. Id culpa ullamco pariatur culpa elit id laborum occaecat ut consectetur. Nostrud consectetur esse voluptate Lorem esse Lorem do. Exercitation eiusmod id aliquip aliquip. Do irure ullamco eiusmod esse eu.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 17,
    "make": "dolor",
    "model": "irure",
    "serial_num": "cillum168C",
    "price": 6017,
    "description": "Ex pariatur non occaecat aliquip enim elit. Cillum qui velit non ut ex fugiat deserunt sit tempor sunt consequat. Deserunt laborum quis voluptate sint eu tempor Lorem. Nulla laboris fugiat sunt officia occaecat id nulla incididunt elit. Aliqua ut officia fugiat ut ex aute duis aute.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 12,
    "make": "incididunt",
    "model": "pariatur",
    "serial_num": "eu153B",
    "price": 643,
    "description": "Officia sit ea sint elit consectetur consequat fugiat ipsum commodo eu non esse pariatur. Elit ad duis voluptate in dolor irure est do ullamco sint mollit. Tempor nulla magna consequat qui occaecat.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 10,
    "make": "laboris",
    "model": "reprehenderit",
    "serial_num": "reprehenderit122i",
    "price": 5532,
    "description": "Et culpa non esse deserunt minim velit exercitation elit elit. Cupidatat sint irure consequat aute nisi laborum adipisicing esse consectetur deserunt reprehenderit nostrud mollit. Elit consectetur aliqua incididunt consequat veniam voluptate laboris voluptate Lorem laboris. Officia proident in et laboris qui qui enim adipisicing irure quis in dolore ex.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 10,
    "make": "duis",
    "model": "duis",
    "serial_num": "in243A",
    "price": 8903,
    "description": "Anim deserunt commodo ipsum sunt cillum. Cupidatat nulla id ex velit. Ad proident ex qui sunt exercitation enim nisi dolor. Qui eiusmod et consectetur duis mollit tempor pariatur tempor id do ut deserunt sit non.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 13,
    "make": "occaecat",
    "model": "qui",
    "serial_num": "ullamco126B",
    "price": 674,
    "description": "Minim est cupidatat Lorem duis ipsum deserunt eu irure nisi nisi incididunt duis deserunt. Irure elit ullamco est nisi quis incididunt voluptate occaecat laboris cupidatat nulla laboris duis pariatur. Veniam eiusmod minim reprehenderit aliqua magna officia id. Eiusmod cillum laboris consequat sint in ipsum eu exercitation irure ullamco. Fugiat deserunt exercitation velit nisi cupidatat enim exercitation sint dolore ipsum. Culpa laborum adipisicing ut velit id amet reprehenderit.\r\n"
  }
]);
    });
};
