export interface Product {
  id: number;
  class: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: Array<string>;
  url: string;
  like: number;
  ok: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    class: 1,
    name: 'Dark Syndrome (Синдром темного)',
    price: 14890,
    description: 'Вы бессмертный и каждый раз, когда ваше тело умирает, ваша душа переходит к ближайшему человеку. После глобального апокалипсиса твоя душа летит на огромные расстояния, и ты открываешь глаза в другом мире.',
    rating: 4.5,
    image: ['https://www.gamespot.com/a/uploads/scale_medium/1197/11970954/3026416-syndrome_poster.jpg'],
    url: 'https://www.gamespot.com/a/uploads/scale_medium/1197/11970954/3026416-syndrome_poster.jpg',
    like: 0,
    ok: true
  },
  {
    id: 2,
    class: 1,
    name: 'Order and Havoc (Порядок и хаос)',
    price: 31990,
    description: 'Границы Изумрудной империи велики, и чтобы обойти её земли может не хватить и всей жизни. Кланы правят своими землями, всесильные в своих владениях, и лишь власть и авторитет Императора не даёт им вступить в открытое противостояние. Самураи странствуют, выполняя свой долг: одни борются с чудовищами, оберегая покой державы, другие интригуют во дворце, добывая больше денег и влияния для родного клана, третьи упражняются в магии, чтобы изгонять демонов, исцелять болезни и делать многое другое, о чём непосвящённые могут лишь догадываться... ',
    rating: 4.3,
    image: ['https://www.pcgamesn.com/wp-content/uploads/legacy/for_honor_season_4-1200x675.jpg'],
    url: 'https://www.pcgamesn.com/wp-content/uploads/legacy/for_honor_season_4-1200x675.jpg',
    like: 0,
    ok: true
  },
  {
    id: 3,
    class: 1,
    name: 'Demonheart (Сердце демона)',
    price: 22990,
    description: 'Вам предстоит играть за «демона на плече». Ваша основная задача состоит в том, чтобы переманивать людей на сторону зла. Кажется, у вас неплохо получается, ангел божественной стороны сдаёт обороты. В один день ваш соперник не появляется, и вы, противореча законам Ада, пытаетесь его найти.',
    rating: 4.6,
    image: ['https://images.stopgame.ru/games/2020/02/09/dEBUJxae.jpg'],
    url: 'https://images.stopgame.ru/games/2020/02/09/dEBUJxae.jpg',
    like: 0,
    ok: true
  },
  {
    id: 4,
    class: 1,
    name: 'Alien Tales (Рассказы захватчиков)',
    price: 28990,
    description: 'Вы хороший историк. После смерти от несчастного случая, вы перерождаетесь принцем небольшого европейского королевства средних веков. Вы хорошо знаете период истории в котором вы переродились и все что будет в будущем. Вы становитесь королем. Приведете ли вы свое королевство к процветанию или к уничтожению зависит только от вас.',
    rating: 4.7,
    image: ['https://static.wikia.nocookie.net/gamia_gamepedia_en/images/c/cc/Alien_Tales_cover.png/revision/latest?cb=20180806155626'],
    url: 'https://static.wikia.nocookie.net/gamia_gamepedia_en/images/c/cc/Alien_Tales_cover.png/revision/latest?cb=20180806155626',
    like: 0,
    ok: true
  },
  {
    id: 5,
    class: 1,
    name: 'Alterland (Альтернативный мир)',
    price: 22960,
    description: 'Изобретайте свой собственный неповторимый мир, и вперёд, навстречу приключениям! Сражайтесь с драконами, станьте хакером и взломайте любой суперкомпьютер, бороздите небесные просторы на огромном дирижабле – для вас нет никаких преград! Игра ограничена только вашим воображением! Подробнее: https://shop.hobby-games.kz/p88360895-genesys-osnovnaya-kniga.html',
    rating: 4.7,
    image: ['https://pbs.twimg.com/profile_images/700324430791086080/WySsSujr_400x400.jpg'],
    url: 'https://pbs.twimg.com/profile_images/700324430791086080/WySsSujr_400x400.jpg',
    like: 0,
    ok: true
  },
  {
    id: 6,
    class: 2,
    name: 'Madscape (Безумный побег)',
    price: 28215,
    description: 'Остановив вторжение племени драгунов, солдаты короля Тарона бросили незваных гостей в тюрьму Кулбак. Её зачарованные врата и неумолимая механическая стража делают абсурдной саму мысль о побеге. Однако раз в год монарх даёт возможность избранным заключённым сразиться за свою свободу на арене королевского колизея. Королевство Налос, в котором происходит действие игры – это часть мира, который может быть вам знаком по настольным играм "Путь героя" и "Картографы".',
    rating: 4.8,
    image: ['https://cdkeyprices.com/images/games/2308739/madspace-to-hell-and-beyond-desktop-logo-all.jpg'],
    url: 'https://cdkeyprices.com/images/games/2308739/madspace-to-hell-and-beyond-desktop-logo-all.jpg',
    like: 0,
    ok: true
  },
  {
    id: 7,
    class: 2,
    name: 'Enemy Project (проект "враг")',
    price: 21249,
    description: 'Всё больше непознанного и неподдающегося человеческому сознанию приходит в наш мир... И приносит с собой множество опасностей! Всё больше людей страдает в ночном бессвязном бреду, а некоторые даже забылись вечным сном... Прошли уже недели с тех пор, как в своих снах вы начали видеть город, залитый светом вечного заката. Мягкие и приглушенные переливы и отблески алого заката на башнях и стенах таинственного города манили вас, и вы каждую ночь возвращались к нему во снах, пытаясь найти вход. Вы почти перестали бодрствовать, ведь сон – это настоящая реальность, а привычный мир – лишь его отражение... Сны и явь медленно сливаются воедино, осталось сделать самый последний шаг навстречу вечности...',
    rating: 3.3,
    image: ['https://cdn.mos.cms.futurecdn.net/KYpKXsUPRQLtnqSs3r4a4e.jpg'],
    url: 'https://cdn.mos.cms.futurecdn.net/KYpKXsUPRQLtnqSs3r4a4e.jpg',
    like: 0,
    ok: true
  },
  {
    id: 8,
    class: 2,
    name: 'Forces of Nature (Силы природы)',
    price: 32663,
    description: 'Участники отправляются на поиски города Последняя Руина. В пути вам пригодится специальный атлас со своими историями и местами, который поможет в поиске нужных артефактов, добыче сокровищ и вьючных птиц. Также вы встанете во главе группы путешественников и будете взаимодействовать с союзниками, чтобы исследовать различные уголки земли и разгадать секреты природы.',
    rating: 4.7,
    image: ['https://cdn.akamai.steamstatic.com/steam/apps/568570/capsule_616x353.jpg?t=1522830138'],
    url: 'https://cdn.akamai.steamstatic.com/steam/apps/568570/capsule_616x353.jpg?t=1522830138',
    like: 0,
    ok: true
  },
  {
    id: 9,
    class: 2,
    name: 'Space Haven (Космическое убежище)',
    price: 29639,
    description: 'Ты путешествуешь по космосу в одиночку. При этом прекрасно знаешь, что на Земле остались твоя семья, друзья, коллеги. Чувство одиночества гложет тебя изнутри, но ты не можешь вернуться. Почему?',
    rating: 4.7,
    image: ['https://ksr-ugc.imgix.net/assets/024/203/723/795e703607cb3d2125b62601e36c3092_original.png?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1551110019&auto=format&frame=1&q=92&s=d86bacc00a36005267da0fb03a7a518c'],
    url: 'https://ksr-ugc.imgix.net/assets/024/203/723/795e703607cb3d2125b62601e36c3092_original.png?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1551110019&auto=format&frame=1&q=92&s=d86bacc00a36005267da0fb03a7a518c',
    like: 0,
    ok: true
  },
  {
    id: 10,
    class: 2,
    name: 'Infected Blade (Зараженный клинок)',
    price: 20291,
    description: 'Вы - суперзлодей, потепервший крах в борьбе против светлых сил. Герой делает последний взмах с надеждой отсечь голову, но его клинок ломается об шею. В игре предстоит объединиться группам героев и группам злодеев чтобы поставить точку в борьбе за мир.',
    rating: 4.6,
    image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiG_Xcl08XXxBF4Rud0i9YDb9_4fe-4__vNN35I55xYcYCz21E3uGM5Z81Y_XE2fohD68&usqp=CAU'],
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiG_Xcl08XXxBF4Rud0i9YDb9_4fe-4__vNN35I55xYcYCz21E3uGM5Z81Y_XE2fohD68&usqp=CAU',
    like: 0,
    ok: true
  },
  {
    id: 11,
    class: 3,
    name: 'Geospace (Геокосмос)',
    price: 12557,
    description: 'Сегодня, пройдя старую складскую площадку в НАСА, вы нашли архив фотографий посадочной площадки Луны. Кроме того, однако ... это кадры с первой посадки на Титан, Марс, Европу, Уран, а также некоторые очень странные схемы …Античный Марс и дирижабли. Это все ждет вас в игре',
    rating: 4.8,
    image: ['https://img.g2a.com/323x433/1x1x0/geo-steam-key-global/5ae443ec5bafe353d906bb93'],
    url: 'https://img.g2a.com/323x433/1x1x0/geo-steam-key-global/5ae443ec5bafe353d906bb93',
    like: 0,
    ok: true
  },
  {
    id: 12,
    class: 3,
    name: 'Starstate (Звездное государство)',
    price: 27913,
    description: 'Вы приходите в сознание на просторах космического корабля, за сотни миль от родной планеты и понимаете, что ужасно голодны, вам хочется пить, и вы не имеете никакого понятия, где находитесь и как вообще умудрились попасть. Ну что же, делать нечего, первым делом надо просто постараться выжить, а затем, может быть, и память вернётся. Вы отправляетесь на поиски пропитания и разведку окрестностей. Вам доступны также путешествия по галактике. Какие бы опасности вам ни встретились на пути, это ваша дорога – и эта дорога ведёт домой.',
    rating: 4.7,
    image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-CNC76aDFPhp0lAerhrZdu_6ogeJ1MwswABrx3MoQt2ZhSHsXbRe_QZ3YWK1glBr5ak&usqp=CAU'],
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-CNC76aDFPhp0lAerhrZdu_6ogeJ1MwswABrx3MoQt2ZhSHsXbRe_QZ3YWK1glBr5ak&usqp=CAU',
    like: 0,
    ok: true
  },
  {
    id: 13,
    class: 3,
    name: 'Hero of Ashes (Герои пепла)',
    price: 11803,
    description: 'Над островом Авалон сгущаются чёрные тучи. Короля больше нет, от его земель остались лишь осколки былого величия. Посевы увядают, честные люди всё чаще выходят на большую дорогу, а из лесов вылезают доселе невиданные чудовища... И пока рыцари чахнут в своих покоях, вам придётся стать героями поневоле.',
    rating: 4.7,
    image: ['https://cf.geekdo-images.com/BxBWqnm98y1qgk9cEmStgQ__opengraph/img/TsU-QXUemFpwB7u_RJLeZS72Gb0=/fit-in/1200x630/filters:strip_icc()/pic5868255.jpg'],
    url: 'https://cf.geekdo-images.com/BxBWqnm98y1qgk9cEmStgQ__opengraph/img/TsU-QXUemFpwB7u_RJLeZS72Gb0=/fit-in/1200x630/filters:strip_icc()/pic5868255.jpg',
    like: 0,
    ok: true
  },
  {
    id: 14,
    class: 3,
    name: 'Biobot (Биоробот)',
    price: 30149,
    description: 'В 3000 лет передовые цивилизации начинают извлекать наше сознание из того, что осталось от наших мертвых тел, и внедрять их в роботов, чтобы узнать информацию о прошлом. Вы умерли в 2045 году и теперь в роботе.',
    rating: 4.7,
    image: ['https://i0.wp.com/popculturemaniacs.com/wp-content/uploads/2021/10/i-am-mother-baby.png?resize=640%2C302'],
    url: 'https://i0.wp.com/popculturemaniacs.com/wp-content/uploads/2021/10/i-am-mother-baby.png?resize=640%2C302',
    like: 0,
    ok: true
  },
  {
    id: 15,
    class: 3,
    name: 'Revolution Laws (Законы революции)',
    price: 14019,
    description: 'Вы живете в мире, где денег не существует. Люди платят воспоминаниями. В зависимости от того, насколько важным было для вас воспоминание, вся ваша личность может измениться, когда вы потеряете его.',
    rating: 4.5,
    image: ['https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/40836.jpeg'],
    url: 'https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/40836.jpeg',
    like: 0,
    ok: true
  },
  {
    id: 16,
    class: 4,
    name: 'Magic Legends (Легенды магии)',
    price: 7500,
    description: 'Перед вами один из пяти стартовых наборов нового сета  для коллекционной карточной игры. Этот набор содержит одного уникального героя сета, полностью готовую к игре колоду, а также один бустер данного сета для усиления колоды. Чтобы начать игру, вашему сопернику также потребуется либо начальный набор, либо уже собранная игровая колода.',
    rating: 4.7,
    image: ['https://cdn1.epicgames.com/ce9774c9678a4377befaa8fdfc8ef71b/offer/EGS_MagicLegends_CrypticStudios_S5-1920x1080-aa51dce3a2e5bfd226f375a184c5cbe9.jpg?h=270&resize=1&w=480'],
    url: 'https://cdn1.epicgames.com/ce9774c9678a4377befaa8fdfc8ef71b/offer/EGS_MagicLegends_CrypticStudios_S5-1920x1080-aa51dce3a2e5bfd226f375a184c5cbe9.jpg?h=270&resize=1&w=480',
    like: 0,
    ok: true
  },
  {
    id: 17,
    class: 5,
    name: 'Forsaken City (Забытый город)',
    price: 19459,
    description: 'В настольной игре каждый игрок контролируют миниатюрное королевство, стремясь расширить свою территорию, влияние, а также своевременно дать отпор неприятелю. Благодаря развитию и технологическому прогрессу вы будете завоёвывать новые территории на протяжении всей игры, зарабатывая победные очки и аккумулируя специальные способности, которые будут задействованы во всей вашей крошечной империи. Чтобы получить максимальную отдачу от своих действий, вам придётся разумно расходовать доступные ресурсы.',
    rating: 4.4,
    image: ['https://cdna.artstation.com/p/assets/images/images/010/662/326/large/jesse-hao-the-forsaken-city.jpg?1525583733'],
    url: 'https://cdna.artstation.com/p/assets/images/images/010/662/326/large/jesse-hao-the-forsaken-city.jpg?1525583733',
    like: 0,
    ok: true
  },
  {
    id: 18,
    class: 5,
    name: 'Fireshift (Форма огня)',
    price: 10345,
    description: 'На просторных террасах зреет рис, реки полны рыбы, а кладовые заполнены припасами. Ничто не могло разрушить гармонию. Ничто, кроме вероломного нападения соседней провинции. В неравном бою появились первые потери – крестьяне, скот, посевы. Местная власть, готовит ответные меры, собирая воинов.',
    rating: 4.4,
    image: ['https://warsandpoliticsoficeandfire.files.wordpress.com/2016/06/house-martell.png?w=768'],
    url: 'https://warsandpoliticsoficeandfire.files.wordpress.com/2016/06/house-martell.png?w=768',
    like: 0,
    ok: true
  },
  {
    id: 19,
    class: 4,
    name: 'Runes and Fortune (Руны и удача)',
    price: 17910,
    description: 'Ну что ж, не одним Плутониевым Драконом живы будем! Зря вы, конечно, разворошили их змеиное гнездо – теперь драконы повсюду, нам столько и не надо было… Выбирайте на любой вкус – огромные и крошечные, гениальные и безмозглые, любвеобильные и… андеды, куда же без андедов. Ну и как их всех замочить? Сейчас научим…',
    rating: 4,
    image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4VPtoxxQPgiWgYKa_raLskzToQFD2hGNrg&usqp=CAU'],
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4VPtoxxQPgiWgYKa_raLskzToQFD2hGNrg&usqp=CAU',
    like: 0,
    ok: true
  },
  {
    id: 20,
    class: 4,
    name: 'Thunderspace (Громовое пространство)',
    price: 22021,
    description: 'Тёмные времена ждут Терринот и принесёт их падение звезды. По крайней мере, так гласит древнее пророчество. Сейчас же странное небесное знамение ярче разгорается в небе, а мудрецы и учёные всё яростнее спорят о его значении. Лишь тёмные пророки знают истину...',
    rating: 4.6,
    image: ['https://a-static.besthdwallpaper.com/ori-i-volya-wisps-grom-dozhd-oboi-2880x1800-18904_8.jpg'],
    url: 'https://a-static.besthdwallpaper.com/ori-i-volya-wisps-grom-dozhd-oboi-2880x1800-18904_8.jpg',
    like: 0,
    ok: true
  }
];
