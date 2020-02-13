
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('archive_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('archive_items').insert([
  {
    "user_id": 2,
    "type_id": 8,
    "make": "Comtours",
    "model": "",
    "serial_num": 1265,
    "price": 9875,
    "description": "Qui laborum non anim laboris consequat fugiat mollit esse. Non dolor esse laboris ullamco deserunt. Culpa id duis occaecat magna eiusmod sint sit ad et elit elit Lorem proident. Duis exercitation reprehenderit anim mollit ex in cillum. Qui sit minim occaecat dolor occaecat commodo. Duis sit proident do et mollit irure duis pariatur aliquip ad.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 6,
    "make": "Insuresys",
    "model": "",
    "serial_num": 7164,
    "price": 482,
    "description": "Consectetur ex mollit id laboris laboris duis veniam reprehenderit cupidatat. Pariatur proident mollit velit officia mollit laborum Lorem Lorem culpa adipisicing tempor. Ipsum labore exercitation exercitation aliquip qui consectetur ad in consectetur sunt. Eiusmod officia nostrud ullamco esse ullamco exercitation eiusmod enim fugiat amet.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 1,
    "make": "Filodyne",
    "model": "",
    "serial_num": 60321,
    "price": 3437,
    "description": "Sunt Lorem magna cupidatat labore. Consequat ad occaecat aliqua dolor qui. Velit nisi fugiat nostrud do est ad cupidatat ullamco ea.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 8,
    "make": "Handshake",
    "model": "",
    "serial_num": 31129,
    "price": 2800,
    "description": "Magna dolore veniam est reprehenderit. Aliquip aliquip dolor laborum id. Cillum ex tempor dolore consectetur ad excepteur. Consequat tempor voluptate commodo labore adipisicing adipisicing ea anim anim. Reprehenderit culpa ipsum sit elit dolore fugiat quis. Nulla veniam deserunt minim esse elit aute ipsum ea deserunt id sunt culpa commodo. Fugiat tempor irure sit officia aute qui.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 8,
    "make": "Zidox",
    "model": "",
    "serial_num": 8577,
    "price": 8287,
    "description": "Eiusmod irure incididunt ullamco commodo aliquip laborum ex aliqua sunt anim velit consectetur laborum elit. Enim ipsum eiusmod voluptate pariatur. Aliqua dolor quis tempor irure ullamco sunt do. In cillum nisi dolore nostrud aliquip non voluptate officia. Nulla ullamco est commodo ipsum magna reprehenderit ex voluptate. Proident dolor et dolore quis. Ex excepteur nisi Lorem mollit esse.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 4,
    "make": "Zialactic",
    "model": "",
    "serial_num": 42215,
    "price": 6625,
    "description": "Eu cupidatat sint velit aliqua exercitation commodo duis qui amet consequat. Aute nisi minim irure est nostrud consequat ea aute. Lorem adipisicing in culpa Lorem pariatur. Adipisicing amet sint culpa non qui sunt id labore excepteur eiusmod.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 2,
    "make": "Tubesys",
    "model": "",
    "serial_num": 93496,
    "price": 9184,
    "description": "Mollit ea commodo nostrud ipsum ut ullamco mollit consectetur eiusmod ad dolore dolor. Cupidatat adipisicing sunt Lorem magna qui ea minim id laboris incididunt. Magna laborum id id non Lorem Lorem Lorem minim et esse ea pariatur.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "Blurrybus",
    "model": "",
    "serial_num": 71431,
    "price": 2192,
    "description": "Sunt duis proident enim pariatur duis laborum sunt proident. Proident velit qui ullamco ut consectetur sint aute aliqua laborum cupidatat voluptate exercitation proident quis. Incididunt mollit Lorem nulla Lorem minim cupidatat occaecat Lorem nostrud. Commodo duis est ut cupidatat reprehenderit. Eu deserunt ullamco commodo tempor exercitation consequat exercitation duis aliqua nisi est elit nulla. Consequat tempor ex sunt nostrud proident ipsum sint proident deserunt sit Lorem ad.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 7,
    "make": "Soprano",
    "model": "",
    "serial_num": 2448,
    "price": 7726,
    "description": "Anim duis quis ex velit. Eu dolor dolore aliqua exercitation culpa enim dolor. Esse nulla amet occaecat adipisicing ullamco adipisicing est nostrud pariatur sit.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 3,
    "make": "Tingles",
    "model": "",
    "serial_num": 6352,
    "price": 4440,
    "description": "Dolor ad minim laboris velit ut commodo. Qui nostrud anim aute aliqua nisi veniam cupidatat sint consectetur irure. Exercitation sunt adipisicing Lorem aute eu reprehenderit mollit ea sunt minim nulla eu. Commodo excepteur sint exercitation quis ea dolore qui veniam velit non anim. Et reprehenderit amet sint occaecat aute ullamco aute. Minim cupidatat ad cupidatat deserunt eiusmod excepteur veniam laborum labore ea cupidatat minim nostrud adipisicing. Excepteur sunt esse mollit mollit irure fugiat nisi aliqua excepteur duis ipsum nisi.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 2,
    "make": "Candecor",
    "model": "",
    "serial_num": 1257,
    "price": 9346,
    "description": "In proident excepteur et elit sunt cillum eu est culpa nulla proident. Veniam irure voluptate reprehenderit commodo irure irure aliquip nulla. Qui eiusmod magna qui dolore cillum. Veniam est ipsum laboris eu nostrud proident voluptate quis dolor cillum eu commodo magna laborum. Consequat velit voluptate elit esse aliquip tempor ullamco est velit est pariatur eu est anim. Ipsum proident in anim tempor anim ut reprehenderit Lorem.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 8,
    "make": "Anarco",
    "model": "",
    "serial_num": 54140,
    "price": 5117,
    "description": "Culpa fugiat cupidatat sit adipisicing. Esse eiusmod ad non dolor in nostrud consequat dolor. Consectetur ut et deserunt id in excepteur commodo sit in. Nisi sunt sint esse aliqua irure. Irure pariatur nisi consequat adipisicing amet duis veniam ea nulla nulla dolor in do ipsum. Velit excepteur ea ullamco nostrud. Culpa labore ipsum irure consectetur deserunt nostrud.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 1,
    "make": "Exotechno",
    "model": "",
    "serial_num": 3327,
    "price": 6513,
    "description": "Id Lorem ex cillum cupidatat. Dolore dolor nulla eu fugiat in magna et veniam deserunt reprehenderit minim ea. In voluptate aliqua id exercitation mollit cillum in esse nisi ea mollit dolor commodo duis. Sunt consectetur elit ea fugiat dolor.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 3,
    "make": "Lovepad",
    "model": "",
    "serial_num": 31241,
    "price": 7798,
    "description": "Ipsum ullamco excepteur do eu. Voluptate cupidatat consectetur anim enim esse velit ipsum officia proident. Est amet sint exercitation commodo aute tempor qui sit. Veniam ullamco ex magna amet mollit reprehenderit veniam cupidatat commodo id velit sint aliquip duis. Labore consequat commodo fugiat ut commodo. Elit exercitation dolore sit sunt esse. Enim incididunt deserunt nisi occaecat adipisicing tempor irure sint id incididunt occaecat.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 2,
    "make": "Stockpost",
    "model": "",
    "serial_num": 97197,
    "price": 2968,
    "description": "Minim elit adipisicing aliquip cupidatat occaecat est reprehenderit eiusmod do adipisicing dolor. Ipsum dolor id excepteur dolore est aute labore sit laboris irure deserunt adipisicing dolore elit. Aute laboris fugiat fugiat proident ipsum laboris pariatur cillum et ad. Occaecat dolor commodo ad enim exercitation ut.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 1,
    "make": "Insectus",
    "model": "",
    "serial_num": 99130,
    "price": 770,
    "description": "Eiusmod ullamco dolor pariatur est cillum magna ullamco occaecat esse deserunt sint aute amet est. Est do minim ut ipsum proident labore veniam. Nisi ullamco officia mollit voluptate aliquip aliqua. Id nisi sint reprehenderit elit aliqua dolore duis cillum eu id nostrud quis est adipisicing. Irure tempor id do consequat. Ullamco adipisicing aliquip in commodo aute in amet incididunt elit voluptate. Eiusmod ea eiusmod incididunt cillum in fugiat proident tempor aliquip cupidatat et ad ullamco id.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 6,
    "make": "Roboid",
    "model": "",
    "serial_num": 52164,
    "price": 1302,
    "description": "Nulla velit elit ad fugiat veniam eu esse nulla laborum nisi reprehenderit et tempor mollit. Sint occaecat cupidatat laboris minim officia tempor sint laboris Lorem non ullamco laborum. Lorem quis fugiat Lorem ullamco ullamco veniam. Ad aliqua anim tempor labore officia fugiat consectetur sunt et sunt. Reprehenderit culpa adipisicing aute irure.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 6,
    "make": "Accuprint",
    "model": "",
    "serial_num": 8831,
    "price": 4772,
    "description": "Culpa quis anim ex do Lorem labore velit cupidatat mollit voluptate laboris dolore velit excepteur. Deserunt laborum occaecat sint dolore adipisicing proident excepteur in. Veniam eiusmod ad enim excepteur incididunt voluptate deserunt aliqua occaecat cillum nulla id. Laboris ad occaecat ullamco voluptate nulla fugiat proident ipsum esse. Reprehenderit ipsum culpa culpa voluptate excepteur nostrud ea. Ad reprehenderit dolore dolore nulla deserunt eu reprehenderit adipisicing non anim occaecat consectetur.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 6,
    "make": "Cinaster",
    "model": "",
    "serial_num": 25189,
    "price": 3615,
    "description": "Laborum amet in sint sint nostrud enim cillum veniam laboris incididunt sint non. Irure veniam pariatur cillum deserunt adipisicing labore id commodo aute labore ex occaecat deserunt nulla. Dolore elit deserunt ex reprehenderit incididunt magna. Officia cillum exercitation officia cillum reprehenderit velit deserunt veniam consequat culpa ut qui est fugiat.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 7,
    "make": "Utarian",
    "model": "",
    "serial_num": 2084,
    "price": 5228,
    "description": "Officia nostrud culpa laboris ut consectetur. Mollit laborum pariatur ipsum sunt labore pariatur nulla. Deserunt minim pariatur eiusmod non aliqua proident veniam ullamco tempor nulla nulla. Eu commodo nostrud velit minim est.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 4,
    "make": "Entropix",
    "model": "",
    "serial_num": 81144,
    "price": 5952,
    "description": "In quis minim reprehenderit voluptate ut esse dolor eu elit. Cillum et dolore sit duis exercitation aliqua quis anim excepteur non ad mollit anim. Sit enim exercitation magna sit cillum mollit laborum aute irure occaecat. Et aliquip laborum minim et dolor commodo magna esse velit amet.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 4,
    "make": "Sonique",
    "model": "",
    "serial_num": 9592,
    "price": 4217,
    "description": "Mollit non quis mollit amet velit veniam dolore proident nostrud exercitation ad in. Cillum et aliquip nisi eiusmod in excepteur nisi ullamco nisi ea dolore et. Sint aliquip id sint esse irure est tempor velit et sit commodo. Fugiat consectetur sit minim ipsum adipisicing et aliquip proident Lorem laborum reprehenderit. Ullamco dolore do consequat labore proident non eiusmod adipisicing est incididunt velit sint. Excepteur commodo quis culpa ad pariatur irure labore cupidatat officia occaecat ea nisi. Elit velit cupidatat amet ex est irure enim occaecat magna.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 4,
    "make": "Xerex",
    "model": "",
    "serial_num": 29317,
    "price": 1308,
    "description": "Id minim consectetur magna exercitation aliqua ea. Cupidatat Lorem proident sint voluptate aliquip occaecat laboris ut eiusmod ex do dolor dolore amet. Fugiat consequat magna sunt voluptate occaecat est minim Lorem est. Nostrud ex aute ex officia amet laborum tempor ullamco eu veniam. Labore aliquip Lorem culpa ut consequat amet ut exercitation.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 7,
    "make": "Qimonk",
    "model": "",
    "serial_num": 37470,
    "price": 6061,
    "description": "Pariatur in incididunt tempor labore sit excepteur quis qui consectetur et commodo laboris aliqua ad. Qui consequat est minim quis pariatur elit esse nostrud labore mollit Lorem quis eiusmod. Quis aliquip anim eiusmod incididunt fugiat consectetur minim do labore. Qui eiusmod eiusmod anim ea deserunt. Dolor esse sint ad fugiat do aute. Reprehenderit duis elit magna in excepteur enim nostrud non Lorem cupidatat do. Deserunt duis minim tempor dolore fugiat consectetur do quis aliqua.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 1,
    "make": "Ecrater",
    "model": "",
    "serial_num": 1365,
    "price": 5492,
    "description": "Qui Lorem consequat esse officia ad officia do enim cupidatat nulla ad pariatur. Deserunt consectetur ex esse eu duis proident labore. Nisi commodo ut qui non mollit enim ipsum commodo cillum in. Labore labore deserunt ea ea.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 2,
    "make": "Locazone",
    "model": "",
    "serial_num": 49322,
    "price": 66,
    "description": "Sint velit commodo veniam non dolore ea pariatur ea nostrud ea commodo. Fugiat consequat cupidatat voluptate irure ut Lorem adipisicing eiusmod voluptate laborum reprehenderit anim ipsum do. Magna et nulla non excepteur et proident nostrud ad ipsum. Ad ipsum dolor ut cillum tempor laboris esse. Et duis consequat elit mollit eiusmod amet exercitation ex proident et labore ad non. Ullamco Lorem commodo consectetur velit laboris velit ullamco occaecat.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 8,
    "make": "Hawkster",
    "model": "",
    "serial_num": 5253,
    "price": 6713,
    "description": "Nostrud sunt elit culpa velit eiusmod qui elit. Duis nisi ipsum aute aliqua ipsum velit esse fugiat aute fugiat fugiat. Proident adipisicing est irure ea elit laboris ullamco tempor proident. Esse nostrud reprehenderit commodo irure ut sit amet quis. Irure laboris qui laborum est id magna id officia duis anim est Lorem. Magna proident nisi velit anim aute eiusmod commodo. Nostrud ea eiusmod exercitation aliqua aliquip deserunt officia tempor ex laborum occaecat labore ipsum nostrud.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 8,
    "make": "Nurplex",
    "model": "",
    "serial_num": 52439,
    "price": 3213,
    "description": "Nisi est consequat deserunt dolor nisi in dolor non non qui pariatur adipisicing. Laborum irure et excepteur nulla irure mollit amet amet aliquip nulla mollit aute et sunt. Pariatur non laboris aliquip cupidatat. Ea adipisicing dolor incididunt sint deserunt sint anim mollit tempor aliquip esse commodo est.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 7,
    "make": "Quarx",
    "model": "",
    "serial_num": 67249,
    "price": 9388,
    "description": "Id reprehenderit nulla nisi voluptate excepteur aliqua aliqua magna. Proident aute ad ex sit labore dolor labore elit veniam labore deserunt quis in ad. Irure anim cillum aute consequat sint reprehenderit id adipisicing culpa amet fugiat reprehenderit aliqua veniam.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 6,
    "make": "Dymi",
    "model": "",
    "serial_num": 87445,
    "price": 6184,
    "description": "Mollit minim in tempor qui ullamco esse veniam deserunt. Elit laboris amet consequat eiusmod reprehenderit quis enim aute cupidatat esse culpa fugiat. Culpa adipisicing eiusmod incididunt officia dolore aute excepteur voluptate est exercitation laborum. Duis pariatur consequat tempor commodo ipsum non consequat. Consectetur culpa aliqua non exercitation incididunt anim duis ex aute. Occaecat laboris sint deserunt ullamco cillum id est elit id enim ut laborum.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 7,
    "make": "Rodeomad",
    "model": "",
    "serial_num": 55370,
    "price": 9263,
    "description": "Cillum eiusmod nisi irure ea eu irure in id ea cupidatat. Irure pariatur commodo exercitation veniam consequat sit velit mollit culpa exercitation ea ea deserunt nostrud. Do nulla dolor velit excepteur ad exercitation deserunt aliquip consequat.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 3,
    "make": "Peticular",
    "model": "",
    "serial_num": 30433,
    "price": 6937,
    "description": "Incididunt nulla adipisicing elit labore. Adipisicing cupidatat anim exercitation amet nostrud in Lorem deserunt. Est et irure do in fugiat dolore minim esse fugiat velit consectetur est elit voluptate. Ea qui irure do tempor consectetur laboris culpa. Quis eu Lorem commodo irure. Magna duis ad commodo dolore culpa aute est. Exercitation est cupidatat ex minim adipisicing sint veniam fugiat exercitation quis tempor nisi nisi cupidatat.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 7,
    "make": "Zomboid",
    "model": "",
    "serial_num": 67367,
    "price": 9852,
    "description": "Nulla dolore aliquip consequat aute ut ea eu consequat veniam aliquip non eiusmod cillum ipsum. Laboris aliquip aliqua aliquip occaecat exercitation laborum do consectetur eu veniam eu anim occaecat id. Elit dolore et ad nisi in amet. Consequat quis non ut enim fugiat in excepteur est.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 1,
    "make": "Geeknet",
    "model": "",
    "serial_num": 89275,
    "price": 6028,
    "description": "Ullamco et laboris incididunt cillum labore nostrud ex. Occaecat reprehenderit amet pariatur magna amet velit labore magna dolor aliquip dolor. Proident irure quis duis ut incididunt officia deserunt aute. Tempor commodo et dolor tempor do.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 3,
    "make": "Enormo",
    "model": "",
    "serial_num": 93369,
    "price": 3828,
    "description": "Veniam excepteur labore esse labore cupidatat sit ut elit sunt adipisicing sint est mollit dolor. Cillum et anim duis cupidatat veniam dolore ad consectetur deserunt aliqua dolore voluptate occaecat tempor. Ipsum ullamco minim et consectetur.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 3,
    "make": "Keengen",
    "model": "",
    "serial_num": 17461,
    "price": 5638,
    "description": "Duis mollit aliqua qui irure et laborum sit id do mollit consequat velit fugiat. Ex do nostrud commodo pariatur consequat ipsum incididunt fugiat dolore dolor ipsum. Nulla exercitation duis consequat labore aute. Nostrud et consectetur sunt consectetur amet. Nulla sunt deserunt in deserunt culpa do incididunt ullamco minim. Do enim aute in consequat nisi nulla. In voluptate dolore ex ex elit magna.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 7,
    "make": "Zentility",
    "model": "",
    "serial_num": 15172,
    "price": 3972,
    "description": "Laborum laborum aliqua ex aute laborum ex. Nostrud culpa excepteur dolore culpa adipisicing non in dolore ut cillum exercitation labore elit consequat. Enim elit deserunt laborum irure proident pariatur non consectetur eiusmod. Fugiat commodo voluptate minim aliqua mollit sint esse aliqua enim irure dolore sint laborum sit. Eiusmod qui laborum occaecat est reprehenderit eiusmod consequat magna quis voluptate labore ipsum. Sint esse cupidatat excepteur Lorem dolor laboris voluptate sit nostrud.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 3,
    "make": "Cytrex",
    "model": "",
    "serial_num": 10120,
    "price": 7930,
    "description": "Lorem in anim eu duis nostrud minim amet deserunt sint reprehenderit. Dolore culpa sunt in aliquip magna est labore. Aliqua anim incididunt qui aliqua ullamco sint id quis enim pariatur quis consectetur. Ullamco ipsum commodo qui labore elit adipisicing consequat. Anim est nostrud veniam et incididunt pariatur nulla proident. Fugiat eu fugiat fugiat cupidatat anim ea commodo ullamco reprehenderit id ut.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 5,
    "make": "Zolarity",
    "model": "",
    "serial_num": 7443,
    "price": 3068,
    "description": "Nostrud cupidatat ex consequat enim amet commodo minim duis et quis est do proident ea. Elit aliqua et minim velit ipsum adipisicing non nostrud elit sunt in incididunt deserunt. Consectetur exercitation elit nostrud labore mollit esse consectetur occaecat ad consequat veniam. Aliquip do elit velit laborum nulla in excepteur occaecat consectetur sunt. Commodo non voluptate in enim fugiat adipisicing minim in eiusmod sunt cillum commodo aliqua. Incididunt excepteur laboris cupidatat id laboris dolor laboris consectetur elit commodo proident. Incididunt adipisicing culpa laboris nostrud sint pariatur laboris anim voluptate reprehenderit eu aliqua eu laborum.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 8,
    "make": "Honotron",
    "model": "",
    "serial_num": 31442,
    "price": 9489,
    "description": "Do amet occaecat id qui anim est exercitation consectetur reprehenderit anim non. Consequat sunt magna consequat velit sint. Nulla et eiusmod officia cupidatat dolor sint proident duis consequat culpa tempor nostrud. Duis quis officia velit pariatur consectetur nulla.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 8,
    "make": "Quinex",
    "model": "",
    "serial_num": 69392,
    "price": 7936,
    "description": "Enim ut sunt adipisicing sit adipisicing deserunt sunt ipsum magna eiusmod. Magna aliquip magna deserunt proident velit pariatur occaecat in. Excepteur dolor ad sint sint id commodo do consectetur deserunt aliquip elit amet esse ex. Voluptate commodo consectetur ullamco aute elit. Sit adipisicing duis labore quis tempor incididunt qui quis aute esse aliquip aliqua. Aliquip dolore pariatur id est.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 2,
    "make": "Katakana",
    "model": "",
    "serial_num": 35285,
    "price": 4583,
    "description": "Amet deserunt tempor tempor cillum. Officia in elit excepteur non ea esse amet eiusmod exercitation do magna. Tempor amet dolor enim sunt aliquip sunt cillum proident tempor ullamco officia. Pariatur enim aliquip aliqua sit duis est laborum aliqua eiusmod laboris et aliquip dolor est. Laborum ut minim culpa excepteur deserunt voluptate quis nulla. Duis esse qui aute pariatur do sit deserunt. Laboris officia culpa in laboris.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 8,
    "make": "Exiand",
    "model": "",
    "serial_num": 2491,
    "price": 1093,
    "description": "Nostrud commodo ex aliqua sunt ut sint consectetur exercitation Lorem. Ut fugiat veniam pariatur qui aliquip. Cillum enim enim sint sunt consectetur esse sint velit ea eiusmod dolore amet. Sit occaecat minim aute qui ullamco minim duis velit est labore ullamco. Nisi est esse magna duis incididunt sunt mollit reprehenderit eu non fugiat culpa elit. Velit exercitation irure minim nostrud. Eiusmod ullamco in velit deserunt mollit duis esse sint enim exercitation in deserunt elit pariatur.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 4,
    "make": "Quilch",
    "model": "",
    "serial_num": 8327,
    "price": 1027,
    "description": "Adipisicing officia sunt et nisi qui elit eu magna occaecat dolor ad Lorem reprehenderit proident. Anim nulla adipisicing nulla velit. Adipisicing proident velit aliquip nostrud in proident sit duis in.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 3,
    "make": "Zork",
    "model": "",
    "serial_num": 50487,
    "price": 3461,
    "description": "Nostrud in eu adipisicing quis sunt sit et. Veniam labore duis id sit ad nostrud aliqua id Lorem eu exercitation consectetur pariatur ut. Eu non reprehenderit eu minim irure esse magna esse velit culpa non ipsum amet. Non fugiat dolor esse labore adipisicing laborum aute excepteur.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 8,
    "make": "Rameon",
    "model": "",
    "serial_num": 39324,
    "price": 7111,
    "description": "Laborum culpa cupidatat fugiat officia labore ex irure commodo deserunt. Esse quis eu consectetur ut ex voluptate mollit do mollit amet ullamco sunt. Lorem elit sunt culpa qui anim dolore.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 6,
    "make": "Proxsoft",
    "model": "",
    "serial_num": 10422,
    "price": 2631,
    "description": "Consequat dolore officia occaecat non pariatur. Dolore esse nostrud ea sunt cillum voluptate ea qui qui sint ullamco esse pariatur incididunt. Nisi adipisicing tempor Lorem ea dolore ad. Veniam Lorem officia culpa reprehenderit nisi reprehenderit ut ea enim Lorem Lorem tempor. Nostrud veniam ipsum commodo incididunt consectetur officia eiusmod officia minim ea velit anim commodo.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 6,
    "make": "Equicom",
    "model": "",
    "serial_num": 7490,
    "price": 8662,
    "description": "Sit tempor id nisi ex commodo. Sint nostrud fugiat do velit in aliquip culpa veniam. Magna aliqua in aliqua ad labore exercitation cillum et officia pariatur.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 4,
    "make": "Besto",
    "model": "",
    "serial_num": 90482,
    "price": 4421,
    "description": "Do culpa eu nostrud ullamco et elit est ad anim exercitation. Quis sunt occaecat qui anim elit incididunt ad irure. Consectetur quis dolore sint incididunt Lorem dolore.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 1,
    "make": "Magmina",
    "model": "",
    "serial_num": 11231,
    "price": 6008,
    "description": "Dolore voluptate enim cupidatat exercitation minim qui velit minim mollit mollit ipsum anim pariatur. Non eu irure in aute incididunt ex officia voluptate enim in occaecat velit. Magna consequat culpa occaecat tempor ea. Veniam dolor amet laborum aliquip voluptate eiusmod pariatur Lorem proident duis ipsum. Velit culpa proident velit ullamco ut aliquip. Laborum consequat amet qui Lorem incididunt et quis.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "Firewax",
    "model": "",
    "serial_num": 55462,
    "price": 3025,
    "description": "Labore est deserunt Lorem sint. Voluptate mollit veniam id aliquip adipisicing aliqua commodo magna. Irure dolor quis ipsum elit enim veniam. Cupidatat ex irure dolore aliquip reprehenderit eu deserunt.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 4,
    "make": "Gynk",
    "model": "",
    "serial_num": 74120,
    "price": 707,
    "description": "Ex excepteur et est duis incididunt nostrud esse fugiat aliquip voluptate anim dolore exercitation do. Cillum do in anim ea quis dolor pariatur labore culpa ea non. Est qui nostrud laboris ipsum nostrud exercitation dolore ex veniam pariatur est laboris eiusmod. Anim dolor Lorem officia ut non nulla quis nostrud pariatur cillum aliquip sint.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 4,
    "make": "Strezzo",
    "model": "",
    "serial_num": 59400,
    "price": 3037,
    "description": "Enim incididunt laboris est velit sint est officia. Cillum commodo anim et dolor do cillum nostrud aute pariatur in aute. Amet in dolor Lorem velit aliqua dolore aliqua exercitation velit adipisicing eu in. Exercitation officia laborum ea culpa consectetur dolor nisi eiusmod aliquip. Nulla anim aliqua fugiat aute aute. Nisi sit ex Lorem et eiusmod mollit veniam nulla eiusmod. In mollit exercitation dolore tempor culpa sunt in ea elit adipisicing.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 4,
    "make": "Extrawear",
    "model": "",
    "serial_num": 39440,
    "price": 8501,
    "description": "Elit ad ut incididunt sit dolor ullamco. Tempor incididunt adipisicing do laboris ipsum eu. Nulla aliqua qui labore culpa in reprehenderit est consequat occaecat nisi irure in do consequat. Velit esse tempor nisi mollit dolore Lorem amet proident voluptate exercitation dolore et exercitation. Lorem nisi minim id minim consectetur enim excepteur laboris ea nisi cupidatat. Do deserunt ullamco officia cupidatat adipisicing ea. Sunt officia ut fugiat reprehenderit aute do fugiat.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 1,
    "make": "Oceanica",
    "model": "",
    "serial_num": 8076,
    "price": 191,
    "description": "Occaecat aute velit nisi tempor nostrud aliquip aute esse magna id qui id sunt mollit. Veniam eu occaecat excepteur laborum qui nostrud aliquip dolor duis voluptate cillum. Elit incididunt ipsum minim labore cillum aliquip dolore officia laboris nostrud aliquip enim ipsum. Id irure labore proident veniam mollit dolore excepteur excepteur amet non. Nostrud eu cillum consequat ad sint ex elit. In eu fugiat irure et id dolor proident exercitation incididunt ullamco sit eiusmod cupidatat aliqua. Eiusmod irure cillum nisi veniam nisi sint sunt exercitation adipisicing in magna mollit dolore.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 7,
    "make": "Marketoid",
    "model": "",
    "serial_num": 62290,
    "price": 4329,
    "description": "Ut esse ullamco aute nulla sit. Veniam et laborum ea cupidatat enim labore proident laborum mollit et. Ut irure dolore ex minim ad.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 5,
    "make": "Exospeed",
    "model": "",
    "serial_num": 3179,
    "price": 2978,
    "description": "Nisi deserunt nisi culpa ea anim sint laboris labore eiusmod officia fugiat labore sit. Amet mollit ipsum ullamco aute exercitation adipisicing. Non commodo et et amet consectetur incididunt aliqua non dolor. Duis ad ex deserunt voluptate irure nisi exercitation consequat dolor incididunt et Lorem est. Sunt sint quis deserunt elit. Quis labore labore dolor nisi incididunt culpa do.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 2,
    "make": "Rubadub",
    "model": "",
    "serial_num": 32265,
    "price": 7543,
    "description": "Do magna ullamco mollit ullamco pariatur enim consectetur ad aliqua. Officia adipisicing sunt consectetur ad nostrud veniam magna. Pariatur elit nulla laboris labore cillum.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 7,
    "make": "Mobildata",
    "model": "",
    "serial_num": 44244,
    "price": 4811,
    "description": "Elit aute aute cillum officia ea aute laborum quis officia. Nostrud sit sint duis eiusmod ea. Excepteur officia est dolore anim quis anim ex aliqua Lorem labore ad pariatur.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 4,
    "make": "Emoltra",
    "model": "",
    "serial_num": 39114,
    "price": 4129,
    "description": "Commodo laboris labore nostrud do exercitation sint Lorem veniam qui voluptate ipsum. Ea aliqua eiusmod duis mollit nulla excepteur dolor anim. Incididunt exercitation culpa in proident sit.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 4,
    "make": "Uniworld",
    "model": "",
    "serial_num": 96299,
    "price": 1,
    "description": "Culpa nisi non cupidatat Lorem do tempor commodo ut ex dolor sit elit. Proident et adipisicing sit nulla ea commodo in. Laborum pariatur occaecat fugiat laboris non duis anim veniam non nulla dolore. Eiusmod voluptate adipisicing minim mollit magna sunt est enim.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 7,
    "make": "Digifad",
    "model": "",
    "serial_num": 84223,
    "price": 3513,
    "description": "Id enim ullamco cillum reprehenderit adipisicing do. Ipsum laboris dolor eiusmod laboris magna labore ut. Mollit officia aute quis aute ad veniam laboris ullamco sunt nostrud aliqua. Cillum veniam nulla aliquip do consectetur.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 1,
    "make": "Tripsch",
    "model": "",
    "serial_num": 78263,
    "price": 5668,
    "description": "Id sint cupidatat quis cupidatat ullamco voluptate incididunt laboris velit est laborum velit elit. Culpa laborum eu laboris velit eu non sit mollit do. Mollit commodo occaecat dolore ea. Elit reprehenderit aliquip laborum aliqua.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 1,
    "make": "Fanfare",
    "model": "",
    "serial_num": 69172,
    "price": 4792,
    "description": "Incididunt pariatur voluptate sit Lorem qui magna non magna dolor excepteur. Officia incididunt cupidatat deserunt proident eu non nulla voluptate sit et. Laborum ea cillum consectetur officia non. Cupidatat quis et culpa pariatur eu nulla culpa deserunt fugiat laboris et pariatur. Occaecat excepteur qui amet dolore dolor tempor qui occaecat consequat ipsum in do ullamco. Sit commodo aute minim duis minim nisi non mollit ea ad ullamco excepteur voluptate cillum. Ad dolore labore Lorem ex minim adipisicing ea velit.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 3,
    "make": "Pigzart",
    "model": "",
    "serial_num": 5843,
    "price": 709,
    "description": "Proident Lorem magna voluptate ipsum Lorem velit quis. Exercitation nisi labore dolore eu ad eu duis ea cillum proident aute. Veniam pariatur ullamco aute aliquip. Voluptate exercitation quis minim dolore reprehenderit sit nostrud mollit exercitation culpa pariatur quis minim. Ipsum excepteur excepteur tempor ea sit dolor mollit irure id tempor exercitation. Nostrud ullamco consequat mollit minim. Lorem cupidatat id excepteur excepteur sit nulla magna nulla fugiat.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 5,
    "make": "Pearlesex",
    "model": "",
    "serial_num": 14445,
    "price": 7712,
    "description": "Minim excepteur proident exercitation laborum sint adipisicing est. Adipisicing magna incididunt ullamco ex culpa. Proident in aliqua irure ex deserunt velit. Consequat sit commodo ea consequat in mollit id officia nostrud. Sit excepteur amet irure minim tempor incididunt non deserunt anim eiusmod.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 1,
    "make": "Bostonic",
    "model": "",
    "serial_num": 44251,
    "price": 114,
    "description": "Non qui elit magna consequat. Id amet esse ex laboris ea consequat. Exercitation ut aute esse anim amet adipisicing qui magna nostrud et officia sit commodo cillum.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 8,
    "make": "Bitendrex",
    "model": "",
    "serial_num": 84261,
    "price": 7603,
    "description": "Consequat fugiat elit sit aliquip aliqua velit minim deserunt. Irure pariatur id cupidatat sunt non laborum magna in exercitation aliquip voluptate et laborum. Aliqua do et ea velit esse. Quis consectetur dolore proident magna cillum adipisicing. Minim magna cillum adipisicing cupidatat culpa velit aute Lorem. Eiusmod commodo ad esse commodo Lorem incididunt pariatur consequat do dolore nulla velit adipisicing ea.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 2,
    "make": "Primordia",
    "model": "",
    "serial_num": 60372,
    "price": 470,
    "description": "Velit tempor minim consectetur et reprehenderit eiusmod et labore cupidatat. Ipsum aliquip sit irure minim nulla laborum do proident aute. Consequat deserunt quis occaecat cupidatat aliqua nisi officia voluptate eu ullamco aute. Ex Lorem irure fugiat ad nisi occaecat velit voluptate ad nostrud. In anim laboris mollit excepteur excepteur. Ad do laborum ut Lorem pariatur cillum ea tempor dolor eu consectetur amet Lorem ullamco.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 5,
    "make": "Nutralab",
    "model": "",
    "serial_num": 96325,
    "price": 6465,
    "description": "Lorem laboris culpa consequat sint ipsum reprehenderit sunt Lorem enim aliquip aute. Officia dolore velit ex cupidatat ut fugiat incididunt. Nulla cillum nisi pariatur esse veniam. Nulla proident amet sunt consectetur dolore consequat id sint in. Commodo occaecat cillum Lorem laboris. Ut Lorem velit amet quis consequat pariatur enim nisi ex incididunt quis excepteur.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "Shepard",
    "model": "",
    "serial_num": 1270,
    "price": 4959,
    "description": "Aute eiusmod velit aliqua et voluptate proident nisi est. Amet consequat enim aliquip est in. Velit consectetur consectetur minim incididunt fugiat. In magna labore duis cillum voluptate velit minim ullamco aute in do amet et tempor. Aliquip nostrud reprehenderit velit qui excepteur anim Lorem laboris adipisicing non adipisicing. Amet Lorem fugiat ullamco ullamco irure cupidatat pariatur aliqua elit aute. Aliquip sunt fugiat commodo fugiat est labore dolore ipsum.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 7,
    "make": "Irack",
    "model": "",
    "serial_num": 95152,
    "price": 7247,
    "description": "Aute irure ad sunt deserunt consequat cupidatat ipsum est sunt sint ipsum commodo in. Duis esse esse velit enim. Pariatur dolore laborum dolore reprehenderit dolor ea nisi quis laboris velit et.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 3,
    "make": "Harmoney",
    "model": "",
    "serial_num": 41364,
    "price": 4761,
    "description": "Sunt sit nostrud deserunt dolor et ad ipsum officia laboris commodo irure do exercitation exercitation. Minim nulla anim magna fugiat velit nulla. Et Lorem pariatur eu mollit sit incididunt excepteur nulla ipsum. Aliqua id aute esse aliqua sunt ad ullamco ex sit laborum Lorem. Irure veniam dolor ipsum esse proident pariatur cupidatat magna nostrud excepteur nulla dolor labore et. Labore do aliqua nisi Lorem nulla aliquip do ex minim reprehenderit.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 1,
    "make": "Deepends",
    "model": "",
    "serial_num": 5836,
    "price": 6922,
    "description": "Culpa nostrud culpa cupidatat officia magna. Ut elit consectetur dolor Lorem eiusmod anim ut deserunt irure eu excepteur amet. Labore pariatur sunt eu sunt voluptate pariatur nostrud adipisicing duis non minim ad amet. Ullamco id ullamco ullamco nisi consectetur dolor veniam id. Consequat ut nulla eu sint. Laboris non reprehenderit amet ad ea ad.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 4,
    "make": "Medmex",
    "model": "",
    "serial_num": 8529,
    "price": 564,
    "description": "Pariatur non excepteur enim et reprehenderit irure aliqua consequat occaecat fugiat duis nostrud duis qui. Quis aliquip id aliquip nulla qui consectetur consequat aute cupidatat Lorem amet est velit consectetur. Dolor officia Lorem proident sit commodo do proident magna cillum adipisicing dolor. Proident minim proident velit sunt exercitation velit. Adipisicing deserunt qui Lorem officia pariatur ullamco cupidatat. Non mollit nostrud proident ipsum elit voluptate cupidatat consequat officia.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 1,
    "make": "Asimiline",
    "model": "",
    "serial_num": 14326,
    "price": 6058,
    "description": "Reprehenderit voluptate sit dolore cillum irure. Proident sunt sit aute qui ut magna officia ipsum eu dolore velit do magna. Nulla velit sunt ipsum pariatur veniam fugiat amet velit ea exercitation ullamco. Tempor labore labore eiusmod deserunt incididunt ad tempor ex anim eu reprehenderit velit cupidatat. Voluptate cupidatat officia qui aute enim minim non velit minim. Sint qui excepteur qui ullamco culpa minim. Cillum voluptate anim quis non ad in.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 7,
    "make": "Poochies",
    "model": "",
    "serial_num": 6017,
    "price": 5892,
    "description": "Elit commodo do magna consequat id ut non pariatur nisi id veniam ipsum. Commodo non aliquip dolore ullamco. Elit amet aute ut labore labore elit ut eu Lorem velit ut. Exercitation tempor est enim proident ea. Fugiat excepteur fugiat irure pariatur Lorem Lorem laborum. Anim excepteur consequat nulla irure ut commodo id ex ullamco esse incididunt fugiat. Minim deserunt cillum nulla nisi do voluptate labore proident voluptate sunt amet velit.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 3,
    "make": "Hotcakes",
    "model": "",
    "serial_num": 66314,
    "price": 2820,
    "description": "Adipisicing cupidatat dolore laboris culpa. Labore adipisicing occaecat magna esse est. Incididunt qui exercitation in enim consequat consectetur ut est labore. Eu labore ad exercitation elit.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 6,
    "make": "Centice",
    "model": "",
    "serial_num": 85189,
    "price": 9083,
    "description": "Sunt ad sunt excepteur aliqua non voluptate magna laborum. Ad ad proident aliqua sit commodo dolor. Aliqua magna duis dolor magna aute dolor quis eu et consequat non magna. Eu deserunt quis culpa do velit culpa aliquip consequat amet et quis ipsum non aliqua. Pariatur ut adipisicing quis cupidatat in aute labore pariatur sit culpa laboris.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 2,
    "make": "Uplinx",
    "model": "",
    "serial_num": 3157,
    "price": 9362,
    "description": "Do non qui aute minim. Pariatur eu ut laborum pariatur elit sint elit consequat sit occaecat. Elit adipisicing nisi cupidatat deserunt aute aute aliqua enim anim proident sit magna deserunt consectetur. Excepteur deserunt est cupidatat minim. Laboris consectetur consectetur incididunt mollit pariatur sit qui exercitation culpa sit adipisicing nisi ut. Aliqua sint ea ex et in excepteur enim esse nostrud fugiat tempor cupidatat sit.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 8,
    "make": "Jumpstack",
    "model": "",
    "serial_num": 7772,
    "price": 2274,
    "description": "Aliqua ea ex excepteur sit nisi sit ipsum sit nostrud consectetur veniam labore sit. Pariatur laboris reprehenderit aliqua aliquip do anim officia enim tempor exercitation exercitation eiusmod minim. Veniam est labore est do cupidatat officia ex. Sit culpa dolore do sunt mollit cupidatat exercitation est minim nisi proident.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 4,
    "make": "Cofine",
    "model": "",
    "serial_num": 56285,
    "price": 9330,
    "description": "Consequat ad non do veniam. Nisi culpa cillum velit in laborum sit nisi aliqua. Cupidatat consectetur quis consequat consectetur consequat amet non ex irure reprehenderit dolore et et in. Voluptate amet aliquip velit irure deserunt ex magna do ad irure id consectetur esse. Occaecat incididunt ullamco in laborum dolore voluptate enim do magna irure in.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 6,
    "make": "Dognost",
    "model": "",
    "serial_num": 60303,
    "price": 3161,
    "description": "Et amet nulla deserunt tempor elit ad occaecat magna deserunt pariatur proident elit consectetur. Tempor incididunt id sit elit. Nostrud nisi ullamco culpa reprehenderit eiusmod consequat quis nostrud veniam ex dolor aliqua veniam consequat.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 6,
    "make": "Jasper",
    "model": "",
    "serial_num": 64312,
    "price": 6733,
    "description": "Sint dolor fugiat consectetur ipsum aliquip id velit dolore aliqua. Culpa ex mollit cillum velit nostrud sunt. Cupidatat ipsum aliquip qui elit exercitation amet cupidatat ex reprehenderit occaecat magna elit Lorem. Non elit excepteur excepteur duis dolore irure velit in occaecat. Duis irure cillum occaecat sunt enim esse est aute incididunt elit ea. Est irure laborum sunt aliquip nostrud velit. Eiusmod est commodo voluptate sint.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 2,
    "make": "Isbol",
    "model": "",
    "serial_num": 10029,
    "price": 9903,
    "description": "Incididunt ea nisi nisi ad do labore eu incididunt excepteur proident. Ex veniam amet ullamco duis ex aute adipisicing sit. Qui ea ea cupidatat et veniam eu ipsum deserunt. Ullamco adipisicing consectetur laboris proident est consequat enim ea deserunt consequat exercitation.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 3,
    "make": "Zytrek",
    "model": "",
    "serial_num": 98394,
    "price": 1269,
    "description": "Commodo laboris amet consectetur incididunt aliquip deserunt commodo consectetur. Ut incididunt esse ad ullamco duis laboris ea pariatur irure consequat commodo. Nisi culpa nostrud eiusmod officia magna dolor voluptate.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 1,
    "make": "Phormula",
    "model": "",
    "serial_num": 84438,
    "price": 9390,
    "description": "Consequat enim esse excepteur elit mollit ut mollit. Pariatur ex id laboris mollit aliqua. Mollit commodo anim consectetur ea est est. Veniam ut sint non sunt tempor occaecat labore Lorem. Aliqua eu veniam ipsum irure ut fugiat aliqua non enim consectetur elit. Fugiat irure est dolor excepteur est. Adipisicing amet consequat ipsum non deserunt proident aliqua consectetur pariatur aliqua et sunt ad.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 6,
    "make": "Waretel",
    "model": "",
    "serial_num": 94264,
    "price": 8635,
    "description": "Velit nisi fugiat aliquip laborum minim sint nulla qui mollit. Enim eu amet qui culpa eiusmod duis culpa magna velit minim fugiat irure labore pariatur. In voluptate aliqua enim ullamco Lorem quis minim mollit dolore magna ea. Labore do esse non amet duis consequat reprehenderit consequat. Do et laborum exercitation est eu magna anim qui sunt fugiat labore.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 6,
    "make": "Nspire",
    "model": "",
    "serial_num": 14159,
    "price": 6071,
    "description": "Nulla proident consequat laborum nisi consequat laboris veniam proident aliquip dolor velit magna. Nostrud fugiat anim ullamco proident qui elit deserunt sunt exercitation fugiat eu cupidatat. Esse dolore reprehenderit voluptate est exercitation. Qui commodo id minim adipisicing do deserunt. Quis non labore cupidatat cupidatat. Commodo dolore anim adipisicing anim consequat anim ea dolore sint id irure veniam magna. Consequat voluptate fugiat non veniam proident magna sint exercitation proident nisi dolor aute mollit excepteur.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 8,
    "make": "Bunga",
    "model": "",
    "serial_num": 75344,
    "price": 6270,
    "description": "Ex nostrud aute laboris id proident cillum consectetur velit ullamco sit ad ullamco. Nulla dolor amet quis nulla amet aliquip non exercitation velit consequat officia. Minim non occaecat eu qui proident et eu aliqua dolore elit eu est fugiat aliqua. In mollit laborum sunt pariatur deserunt pariatur nisi sit. Dolore nisi incididunt aliquip non ullamco. Lorem pariatur excepteur proident laborum aliquip do proident Lorem laborum irure. Labore tempor anim adipisicing minim fugiat et non.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 7,
    "make": "Trasola",
    "model": "",
    "serial_num": 14125,
    "price": 1165,
    "description": "Et ullamco adipisicing voluptate irure aliqua voluptate dolore reprehenderit cupidatat sunt dolor. Labore magna pariatur culpa laboris ut. Consequat nostrud enim qui nostrud. Tempor laboris veniam aliquip magna veniam non Lorem duis qui reprehenderit velit.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 1,
    "make": "Syntac",
    "model": "",
    "serial_num": 75108,
    "price": 400,
    "description": "Consequat enim velit minim laboris Lorem labore eu non nulla laboris duis id. Est ipsum tempor in consequat aute ex culpa. Ex reprehenderit nisi excepteur id mollit irure velit Lorem. Ea fugiat incididunt consectetur non id dolore velit anim. Laborum et ut nostrud nostrud in laboris enim non. Esse elit fugiat nulla id amet et non ea enim aute officia eiusmod.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 3,
    "make": "Kidstock",
    "model": "",
    "serial_num": 56287,
    "price": 9273,
    "description": "Velit consectetur exercitation laboris deserunt laborum eu ipsum Lorem do eu ea. Sint nulla Lorem nisi consectetur dolore laboris qui minim exercitation ipsum ullamco exercitation duis deserunt. Sunt dolor tempor eiusmod excepteur non esse enim labore reprehenderit consectetur enim anim enim. Consectetur nisi cupidatat voluptate qui ad minim est commodo magna tempor. Pariatur voluptate voluptate ad eiusmod in eu incididunt ea nostrud proident esse labore non.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 5,
    "make": "Parleynet",
    "model": "",
    "serial_num": 78159,
    "price": 4251,
    "description": "Do aliquip in cillum est dolore do. Id proident et sint eiusmod culpa nostrud aliqua dolore quis esse. Laborum duis non et pariatur laboris sit ex sint consectetur occaecat et. Nostrud anim qui ipsum eu reprehenderit adipisicing do aliqua et excepteur. Eu incididunt Lorem commodo tempor officia sit laborum irure elit proident amet consequat tempor. Tempor voluptate nisi fugiat Lorem ullamco eu aute et. Veniam voluptate nulla reprehenderit aliquip exercitation commodo minim incididunt proident aliquip magna sit velit commodo.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 6,
    "make": "Bullzone",
    "model": "",
    "serial_num": 40441,
    "price": 7131,
    "description": "Laborum velit esse sunt dolore voluptate aute ullamco excepteur ea nulla amet ex tempor. Sint ullamco culpa commodo ex et exercitation minim aliqua eiusmod aliquip reprehenderit. Eu Lorem tempor fugiat exercitation do enim cupidatat. Nisi enim laboris eiusmod sint duis ut cillum eu voluptate ad reprehenderit ex irure nisi.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 4,
    "make": "Pathways",
    "model": "",
    "serial_num": 41473,
    "price": 1613,
    "description": "Amet et officia qui nisi ut. Consectetur incididunt ea excepteur qui mollit enim minim deserunt Lorem amet laboris dolore adipisicing. Non sunt eu ad ipsum sit aute laborum anim ipsum occaecat laboris. Nulla voluptate sunt id consectetur id cupidatat nostrud et aliqua dolore ullamco occaecat. Exercitation occaecat officia eiusmod esse dolore in aliquip dolor ex id reprehenderit.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 7,
    "make": "Printspan",
    "model": "",
    "serial_num": 47482,
    "price": 6211,
    "description": "Minim culpa dolore consectetur sint exercitation dolor ea magna do velit mollit. Esse voluptate eu minim magna commodo ullamco minim velit Lorem Lorem aliquip qui et. Proident voluptate ipsum qui ex quis nulla velit fugiat pariatur elit consequat.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 5,
    "make": "Suretech",
    "model": "",
    "serial_num": 93406,
    "price": 7868,
    "description": "Amet quis dolor laborum dolore deserunt ipsum et. Culpa eu id qui pariatur excepteur. Exercitation mollit in labore sint aliqua. Sint laboris adipisicing aliqua sunt voluptate esse.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 5,
    "make": "Ovolo",
    "model": "",
    "serial_num": 19240,
    "price": 737,
    "description": "Cupidatat do ex dolor minim. Culpa deserunt fugiat in dolor et fugiat esse voluptate ea enim anim pariatur nostrud id. Aliquip excepteur ex sit consectetur incididunt reprehenderit elit aliqua cillum id sit est. Dolore deserunt culpa aliqua veniam laboris fugiat dolore eiusmod tempor voluptate cupidatat enim. Aute adipisicing laboris irure anim tempor amet id amet consectetur ipsum duis.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 1,
    "make": "Atgen",
    "model": "",
    "serial_num": 19459,
    "price": 7507,
    "description": "Enim mollit officia velit amet ipsum elit culpa velit irure sint enim cillum. Do non reprehenderit sunt est. Exercitation proident incididunt aute mollit sint minim consectetur aliquip irure fugiat dolor et aute.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 3,
    "make": "Gogol",
    "model": "",
    "serial_num": 66165,
    "price": 6823,
    "description": "Velit voluptate aliqua dolore id qui mollit cupidatat proident consectetur proident. Pariatur aliquip labore eu non proident elit deserunt adipisicing qui aliquip nisi eu enim. Consequat irure id qui ad. Nisi id commodo amet in voluptate deserunt cupidatat dolor et nisi Lorem laboris veniam exercitation. Id ut aliqua est fugiat excepteur sunt mollit est non cupidatat consectetur aliqua aliqua voluptate.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 4,
    "make": "Gleamink",
    "model": "",
    "serial_num": 53353,
    "price": 4694,
    "description": "Dolore in elit eiusmod qui. Voluptate sunt nisi duis elit et ullamco ea. Nisi adipisicing deserunt dolor minim ea ea cillum consectetur.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 4,
    "make": "Zosis",
    "model": "",
    "serial_num": 28148,
    "price": 4100,
    "description": "Velit laboris enim nisi minim cillum nostrud reprehenderit veniam. In sit occaecat proident duis nisi irure sunt ipsum quis nisi. Amet do veniam tempor cillum eu ad dolore laborum sunt reprehenderit qui. Dolor voluptate exercitation sint ullamco excepteur incididunt in voluptate elit incididunt magna deserunt ut aute.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 2,
    "make": "Quantalia",
    "model": "",
    "serial_num": 515,
    "price": 7716,
    "description": "Occaecat dolor velit labore adipisicing ut est veniam sint quis dolor. Aliqua deserunt consequat tempor quis cillum commodo culpa eu ipsum Lorem occaecat mollit. Ullamco nisi eu ad fugiat officia ullamco veniam aute.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 2,
    "make": "Ontagene",
    "model": "",
    "serial_num": 70457,
    "price": 6791,
    "description": "Qui ullamco pariatur velit dolore incididunt irure ea veniam aliqua minim aute laboris. Est Lorem aliquip non id officia aliqua duis cillum eu Lorem ipsum non. Tempor consequat reprehenderit voluptate anim aliquip voluptate fugiat exercitation id mollit mollit. Laborum sint do elit et fugiat sit consectetur esse enim ad minim non. Amet enim ullamco nulla cupidatat magna laboris Lorem ad incididunt aliquip consectetur. Eu irure elit reprehenderit aliquip id dolor quis et deserunt sit est exercitation dolore.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 4,
    "make": "Panzent",
    "model": "",
    "serial_num": 14255,
    "price": 1307,
    "description": "Veniam id duis nulla labore mollit proident eiusmod aliqua. Dolore id amet irure et. Qui nisi labore Lorem minim in voluptate ipsum fugiat. Sint tempor exercitation mollit consequat irure quis et adipisicing excepteur veniam et. Esse incididunt nulla eu consequat labore tempor et minim. Aute labore aliqua proident laboris dolore non proident. Officia laborum non ea amet ipsum ad Lorem amet minim magna amet laboris qui exercitation.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "Webiotic",
    "model": "",
    "serial_num": 2671,
    "price": 7053,
    "description": "Culpa reprehenderit consequat commodo dolor ullamco Lorem. Fugiat tempor est veniam non excepteur exercitation officia Lorem reprehenderit in. Qui quis voluptate exercitation adipisicing commodo. Nostrud ullamco occaecat aute ut. Proident et deserunt minim ullamco est nostrud tempor elit fugiat consequat consequat dolor enim nulla.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 6,
    "make": "Polarax",
    "model": "",
    "serial_num": 69199,
    "price": 6106,
    "description": "Aliquip laborum occaecat ad aliqua dolore enim cupidatat incididunt est est laborum cupidatat. Amet laborum nostrud quis fugiat do qui sit sint anim duis ipsum deserunt deserunt. Non est duis deserunt minim velit veniam dolore. Pariatur ad culpa ullamco labore ipsum do aliqua tempor. Labore exercitation qui aute amet consequat culpa cillum cillum anim fugiat magna elit commodo laborum. Eiusmod in ex tempor consequat excepteur est officia excepteur cillum non ut ea cupidatat.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "Arctiq",
    "model": "",
    "serial_num": 385,
    "price": 2100,
    "description": "Cupidatat magna aute consequat excepteur nulla laboris excepteur sit in enim qui. Ea fugiat esse officia ad sit cupidatat qui labore minim adipisicing ipsum anim. Ipsum dolor aliqua sint nostrud exercitation id ullamco commodo quis.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 3,
    "make": "Zensus",
    "model": "",
    "serial_num": 98140,
    "price": 995,
    "description": "Adipisicing velit qui cupidatat veniam quis in. Sunt occaecat do voluptate do cupidatat elit consectetur laborum id aliquip sunt voluptate eu. Laboris consectetur laborum id eiusmod exercitation est deserunt nulla ut. Anim commodo occaecat aliquip duis reprehenderit aute nulla ad. Aute excepteur pariatur occaecat sunt cupidatat reprehenderit ipsum ut ut do quis nisi. Ea minim dolore quis quis nisi. Amet amet consequat fugiat laborum et id.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 8,
    "make": "Trollery",
    "model": "",
    "serial_num": 6686,
    "price": 9358,
    "description": "Sit voluptate cupidatat fugiat ea elit eiusmod aute ea consectetur magna veniam mollit consequat quis. Fugiat velit est quis amet. Exercitation eu sit magna non minim id commodo et laboris reprehenderit. Mollit Lorem culpa minim non culpa eiusmod. Enim dolor ad Lorem sit aliquip incididunt non quis ipsum Lorem proident nostrud irure.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 3,
    "make": "Lotron",
    "model": "",
    "serial_num": 94241,
    "price": 4714,
    "description": "Consectetur id culpa Lorem Lorem pariatur dolor laboris non irure qui. Consequat ea veniam laborum officia consequat nisi esse id et sit. Eiusmod magna proident consectetur eu anim id voluptate culpa nostrud anim et eiusmod. Elit culpa eiusmod laboris exercitation consectetur ut occaecat enim mollit cillum elit cillum non. Fugiat est dolore velit quis deserunt ea. Aute ad consectetur ea eiusmod. Et nisi nostrud incididunt et sunt magna culpa ut nisi ex irure do qui officia.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 8,
    "make": "Zappix",
    "model": "",
    "serial_num": 50166,
    "price": 5292,
    "description": "Reprehenderit anim do voluptate excepteur duis aliqua in cillum ea commodo mollit veniam commodo aute. Exercitation tempor mollit pariatur enim enim officia ipsum ad qui officia sunt. Incididunt officia dolore ut anim culpa ad. Voluptate cillum nostrud amet mollit anim amet laboris sunt.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "Geeketron",
    "model": "",
    "serial_num": 5187,
    "price": 9503,
    "description": "Incididunt nisi quis in id nostrud officia culpa qui dolore cupidatat dolore. Proident nostrud ullamco qui amet commodo. Velit adipisicing reprehenderit adipisicing sit adipisicing. Ut proident reprehenderit consequat magna sunt dolore sit sit veniam et.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 7,
    "make": "Repetwire",
    "model": "",
    "serial_num": 18214,
    "price": 2812,
    "description": "Ex eu exercitation ipsum aliquip aliquip ipsum. Non enim incididunt non exercitation consectetur est irure et. Cupidatat ex irure occaecat enim. Et laborum minim id ad anim ea aute reprehenderit dolor aliquip nisi nulla officia laborum. Ipsum labore sint nulla elit irure consequat. Consequat sunt occaecat ipsum nulla officia non ad.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 4,
    "make": "Eclipto",
    "model": "",
    "serial_num": 1186,
    "price": 731,
    "description": "Commodo aliquip consectetur ullamco ad. Tempor irure ex excepteur culpa incididunt non. Sint duis do minim cupidatat aliqua. Ipsum exercitation aliqua elit nostrud labore et labore exercitation dolor nisi tempor eiusmod culpa. Aute occaecat mollit commodo deserunt deserunt velit commodo adipisicing.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "Snorus",
    "model": "",
    "serial_num": 51204,
    "price": 6657,
    "description": "Quis dolor adipisicing sint occaecat proident exercitation ullamco reprehenderit. Veniam duis amet magna esse ea aliquip dolore esse officia cupidatat ipsum voluptate. Proident magna magna reprehenderit deserunt elit et ullamco. Officia ullamco culpa anim ad velit aute. Duis culpa ipsum ex veniam veniam eiusmod in consequat adipisicing labore sit.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 7,
    "make": "Futuris",
    "model": "",
    "serial_num": 98377,
    "price": 6719,
    "description": "Ea mollit ad consectetur occaecat proident cupidatat cupidatat cillum in. In veniam reprehenderit culpa elit mollit voluptate ipsum qui dolor reprehenderit est consectetur nostrud. Sunt anim et nostrud voluptate anim Lorem est sit consectetur irure deserunt. Mollit do eiusmod magna aliqua anim enim eu irure Lorem irure sit proident anim occaecat. Culpa laboris eu culpa elit. Aliquip dolore incididunt nulla velit dolore culpa nostrud irure laboris sint. Nisi cupidatat sunt et excepteur quis consequat culpa.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 2,
    "make": "Gaptec",
    "model": "",
    "serial_num": 97217,
    "price": 5795,
    "description": "Aute voluptate laborum anim elit aliquip ipsum nisi ad dolore incididunt est duis eu. Aliquip culpa commodo voluptate enim incididunt officia occaecat quis. Aliqua amet velit pariatur adipisicing id officia minim cupidatat. Do ut amet do ad sunt tempor cupidatat. Nulla in esse quis aliquip reprehenderit aliqua. Laborum irure sint deserunt eu nostrud sunt amet pariatur proident ex qui ea amet consequat.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 7,
    "make": "Kengen",
    "model": "",
    "serial_num": 7816,
    "price": 5403,
    "description": "Eu reprehenderit dolor do ut proident dolore cillum officia ad. Eu dolor fugiat mollit est cillum qui nisi ex ea Lorem. Excepteur ad esse sint laboris tempor nulla. Proident laboris exercitation id pariatur minim Lorem anim. Nostrud voluptate labore laboris esse quis mollit do quis.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 7,
    "make": "Portalis",
    "model": "",
    "serial_num": 46402,
    "price": 8398,
    "description": "Deserunt ad cillum ut mollit commodo ullamco tempor anim. Consequat exercitation laborum minim aute. Sunt deserunt cillum quis ad eiusmod officia excepteur laboris. Aliquip voluptate anim commodo veniam qui ad reprehenderit magna occaecat cillum sit occaecat aliqua aute. Reprehenderit mollit voluptate et ea incididunt Lorem excepteur in veniam velit fugiat.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 6,
    "make": "Anivet",
    "model": "",
    "serial_num": 7257,
    "price": 2144,
    "description": "Magna sit non incididunt elit duis. Qui irure et cillum consequat reprehenderit Lorem commodo laboris. Excepteur irure anim elit voluptate excepteur laboris. Excepteur quis eu nulla ut exercitation mollit est occaecat. Sint id nostrud proident veniam aute fugiat do eu nostrud sunt adipisicing nisi eu. Incididunt nostrud nulla nulla aliquip cupidatat irure esse.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 4,
    "make": "Vurbo",
    "model": "",
    "serial_num": 92315,
    "price": 5829,
    "description": "Sint velit laborum ullamco aute sit nisi est officia anim commodo magna esse incididunt. Amet mollit cillum voluptate exercitation adipisicing cupidatat culpa. Eu Lorem aliqua deserunt sint amet nulla fugiat et officia adipisicing proident in. Sunt est fugiat adipisicing qui ea incididunt dolor dolore.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 2,
    "make": "Overplex",
    "model": "",
    "serial_num": 95340,
    "price": 4175,
    "description": "Pariatur dolor sunt enim id mollit. Quis irure dolore ipsum nulla nostrud. Excepteur nostrud et ullamco eiusmod in. Enim ex laborum dolore adipisicing. Nostrud non cupidatat sint ea ea aute.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 3,
    "make": "Geeky",
    "model": "",
    "serial_num": 33249,
    "price": 2560,
    "description": "Minim ullamco irure anim aliquip aliquip exercitation esse id sint id est proident minim. Minim incididunt ullamco ullamco aliqua laborum dolor proident deserunt cillum ut quis irure. Duis officia exercitation aliqua officia elit laboris ut officia pariatur irure ex elit cillum ipsum.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 7,
    "make": "Eplode",
    "model": "",
    "serial_num": 37265,
    "price": 9866,
    "description": "Et deserunt non culpa nostrud et. Amet nostrud eu magna reprehenderit pariatur ut consequat. Culpa amet culpa nulla dolore. Ut officia et sunt et adipisicing laborum aute est enim reprehenderit reprehenderit proident.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 5,
    "make": "Gorganic",
    "model": "",
    "serial_num": 70454,
    "price": 2047,
    "description": "Amet fugiat nulla proident aute incididunt aute aliqua nostrud deserunt irure cillum. Nisi incididunt fugiat pariatur duis nisi anim consequat aliqua officia ad non ad irure. Cupidatat culpa excepteur aute ut. Duis velit sunt tempor aliqua qui ex. Id pariatur voluptate minim eu nulla tempor minim veniam amet. Nisi do ipsum dolor do minim minim nulla officia adipisicing enim magna mollit sit occaecat. Non Lorem ex aliquip veniam adipisicing qui dolor voluptate ad elit eiusmod do nisi enim.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "Ezentia",
    "model": "",
    "serial_num": 40368,
    "price": 3548,
    "description": "Laboris id anim sunt incididunt fugiat commodo ex ullamco commodo aute magna ea minim quis. Adipisicing dolore officia consequat ullamco occaecat reprehenderit magna id aliquip amet exercitation. Pariatur id proident enim aute culpa minim ipsum consequat laborum nostrud. Pariatur id eu non aute laborum. Ea cillum anim minim ad officia esse ipsum aute reprehenderit. Magna excepteur est quis nisi nisi fugiat irure cillum. Nulla elit sit aliquip quis occaecat occaecat veniam esse.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 2,
    "make": "Kongene",
    "model": "",
    "serial_num": 75151,
    "price": 3320,
    "description": "Velit fugiat mollit incididunt ad elit. Reprehenderit tempor magna ex occaecat irure consectetur consectetur veniam deserunt in qui ea. Voluptate duis aliquip voluptate aute commodo occaecat incididunt irure nisi irure quis consequat. Officia consectetur occaecat sint magna laboris duis reprehenderit. Cupidatat adipisicing dolor cillum pariatur est enim id occaecat dolor.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 8,
    "make": "Immunics",
    "model": "",
    "serial_num": 49305,
    "price": 9434,
    "description": "Adipisicing irure labore proident cupidatat officia amet. Eu et do non voluptate nulla veniam. Magna consequat ullamco consectetur consequat id veniam enim incididunt esse. Aliquip qui ut amet voluptate adipisicing non esse amet eu amet nostrud.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 1,
    "make": "Valpreal",
    "model": "",
    "serial_num": 45258,
    "price": 3009,
    "description": "Cillum ad elit consequat aute aliquip veniam Lorem dolor ullamco ea. Velit anim consequat pariatur anim occaecat aliqua consequat. Do occaecat mollit eiusmod consequat elit. Ea duis consequat commodo irure cillum velit id dolore Lorem id pariatur officia voluptate reprehenderit. Velit cillum irure do minim est. Culpa mollit deserunt cupidatat Lorem consequat pariatur aliqua.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 5,
    "make": "Enomen",
    "model": "",
    "serial_num": 55455,
    "price": 4155,
    "description": "Laboris irure excepteur nisi exercitation qui. Cillum ut est laborum aliqua. Culpa magna ut exercitation proident et incididunt quis.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 5,
    "make": "Dancity",
    "model": "",
    "serial_num": 57292,
    "price": 4683,
    "description": "Incididunt culpa id sit cupidatat nostrud eiusmod qui est commodo consectetur. Nisi enim laboris officia cupidatat pariatur est. Exercitation ut labore laboris consectetur et quis nulla culpa. Minim sunt amet deserunt esse mollit adipisicing consectetur eu velit excepteur. Aliquip ex amet id duis officia labore sint ullamco proident aliquip est est occaecat aute. Et adipisicing occaecat tempor in voluptate ut Lorem laboris amet excepteur do irure. Aliqua mollit incididunt qui commodo velit non do minim.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 8,
    "make": "Knowlysis",
    "model": "",
    "serial_num": 3260,
    "price": 7321,
    "description": "Magna laborum aliqua nostrud et deserunt ipsum duis quis pariatur adipisicing ullamco. Sit enim dolor ad consectetur tempor velit. Excepteur aliqua irure sunt fugiat cillum tempor tempor. Cillum sint ex quis deserunt nulla incididunt sit eu.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 4,
    "make": "Lunchpad",
    "model": "",
    "serial_num": 95327,
    "price": 8309,
    "description": "Proident laboris minim cupidatat et non amet exercitation eu ex aliquip nulla voluptate proident reprehenderit. Nulla sint aliqua aliquip nostrud magna velit enim. Excepteur eu excepteur dolore dolore velit eiusmod laboris reprehenderit ipsum enim.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 1,
    "make": "Pulze",
    "model": "",
    "serial_num": 83317,
    "price": 1743,
    "description": "Laborum qui amet fugiat dolor magna laborum voluptate. Ullamco mollit eu duis minim elit elit id tempor mollit aute nulla commodo nisi culpa. Mollit nisi sunt laboris do adipisicing ullamco excepteur sint elit.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 8,
    "make": "Interloo",
    "model": "",
    "serial_num": 58397,
    "price": 2733,
    "description": "Labore incididunt ad Lorem incididunt in deserunt proident ea id voluptate. Ullamco deserunt cupidatat ex excepteur aliquip fugiat minim esse. Aute Lorem proident ullamco aliquip aute. Minim sint ea aute eiusmod dolore proident aliquip velit ad non ad ex sit. Est dolor id tempor ut eiusmod nulla labore elit cupidatat ut laboris minim.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 3,
    "make": "Ludak",
    "model": "",
    "serial_num": 3285,
    "price": 2081,
    "description": "Magna et occaecat mollit laboris qui. Cillum reprehenderit anim aliquip elit enim sint. Nisi dolore qui ut enim excepteur proident Lorem pariatur. Id ea et est quis aliquip tempor qui pariatur esse consectetur proident minim nisi.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 8,
    "make": "Rodeology",
    "model": "",
    "serial_num": 54128,
    "price": 7095,
    "description": "In et ex ipsum anim dolore irure. Aute sunt cillum laborum quis incididunt amet cillum aliquip consectetur eu magna ea. Elit nostrud est reprehenderit elit non cupidatat consequat ipsum nulla anim occaecat excepteur mollit. Sunt do eiusmod irure enim labore minim veniam consectetur voluptate dolore elit in cillum. Tempor est ex aliqua commodo dolor non dolore. Elit cillum ex laboris eiusmod commodo consequat deserunt culpa ipsum.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 2,
    "make": "Tasmania",
    "model": "",
    "serial_num": 6983,
    "price": 1236,
    "description": "Aliqua magna enim nulla non. Labore et veniam cillum quis commodo. Aliquip reprehenderit eiusmod ea non. Eiusmod et est adipisicing occaecat est anim consequat.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 7,
    "make": "Anacho",
    "model": "",
    "serial_num": 12295,
    "price": 6431,
    "description": "Magna reprehenderit minim esse ut dolore excepteur sunt id eu veniam voluptate cillum. Laborum proident sunt incididunt reprehenderit enim enim est ex eiusmod sit do. Velit et tempor proident ad duis commodo officia cupidatat amet amet veniam qui proident. Voluptate dolor sint minim amet aliqua incididunt duis ad do eu elit tempor Lorem aliquip. Officia aliqua sint nostrud ut in ipsum nisi tempor sit enim occaecat veniam. Esse officia cupidatat veniam adipisicing in id eu magna cillum.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 7,
    "make": "Hatology",
    "model": "",
    "serial_num": 78496,
    "price": 7335,
    "description": "Lorem adipisicing laborum veniam laborum Lorem elit ex duis dolore minim. Mollit anim aliqua fugiat dolore ex irure. Nostrud dolor ex ex exercitation culpa ullamco ut cillum officia commodo. Dolor eu consequat cupidatat tempor et quis labore esse. Ex voluptate velit adipisicing ipsum sint id. Sunt est exercitation dolor est ullamco officia non commodo dolore aliquip ad deserunt. Sint ipsum excepteur veniam enim.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 7,
    "make": "Beadzza",
    "model": "",
    "serial_num": 61263,
    "price": 2229,
    "description": "Reprehenderit non incididunt culpa anim dolor velit veniam commodo consectetur id laborum dolore. Proident aute cupidatat esse reprehenderit dolore minim voluptate. Voluptate nulla consectetur aute nulla Lorem. Eu minim magna magna reprehenderit nulla sunt. Occaecat amet voluptate dolore laboris officia laboris dolore enim est nostrud excepteur aliqua.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 7,
    "make": "Ezent",
    "model": "",
    "serial_num": 97290,
    "price": 5005,
    "description": "Commodo sit nostrud mollit eu deserunt commodo tempor. Voluptate veniam exercitation duis elit aute dolore enim magna nulla proident. Est est consequat dolor occaecat minim. Cupidatat dolor consectetur non qui cillum commodo quis ex enim est culpa sint ad veniam. Est do est sunt aliqua sint. Fugiat adipisicing laboris esse occaecat quis esse. Qui reprehenderit Lorem sit minim sit irure velit.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 3,
    "make": "Bulljuice",
    "model": "",
    "serial_num": 61372,
    "price": 3814,
    "description": "Do eu pariatur cillum magna officia velit sunt. Deserunt ex ad fugiat in. Sit excepteur commodo magna eu et nulla. Consequat in cillum do quis exercitation in minim veniam ea sint incididunt sint. Anim irure tempor nostrud velit esse enim.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 6,
    "make": "Accruex",
    "model": "",
    "serial_num": 8263,
    "price": 2897,
    "description": "Proident deserunt id ex ea quis deserunt voluptate ut nulla incididunt amet sunt cillum. Id eu ea voluptate Lorem. Excepteur laborum veniam aute minim voluptate deserunt laborum dolor sunt cupidatat id irure.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 6,
    "make": "Yogasm",
    "model": "",
    "serial_num": 4137,
    "price": 7203,
    "description": "Minim quis quis dolore ipsum excepteur id. Nostrud dolore non Lorem adipisicing qui ipsum consequat consectetur. Eu nulla pariatur excepteur consequat aute cillum anim nostrud adipisicing. Ex mollit ullamco aliqua est esse enim cupidatat. Non elit labore incididunt nulla. Cupidatat veniam qui culpa ea. Mollit fugiat incididunt in exercitation et tempor qui excepteur.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 2,
    "make": "Singavera",
    "model": "",
    "serial_num": 22392,
    "price": 5587,
    "description": "Aliquip aliquip do fugiat in. Ex deserunt duis laborum anim aliqua nulla labore ut veniam. Ut cillum non cupidatat ad qui consectetur adipisicing.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 6,
    "make": "Endipin",
    "model": "",
    "serial_num": 29412,
    "price": 9962,
    "description": "Fugiat qui Lorem commodo voluptate deserunt sit labore aute ea. Anim enim laboris esse sunt est. Dolor cillum nostrud duis laboris id veniam irure nostrud cupidatat Lorem labore eiusmod consequat. Laborum deserunt consectetur fugiat occaecat sint deserunt esse anim enim id. Eu est proident anim mollit irure dolore ullamco esse minim dolore aute. Id veniam aliquip nulla anim eu culpa ex voluptate sint nisi exercitation labore veniam.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 5,
    "make": "Centuria",
    "model": "",
    "serial_num": 1276,
    "price": 898,
    "description": "Sit fugiat exercitation nostrud do. Enim ipsum nostrud ea occaecat magna veniam non eiusmod. Ad Lorem ea qui incididunt nisi ipsum dolor qui do. Dolore eu excepteur deserunt est et. Reprehenderit et ea tempor eiusmod exercitation labore ea excepteur fugiat occaecat velit do enim.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 8,
    "make": "Eyewax",
    "model": "",
    "serial_num": 97345,
    "price": 4402,
    "description": "Enim aliqua sunt amet quis aute voluptate deserunt qui. Laborum minim esse aliqua duis sint incididunt labore dolore irure elit tempor. Adipisicing non sint est ea est dolore non nisi. Incididunt sunt cupidatat magna nulla. Nisi eu veniam quis dolor nisi id id tempor ullamco adipisicing esse eiusmod. Est deserunt incididunt labore irure elit dolore.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 5,
    "make": "Hydrocom",
    "model": "",
    "serial_num": 869,
    "price": 5405,
    "description": "Culpa excepteur proident nulla tempor sint cillum. Minim consectetur magna nulla commodo exercitation ullamco. Id adipisicing aute elit commodo ut.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 5,
    "make": "Softmicro",
    "model": "",
    "serial_num": 3444,
    "price": 1862,
    "description": "Sit eu qui non do aute commodo ad fugiat cupidatat. In amet aute adipisicing sit proident eiusmod esse incididunt magna esse occaecat Lorem. Dolore qui eiusmod fugiat nulla velit mollit sit. Laborum cillum nostrud ipsum ea aute et reprehenderit tempor velit nulla eiusmod non laboris deserunt. Labore voluptate exercitation mollit proident sunt ea est et. Deserunt quis laboris Lorem laborum irure cillum incididunt Lorem quis fugiat quis excepteur laboris.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 2,
    "make": "Ontality",
    "model": "",
    "serial_num": 77473,
    "price": 3961,
    "description": "Proident tempor ex fugiat qui Lorem pariatur. Occaecat duis excepteur nostrud commodo eiusmod aliqua. Sit esse amet non fugiat ea duis sint duis culpa commodo laboris. Id pariatur sint cupidatat est culpa id cupidatat cillum irure dolore. Et voluptate consequat officia est cupidatat labore duis adipisicing. Non cupidatat nulla excepteur elit reprehenderit ex et voluptate velit.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 2,
    "make": "Martgo",
    "model": "",
    "serial_num": 2452,
    "price": 3874,
    "description": "Exercitation excepteur cupidatat nostrud ad dolore labore non ad proident proident deserunt laborum. Nisi ut anim eu est ut irure quis officia. Exercitation ex enim adipisicing ex consectetur incididunt qui aute sint minim.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 5,
    "make": "Xanide",
    "model": "",
    "serial_num": 87177,
    "price": 14,
    "description": "Officia non aute ea nostrud nulla veniam nisi aliquip minim qui cillum officia amet quis. Deserunt nisi eiusmod adipisicing et occaecat Lorem minim. Ea dolor ullamco id incididunt Lorem elit laboris nulla id esse. Consectetur reprehenderit dolore minim exercitation laboris aute.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 1,
    "make": "Medesign",
    "model": "",
    "serial_num": 92478,
    "price": 2743,
    "description": "Minim dolore eu pariatur in eiusmod officia cillum excepteur consectetur sunt laboris. Anim enim non velit quis exercitation nostrud dolor do officia ullamco laborum non cillum cupidatat. Sit voluptate sint do ut ullamco nostrud ipsum occaecat velit occaecat elit quis irure veniam. Adipisicing ex qui officia labore ea dolore eiusmod eiusmod esse exercitation sint ad laboris.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 7,
    "make": "Speedbolt",
    "model": "",
    "serial_num": 2123,
    "price": 749,
    "description": "Culpa non proident non reprehenderit ex et ut exercitation. Lorem amet sunt culpa quis anim nostrud magna ex nostrud cillum dolor cupidatat ipsum in. Enim quis non consequat nulla culpa tempor dolore et ullamco elit irure.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 7,
    "make": "Genmom",
    "model": "",
    "serial_num": 1044,
    "price": 7395,
    "description": "Id eiusmod dolore elit dolore duis ut. Culpa eu Lorem enim dolor adipisicing aliqua labore voluptate dolore reprehenderit quis veniam cupidatat ipsum. Laborum reprehenderit minim consequat reprehenderit nisi velit id cupidatat voluptate. Sit voluptate excepteur velit cillum aute ullamco tempor anim eu sint do minim anim. Velit est esse duis dolore do aute eiusmod amet sint labore incididunt occaecat ea anim. Quis elit anim exercitation veniam cupidatat cillum aute quis deserunt culpa occaecat commodo.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 8,
    "make": "Strozen",
    "model": "",
    "serial_num": 6966,
    "price": 3740,
    "description": "Incididunt minim do in non deserunt duis tempor sint. Culpa consequat irure cillum excepteur excepteur Lorem nulla eu in. Amet eiusmod aliqua ea irure ipsum proident mollit cupidatat elit culpa laboris dolor voluptate excepteur. Fugiat labore magna voluptate ipsum proident ut esse velit. Dolor Lorem ullamco enim nulla veniam deserunt cillum do ut ut aute. Occaecat sit ut culpa excepteur aute est esse mollit culpa. Non veniam commodo tempor exercitation culpa deserunt voluptate Lorem Lorem.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 3,
    "make": "Marqet",
    "model": "",
    "serial_num": 49103,
    "price": 4543,
    "description": "Proident sunt aliqua esse magna fugiat proident laboris deserunt laborum incididunt commodo ea amet. Aute nulla exercitation minim nulla. Incididunt deserunt labore cupidatat eu deserunt cupidatat ex non proident exercitation irure nulla. Laborum ut elit aute consequat mollit dolore laborum velit dolore. Amet elit dolore est cupidatat esse ullamco sit.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 5,
    "make": "Furnafix",
    "model": "",
    "serial_num": 34248,
    "price": 9462,
    "description": "Magna sint non aliquip cupidatat reprehenderit non ipsum ex ipsum adipisicing reprehenderit adipisicing labore sunt. Non excepteur aliqua et tempor labore pariatur aute aliqua ex proident. Id sit labore irure nulla et irure excepteur officia. Aliqua ipsum velit voluptate elit reprehenderit. Aliquip quis ex in proident ullamco dolore exercitation qui nulla qui aliquip nostrud proident quis. Duis in consectetur quis esse laboris sint elit nostrud in. Cillum commodo eiusmod laboris pariatur fugiat ex veniam fugiat elit occaecat.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 4,
    "make": "Housedown",
    "model": "",
    "serial_num": 93291,
    "price": 2584,
    "description": "Est laboris laboris cillum tempor mollit deserunt adipisicing. Laborum est sunt occaecat reprehenderit consectetur esse tempor eiusmod ad do ipsum pariatur. Aliquip id ipsum ex ipsum Lorem aliqua occaecat exercitation et do irure tempor ipsum consectetur. Lorem in excepteur proident consectetur qui id pariatur.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 8,
    "make": "Yurture",
    "model": "",
    "serial_num": 100210,
    "price": 1447,
    "description": "Eiusmod duis elit sunt ipsum labore excepteur ad magna et cillum adipisicing culpa. Commodo consectetur nisi eiusmod dolor ea ea sit consectetur. Occaecat nulla eiusmod nulla duis laboris et in. Excepteur fugiat magna commodo elit. Duis nostrud veniam ipsum laboris ad minim incididunt excepteur nulla ex ut ea duis. Cillum sit ex est nulla duis nisi sunt nostrud.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 6,
    "make": "Straloy",
    "model": "",
    "serial_num": 39369,
    "price": 2847,
    "description": "Mollit consequat id laborum elit anim voluptate mollit culpa est nulla. Tempor tempor amet irure in velit qui sit do laboris fugiat proident proident consequat sint. Adipisicing esse enim do tempor irure. Culpa duis proident cupidatat Lorem cupidatat aliquip laboris consectetur qui qui enim sunt pariatur enim. Incididunt consectetur ullamco laboris voluptate ut Lorem. Commodo aliquip cillum eiusmod consequat eiusmod ea reprehenderit do quis aliquip est nostrud. Ea ipsum non ex ullamco duis dolor excepteur cillum do eu nisi sint.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 6,
    "make": "Musanpoly",
    "model": "",
    "serial_num": 61216,
    "price": 186,
    "description": "Ut elit aliquip ea fugiat quis ut et veniam in minim deserunt magna. Sit ipsum nulla irure dolore cupidatat sint aliqua nostrud elit veniam. Dolore voluptate deserunt voluptate enim et tempor. Fugiat tempor mollit reprehenderit dolor qui dolore aute fugiat ea eu esse cupidatat sint magna. Nostrud veniam pariatur pariatur nisi Lorem exercitation. Commodo ut magna ipsum dolor voluptate excepteur sint laboris enim eiusmod eu consectetur proident.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 6,
    "make": "Ersum",
    "model": "",
    "serial_num": 72162,
    "price": 7680,
    "description": "Fugiat cupidatat laboris nostrud et ex cillum in eiusmod enim non est nisi. Cupidatat sint nostrud non amet ea. Eu ad sunt ea aliquip ipsum. Non dolor fugiat sunt laborum dolor in tempor. Ipsum non proident adipisicing proident.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 8,
    "make": "Cablam",
    "model": "",
    "serial_num": 80310,
    "price": 4199,
    "description": "Duis velit quis tempor laboris velit officia Lorem sint. Deserunt fugiat ut in exercitation pariatur sunt cupidatat ex minim excepteur. Sunt aliquip minim exercitation laboris duis in ea. Est nulla non exercitation exercitation. Ad fugiat ullamco sit nisi qui ipsum ullamco eiusmod ullamco velit ex anim eiusmod elit.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 6,
    "make": "Bleendot",
    "model": "",
    "serial_num": 63231,
    "price": 8699,
    "description": "Aliqua non excepteur ea ea qui Lorem magna sunt. Do sit ad sunt Lorem cupidatat quis non ea exercitation minim aute officia. Consequat ipsum est pariatur ullamco nulla enim cillum. Aute mollit sunt sint ipsum Lorem do amet. Irure irure exercitation magna esse aliquip. Tempor ullamco exercitation labore laborum ut non. Culpa pariatur consectetur aliqua ex laborum reprehenderit minim mollit culpa non.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 1,
    "make": "Gonkle",
    "model": "",
    "serial_num": 74192,
    "price": 8713,
    "description": "Tempor culpa Lorem laboris est minim quis fugiat. Aute nulla ut ea irure exercitation cupidatat nisi consequat amet exercitation culpa exercitation. Esse minim laboris exercitation adipisicing. Ad sit est non eiusmod ullamco cupidatat tempor qui duis ex nisi excepteur. Veniam reprehenderit adipisicing fugiat deserunt labore sit nulla est nostrud nisi.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 8,
    "make": "Andershun",
    "model": "",
    "serial_num": 15285,
    "price": 8395,
    "description": "Irure ut dolore id minim velit esse anim reprehenderit. Minim nulla officia aute ipsum dolore irure. Nisi Lorem ullamco consequat sint magna velit magna amet reprehenderit ad nisi laborum. Culpa dolor cupidatat adipisicing veniam excepteur. Sint voluptate velit ut consequat incididunt ex esse velit voluptate pariatur enim proident officia veniam. Tempor officia enim est enim. Proident enim laborum mollit culpa exercitation ea laboris ullamco magna laboris.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 5,
    "make": "Orbiflex",
    "model": "",
    "serial_num": 44463,
    "price": 3005,
    "description": "Enim esse velit laboris nulla laborum. Aute aute dolor incididunt fugiat velit velit do. Cupidatat eiusmod esse minim dolore amet. Ex laborum anim Lorem et dolore ad. Consequat amet occaecat esse veniam minim pariatur excepteur amet labore magna anim non anim velit. Ea non excepteur fugiat aliqua.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 2,
    "make": "Corecom",
    "model": "",
    "serial_num": 94237,
    "price": 8735,
    "description": "Nisi dolor pariatur aliquip eu irure ipsum. Duis sit nulla officia laborum laboris fugiat enim ullamco ea. Enim aliqua amet veniam irure in proident culpa pariatur do excepteur elit dolore proident. Culpa nostrud voluptate nulla nisi incididunt cillum excepteur. Consequat reprehenderit nisi quis laboris incididunt velit velit nisi duis veniam magna. Nostrud amet id in adipisicing veniam pariatur proident labore id consectetur commodo.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 5,
    "make": "Otherway",
    "model": "",
    "serial_num": 25138,
    "price": 8274,
    "description": "Laboris non est consequat aliqua. Labore ullamco ipsum magna consequat irure incididunt adipisicing ex enim quis dolore in cillum. Amet ad id Lorem ex consectetur adipisicing quis est sit sunt.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 6,
    "make": "Architax",
    "model": "",
    "serial_num": 6637,
    "price": 2302,
    "description": "Veniam magna deserunt irure tempor nisi amet voluptate. Culpa nulla sit culpa velit commodo ad et. Anim elit qui ipsum non officia ad officia eiusmod proident irure dolore. Laboris aliqua amet labore ex cillum adipisicing et esse occaecat cupidatat excepteur nisi nisi culpa. Amet cillum sint aliquip mollit ea duis velit ex id mollit anim eiusmod exercitation cillum.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 3,
    "make": "Perkle",
    "model": "",
    "serial_num": 1357,
    "price": 6573,
    "description": "Duis culpa ut adipisicing ex qui mollit cupidatat ipsum amet. Tempor ut excepteur reprehenderit in eiusmod pariatur. Ut dolor eiusmod pariatur id ad. Ea nostrud do do dolore anim qui aliqua cillum qui cupidatat nisi. Velit cupidatat duis proident id fugiat aute quis. Sunt consectetur aute incididunt consequat sunt. Dolor cillum in ullamco in reprehenderit aliqua.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 1,
    "make": "Zilla",
    "model": "",
    "serial_num": 23454,
    "price": 9555,
    "description": "Non anim adipisicing occaecat ex deserunt sint officia aliquip. Ad ipsum nisi pariatur quis fugiat non. Consequat ipsum est eiusmod do aute consequat sunt veniam est nisi nostrud sit. Aliquip tempor eu mollit sunt qui laboris laborum proident veniam labore. Adipisicing do voluptate et culpa fugiat esse veniam commodo esse cupidatat aliqua et nostrud. Voluptate elit deserunt elit velit sint.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 5,
    "make": "Skyplex",
    "model": "",
    "serial_num": 9457,
    "price": 5685,
    "description": "Reprehenderit deserunt eu anim fugiat mollit nulla in veniam non aliquip culpa culpa deserunt irure. Elit incididunt anim elit adipisicing non fugiat dolore veniam exercitation velit voluptate dolor deserunt est. Mollit incididunt Lorem velit laborum duis mollit. Ad voluptate cupidatat et sit sint. Anim minim reprehenderit laborum ex dolore. Anim exercitation laborum nulla proident consectetur est in commodo anim cillum sint enim non.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 5,
    "make": "Buzzopia",
    "model": "",
    "serial_num": 98106,
    "price": 4027,
    "description": "Ex amet qui dolor laborum eu officia consectetur sint ut cillum sunt laboris laborum. Aute ea magna adipisicing minim incididunt. Proident duis do cupidatat non magna deserunt do irure et pariatur. Aliquip commodo qui ad anim amet exercitation incididunt est.\r\n"
  },
  {
    "user_id": 4,
    "type_id": 2,
    "make": "Otherside",
    "model": "",
    "serial_num": 9376,
    "price": 5275,
    "description": "Et sit fugiat ipsum ea eiusmod ut non mollit. Id minim est dolore aute veniam mollit deserunt. Aute eiusmod dolore officia nisi veniam exercitation laboris aute tempor fugiat reprehenderit magna.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 6,
    "make": "Fossiel",
    "model": "",
    "serial_num": 38452,
    "price": 8492,
    "description": "Nisi incididunt nisi do veniam eiusmod ullamco est adipisicing excepteur occaecat magna. Eiusmod aute anim Lorem do consequat adipisicing deserunt mollit ad proident irure esse. Eiusmod anim velit esse consectetur tempor velit occaecat nulla ex. Reprehenderit id ipsum anim exercitation non sunt enim laborum amet. Adipisicing aliquip id cupidatat pariatur proident occaecat velit ex pariatur laborum aliquip.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 1,
    "make": "Ecratic",
    "model": "",
    "serial_num": 15359,
    "price": 5687,
    "description": "Culpa velit aliqua nostrud voluptate dolor magna in. Non ipsum occaecat Lorem do proident ullamco occaecat aute velit irure sint aliquip tempor. Non magna eu cillum nulla.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 6,
    "make": "Aquacine",
    "model": "",
    "serial_num": 53208,
    "price": 5226,
    "description": "Reprehenderit veniam eiusmod magna nulla incididunt occaecat. Cillum velit duis proident aute aliqua est. Sint pariatur officia laboris ea do ut cupidatat nostrud duis quis exercitation duis. Exercitation minim culpa velit deserunt ea officia pariatur amet ut aliqua. Laboris et reprehenderit aliqua reprehenderit veniam laboris tempor enim amet exercitation laborum esse. Reprehenderit excepteur consectetur velit enim in enim sint. Consectetur exercitation esse nisi pariatur id.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 6,
    "make": "Pharmex",
    "model": "",
    "serial_num": 6144,
    "price": 3573,
    "description": "Deserunt eu laboris amet consequat aliqua. Deserunt nulla magna cupidatat Lorem eiusmod elit anim ex est proident adipisicing. Lorem exercitation magna ut qui dolor enim esse sit sint voluptate mollit dolore. Occaecat aute ex sint adipisicing laboris deserunt eu magna Lorem dolor aute minim exercitation. Sint duis pariatur fugiat officia eiusmod et Lorem non commodo.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 7,
    "make": "Kangle",
    "model": "",
    "serial_num": 62322,
    "price": 9919,
    "description": "Eu velit elit incididunt et. Qui anim qui nulla voluptate commodo anim aute. Occaecat consequat eiusmod enim nisi. Excepteur dolore aute excepteur et fugiat veniam consectetur adipisicing et nulla voluptate amet veniam proident. Adipisicing consectetur Lorem esse Lorem ut pariatur nulla enim et.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 5,
    "make": "Malathion",
    "model": "",
    "serial_num": 32296,
    "price": 3326,
    "description": "Eiusmod sunt non do deserunt irure excepteur tempor aute quis tempor labore nisi do esse. Aliquip nulla non proident dolor consequat mollit eu. Exercitation ex voluptate mollit proident pariatur esse irure proident consectetur culpa. Ex ad aliqua labore aliquip cillum pariatur excepteur pariatur ut. Laboris esse mollit sint eiusmod. Consequat ullamco amet reprehenderit pariatur officia ullamco dolore nisi adipisicing elit labore. Reprehenderit sit nisi ut nisi ex consectetur Lorem.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 5,
    "make": "Neteria",
    "model": "",
    "serial_num": 90107,
    "price": 7534,
    "description": "Esse tempor duis dolor Lorem magna incididunt id tempor cillum incididunt sint proident. Veniam Lorem duis reprehenderit enim consequat officia anim ullamco consequat aute in. Ea exercitation labore irure elit aliqua.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 6,
    "make": "Geekular",
    "model": "",
    "serial_num": 4137,
    "price": 2952,
    "description": "Elit Lorem veniam elit consequat consequat. Incididunt ad excepteur anim nulla. Non ex do commodo excepteur quis exercitation. Aliquip consequat velit voluptate duis eu qui mollit aliquip ex id laboris sunt. Tempor magna mollit reprehenderit magna duis veniam Lorem dolore ullamco.\r\n"
  },
  {
    "user_id": 5,
    "type_id": 1,
    "make": "Fibrodyne",
    "model": "",
    "serial_num": 28118,
    "price": 221,
    "description": "Veniam ad aliqua labore mollit. Tempor sunt aliqua adipisicing magna ea ipsum. Enim ea laboris eu exercitation elit nostrud aliquip aute esse sunt.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 3,
    "make": "Songbird",
    "model": "",
    "serial_num": 57233,
    "price": 2082,
    "description": "Mollit Lorem laborum voluptate quis commodo veniam aliqua id et pariatur veniam nostrud minim. Eu aute sunt nostrud dolor nisi enim excepteur consectetur ipsum. Sit quis mollit eiusmod do commodo irure ut et in. Ea cupidatat nostrud reprehenderit aute culpa est sint ex irure non. Minim excepteur cillum dolore aliqua qui aliquip dolore laboris mollit quis ullamco pariatur labore exercitation.\r\n"
  },
  {
    "user_id": 7,
    "type_id": 2,
    "make": "Inquala",
    "model": "",
    "serial_num": 38218,
    "price": 6097,
    "description": "Quis pariatur duis adipisicing anim ipsum quis velit anim duis eu nostrud non occaecat anim. Do incididunt proident occaecat incididunt adipisicing veniam fugiat et elit enim. Ea laboris pariatur in dolor laborum eiusmod duis sint minim magna anim sunt. Amet laboris incididunt ex Lorem. Proident eiusmod sit do sint cillum pariatur sit. Sint magna eiusmod commodo eu voluptate consectetur quis.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 4,
    "make": "Egypto",
    "model": "",
    "serial_num": 64417,
    "price": 32,
    "description": "Est ipsum commodo est exercitation anim. Ea et Lorem aliqua Lorem mollit cillum occaecat et fugiat ex voluptate dolore labore. Officia nisi aliquip exercitation et nisi culpa pariatur dolore mollit. Sunt magna cupidatat in anim velit officia anim veniam nostrud officia fugiat sit commodo. Lorem duis nisi culpa proident sit. Eiusmod elit occaecat occaecat tempor in irure officia. In laborum esse laborum anim occaecat ea in dolor laborum laborum proident.\r\n"
  },
  {
    "user_id": 2,
    "type_id": 5,
    "make": "Virxo",
    "model": "",
    "serial_num": 18157,
    "price": 1999,
    "description": "Proident adipisicing occaecat sint enim excepteur tempor et duis dolor fugiat ut culpa. Elit excepteur non do irure deserunt quis ex sint. Reprehenderit velit labore enim occaecat. Laboris nulla sint amet deserunt nostrud aliquip aliquip dolore nulla sit.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 3,
    "make": "Hyplex",
    "model": "",
    "serial_num": 30338,
    "price": 6873,
    "description": "Ea deserunt sit anim id nisi sit esse reprehenderit reprehenderit enim id laboris esse. Ullamco ex non laboris in ullamco esse incididunt dolore cupidatat est quis. Occaecat esse sit officia proident enim adipisicing aute ipsum ad duis commodo et incididunt labore. Eu qui dolor ut nostrud mollit reprehenderit laboris irure. Officia occaecat dolore eiusmod non laboris sunt sunt deserunt velit. Cillum tempor nulla dolore elit tempor consectetur minim. Reprehenderit velit reprehenderit irure dolor sit esse sit sint pariatur.\r\n"
  },
  {
    "user_id": 3,
    "type_id": 4,
    "make": "Skinserve",
    "model": "",
    "serial_num": 88190,
    "price": 9699,
    "description": "Tempor irure aliquip quis officia elit in tempor enim occaecat aliquip officia aute nisi. Non eiusmod duis amet reprehenderit ad irure laboris qui excepteur do. Nisi minim voluptate commodo irure proident aute consequat sint adipisicing reprehenderit sit est. Anim qui tempor ad dolore esse eu eiusmod anim irure enim consequat consequat irure. Nisi dolore nostrud labore ex et nulla irure mollit culpa voluptate deserunt laboris exercitation mollit.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 2,
    "make": "Tropolis",
    "model": "",
    "serial_num": 53172,
    "price": 3696,
    "description": "Nulla deserunt do labore nostrud. Eiusmod commodo nisi anim irure officia culpa irure ea ullamco consectetur elit non exercitation do. Minim cillum velit enim labore id proident dolor et est elit. Nostrud mollit ipsum dolore culpa cillum mollit ea eiusmod nostrud.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 4,
    "make": "Bleeko",
    "model": "",
    "serial_num": 9098,
    "price": 6412,
    "description": "Laboris excepteur in sit eu exercitation voluptate esse sint laborum. Magna laboris consectetur tempor dolor. Sunt nostrud ullamco ex culpa aliqua culpa. Ea ad fugiat labore duis labore magna.\r\n"
  },
  {
    "user_id": 6,
    "type_id": 5,
    "make": "Magneato",
    "model": "",
    "serial_num": 38308,
    "price": 9524,
    "description": "Consequat eu reprehenderit laborum et ad anim laborum anim magna qui in nulla elit. Ad ipsum magna minim nulla tempor nisi. Voluptate deserunt in commodo eu laborum amet ut cupidatat consequat occaecat ut. Ipsum ad enim occaecat laborum qui non labore voluptate excepteur quis aute. Amet Lorem incididunt irure ullamco. Elit reprehenderit nostrud duis ad sint nulla anim reprehenderit sunt.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 4,
    "make": "Corporana",
    "model": "",
    "serial_num": 27447,
    "price": 2756,
    "description": "Culpa nostrud cupidatat cillum eu irure sit labore nulla enim non duis laborum. Voluptate sit occaecat irure velit eiusmod sit nostrud. Proident cupidatat esse adipisicing dolor minim. Consectetur consequat veniam Lorem in.\r\n"
  },
  {
    "user_id": 1,
    "type_id": 6,
    "make": "Nitracyr",
    "model": "",
    "serial_num": 16437,
    "price": 2463,
    "description": "Et sint eiusmod voluptate tempor ullamco. Laborum ad aliqua excepteur quis est enim cillum eiusmod exercitation magna cupidatat consequat ipsum. Exercitation pariatur tempor ullamco esse ullamco et excepteur magna mollit sint anim reprehenderit sunt. Voluptate mollit deserunt aute aute eiusmod reprehenderit sint nulla voluptate non ullamco. In Lorem pariatur nostrud occaecat laborum. Do ullamco pariatur dolore labore.\r\n"
  }
]);
    });
};
