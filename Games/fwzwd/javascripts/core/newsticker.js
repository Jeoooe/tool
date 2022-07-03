var newsArray;

function updateNewsArray() {
newsArray = [//always true
["饼干是个谎言。", true, "a1"], ["反物质饼干已经被证实不存在，无论谁声称它，请停止。", true, "a4"], ["道可道也，非恒道也。名可名也，非恒名也。无名，万物之始也；有名，万物之母也。故恒无欲也，以观其眇；恒有欲也，以观其所徼。两者同出，异名同谓。玄之又玄，众眇之门。。", true, "a2"],
["核电站已被放弃，转而使用反物质能。", true, "a3"],
["由于富集反物质的不断被挖掘，其价格急剧下降。", true, "a5"], ["在今天的新闻中，人类向反物质之神献祭反物质动物。", true, "a6"], ["你造了一个反物质！无论这意味着什么。", true, "a7"],
["科学家证实，反物质的颜色叫反物质的颜色", true, "a11"], ["上善若水。水善利万物而不争，处众人之所恶，故几于道。居，善地；心，善渊；与，善仁；言，善信；政，善治；事，善能；动，善时。夫唯不争，故无尤。", true, "a10"], ["物非物，人非人。", true, "a9"], ["物质的终点是反物质。-赫维佩尔", true, "a8"],
["NASA能搞个屁火箭? 他们只会搞猩猩（星星）.", true, "a12"], ["正义的电子们正在蹈仁履义。这些电子我们管它叫“正电子”。中间好像少了个电子该有的字，算了不管了。", true, "a13"],
["这个完全无用的句子会让你无处可去，你知道它。一个多么可怕的令人讨厌的人会想出它，他可能会下地狱，为什么开发人员甚至会实现它？即使你继续阅读它，你也无法完成它(the first time).", true, "a14"],
["人点烛，鬼吹灯", true, "a15"], ["可以让重金属轻松些吗？ -Mee6", true, "a16"], ["由于反物质与物理学的混乱，曾经是驼鹿的生物现在是人类。", true, "a17"], ["!好你", true, "a18"],
["可以 -科仪", true, "a19"], ["英语问候语不存在于反物质说话。", true, "a20"], ["要购买max或不购买max，这就是问题所在", true, "a21"], ["反物质诞生了我", true, "a22"],
["炫迈，根本停不下来！", true, "a23"], ["科学记数法已进入战场。", true, "a24"], ["让宇宙再次伟大！ -普川", true, "a25"], ["#dank-maymays", true, "a26"],
["一种新的宗教已经诞生，它像野火一样蔓延。这个宗教的信徒崇拜反物质女神之子佩勒真主。他们还认为10^308就是无限。", true, "a27"], ["有人刚碰到一个团块，就爆炸了。是团反物质，还是爆炸物质?", true, "a28"],
["如果你不是在 Kongregate 或 ivark.github.io 玩该游戏, 则该网站的游戏是盗版的.", true, "a29"], ["在Kongregate上评分5，以便更多人可以体验此5星级评分", true, "a30"], ["BOO!", true, "a31"], ["你吃得太久了。-赫维佩尔", true, "a32"], ["我讨厌我自己。-Boo-chan", true, "a33"],
["Gee golly -Xandawesome", true, "a34"], ["在我们之上，没有任何东西在上面，只有星星在上面。", true, "a35"], ["寄意寒星荃不察，我以我血荐轩辕。", true, "a36"], ["有人不友善，他得到了一场反物质风暴。", true, "a37"],
["你每天都在吃喝拉撒睡，物质的生活就是这么朴实无华且枯燥 --除非你是反物质。", true, "a38"], ["我点地太快了，电脑都变成反物质了。", true, "a39"],
["如果一个外星人降落在你前面的草坪上，伸出一个附属物作为问候的姿态，在你变得友好之前，把它扔一个黑八球。如果附肢爆炸，那么外星人可能是由反物质制成的。如果没有，那么你可以继续把它带给你的领导。-尼尔·德格拉斯·泰森", true, "a40"],
["我猜你妈把反物质搞得跟物质相等了", true, "a41"], ["“天之道，其犹张弓与？高者抑下，下者举之，有余者损之，不足者补之。天之道，损有余而补不足。人之道，则不然，损不足以奉有余。孰能有余以奉天下，唯有道者。是以圣人为而不恃，功成而不处，其不欲见贤。", true, "a42"], ["我们挖了一个大洞来储存这种反物质......阿黛尔在里面滚滚。", true, "a43"],
["如果一切都是反物质的，你怎么能看到自己？", true, "a44"], ["The stock markets have crashed due to antimatter beings somehow knowing what they will be tomorrow.", true, "a45"], ["我的狗吃了太多的反物质，现在它正在“喵喵！”", true, "a46"], ["如果你把无穷大放到你的计算器中，它的结果将是42！", true, "a47"],
["你找到了最稀有的反物质pepe，它是非常罕见的！", true, "a48"], ["我们可以在这个视频上获得1e169赞吗？ 像按钮一样粉碎！", true, "a49"],
["反物质的气味已经显现出来。它闻起来像小猫。", true, "a50"], ["只是墙上的另一个反物质。", true, "a51"], ["剪短你的，懦夫", true, "a52"], ["感激不尽 -dankesehr", true, "a53"],
["这个现在世界危在旦夕，救命，救命！", true, "a54"], ["假如太阳打西边出来了，在地球上所有的歌手和诗人中，我是最牛逼的。--赫维佩尔", true, "a55"], ["擅长用github的赫维佩尔 -赫维佩尔", true, "a56"],
["为反物质人员创建了一个新的聊天服务器来监视物质人，导致世界陷入了混乱和不和谐。", true, "a57"], ["一项新的研究已经出现，将马铃薯的消费与反物质内爆风险的增加联系起来。所以科学家建议多吃它们。", true, "a58"], ["我以为我修复了那个bug，但显然一些更新再次破坏了它-赫维佩尔", true, "a59"],
["也许当时我是基 -Bootato", true, "a60"], ["震惊！赫维佩尔刚刚宣布，max键真的要被移除了！", true, "a61"], ["我把这个游戏献给我的女朋友", true, "a62"],
["反物质猎人不会杀死反物质人，反物质人会杀死反物质人，但这是否意味着反物质烤面包机不会吐反物质吐司，而是反物质吐司吐反物质吐司？", true, "a63"],
["尝试换位思考一下，也许我们眼里的一个反物质人眼里，而我们才是反物质人。", true, "a64"], ["天地不仁，以万物为刍狗。圣人不仁，以百姓为刍狗。", true, "a65"],
["学校开办在全世界范围内引起了学生的恐惧，因为学校不再隔离物质和反物质，湮灭必定效果拔群。", true, "a66"],
["为什么没有人谈论零维度？", true, "a67"], ["更肥一点的反物质。", true, "a68"], ["谁放狗出去的?", true, "a69"], ["如果您无法阅读此内容，是因为你禁用了该新闻。", true, "a70"],
["不会离开，只是将服务器静音，这样他就不会收到通知。", true, "a71"], ["网上找的大多数引用来源都是错的 -亚伯拉罕·林肯", true, "a72"], ["它现在应该可以正常运行了，但它没有 -赫维佩尔", true, "a73"],
["这个游戏没有任何错误…它们是另一种成功。", true, "a74"], ["已发现第三类物质：无效物质。 它没有做任何事情，基本上没用。 发现它的科学家被解雇了。", true, "a75"],
["你的岳母一直在唠叨所有这些反物质对撞机.", true, "a76"], ["如果物质存在，那么反物质就不存在咯？双重否定表肯定嘛。", true, "a77"], ["反物质=生命。不是鹅卵石，不是泥土。", true, "a78"],
["重磅新闻：错误，错误，错误", true, "a79"], ["如果反物质木材可以夹反物质木棍，那是不是意味着反物质木棍可以夹反物质木材。", true, "a80"], ["混沌不是坑，而是物质。", true, "a81"],
["那是因为我是一个优秀的游戏开发人员，并上传了一些完全有效的代码。 -hevipelle", true, "a82"], ["其上不徼，其下不昧，绳绳兮不可名，复归于无物。", true, "a83"],
["Doesn't it annoy you when people don't finish their", true, "a84"], ["Don't anti-quote me on this", true, "a85"], ["Antimatter is honest, matter makes up everything", true, "a86"],
["According to no known laws of aviation, there are multiple ways a bee should be able to be swallowed up by antimatter", true, "a87"], ["You either die as matter or live long enough to be consumed by the antimatter, and then die again", true, "a88"],
["If you gaze long enough into the antimatter, the antimatter gazes back into you", true, "a89"], ["Always gonna give you up. Always gonna let you down. - anti-Rick Astley", true, "a90"],
["Antimatter Dimensions: the next update is always 5 hours away. Always.", true, "a91"], ["#DimensionLivesAntimatter", true, "a92"],
["Do antimatter people with suicidal thoughts get depressants?", true, "a93"], ["To matter or to antimatter, that is the question.", true, "a94"], ["Why is everything so Hevi?",  true, "a95"],
["It has been scientifically proven ages ago, that cats made of matter are assholes. We have good news, because cats made of antimatter are still assholes",  true, "a96"],
["Nobody once told me the anti-world wasn’t gonna roll me", true, "a97"], ["Antimatter is like internet. If you're reading this, you can't have enough of it.",  true, "a98"],
["Antimatter has made time travel possible and I'm here to make the past great again. - 2nd President of the World",  true, "a99"],
["Please insert Disc -1 to continue playing  Antimatter Dimensions ?.", true, "a100"], ["Lore - coming soon ?", true, "a101"],
["I was a part of antimatter like you once. But then I got matter in my knee.", true, "a101"], ["Antimatter... antimatter never changes... until you get to quantum physics of antimatter, but we don't have enough tachyon particles for that.", true, "a102"],
["There is no war in Antimatter Dimensions. Here we are safe. Here we are free.", true, "a103"], ["Antimatter has solved global warming.  In unrelated news, the Earth no longer exists.",  true, "a104"],
["Anti-water, anti-Earth, anti-fire, anti-air. Long ago, the four anti-nations lived together in harmony. Then, everything changed when the anti-Fire Nation attacked. Only the anti-Avatar, the master of all 4 anti-elements could bring balance to the anti-world, but when the world needed him most, he accidentally touched some regular matter and exploded.",  true, "a105"],
["If you open an anti-lootbox, are you selling random possessions for in-game currency?", true, "a106"], ["人们开始质疑赫维佩尔的存在。",  true, "a107"], ["Antimatter Dimensions is proud to be sponsored by Lehm?! Now offering - grass eating lessons! Learn what grass is safe to eat and what grass isn't.",  true, "a108"],
["It is the year 2422. The update still isn't out. Hevi is working on balancing unfunity dimension dimensions and challenges for the 38th layer of prestige. There are over 100 rows of achievements. They're getting ready to start using breaking_breaking_breaking_infinity.js", true, "a109"],
["Import Christmas for a secret theme", true, "a110"],
["What the f*ck did you just f*cking say about me, you little b*tch? I’ll have you know I graduated top of my class in the Antimatter Seals, and I’ve been involved in numerous secret raids on the 9th Dimension, and I have over 300 NNnNeMI-NNnNe confirmed kills. I am trained in potato warfare and I’m the top sniper in the entire Antimatter Galactic armed forces. You are nothing to me but just another infinity. I will wipe you the f*ck out with Max All mashing the likes of which has never been seen before in this dimension, mark my f*cking words. You think you can get away with saying that shit to me over the Interdimensional network? Think again, f*cker. As we speak I am contacting my secret network of autobuyers across the galaxy and your IP is being traced right now so you better prepare for the Big Crunch, maggot. The Big Crunch that wipes out the pathetic little thing you call your life. You’re f*cking dead, kid. I can be anywhere, anytime, and I can kill you in over seven ???? different ways, and that’s just with my mouse. Not only am I extensively trained in dimension shift combat, but I have access to the entire arsenal of the Antimatter Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the universe, you little shit. If only you could have known what unhevi retribution your little “clever” comment was about to bring down upon you, maybe you would have held your f*cking tongue. But you couldn’t, you didn’t, and now you’re buying until 10, you goddamn idiot. I will shit antimatter shit all over you and you will drown in it. You’re f*cking dead, kiddo.", true, "a111"],
["So I've pondered this question for a long time. Antimatter Dimensions... what does it mean? I mean it's game, that's clear. You buy the first dimension, and it gives you antimatter, and the second dimension provides more first dimensions and so on... But what does it mean? It can't just be a game, it seems too plain for that. The developer must have made it as a metaphor. I was doing my weekly ritual of using the fingernail clipper to cut my pubic hair, when finally the realization came to me. The dimensions are just thinly veiled misspellings of the word 'depression'. Regular matter are the cruel and negative thoughts that add to and fuel depression, while antimatter is the positive thoughts and good friends that dispel it You start off with something simple, and it fights almost imperceptibly against the depression, but as you keep going the fight builds. But it never seems to fix everything. The depression seems like it could go on to infinity. So you keep going. But eventually, you figure out, depression isn't infinite. It's just very very large. But your 'dimensions' eventually, with enough work, make enough 'antimatter' to usurp that seeming infinity of depression. Then the possibilities are endless. You are actually happy for once, and your happiness grows exponentially as you go beyond and seemingly 'break' the 'infinity' of depression. And you go on until that 'infinity' seems tiny in comparison to the happiness you've managed to achieve in your life, where if you reset you get over that infinity in less than the blink of an eye. If you want to know what the multiple layers of prestige are...'Dimensional Shifts' are getting new things and methods to give you happiness. 'Dimensional Boosts' are upgrading the things and methods. Examples would be getting a new car being a 'Dimensional Shift' and trading that car in for a new one would be a 'Dimensional Boost'. 'Eternities' are major tragedies such as a loved one dying. That lapse brings you straight back to the beginning, with seemingly no hope of return. But with time, you grow back stronger and happier than ever before. 'Dimensional Sacrifice' is moving away. You have to give up a lot of the things you had that made you happy, but there is new opportunity in where you move to. And that new opportunity gives you more happiness than you ever had. 'Tickspeed' is how easy it is to make you happy, and 'Time Dimensions' make it even easier to be happy. Antimatter Dimensions is a metaphor for a depressed man's successful battle against his illness.",true ,"a112"],
["(Make me sleep) Put me to sleep inside. (I can't sleep) Put me to sleep inside. (Leave me) Whisper my name and give me to the dark. (Make me sleep) Bid my milk to stay. (I can't fall asleep) Before I become done. (Leave me) Leave me to the nothing I've become.", true, "a113"],
["A preview of the next update - loot boxes! Feel a sense of pride and progression as you open cosmic, galactic, and universal lootboxes for chances at rare skins, unique challenges with uniquer rewards, time skips and even new dimensions!", true, "a114"],
["The intent of dimensions is to give a sense of pride and accomplishment", true, "a115"],
["Refreshing cures cancer", true, "a116"],
["I have a 9th, i have a dimension... UHH... IT DOESN'T EXIST!", true, "a117"],
["Since when did we start reporting stuff like this? Half of it isn't even proper news, it's just jokes and meta-references, it doesn't even make sens-HAHAHA DISREGARD THAT I SUCK CO-", true, "a118"],
["The year is 1944, Hevipelle can't release updates for AD because he doesn't exist", true, "a119"],
['"THAT DIMENSION DOESN\'T EXIST" -GhostBot', true, "a120"],
["Most things you know as nuts are actually Drupe seeds or Legumes. Hevipelle on the other hand is quite crazy and can thus be considered a dry uncompartmented fruit.", true, "a121"],
[eval('LZString.decompressFromEncodedURIComponent("GISwdgNghmAmAEsCmBjaAnJBneAXAFlLvCLgOQ5a5Tq7gDmeA9iQLYAOTt8AwjCknRA")'), true, "a122"],
[eval('LZString.decompressFromEncodedURIComponent("IIGxAIBcAsEsGdywLYAcD2AnSsB2BzJRZAQwGs9DkBTcAYXVwDMBXeagEyA")'), true, "a123"],
["Only today you can call 1-800-ANTIMATTER and get a FREE Infinity Dimension! The package also comes with a COMPLETELY FREE SHIPPING and a FREE HIGH DEFINITION ANTI-V!!! Only today for the low price of 42! Estimated delivery time - 5 hours.", true, "a124"],
["1e420 blaze it.", true, "a125"],
["This game doesn't have any bugs, you're just doing it wrong.", true, "a126"],
["Antimatter_Dimensions.mp1.79e308", true, "a127"],
["更多好玩放置游戏请访问：https://likexia.gitee.io/game/", true, "a128"],
["Click this to unlock a secret achievement.", true, "a129"],
["Warning - We have just been informed that there is a chance of infection with a mind-virus of the Basilisk type, similar to the infamous winking parrot. This particular example is known as 'Fractal Cancer Type III'. This is believed to cause a 'crashing' of the mind, similar to a computer crash, due to the mathematical complexity of the image causing mathematical ideas that the mind can't comprehend, a Gondelian shock input eventually leading to crashing through Gondelian spoilers. All who have researched it have eventually died the same way, so it is impossible to tell exactly, but this is the common belief. Regardless, with the introduction of 'cancer' mode, as well as reports of it's spontaneous appearance, sufficient repetition of this mode's appearance may lead to  an image forming in the mind similar to 'Fractal Cancer Type III'. With this in mind, we have some suggestions if you find yourself plagued with it. First, refresh immediately and see if that fixes the issue. If not, navigate to options, and change the theme from cancer to literally anything else. And above all else, Godspeed. We can't afford to lose anymore viewers.", true, "a130"],
["If I have bad English, I'll study English until I have good English.", true, "a131"],
["Someone once told me that antimatter is gonna roll me. I ain't the sharpest atom in the shed. WELL, the tubes start coming and they don't stop coming...", true, "a132"],
['Because of this game I can now use the word "infinity" as a verb.', true, "a133"],
["Ahhh i love the smell of particle annihilation in the morning", true, "a134"],
["The person who said ghosts don't exist obviously doesn't have a discord", true, "a135"],
["AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAntimatter Dimensions was made by some dude from Finland", true, "a136"],
['The Holy trinity of Hevipelle, Antimatter, Infinity Points, and Eternity Points. These 3 resources let us access Hevi’s gift, Time Theorems. And with these Time Theorems, we reach out to Hevi, and call, “Hevi, bless us on this fine day!” And Hevi does. He give us the blessing of Time Studies. These Time Studies were blessings so powerful, Hevi restricted their power. He said, “ I will give you a choice of three paths” and then humanity chose. The short, cheap route of Normal Dimensions, giving instant gratification, the powerful choice of Infinity Dimensions, which were a fast, middle ground path, or Time Dimension, the long wait, and struggle, of humanity. Then, as humanity chose, a crack broke the earth. A serpent snaked out and sneered to humanity, “I will offer the powerful choice of a ninth dimension! I am Slabdrill, lord of all Unhevi. Humanity rose and said “ Begone Slabdrill! We want none of your foul Heresy!” And Hevi rose as well, and smote Slabdrill with his godlike power. As Slabdrill’s corpse fell into the earth, he cried “ this will not be the last of me! Hevi will betr-“ and he fell in the Abyss of matter. Hevi gifted humanity with Eternity upgrades, which boosted infinity dimensions and time dimensions. And Hevi gave humanity his greatest gift . EP multipliers. He said, these will multiply all EP gained by 5, but their cost will increase 25 times. Use them wisely. And Humanity journeyed off with their new power, as Slabdrill’s words echoed in their heads.', true, "a137"],
["We have updated our Antimatter Privacy Policy.", true, "a138"],
  
// Patreon ones
["Is this a jojo reference?", true, "pat1"],

//basic (pre-inf)
["You just made your 1,000,000,000,000,000 antimatter. This one tastes like chicken", "player.money.e == 15", "b1"],
["Nerf the galaxies please.", "player.galaxies == 2 || player.infinitied > 0", "b2"],
["What do you mean, more than two dimensions??? We're on a screen, clearly there are only 2 dimensions.", "player.thirdAmount.gt(0) || player.resets > 0", "b3"],
["How much is Infinity? -literally everyone at least once", "player.eightAmount.eq(190) || player.infinitied > 0", "b4"],
["呃，第四维是正常的...", "player.fourthAmount.gt(0) && player.fifthAmount.eq(0)", "b5"],
["Antimatter people seem to be even more afraid of 13 then we are. They destroyed entire galaxies just to remove 13 from their percents.", "player.galaxies > 0 || player.infinitied > 0", "b8"],
["To understand dimensional sacrifice, you do actually need a PhD in theoretical physics. Sorry!", "player.sacrificed.e >= 10 || player.resets >= 6", "b9"],
["A new group for the standardisation of numbers have come forward with a novel new format involving emoji's.", "player.spreadingCancer > 0", "b11"],
["Antimatter ice cream stand has recently opened- they have octillions of flavors!", "player.totalmoney.e >= 27", "b13"],
["The Heavenly Pelle has generated too much antimatter and needed to create another galaxy. This one can be seen in the southwestern sky.", "player.galaxies > 0 || player.infinitied > 0", "b21"],
["What does the CTRL button do again?", "controlDown", "b27"],
//9th dim
["9th Dimension is a lie.", "player.resets >= 5 || player.galaxies > 0", "b6"],
["The square root of 9 is 3, therefore the 9th dimension can't exist.", "player.resets >= 5 || player.galaxies > 0", "b7"],
["You got assimilated by the 9th dimension? Just call your doctor for mental illness!", "player.resets >= 5 || player.galaxies > 0", "b10"],
["Why is there no 9th dimension? Because 7 8 9.", "player.resets >= 5 || player.galaxies > 0", "b12"],
["The 9th dimension cannot exist because the Nein-speaking nazis died in WW2.", "player.resets >= 5 || player.galaxies > 0", "b14"],
["If you break the fourth wall... well, there's still the fifth, sixth, seventh, and eighth to get through before you encounter bad things, so you should be fine", "player.resets >= 5 || player.galaxies > 0", "b17"],
["Conditions must be met for Hevipelle to sleep. First, it needs to be a blue moon. Second, a specific town in the arctic must have not seen light for a month. Third, he needs to release an AD update. And finally, no one on the discord can be on dimension 9. Only then can he rest, for up to 6 hours, before waking up forcefully to avoid getting the offline achievement.", (player.resets >= 5 || player.galaxies > 0) && player.achievements.includes("r22"), "b22"],
["If the 9th dimension is all evil, then is 3 the root of all evil?", "player.resets >= 5 || player.galaxies > 0", "b24"],
//basic (post-inf pre-rep)
["I've got 1.79e308 problems, but none of them antimatters", "player.infinitied > 0 && !player.break", "b15"],
["Anti Emoji Movie a huge hit", "player.spreadingCancer >= 5", "b18"],
["If this game was made by Valve, Zero Deaths would be impossible.", 'player.achievements.includes("r43")', "b19"],
["Florida man attempts to get Zero Deaths on first run, is stopped by heat death of the universe.", 'player.achievements.includes("r43")', "b16"],
["Having done half the achievements isn't much of an achievement -Boo"," player.achievements.length >= 40", "b20"],
//basic (post-rep)
["Thanos is gonna be super dissapointed when he shows up with a fully powered infinity gauntlet, and Hevi has a fully powered eternity gauntlet", "player.eternities > 0", "b23"],
["New strange material was been found. It seems to grow exponentially, but only helps with antimatter production.", "player.replicanti.unl && player.replicanti.chance == 0.01", "b25"],
["It seems this \"replicanti\" stuff won't be growing any faster now.", "player.replicanti.chance == 1 && player.replicanti.interval == 1", "b26"],
//newsarray
["Does Hevi just pick quotes to put into the game?", "player.newsArray.length >= 30", "n3"],
["New news company has become rivals with us. They are made entirely of antimatter.", "player.newsArray.length >= 80", "n1"],
["How many times can we use \"Anti\" in a row before people stop listening?", "player.newsArray.length >= 100", "n5"],
["Need more quotes! -hevipelle", "player.newsArray.length >= 135", "n2"],
["You're almost there!", "player.newsArray.length >= 160", "n11"],
["You can stop now", "player.newsArray.length >= 165", "n9"],
["fucking hacker", "player.newsArray.length >= 200", "n10"],
["Asian man trys to steal the trophy of fastest infinty of -1 seconds, AND HE DOES IT!", 'player.newsArray.includes("c1")', "n4"],
["I broke the 8th wall, there is only chaos, Slabdrill is ritually sacrificing antimatter to the 9th dimension. This will be my last entry, may Hevipelle have mercy on our souls, we didn't listen, We should have listened.", 'player.newsArray.includes("b17")', "n6"],
["I thought the update was 5 hours away... -new players after more than 5 hours of gameplay", 'player.newsArray.includes("a91") && player.totalTimePlayed >= 600*300', "n7"],
["Somebody told me to wait five hours for the update yesterday but it's today and it still hasn't come! What do I do?", 'player.newsArray.includes("a91") && player.totalTimePlayed >= 600*300', "n8"],
//hard
["You do know that you won't reach Infinity in -1 seconds, right?", "player.bestInfinityTime == 0.1", "c1"],
["Where does Antimatter Nemo live? In a NNnNeMI-NNnNe.", "player.totalmoney.e >= 3e6", "c2"],  //might not be poss?
["Anti Emoji Movie MMMCMXCIX is a major hit!", "player.spreadingCancer >= 3999", "c3"],
["Achievement Unlocked!", "player.achievements.length == 88", "c4"],
["Did you use an autoclicker for that?", "player.timestudy.studies.includes(131) && player.thisInfinityTime <= 600 && player.replicanti.galaxies >= 50", "c5"],
["Timing is key.", "player.thisEternity < 1", "c6"],
["If you want to farm infinitied, why don't you just get the time study?", "!player.timestudy.studies.includes(32) && player.infinitied > 72000 * 168", "c7"],
["The achievement is for two million, not two billion...", "player.infinitied > 2e9", "c8"],
["Keep up the quick pace!", "Marathon > 1200", "c9"],
["One day you will stop your incessant grind.", "player.eternities > 50000", "c10"],
["You can probably stop farming for eternities now...", "player.eternities > 2000000", "c11"],
["Are you serious?", "worstChallengeTime <= 0.1", "c12"],
["The amazing speedster", "infchallengeTimes <= 0.8", "c13"],
//luck
["This news message is 1000x rarer than all the others.", "Math.random() < 0.001", "l1"],
["You just won a small prize in the lottery.", "Math.random() < 1e-4", "l2"],
["You just won a moderate prize in the lottery.", "Math.random() < 1e-5", "l3"],
["You just won a large prize in the lottery.", "Math.random() < 1e-6", "l4"],
["You just won a huge prize in the lottery.", "Math.random() < 1e-7", "l5"],
["You just won a massive prize in the lottery.", "Math.random() < 1e-8", "l6"],
["You just won a very massive prize in the lottery.", "Math.random() < 1e-9", "l7"],
["You just won the lottery.", "Math.random() < 1e-10", "l8"],
["Just how lucky are you?", "Math.random() < 1e-11", "l9"],
["This news message is 1000000000000x rarer than all the others.", "Math.random() <= 1e-12", "l10"],
//missable / pay req
["How dare you actually get zero deaths on a first run?", 'player.achievements.includes("r43") && player.infinitied == 1 && player.eternities == 0', "s1"],
["Legend says the ninth dimension is supposed to be found here, but I don't see anything.", "player.money.e >= 41900 && !player.replicanti.unl && player.eternities == 0", "s2"],
["Person with money likes to support this game.", "kongDimMult > 1 || kongIPMult > 1", "s3"],
["Whale is bad at making smart purchases.", "kongIPMult > 500 && kongDimMult < 5e307", "s4"],
["Whale complains that the game broke.", "kongDimMult > 5e307", "s5"],
["Whale complains that their buying isn't doing anything.", "kongIPMult > 1.8e16", "s6"]
];}

var s = document.getElementById('news');
document.addEventListener("visibilitychange", function() {if (!document.hidden) {scrollNextMessage();}}, false);
var scrollTimeouts = [];
var nextMsgIndex;
function scrollNextMessage() {
  //don't run if hidden to save performance
  if (player.options.newsHidden) return false
  updateNewsArray();
  //select a message at random

  try {
    do {nextMsgIndex = Math.floor(Math.random() * newsArray.length)} while (!eval(newsArray[nextMsgIndex][1]))
  } catch(e) {
      console.log("Newsarray doesn't work at idx " + nextMsgIndex)
  }

  scrollTimeouts.forEach(function(v) {clearTimeout(v);});
  scrollTimeouts = [];

  //set the text
  s.textContent = newsArray[nextMsgIndex][0];

  //get the parent width so we can start the message beyond it
  let parentWidth = s.parentElement.clientWidth;

  //set the transition to blank so the move happens immediately
  s.style.transition = '';
  //move div_text to the right, beyond the edge of the div_container
  s.style.transform = 'translateX('+parentWidth+'px)';

  //we need to use a setTimeout here to allow the browser time to move the div_text before we start the scrolling
  scrollTimeouts.push(setTimeout( function() {
    //distance to travel is s.parentElement.clientWidth + s.clientWidth + parent padding
    //we want to travel at rate pixels per second so we need to travel for (distance / rate) seconds
    let dist = s.parentElement.clientWidth + s.clientWidth + 20; //20 is div_container padding
    let rate = 100; //change this value to change the scroll speed
    let transformDuration = dist / rate;

    if (!player.options.newsHidden && !player.newsArray.includes(newsArray[nextMsgIndex][2])) {
        player.newsArray.push(newsArray[nextMsgIndex][2]);
        if (player.newsArray.length>=50) giveAchievement("Fake News")
    }


    //set the transition duration
    s.style.transition = 'transform '+transformDuration+'s linear';
    let textWidth = s.clientWidth;
    //we need to move it to -(width+parent padding) before it won't be visible
    s.style.transform = 'translateX(-'+(textWidth+5)+'px)';
    //automatically start the next message scrolling after this one finishes
    //you could add more time to this timeout if you wanted to have some time between messages
    scrollTimeouts.push(setTimeout(scrollNextMessage, Math.ceil(transformDuration * 1000)));
  }, 100));
}

