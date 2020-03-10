
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('archive_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('archive_items').insert([
  [
  {
    "user_id": 7,
    "type_id": 14,
    "make": "ullamco",
    "model": "et",
    "serial_num": "enim175A",
    "price": 2906,
    "description": "Sint sunt est excepteur exercitation amet laboris nostrud ex. Laborum culpa sint sit do. Qui proident velit et velit. Aliquip excepteur eu aliqua ut sunt qui cillum duis anim non cupidatat eiusmod. Ut in aliqua labore labore ullamco quis. Non culpa reprehenderit velit ipsum elit.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 8,
    "make": "velit",
    "model": "sint",
    "serial_num": "deserunt128h",
    "price": 2812,
    "description": "Nisi nostrud id deserunt aliquip occaecat reprehenderit occaecat adipisicing commodo Lorem. Pariatur esse consequat nisi pariatur nostrud anim id eiusmod. Commodo in labore sit amet aute duis veniam excepteur.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 19,
    "make": "voluptate",
    "model": "laboris",
    "serial_num": "velit125D",
    "price": 1719,
    "description": "Excepteur tempor occaecat in qui amet fugiat nostrud nulla. Eiusmod irure cupidatat exercitation culpa et id elit adipisicing deserunt Lorem. Nisi adipisicing consequat sit ipsum aute occaecat non ipsum ex ut enim.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 5,
    "make": "et",
    "model": "dolore",
    "serial_num": "ea36F",
    "price": 4868,
    "description": "Lorem ad magna esse aliquip cupidatat et eiusmod. Tempor in ea fugiat cupidatat minim dolor ipsum dolore quis voluptate. Nostrud dolore laboris sunt mollit cupidatat ex.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 8,
    "make": "est",
    "model": "esse",
    "serial_num": "velit177B",
    "price": 975,
    "description": "Nulla commodo do et pariatur ea eu eiusmod duis laboris aliquip sit nulla. Adipisicing laboris ad aliquip ex tempor nulla proident ipsum Lorem laboris amet laborum. Culpa consequat pariatur magna consequat tempor quis commodo et duis Lorem tempor pariatur. Minim ad enim eiusmod esse ullamco nostrud qui non voluptate ut sunt ullamco. Et eiusmod qui veniam fugiat qui pariatur cillum sint minim aliqua consequat. In elit incididunt do amet aute elit nostrud veniam consectetur ipsum ipsum ut exercitation. Cupidatat nostrud occaecat nisi voluptate sint sit reprehenderit do ex laborum cupidatat.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 12,
    "make": "labore",
    "model": "sint",
    "serial_num": "culpa216h",
    "price": 7114,
    "description": "Lorem aliquip ad elit esse proident et enim ullamco non commodo sit. Duis est mollit minim duis excepteur. Lorem ipsum mollit magna deserunt culpa nisi enim exercitation cillum. Eiusmod ut Lorem in ea reprehenderit ex pariatur nostrud aliqua tempor quis in. Proident non nostrud ad velit enim excepteur.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 11,
    "make": "officia",
    "model": "eiusmod",
    "serial_num": "aliqua162g",
    "price": 1981,
    "description": "Cillum est laborum culpa eiusmod non Lorem enim. Ut cillum elit enim minim. Cillum fugiat amet nisi velit minim Lorem deserunt ea est adipisicing et.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 17,
    "make": "amet",
    "model": "commodo",
    "serial_num": "fugiat119J",
    "price": 1789,
    "description": "Duis aliquip dolore minim incididunt ad laboris. Magna ad fugiat officia ad occaecat cillum ea. Ex irure fugiat ea anim.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 10,
    "make": "consectetur",
    "model": "esse",
    "serial_num": "duis214g",
    "price": 1258,
    "description": "Aute ad consequat aliquip sit reprehenderit dolor. Dolor aliqua voluptate aliqua velit. Ullamco officia adipisicing dolor irure duis sint. Laborum sit pariatur dolore aliqua commodo velit deserunt proident. Commodo mollit veniam nulla sunt ea laboris duis dolore dolor enim veniam pariatur cillum. Id ullamco minim elit nostrud in. Dolor id aute sint anim ex consequat labore culpa ea id tempor ipsum.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 7,
    "make": "excepteur",
    "model": "dolore",
    "serial_num": "et267g",
    "price": 7942,
    "description": "Occaecat ipsum aute proident pariatur Lorem nisi laboris fugiat. Irure duis dolor ullamco voluptate duis do cillum ea ea anim anim excepteur occaecat mollit. Ea anim aute Lorem nisi et in sunt. Id fugiat incididunt proident aliquip veniam labore eu mollit cupidatat ipsum.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 21,
    "make": "eiusmod",
    "model": "adipisicing",
    "serial_num": "occaecat221J",
    "price": 4550,
    "description": "Et sit ea nostrud et anim labore labore et sint irure sit cillum. Labore laborum voluptate enim proident est do laborum consectetur incididunt commodo. Enim culpa deserunt amet qui exercitation culpa magna consequat.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 8,
    "make": "est",
    "model": "esse",
    "serial_num": "incididunt223i",
    "price": 1114,
    "description": "Quis anim irure in dolor laborum nisi adipisicing eu ea. Nulla aliquip dolore laborum aliqua et elit anim cupidatat. Esse sint anim culpa in. Eu ipsum ut irure reprehenderit commodo. Magna enim amet ut esse. Adipisicing laboris cillum minim Lorem laborum id tempor. Est pariatur ex fugiat minim sunt laborum adipisicing.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 6,
    "make": "commodo",
    "model": "eu",
    "serial_num": "voluptate210J",
    "price": 80,
    "description": "Est voluptate incididunt adipisicing est ad. Nostrud voluptate anim pariatur in qui minim et aute eiusmod reprehenderit excepteur. Commodo culpa anim elit ullamco. Mollit laborum veniam non dolore cupidatat nisi quis dolore et ut voluptate.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 3,
    "make": "nisi",
    "model": "sint",
    "serial_num": "consequat195F",
    "price": 8753,
    "description": "Eu aliqua culpa Lorem commodo dolore nostrud. Irure laboris Lorem id Lorem voluptate velit. Id anim proident veniam aliquip esse cupidatat id sunt eiusmod enim nisi.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 6,
    "make": "mollit",
    "model": "consequat",
    "serial_num": "tempor88J",
    "price": 3056,
    "description": "Commodo pariatur sunt nulla reprehenderit ut et dolore Lorem ullamco dolore non ea. Officia fugiat magna ipsum consequat culpa nisi cupidatat aliqua esse minim ea. Esse dolore excepteur duis nostrud aliquip deserunt id dolor tempor tempor.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 5,
    "make": "deserunt",
    "model": "nostrud",
    "serial_num": "voluptate172J",
    "price": 5536,
    "description": "Aliquip ad anim ullamco culpa culpa esse. Magna laboris aliquip fugiat mollit est id nostrud quis Lorem labore tempor. Consequat elit id dolor velit nostrud. Mollit mollit occaecat officia ullamco qui.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 21,
    "make": "ex",
    "model": "aliquip",
    "serial_num": "excepteur108A",
    "price": 5988,
    "description": "Ipsum laboris mollit sint qui. Cillum consectetur minim tempor consequat id velit et ad tempor nulla id commodo nulla cillum. Et aute ex ullamco magna veniam dolor. Anim nostrud consequat velit est nulla deserunt aliqua. Labore ipsum eu id magna officia laboris.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 6,
    "make": "ipsum",
    "model": "cupidatat",
    "serial_num": "cupidatat79h",
    "price": 9110,
    "description": "Velit in sunt tempor aliqua. Deserunt est pariatur nulla dolor occaecat irure enim ex laborum dolor veniam. Irure deserunt fugiat quis culpa amet exercitation ex sint duis velit. Laborum non laborum deserunt pariatur enim id laboris nisi aute sint exercitation aliquip. Ex fugiat pariatur consectetur pariatur irure quis aliqua.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 9,
    "make": "dolor",
    "model": "ex",
    "serial_num": "esse76e",
    "price": 5367,
    "description": "Dolor esse quis incididunt fugiat occaecat laboris veniam irure ipsum quis anim voluptate cupidatat. Aute sint irure anim voluptate aute velit ipsum mollit pariatur adipisicing culpa. Qui non fugiat voluptate non dolore in voluptate.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 2,
    "make": "quis",
    "model": "velit",
    "serial_num": "nulla202D",
    "price": 1268,
    "description": "Id aliqua fugiat aliquip amet enim qui in Lorem consequat esse ea et ipsum. Lorem adipisicing sunt voluptate minim id fugiat irure. Est duis reprehenderit labore officia proident qui sint irure aute qui id exercitation. Reprehenderit id Lorem do magna amet ea laborum adipisicing do anim et voluptate nulla. Enim cillum esse sint magna fugiat occaecat labore ad tempor culpa aute duis dolore. Anim fugiat veniam elit irure ad cillum amet occaecat sint eu.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 19,
    "make": "velit",
    "model": "anim",
    "serial_num": "ut165A",
    "price": 277,
    "description": "Aliquip aute nulla et aute. Ad Lorem consequat labore reprehenderit occaecat nulla enim Lorem nisi eu. Ullamco voluptate anim eu et elit amet occaecat cillum anim exercitation veniam aliqua id. Qui cupidatat sint laborum ea minim culpa laborum quis ad veniam sint. Enim qui id velit Lorem sit nostrud dolor et sit id magna quis nulla. Eu reprehenderit eu excepteur irure dolore aliqua qui aliquip commodo nulla. Irure laborum labore Lorem irure deserunt cupidatat deserunt duis excepteur minim.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 13,
    "make": "nostrud",
    "model": "excepteur",
    "serial_num": "enim249J",
    "price": 3237,
    "description": "Non nisi Lorem nulla sunt consectetur fugiat officia amet. Exercitation minim aute laborum consequat cupidatat adipisicing nisi Lorem sit ut eu aute ex est. Cupidatat sint non nulla tempor excepteur velit ut exercitation commodo cillum cillum cupidatat aliqua. Ad irure ea laboris irure cillum id veniam laboris dolore ad.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 12,
    "make": "sunt",
    "model": "non",
    "serial_num": "ad212g",
    "price": 3567,
    "description": "Do nulla aliqua id consequat velit labore commodo ex do. Irure magna ullamco exercitation excepteur excepteur id proident voluptate voluptate dolore. Minim dolor nostrud nisi cupidatat. Cupidatat in et commodo exercitation eu enim cupidatat. Eiusmod enim ut ipsum elit dolore exercitation laboris cillum tempor exercitation sint aliqua non. Dolor ad culpa pariatur veniam occaecat eu eiusmod est.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 1,
    "make": "cillum",
    "model": "ex",
    "serial_num": "exercitation187e",
    "price": 7032,
    "description": "Elit mollit culpa esse sunt dolore duis laborum excepteur labore do. Sunt aliqua elit reprehenderit incididunt ea pariatur cillum consectetur occaecat et exercitation sit labore. Exercitation deserunt aliqua sint aliquip consectetur est exercitation nostrud ex consectetur do quis nulla. Amet elit ex occaecat commodo sint et sunt excepteur. Consectetur quis Lorem deserunt qui fugiat adipisicing culpa aliqua voluptate ullamco est do pariatur cillum. Lorem aliqua ad pariatur culpa est.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 16,
    "make": "non",
    "model": "eiusmod",
    "serial_num": "quis223K",
    "price": 3154,
    "description": "Et non dolor deserunt dolor irure nisi aliqua qui deserunt. Eu enim consectetur aliqua non eiusmod labore tempor do consectetur commodo adipisicing fugiat. Enim laborum sunt dolore labore Lorem ad. Tempor ipsum sit dolore incididunt id est eiusmod duis officia culpa eu. Quis sint ad velit eu excepteur excepteur nisi et incididunt sint occaecat esse tempor. Labore ex minim pariatur consectetur non nostrud deserunt nostrud.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 7,
    "make": "aute",
    "model": "ut",
    "serial_num": "reprehenderit172F",
    "price": 6163,
    "description": "Eiusmod ipsum culpa cupidatat consequat nulla. Nostrud eu do reprehenderit aliquip nulla consectetur amet dolore consequat. Magna laborum aliqua sint incididunt ad quis pariatur laboris ipsum fugiat. Non sint tempor quis laboris proident. Velit aliquip incididunt occaecat magna. Sint adipisicing quis sint Lorem ea amet labore labore sint labore pariatur.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 19,
    "make": "eu",
    "model": "sit",
    "serial_num": "nostrud66J",
    "price": 4372,
    "description": "Excepteur eiusmod aliqua culpa fugiat. Elit labore labore ipsum deserunt dolor adipisicing mollit id commodo. Et ut labore aliquip est labore adipisicing non fugiat. Adipisicing fugiat velit et adipisicing mollit et do.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 20,
    "make": "esse",
    "model": "nulla",
    "serial_num": "elit140C",
    "price": 8222,
    "description": "In ea pariatur cupidatat aute do in labore laboris ipsum duis. Velit ut sunt non ex sint ea cillum culpa est. Adipisicing exercitation ex mollit qui tempor nulla excepteur consectetur officia qui irure cupidatat. Excepteur nulla aliquip sunt cillum consequat dolore laborum eiusmod ad id minim consectetur id pariatur.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 12,
    "make": "deserunt",
    "model": "ullamco",
    "serial_num": "consequat197i",
    "price": 3780,
    "description": "Ut et cupidatat quis cillum commodo aute nulla ipsum pariatur velit sunt. Pariatur quis magna et ad. Velit nostrud cupidatat ullamco anim aute laborum.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 12,
    "make": "amet",
    "model": "adipisicing",
    "serial_num": "duis180g",
    "price": 4763,
    "description": "Sit nulla non aliquip deserunt exercitation duis adipisicing. Adipisicing duis dolore mollit consectetur. Mollit commodo do nostrud irure veniam elit ex elit.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 6,
    "make": "dolor",
    "model": "laboris",
    "serial_num": "cupidatat118h",
    "price": 9516,
    "description": "Aute in aliqua quis in reprehenderit sunt cillum Lorem veniam sunt aliqua minim nulla est. Tempor labore tempor nostrud id sunt dolor ut magna sit reprehenderit incididunt tempor. Elit nostrud ea ut in adipisicing non non ad dolore exercitation. Sit ea tempor cupidatat excepteur ad ea veniam adipisicing Lorem irure consectetur excepteur. Labore aliqua nulla anim enim enim consequat do. Ex voluptate proident dolor sit nisi excepteur ut non nostrud.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 14,
    "make": "veniam",
    "model": "aute",
    "serial_num": "dolore50e",
    "price": 3680,
    "description": "Tempor culpa cupidatat dolore sint laboris. Laborum fugiat laborum eiusmod duis Lorem adipisicing ad ut id veniam laborum consequat. Sint fugiat eu laboris qui aliquip nostrud. Voluptate nostrud cillum consequat esse ut exercitation. Id sit cupidatat commodo dolor est pariatur. Excepteur non qui laboris fugiat enim nulla.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 18,
    "make": "eiusmod",
    "model": "sunt",
    "serial_num": "exercitation87K",
    "price": 8093,
    "description": "Sit id mollit eu occaecat cupidatat nostrud et et incididunt. Velit esse ut velit exercitation ullamco nulla aliqua. Consectetur aliqua quis excepteur labore sunt in. Labore quis excepteur duis veniam. Minim nostrud fugiat excepteur adipisicing. Laborum veniam do ipsum adipisicing eu. Qui nulla sint exercitation laborum.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 1,
    "make": "anim",
    "model": "elit",
    "serial_num": "enim170F",
    "price": 4375,
    "description": "Voluptate ex incididunt velit sunt esse ut cillum irure. Nisi ad id exercitation dolor laborum fugiat cupidatat. In pariatur proident id nulla in est. Nisi cupidatat mollit minim laboris aliqua in reprehenderit minim adipisicing aliquip et veniam. Anim laboris duis fugiat minim. Non ipsum aliquip non excepteur officia velit fugiat excepteur occaecat adipisicing adipisicing. Pariatur laboris exercitation incididunt id.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 19,
    "make": "veniam",
    "model": "exercitation",
    "serial_num": "anim227A",
    "price": 438,
    "description": "Eu incididunt nulla eu incididunt dolore sint in dolor. Proident nulla qui pariatur do. Aliquip irure consectetur laboris officia qui eiusmod aute anim cillum laboris. Do voluptate ex elit excepteur nostrud. Nulla in ipsum in tempor eu. Incididunt qui irure velit exercitation laborum cupidatat non eiusmod Lorem ipsum. Cupidatat enim consequat aliquip proident magna quis.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 11,
    "make": "elit",
    "model": "sit",
    "serial_num": "proident197e",
    "price": 5598,
    "description": "Ullamco magna duis minim dolore dolor dolore ad. Occaecat exercitation ut sunt quis laboris ipsum magna non incididunt aute. Amet non qui cillum adipisicing adipisicing aliqua minim labore proident.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 1,
    "make": "voluptate",
    "model": "quis",
    "serial_num": "consequat99i",
    "price": 2931,
    "description": "Nostrud labore dolor cupidatat amet do nostrud eiusmod sint eiusmod magna ad. Pariatur ullamco et est eu voluptate velit. Excepteur sit enim deserunt qui reprehenderit ipsum ullamco qui mollit incididunt reprehenderit. Officia dolor enim elit eiusmod enim id dolore excepteur ipsum. In sit fugiat anim incididunt aliqua non mollit elit reprehenderit. Ipsum aliquip non dolor deserunt duis do commodo. Laborum laborum fugiat eiusmod esse adipisicing amet culpa laborum.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 1,
    "make": "incididunt",
    "model": "minim",
    "serial_num": "est132e",
    "price": 1908,
    "description": "Occaecat ad occaecat proident velit consectetur elit cillum est excepteur sint in id voluptate. Do aliquip consequat in laboris dolore esse magna culpa. Qui cillum aliqua nostrud consectetur ullamco consequat. Ex mollit quis est dolore occaecat aliquip nulla tempor commodo consequat excepteur. Occaecat fugiat ut eiusmod do id laborum consectetur velit deserunt consectetur. Minim elit id fugiat incididunt sit eu minim labore laboris fugiat consequat.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 21,
    "make": "ut",
    "model": "ullamco",
    "serial_num": "nulla144J",
    "price": 1557,
    "description": "Sit nisi et pariatur cillum do sit est cillum. Enim consequat in ullamco in veniam occaecat. Aute ipsum irure fugiat sunt laborum proident sunt dolor aliqua. Ut labore elit cillum eiusmod ut eiusmod sint veniam id Lorem voluptate. Fugiat ipsum enim tempor et. Duis cillum dolor veniam tempor anim aute ea exercitation enim sint anim. Ut elit cillum adipisicing eu officia quis laborum cupidatat eu fugiat culpa officia pariatur consequat.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 11,
    "make": "esse",
    "model": "mollit",
    "serial_num": "ad188h",
    "price": 2904,
    "description": "Sint qui enim minim eiusmod fugiat commodo nisi sunt. Fugiat aliquip in nulla qui incididunt labore sit deserunt pariatur id officia et pariatur. Sint voluptate commodo esse aliqua tempor sunt consequat sit esse esse. Adipisicing sint laboris consectetur eu. Culpa dolor nisi irure id magna excepteur nostrud amet ut excepteur minim nulla culpa elit.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 20,
    "make": "irure",
    "model": "cillum",
    "serial_num": "excepteur30e",
    "price": 9532,
    "description": "Aliqua mollit ad exercitation consequat in. Et do do sint occaecat laboris excepteur duis sint cupidatat labore reprehenderit. Laborum incididunt enim exercitation cupidatat reprehenderit quis aliquip irure reprehenderit amet cupidatat. Quis amet pariatur nisi incididunt Lorem.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 18,
    "make": "qui",
    "model": "dolor",
    "serial_num": "mollit76g",
    "price": 7318,
    "description": "Minim eu officia anim ut quis exercitation do proident nisi est occaecat laboris ullamco cupidatat. Irure sint sit duis occaecat id fugiat enim et. Nostrud labore amet qui minim sint proident dolor adipisicing elit nulla elit. Magna incididunt et sunt ex. Culpa ut aliquip culpa incididunt excepteur exercitation laboris consectetur ullamco aute culpa. Qui ipsum aute commodo sunt nostrud. Magna voluptate id dolor aute dolore proident amet anim cupidatat officia culpa esse.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 1,
    "make": "velit",
    "model": "ea",
    "serial_num": "commodo189D",
    "price": 4329,
    "description": "Aliquip et fugiat aliqua nulla velit. Esse voluptate amet minim occaecat. Adipisicing duis deserunt officia ad elit enim nostrud. Est ex proident esse laboris qui excepteur officia in fugiat nulla. Irure aliqua occaecat dolor dolor magna. Exercitation do occaecat consequat nostrud nulla occaecat. Culpa dolore consectetur nulla minim voluptate aute minim.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 7,
    "make": "voluptate",
    "model": "incididunt",
    "serial_num": "occaecat153F",
    "price": 5944,
    "description": "Anim tempor magna officia amet fugiat ipsum aute deserunt in. Est ipsum labore voluptate nisi anim sit eu ex non dolore. Irure minim cillum nulla dolore nisi ullamco Lorem.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 21,
    "make": "deserunt",
    "model": "adipisicing",
    "serial_num": "consequat66D",
    "price": 8236,
    "description": "Nisi aliquip culpa officia labore deserunt minim irure adipisicing enim cupidatat ea voluptate ea. Tempor commodo officia minim tempor incididunt excepteur. Amet id exercitation ullamco deserunt duis enim amet. Deserunt eiusmod Lorem eiusmod sunt sint excepteur sit excepteur. Exercitation deserunt fugiat aliqua non excepteur dolor sunt enim aliqua cupidatat excepteur nostrud. Magna velit anim consectetur quis nostrud sunt ad laboris adipisicing culpa exercitation.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 7,
    "make": "culpa",
    "model": "magna",
    "serial_num": "commodo219h",
    "price": 3296,
    "description": "Eu officia nulla amet dolor Lorem in. Do dolore esse non fugiat commodo amet proident duis do fugiat. Anim veniam aliqua do cillum reprehenderit mollit in. Est sit id deserunt tempor anim. Sit Lorem quis cupidatat aute deserunt id anim proident ut nisi esse Lorem elit ex.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 13,
    "make": "esse",
    "model": "esse",
    "serial_num": "non14K",
    "price": 5712,
    "description": "Voluptate quis mollit eu fugiat ex adipisicing ipsum enim magna non do velit. Esse aute ad Lorem ad nulla cillum veniam ut. Nisi voluptate anim minim ut laborum elit cillum non officia ut. Excepteur aliquip occaecat nisi veniam.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 5,
    "make": "sit",
    "model": "fugiat",
    "serial_num": "officia178B",
    "price": 5712,
    "description": "Adipisicing dolor proident enim deserunt et enim minim consectetur do Lorem laboris. Tempor dolore eu aliqua enim et duis sunt esse aute adipisicing Lorem sunt. Commodo nulla id quis est ad consequat commodo ullamco. Sit officia elit consequat ullamco aute velit mollit do. Non ea non qui magna dolor Lorem dolore dolore Lorem proident mollit.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 11,
    "make": "irure",
    "model": "qui",
    "serial_num": "ex212J",
    "price": 6119,
    "description": "Ea nostrud reprehenderit incididunt sunt pariatur et consequat fugiat laboris id ipsum. Ex id tempor eiusmod minim amet cupidatat ullamco deserunt. Deserunt elit esse reprehenderit pariatur esse magna elit exercitation. Ea incididunt aute anim occaecat aute pariatur adipisicing proident magna laboris ipsum dolor amet. Lorem enim duis laborum et occaecat laboris pariatur ipsum ipsum cupidatat voluptate. Eu enim eiusmod laborum amet ipsum magna.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 7,
    "make": "veniam",
    "model": "fugiat",
    "serial_num": "laboris241J",
    "price": 1558,
    "description": "Officia incididunt in est reprehenderit ipsum laboris. Consequat et do veniam ipsum. Fugiat deserunt do proident non culpa adipisicing nisi enim velit nisi reprehenderit minim in. Est ipsum sit ut magna reprehenderit commodo occaecat ea aute.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 6,
    "make": "laboris",
    "model": "ullamco",
    "serial_num": "velit112C",
    "price": 1266,
    "description": "Adipisicing labore consectetur ipsum reprehenderit cupidatat aliqua nostrud consequat. Anim sit aute dolore esse est. Sit pariatur nisi ut duis do pariatur labore Lorem elit ut. Id elit officia ullamco consectetur enim est dolore ad proident Lorem consectetur ad. Nostrud laboris nisi excepteur do id non eu do cillum officia veniam elit duis. Cillum laborum sint laboris laborum. Reprehenderit reprehenderit dolore cupidatat ut esse amet ad aute quis culpa sunt aute deserunt Lorem.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 20,
    "make": "ea",
    "model": "eu",
    "serial_num": "deserunt243A",
    "price": 9849,
    "description": "Reprehenderit reprehenderit amet irure irure nisi excepteur ad commodo nisi sint nulla id dolor. Velit dolor pariatur proident fugiat tempor. Tempor commodo officia laborum adipisicing. Enim veniam velit esse est id excepteur in velit qui enim adipisicing duis. Occaecat dolore magna ipsum sunt. Nisi nostrud sunt do mollit ex mollit cillum cupidatat et culpa qui nisi.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 2,
    "make": "cillum",
    "model": "cupidatat",
    "serial_num": "adipisicing113K",
    "price": 4060,
    "description": "Quis ad anim ea anim cillum quis amet. Sunt officia qui fugiat qui id ut ut voluptate voluptate. Amet culpa ipsum voluptate eiusmod. Labore commodo qui est pariatur ex et exercitation duis duis cupidatat deserunt eu magna est.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 9,
    "make": "ex",
    "model": "quis",
    "serial_num": "consectetur42g",
    "price": 2063,
    "description": "Nisi nulla reprehenderit aliqua ipsum voluptate. Sit laborum sint anim magna officia. Ea irure velit cupidatat quis culpa veniam duis Lorem occaecat anim. Irure fugiat tempor veniam mollit dolore Lorem proident aliqua esse.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 14,
    "make": "sunt",
    "model": "laborum",
    "serial_num": "cupidatat75e",
    "price": 6,
    "description": "Nulla ea mollit nulla occaecat id ipsum in tempor adipisicing. Reprehenderit excepteur labore deserunt tempor. Sit non duis qui officia cupidatat anim esse dolore. Laborum aute ut sunt nostrud sunt est reprehenderit deserunt ex. Eiusmod in amet anim aliqua sint voluptate anim mollit adipisicing ad.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 11,
    "make": "laboris",
    "model": "veniam",
    "serial_num": "nostrud91e",
    "price": 360,
    "description": "Nostrud sit eiusmod aliquip enim. Anim Lorem adipisicing sint enim irure excepteur. Sint esse Lorem non consequat.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 18,
    "make": "dolore",
    "model": "in",
    "serial_num": "ad76C",
    "price": 9652,
    "description": "Laborum ea cillum ut ipsum eu ullamco nisi exercitation dolor labore. Ipsum exercitation veniam exercitation qui anim aute duis in veniam duis minim id laborum deserunt. Ut culpa Lorem consectetur nisi dolore dolore cillum consequat. Ut nisi et et ut reprehenderit deserunt nulla ipsum magna. Aute exercitation velit esse sunt id magna tempor proident.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 14,
    "make": "eu",
    "model": "magna",
    "serial_num": "duis179e",
    "price": 3788,
    "description": "Velit magna cillum occaecat dolor occaecat exercitation Lorem labore cupidatat id qui est. Sit pariatur incididunt excepteur mollit excepteur adipisicing fugiat. Fugiat culpa mollit irure exercitation excepteur dolore excepteur laborum voluptate. Voluptate et mollit laborum pariatur do elit. In aute magna sunt amet eu magna eu nulla labore officia sunt minim dolor ullamco. Velit veniam Lorem mollit eu laboris minim tempor ipsum aute veniam.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 3,
    "make": "labore",
    "model": "nisi",
    "serial_num": "voluptate49e",
    "price": 858,
    "description": "Ea veniam eiusmod officia minim. Irure sint aliquip pariatur tempor qui officia sunt anim non. Non quis ullamco tempor voluptate reprehenderit quis aute.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 16,
    "make": "sint",
    "model": "proident",
    "serial_num": "cillum86C",
    "price": 7239,
    "description": "Cupidatat Lorem cupidatat ex nisi velit nostrud cupidatat incididunt consequat. Culpa aliquip esse aute enim exercitation occaecat non adipisicing duis. Ullamco amet pariatur amet aliquip laboris Lorem veniam anim laboris mollit anim minim. Dolor aliquip culpa cillum veniam irure laboris pariatur dolor in sint enim nulla. Aliquip et velit sit in qui tempor deserunt eu consequat occaecat eu commodo. Magna adipisicing sit elit ullamco occaecat velit. Reprehenderit consectetur incididunt pariatur excepteur Lorem id nisi non est.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 2,
    "make": "in",
    "model": "do",
    "serial_num": "incididunt22J",
    "price": 1313,
    "description": "Tempor amet voluptate velit enim laborum consectetur enim nostrud mollit. Exercitation tempor nulla mollit minim pariatur dolor ullamco ea ea irure et ullamco exercitation ad. Ea Lorem esse reprehenderit ullamco.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 4,
    "make": "qui",
    "model": "excepteur",
    "serial_num": "eiusmod159F",
    "price": 4059,
    "description": "Ad veniam anim exercitation nostrud do nisi reprehenderit excepteur cupidatat do cupidatat labore ipsum irure. Fugiat velit reprehenderit do qui esse. Eu adipisicing non cillum magna officia ut deserunt magna pariatur cillum consectetur enim ea. Culpa consectetur laboris ullamco quis velit eiusmod minim labore est exercitation ad. Deserunt Lorem officia laboris ipsum laborum aliquip exercitation culpa ad amet aliquip elit amet. Sint ad excepteur deserunt cupidatat cupidatat nostrud officia do et in.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 5,
    "make": "tempor",
    "model": "non",
    "serial_num": "est128C",
    "price": 8194,
    "description": "Veniam dolor sunt minim amet cupidatat deserunt sit. Voluptate incididunt fugiat aliquip est ea qui. Irure occaecat eu elit fugiat ipsum dolor adipisicing culpa enim. Et fugiat voluptate tempor ad et commodo consequat fugiat id sunt. Laboris ad commodo dolor magna consequat. Irure amet laborum labore Lorem cupidatat sint id. Reprehenderit velit do elit irure tempor fugiat ea ex.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 8,
    "make": "deserunt",
    "model": "duis",
    "serial_num": "ad215A",
    "price": 7374,
    "description": "Lorem duis velit quis commodo magna mollit incididunt occaecat est laboris pariatur eu voluptate. Consequat occaecat deserunt id consectetur aliqua qui id consequat aliquip nostrud aliqua dolor ea. Nostrud incididunt aute in proident labore veniam ex.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 4,
    "make": "labore",
    "model": "proident",
    "serial_num": "excepteur74K",
    "price": 6663,
    "description": "Aute officia eu sunt ea in. Sunt consectetur cupidatat non eiusmod. Laborum incididunt ea duis do laboris adipisicing cupidatat ad officia aute laborum ea aliquip velit. Excepteur aliqua sint dolor occaecat exercitation irure cillum et do.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 17,
    "make": "esse",
    "model": "reprehenderit",
    "serial_num": "fugiat118J",
    "price": 7001,
    "description": "Esse sint do voluptate mollit ullamco velit sit nostrud ad. In ullamco reprehenderit occaecat deserunt. Sint aliquip adipisicing in laborum ut laboris magna qui in qui nisi. Anim cupidatat sit aute sunt.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 3,
    "make": "dolore",
    "model": "tempor",
    "serial_num": "laboris146K",
    "price": 4695,
    "description": "Excepteur laborum labore veniam proident. Occaecat eu magna anim mollit culpa aliqua. Voluptate commodo magna ea pariatur Lorem aliqua duis.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 8,
    "make": "incididunt",
    "model": "irure",
    "serial_num": "Lorem145i",
    "price": 1735,
    "description": "Proident ut non pariatur ea mollit. Ullamco labore sint sit quis labore labore magna officia dolore enim sunt aliqua reprehenderit eu. In qui cillum in dolore fugiat deserunt proident do elit ea. Ipsum tempor eiusmod dolore sint excepteur fugiat. Excepteur deserunt voluptate excepteur non elit pariatur culpa eiusmod consequat velit do ea minim. In nulla nostrud laborum exercitation ex qui esse dolor Lorem.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 14,
    "make": "reprehenderit",
    "model": "anim",
    "serial_num": "cupidatat30F",
    "price": 8920,
    "description": "Commodo aute duis consequat laborum. Culpa deserunt occaecat id reprehenderit deserunt veniam fugiat ex laborum mollit excepteur exercitation dolor. Cillum ad occaecat minim sit tempor ullamco dolor aute nulla in magna magna sunt.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 14,
    "make": "culpa",
    "model": "exercitation",
    "serial_num": "Lorem55e",
    "price": 6092,
    "description": "Ipsum dolor magna qui aliquip est esse sit officia fugiat esse ad ad eiusmod ullamco. Et in aliqua minim ipsum quis ea exercitation nulla. Laboris duis voluptate sit sunt amet est reprehenderit consequat incididunt exercitation.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 12,
    "make": "nisi",
    "model": "id",
    "serial_num": "do183e",
    "price": 3701,
    "description": "Laborum sint velit qui et exercitation minim ea veniam in magna esse. Dolor fugiat dolore do irure. Est anim ut veniam amet nisi ut reprehenderit commodo labore elit ex. Incididunt dolore cupidatat Lorem anim aliquip adipisicing.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 12,
    "make": "Lorem",
    "model": "occaecat",
    "serial_num": "magna137B",
    "price": 1990,
    "description": "Fugiat officia irure Lorem ipsum nostrud nulla deserunt nulla est. Dolore nisi dolore laborum do. Qui sint qui cillum eu. Nulla nisi irure veniam amet nostrud laboris ut cupidatat culpa magna ut. Deserunt duis consectetur ex dolore ipsum culpa sit ipsum.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 3,
    "make": "proident",
    "model": "deserunt",
    "serial_num": "cupidatat147C",
    "price": 8206,
    "description": "Ut tempor laboris ut do officia id tempor velit laborum sit id consequat id. Deserunt qui esse et sit. Ea Lorem est id reprehenderit irure esse ea. Eu in non qui pariatur cillum anim id id laboris occaecat velit ad id. Sunt quis laborum anim non consequat veniam tempor.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 1,
    "make": "ipsum",
    "model": "ut",
    "serial_num": "dolor266J",
    "price": 9402,
    "description": "Ad commodo ex quis eu. Et esse nisi voluptate non nostrud sunt dolor exercitation et nostrud enim. Elit cillum do ipsum mollit consequat labore eiusmod mollit laboris esse pariatur duis quis.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 9,
    "make": "consectetur",
    "model": "labore",
    "serial_num": "excepteur221i",
    "price": 7683,
    "description": "Ex dolor velit occaecat labore aliquip est non officia sint ullamco excepteur. Exercitation deserunt culpa in cillum id eiusmod. Enim dolore ad ipsum quis aliqua ipsum commodo ea. Labore laboris ea excepteur labore occaecat esse nisi enim dolor. Dolore exercitation ex dolore commodo amet dolore.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 9,
    "make": "tempor",
    "model": "pariatur",
    "serial_num": "minim45A",
    "price": 7910,
    "description": "Duis in consequat occaecat velit culpa esse do cillum deserunt ad. Ipsum amet ad pariatur cupidatat ea deserunt sit proident mollit reprehenderit commodo. Cillum cillum mollit fugiat irure enim ipsum aliquip nisi.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 20,
    "make": "do",
    "model": "adipisicing",
    "serial_num": "irure252C",
    "price": 1355,
    "description": "Do occaecat proident ut commodo cupidatat cupidatat dolor anim labore voluptate incididunt ea. Non dolore laborum ex eu Lorem. Laboris ut quis sint cupidatat enim nisi eiusmod cillum. Labore veniam incididunt ipsum aliquip. Pariatur mollit ipsum cupidatat veniam et magna officia amet. Sit aliqua anim dolor nostrud.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 15,
    "make": "exercitation",
    "model": "veniam",
    "serial_num": "consectetur26g",
    "price": 2014,
    "description": "Dolor laborum eu exercitation reprehenderit adipisicing et mollit pariatur. Tempor veniam commodo dolor ut sunt magna consectetur laboris cupidatat. Velit elit dolor velit consequat cupidatat deserunt irure. Lorem labore ea eiusmod nulla ut quis sint enim laboris dolore aute nulla officia occaecat. Magna aliquip eu anim reprehenderit labore cupidatat aliquip. Quis cupidatat adipisicing et et non ex. Incididunt magna aliquip irure minim id duis consequat.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 20,
    "make": "fugiat",
    "model": "deserunt",
    "serial_num": "aliqua282D",
    "price": 8274,
    "description": "Tempor dolor do ut consectetur ad irure eu ad eiusmod exercitation non Lorem consectetur aliqua. Ea occaecat pariatur ad dolore magna veniam occaecat fugiat. Nostrud velit laborum commodo ex excepteur elit mollit elit qui in amet.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 8,
    "make": "laborum",
    "model": "ad",
    "serial_num": "irure226A",
    "price": 2261,
    "description": "Cupidatat fugiat dolor adipisicing cupidatat nisi adipisicing pariatur. Non Lorem nisi consequat voluptate dolore culpa veniam adipisicing magna voluptate nisi. Veniam culpa velit in ad id voluptate pariatur aliqua occaecat. Officia deserunt laboris fugiat dolor enim anim laborum culpa minim consectetur in in. Sint fugiat deserunt velit ipsum eiusmod elit eu aute. Aliquip id quis aute nisi tempor sit et reprehenderit.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 7,
    "make": "quis",
    "model": "id",
    "serial_num": "dolor266F",
    "price": 8827,
    "description": "Aute dolore duis exercitation sit aliquip. Reprehenderit eiusmod culpa consectetur est. Consectetur veniam consectetur sit excepteur officia. Laborum est duis deserunt tempor anim ullamco. Ipsum dolore quis ad nostrud proident deserunt commodo eu mollit et labore amet nostrud minim. Do aute labore amet culpa esse nostrud laborum. In irure do ex nulla enim ex duis occaecat nulla dolore cillum voluptate laborum.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 5,
    "make": "sit",
    "model": "laboris",
    "serial_num": "velit126g",
    "price": 8304,
    "description": "Ut consectetur deserunt exercitation ad sunt nulla excepteur consequat. Dolore culpa sit magna eu do cupidatat aliquip amet qui ea. Sit magna do deserunt mollit dolor.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 7,
    "make": "duis",
    "model": "consequat",
    "serial_num": "officia207J",
    "price": 6724,
    "description": "Consectetur ipsum elit mollit in in duis non Lorem cupidatat nostrud sint aute occaecat. Aliqua velit exercitation cupidatat nostrud mollit mollit elit aliqua labore ad duis. Aliqua exercitation laborum amet laborum nulla aliqua sunt magna. Dolore velit dolor do Lorem amet ipsum fugiat nostrud sit ut mollit labore veniam commodo. Duis eiusmod voluptate laborum sint consectetur culpa ullamco non enim veniam fugiat ipsum do proident. Qui voluptate amet esse deserunt ex cillum nostrud. Sint laboris excepteur in deserunt.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 9,
    "make": "voluptate",
    "model": "incididunt",
    "serial_num": "sint273e",
    "price": 8726,
    "description": "Labore occaecat nostrud consectetur voluptate magna elit esse. Fugiat officia do nulla cillum ex occaecat qui nulla. Commodo Lorem laborum fugiat pariatur dolore adipisicing aliquip exercitation labore eu officia. Fugiat eiusmod laborum incididunt nulla occaecat labore esse irure dolor reprehenderit officia fugiat anim elit. Nostrud ad ipsum voluptate aliqua cupidatat ex nostrud duis. Velit ex occaecat est non est excepteur irure voluptate qui deserunt.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 9,
    "make": "qui",
    "model": "sit",
    "serial_num": "ut139i",
    "price": 9863,
    "description": "Nulla eiusmod mollit est commodo dolor culpa nostrud. Ea reprehenderit amet nisi aliquip ad cupidatat ut consectetur eu amet quis sint. Eu sit ullamco dolore quis commodo anim est deserunt eiusmod excepteur ut Lorem officia. Ipsum qui magna deserunt mollit veniam. Proident duis nisi amet amet nulla reprehenderit do occaecat voluptate qui sint proident velit. Nostrud deserunt ea duis do cupidatat. Velit et do eiusmod ad ipsum.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 14,
    "make": "esse",
    "model": "ea",
    "serial_num": "deserunt206K",
    "price": 4858,
    "description": "Amet fugiat nisi veniam amet Lorem ex nostrud deserunt anim. Ut nostrud sint excepteur tempor quis non dolore. Minim dolore minim minim velit minim do quis irure nostrud ullamco tempor laborum cupidatat reprehenderit. In deserunt veniam aliqua anim cupidatat quis velit qui nulla ipsum. Commodo deserunt adipisicing duis qui sint pariatur elit dolore reprehenderit excepteur dolor. Duis nostrud voluptate anim fugiat deserunt laborum officia eu voluptate eu pariatur cillum commodo. Cillum in et aliquip incididunt ut ullamco pariatur irure esse voluptate minim.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 19,
    "make": "id",
    "model": "cupidatat",
    "serial_num": "commodo136J",
    "price": 4279,
    "description": "Nisi ipsum adipisicing irure sit ullamco cupidatat minim qui eiusmod quis duis proident in laboris. Deserunt ea minim ut mollit cillum cillum exercitation sit ex voluptate aute consectetur amet. Nulla tempor sit fugiat id minim reprehenderit tempor. Aliquip ipsum laborum dolore veniam tempor. Ullamco laboris anim officia excepteur irure qui reprehenderit in non quis voluptate aliquip nulla consectetur. Et est labore non labore deserunt.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 10,
    "make": "excepteur",
    "model": "fugiat",
    "serial_num": "officia21F",
    "price": 2960,
    "description": "Velit ipsum veniam voluptate incididunt qui anim incididunt. Labore irure irure proident magna non deserunt magna laborum laborum laborum reprehenderit sit ex laboris. Occaecat minim mollit consequat commodo ipsum excepteur culpa exercitation deserunt. Velit nulla duis magna laboris aliquip incididunt deserunt elit ea cillum excepteur non. Mollit minim aute ad incididunt duis sit ipsum cupidatat velit.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 16,
    "make": "sunt",
    "model": "esse",
    "serial_num": "adipisicing171i",
    "price": 8001,
    "description": "Ex duis nostrud officia incididunt dolore ullamco amet deserunt. Ad laboris proident dolor velit culpa anim ullamco do dolore minim nostrud. Dolore est deserunt commodo ea reprehenderit aute elit enim dolore id esse culpa. Exercitation quis cupidatat velit Lorem ipsum elit enim exercitation ad excepteur. Minim mollit tempor nostrud ex. Minim dolore qui sint ad do sit. Consectetur sunt nostrud laborum ut incididunt ut quis proident ea pariatur minim veniam.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 11,
    "make": "ex",
    "model": "incididunt",
    "serial_num": "fugiat116B",
    "price": 2448,
    "description": "Ad eu velit reprehenderit irure ipsum ullamco dolore aliqua amet anim sit. Non aliqua nulla ipsum cupidatat velit commodo deserunt cillum id ea duis culpa deserunt. Consectetur laboris pariatur officia eu tempor ex ad. Aliqua nulla reprehenderit veniam aute esse. Dolore anim consequat ut id irure ex nulla magna sunt consectetur officia. Proident labore nisi ullamco aliquip deserunt minim qui exercitation. Sint nostrud est officia voluptate et consectetur ut laborum incididunt enim.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 20,
    "make": "anim",
    "model": "tempor",
    "serial_num": "nisi167i",
    "price": 7663,
    "description": "Officia elit exercitation voluptate veniam exercitation ut ea et proident ea laboris reprehenderit tempor esse. Id veniam labore anim labore ea sunt. Aute nostrud culpa eiusmod fugiat qui id aliquip ex Lorem reprehenderit cillum eu commodo cupidatat. Non ut ea consequat commodo veniam ut. Adipisicing sit velit sint quis. Deserunt mollit consequat sint tempor cillum velit est ut.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 14,
    "make": "sint",
    "model": "veniam",
    "serial_num": "deserunt167F",
    "price": 7963,
    "description": "Consequat voluptate non id deserunt ad. Quis veniam aute qui ea dolor do veniam ullamco nisi sunt duis pariatur elit culpa. Pariatur veniam deserunt aute deserunt ullamco occaecat irure sint ut cupidatat proident irure. Deserunt adipisicing irure voluptate deserunt consequat consectetur.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 2,
    "make": "aute",
    "model": "incididunt",
    "serial_num": "esse154F",
    "price": 8282,
    "description": "Adipisicing officia aute consequat fugiat ut sunt enim. Quis consectetur non quis consequat veniam laborum cillum. Ad cupidatat dolore sunt commodo est pariatur minim Lorem esse enim occaecat. Ad sint magna nisi id.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 14,
    "make": "incididunt",
    "model": "aliquip",
    "serial_num": "quis86F",
    "price": 2738,
    "description": "Labore elit qui exercitation dolore magna officia nulla mollit eu aliquip id amet incididunt sint. Aliqua aliqua laboris excepteur sit excepteur occaecat exercitation ea in adipisicing reprehenderit consectetur. Est commodo magna occaecat deserunt sint ipsum excepteur. Nostrud ex aute ea et enim quis qui est aute nisi. Nulla exercitation occaecat laborum sint aliqua labore ea non ex. Fugiat sit consequat ullamco amet magna.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 17,
    "make": "quis",
    "model": "culpa",
    "serial_num": "Lorem175i",
    "price": 9431,
    "description": "Magna occaecat veniam sunt eiusmod magna et sint. Exercitation ex pariatur ad tempor tempor occaecat ex amet incididunt minim et laboris. Eu nulla occaecat enim commodo sit id. Ipsum reprehenderit laboris ea consectetur sunt aliquip sint.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 3,
    "make": "dolor",
    "model": "commodo",
    "serial_num": "minim66i",
    "price": 6982,
    "description": "Voluptate amet irure consequat quis excepteur aliquip tempor Lorem excepteur excepteur sit fugiat cillum anim. Ullamco eu nulla reprehenderit do nisi duis aliqua nisi exercitation. Eu commodo nostrud Lorem ad eu laboris mollit nisi id occaecat voluptate. Dolore dolore deserunt qui magna magna exercitation ad culpa. Veniam esse incididunt minim veniam non eu. Cupidatat sit id minim irure elit ipsum mollit fugiat cillum ipsum consectetur dolor.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 19,
    "make": "et",
    "model": "ut",
    "serial_num": "Lorem242h",
    "price": 690,
    "description": "Ipsum ipsum culpa mollit est laboris deserunt officia in duis magna aute aliquip exercitation eu. Officia qui minim voluptate enim dolor. Duis tempor ad minim labore Lorem. Consectetur do id do anim cupidatat laboris veniam adipisicing esse eiusmod. Cupidatat pariatur qui excepteur nulla consectetur reprehenderit sit. Sunt consequat est excepteur qui proident cupidatat magna veniam non minim dolor non.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 13,
    "make": "adipisicing",
    "model": "dolore",
    "serial_num": "consectetur111g",
    "price": 8336,
    "description": "Aliquip veniam do nulla sit laboris laboris nisi eu et. Ad fugiat sint pariatur ad duis excepteur ea Lorem. Qui consequat irure ullamco ipsum commodo nisi et non minim irure fugiat minim eu pariatur. Nostrud minim do ex consectetur reprehenderit deserunt in ipsum sint. Duis reprehenderit esse excepteur aute non velit aliquip sit nostrud adipisicing. Fugiat reprehenderit id aute est.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 6,
    "make": "ut",
    "model": "qui",
    "serial_num": "enim80g",
    "price": 4921,
    "description": "Aute elit adipisicing eiusmod non nisi ut sunt in reprehenderit ipsum ad ullamco non ipsum. Consectetur mollit pariatur adipisicing minim consectetur laboris deserunt irure amet enim duis voluptate. Ipsum est amet occaecat excepteur consequat irure cillum ullamco ut. Ad adipisicing quis occaecat occaecat deserunt id esse amet enim exercitation ex ullamco. Eiusmod aliqua duis officia reprehenderit labore voluptate. Dolor officia incididunt est deserunt excepteur. Enim fugiat excepteur laborum est non eiusmod proident excepteur mollit laborum consequat qui culpa.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 19,
    "make": "est",
    "model": "cupidatat",
    "serial_num": "laborum276A",
    "price": 9259,
    "description": "Voluptate non labore fugiat dolor labore in sint culpa qui aliqua. Magna labore sint commodo culpa aute pariatur aute excepteur sit reprehenderit do velit eu adipisicing. Amet magna laboris excepteur dolor velit dolore non eiusmod id nulla nostrud esse nulla magna.\r\n"
  }
]
]);
    });
};
