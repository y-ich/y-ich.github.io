var word = [
    '「こんなに時間がかかるのは、彼がけっしてまちがったことを言うまいとしているからだ。」エンデ『モモ』',
    '「どおかニーマーきょーじゅにつたいてくださいひとがわらたり友だちがなくてもきげんをわりくしないでください。ひとにわらわせておけば友だちをつくるのわかんたんです。ぼくわこれから行くところで友だちをいっぱいつくるつもりです。」ダニエル・キイス『アルジャーノンに花束を』',
    '「頑なの心は、不幸でいらいらして、せめてめまぐるしいものや数々のものに心を紛らす。そして益々不幸だ。」中原中也『無題』',
    '「頑なの心は、理解に欠けて、なすべきをしらず、ただ利に走り、意気消沈して、怒りやすく、人に嫌はれて、自らも悲しい。」中原中也『無題』',
    '「たしかに人間は、いつもひとりで暮らすことはできないから、いつも善良でいることはむずかしい。」ルソー『エミール』',
    '「社会状態にあって自然の感情の優越性をもちつづけようとする人は、なにを望んでいいかわからない。たえず矛盾した気持ちをいだいて、いつも自分の好みと義務とのあいだを動揺して、けっして人間にも市民にもなれない。自分にとってもほかの人にとっても役に立つ人間になれない。」ルソー『エミール』',
    '「勤勉でないから自信もうまれず、威嚇や断定をする折りに恵まれない。」色川武大『暴飲暴食』',
    '「はずれ者は、いつも周辺に気をかねている。そうしてむしろ、自分がこれ以上孤立しないために、他人と自分との接点、共通点に、できるだけ細心の眼を向けている。群れの中に居る人と比較すると、他人に対して優しく、親切である。」色川武大『五十歳記念』',
    '「それから先どんな経路を取って、生長するか分からないが、到底人間として、生存する為には、人間から嫌われると云う運命に到着するに違いない。その時、彼は穏やかに人の目につかない服装をして、乞食の如く、何者をか求めつつ、人の市をうろついて歩くだろう。」夏目漱石『それから』',
    '「野心に相応して、盲目的な自信がある。すると、語るべき言葉の欠如に相応して、無限の落下を見るのみの失意がある。」坂口安吾『暗い青春』',
    '「何よりも競うことを最上と考え、その競争の規則をはっきり打ちだすため、スポーツ同様せまく限られた専門分野に孤立してしまうようなことがあるならば、科学は滅びてしまうだろう。自ら学問の放浪者となった少数の学者こそ、既成分野の知的健全さを保つうえで、なくてはならない存在である。」マンデルブロ『フラクタル』',
    '「＜一般法則＞は確かに何にでも当てはまる。しかし、ということは、一般法則はどんなものごとに対してもほとんど説明の役に立たないということなのである。」マーヴィン・ミンスキー『心の社会』',
    '「もちろん、わかっていないことに名前をつけてやれば、それに注意を向けるのには役に立つかもしれない。しかし、名前をつけるだけで意味がわかったように思ってしまうのなら、名づけるのはむしろ害になるのである。」マーヴィン・ミンスキー『心の社会』',
    '「十分知りつくして書けるようになるまでは書くまいと思ってあたためてきたことも、いまとなっては、もう書くこともないだろう。してみれば、書こうと試みて失敗することも、もうなくなったわけだ。もしかすると、もともと書く力がなかったのかもしれない。だから、いつものばしのばしして、書きだすのをおくらせてきたのだ。ともかく、いまとなってはわかりようもないことだ。」ヘミングウェイ『キリマンジャロの雪』',
    "\"One person's half-baked suggestion resonates in the mind of another and suddenly takes on a definite shape.\" McClelland and Rumelhart``Parallel Distributed Processing''",
    '「すべてを疑ったりすべてを信じたりするのはひとしく便宜的解決法であり、どちらもわれわれに考える手間をはぶかせるだけである。」ポアンカレ『科学と仮説』',
    '「彼女と知り合ったとき、彼がすでにだめな男になっていたというのは、彼女の責任ではなかった。男が心にもないことを言っているのだということ、ただ習慣からうれしがらせを言っているのだということが、どうして女にわかるだろう？口先だけのでまかせを言うようになってから、真実を語るよりも嘘のほうが女たちには効果があった。」ヘミングウェイ『キリマンジャロの雪』',
    '「数学の言葉は、自然科学において不条理とも映るほど有効であり、我々人間にとっては、その真価も知り得ず、また受けるに値しないほど素晴らしい贈物である。我々はこの贈物に深謝し、将来の研究においても、その有効たらんことを、またその発展を期待し、将来、我々が試練に直面するときもそれを楽しみとして、学問の枝葉を広げていかねばならない。」ウィグナー',
    '「日常の習慣（歯磨き、挨拶、日報、週報、テニス、・・・）が億劫になっている時には何らかの問題を抱えている。解決の目処がつくまで問題を解析し、方針を立てて、無理はせず、まず習慣を取り戻すこと。自分の習慣を崩してまで対処しなければならないほど重要な問題はまず存在ない。」',
    '「笑顔で人に話し掛けてもらうことで、精神の安心を簡単に得ることができる。逆に自分には関係ないはずの不機嫌な顔を見ても、簡単に不安をかき立てられる。人とはそういう生き物。」',
    '「バグの修正をあと回しにしてはならない、今すぐ修正すること。」スティーブ・マグアイヤ『デバッギングザデベロップメントプロセス』',
    '「メールを読むのは朝会社に着いた時と、昼食から戻った時と、その日にはもう戻ってこない時だけにすること。」スティーブ・マグアイヤ『デバッギングザデベロップメントプロセス』',
    '「バグを見つけるためにソースコードを見るのは怠惰かつ無能な行為である。プログラマがデバッガでコードを追いかけ、ソースの各行をステップ実行していきながらデータを追っていくのにそんなに時間はかからないはずなのだ。」スティーブ・マグアイヤ『デバッギングザデベロップメントプロセス』',
    '「自分がそうしたすべてを犠牲にするようなプロジェクトに取り組んでいた時に、誰かが私をわきに引っ張っていって、仕事に勝る人生もあると説明してくれていたら、と勝手ながら思う。私のチームのプログラマ達が自分達の作業に熱中するあまり長時間労働したがったら、私は彼らを追い払う。「家へ帰るんだ。人生を楽しんでくれ」」スティーブ・マグアイヤ『デバッギングザデベロップメントプロセス』',
    '「わたしはいつも、ビジネスはほんの限られた範囲の能力を核にした集中的な展開がベストだと考えてきた。コンピュータ産業も人生もおなじことで、あらゆることをうまくやってのけようとしても無理に決まっている。ＩＢＭやＤＥＣといった業界の古株は、チップからソフトウエア、コンサルティングまで、すべて自分のところでやろうとした。しかし、マイクロプロセッサとパソコンの標準が定まって技術革新のペースが加速されたとき、多角的な戦略は脆弱だということがはっきりした。特定の分野に的をしぼった企業のほうがうまくいったのだ。ある企業は優れたチップを作り、べつの企業は優れたパソコンを設計した。また別の企業はディストリビューションとインテグレーションに優れている。それぞれの新企業がせまい分野に集中して、成功したわけだ。」ビル・ゲイツ『ビル・ゲイツ未来を語る』',
    '「これは考えると恐ろしいことだが、コンピュータ技術の進展のなかで、ある時期の業界リーダーはけっして次の時期のリーダーにはなれなかったという事実もある。マイクロソフトは”パソコン期”のリーダーだった。ということは、歴史的見地からすれば、情報時代の”ハイウェイ期”のリーダーとしてはマイクロソフトは不適格なのかもしれない。」ビル・ゲイツ『ビル・ゲイツ未来を語る』',
    '「ではホップフィールドのネットワークは、実際どのように働くのだろうか。...ところが、驚くべきことに、もし「手がかり」として活動パターンのごく一部だけが与えられると、ネットワークは数回作動してから、正しい出力-全体的活動パターン-に落ち着くのである。...その結果として、ネットワークは記憶を作りあげる。この記憶は、いわゆる「内容アドレス」メモリーであり、普通のコンピュータとは違って、記憶内容とは別になったアドレス信号を持っていない。入力パターンのどの一部分でも、アドレスとしての働きを持っているのだ。」Ｆ・クリック『ＤＮＡに魂はあるか』',
    '「自由意志は、全帯状回かその付近にある。」Ｆ・クリック『ＤＮＡに魂はあるか』',
    '「誰かを想いやりゃあだになり、自分の胸につきささる。だけど、あるがままの心で生きようと願うから、人はまた傷ついてゆく。知らぬ間に築いていた自分らしさの檻の中で、もがいているなら誰だってそう。僕だってそうなんだ。」桜井和寿『名もなき詩』',
    '「ところが、知的欲求のレベルが低い人は、自分のオートマトンの現状に満足して、すぐに学習の意欲を失ってしまう。新しいことはもう学ぶ必要はない、自分がこれまで学んだことだけをやっていれば、人生十分だということになってしまう。あとはもっぱらいろんな肉体的な快楽、美味しいものを食って、酒飲んで、テレビ見てげらげら笑っていればいいというようなことになりがちなんです。これは人によってずいぶん違いがありますけど、３０代くらいになると、もうそうなってしまう人が結構多いんですよね。」立花隆『ぼくはこんな本を読んできた』',
    '「もちろん老化というのはありますよ。それほど年をとらなくても、われわれだって、物忘れが激しくなったり、人の名前が出てこなかったりということがありますよね。あれは実は、ごく小さな脳硬塞が脳の中で起こっているからなんです。ＭＲＩという最近の進歩した撮影装置を使うと、それがはっきりわかる。・・・ですから、適切に使っていけば、脳というのはとことん持つ。」立花隆『ぼくはこんな本を読んできた』',
    '「一年間メディアラボにいることで、こうした経験がどの程度までに彼らに消化吸収されるのかはよく分からない。それはひとつには、帰国してふたたびもとのやり方に漬って仕事をする人にとって、一年は短すぎるからである。また日本からの研究者に見られる多様な姿勢が、吸収の度合に反映されるからでもある。ＭＩＴに来たことをご褒美だと考えている人から、厳格な業務命令だと考えている人までさまざまなのだ。」ニコラス・ネグロポンテ『メディアラボ』序文',
    '「悪手を打ったのは仕方がない。大切なのはその後、最善をつくすことなんです」武宮正樹',
    '”JUST FOR YOU.  Here\'s a present for you.  Your pleasure is my treasure.  Your smile makes me HAPPY!” アメリカへ行く時の餞別のメッセージ',
    '「行きづまり  うずくまり  かけずりまわり  この街に  この朝に  この掌に  大切なものは何か  今もみつけれらないよ」渡辺美里『10 years』',
    '「人間というはどうしようもないものです。謙虚になるために、たくさんの時間を費やさねばならない。」趙治勲『棋道１９９６年５月』',
    '”One of the reasons the ARM was designed as a small-scale processor was that the resources to design it were not sufficient to allow the creation of a large and complex device. While this is now presented as (and genuinely is) a technical plus for the ARM processor core, it began as a necessity for a processor designed by a team of talented but inexperienced designers (outside of university projects, most team members were programmers and board-level cricuit designers) using new tools, some of which were far from state-of-the-art. With these restrictions on design and testing, it is hardly a surprise that a small device was developed.”Alex van Someren and Carol Atack``The ARM RISC Chip\'\'',
    '”It seems to me the secret to success in research activities is to pick something easy enough to do.  It\'s very nice if you can find something that you think is easy and everybody else thinks it\'s hard.  That\'s wonderful, but a lot of people tend to pick projects that are too hard.  I\'ve tried to pick easy ones to work on.  And there are plenty of easy ones going begging.” Ivan E. Sutherland ``AN INTERVIEW WITH IVAN SUTHERLAND -TURING AWARD-\'\'',
    '「泣きなさい。笑いなさい。いついつまでも、いついつまでも、花を掴もうよ。」喜納昌吉「花」',
    '「失望していても、必ず志を思い出す時が来る。安心して待つこと。」',
    '”Large, expensive machines generally cost more to develop--a machine costing 10 times as much to mamufacture may cost many times as much to develop.  Since large, expensive machines generally do not sell as well as small ones, the gross margin must be greater on the big machines for the company to maintain a profitable return on its investment.  This investment model places large machines in double jeopardy--because there are fewer sold and they require larger R&D costs--and gives one explanation for a higher ratio of price to cost versus smaller machines.” J.L. Hennessy & D.A. Patterson ``COMPUTER ARCHITECUTRE A QUANTITATIVE APPROACH SECOND EDITION\'\'',
    '「人間、こと志と違ったときほど、地が出る。どう振る舞うかで、器の大きさがわかる。」天声人語 朝日新聞 96/6/2',
    '「あすは厳粛な場所に行くんだね。たくさんの人が亡くなった地べたを歩いて芝居をしなければいけない」渥美清 神戸のロケの前日に。',
    '「支配する敗戦国の法律を、自分たちの都合よくつくるのだなどという傲慢な雰囲気はなかった。自分たちの理想国家をつくる、といった夢に夢中になっていた」ベアテ・ゴードン・シロタ『１９４５年のクリスマス』',
    '「日本国民は、正義と秩序を基調とする国際平和を誠実に希求し、国権の発動たる戦争と、武力による威嚇又は武力の行使は、国際紛争を解決する手段としては、永久にこれを放棄する。�前項の目的を達するため、陸海空軍その他の戦力は、これを保持しない。国の交戦権は、これを認めない。」日本国憲法　第九条',
    '「すべて国民は、勤労の権利を有し、義務を負ふ。」日本国憲法　第二七条',
    '「ゆめゆめ、バスや女性や宇宙論を追いかけるなかれ。なぜならば、そうしたものは、いつも数分で次が現れるのだから。」ジョン A. ウィーラーの友人　ジョン・ホーガン「科学の終焉」より',
    '「好きで好きでしょうがないものがあったら、気分がいいどころか、脳の癌の一種だと考えるべきだ。なぜなら、それは、あなたの心の小さな一部が、他の全体をごまかす方法を考えついた、ということを意味するからだ」マービン・ミンスキー　ジョン・ホーガン「科学の終焉」より',
    '「いまにして思えば、十四歳にして何のためらいもなく男にそのようにふるまえるということが、瀬尾由加子という人間の持っていたひとつの業であったと言えるでしょう。」宮本輝『錦繍』',
    '「ママの過去にどんなことがあったか知らないが、私も、少年の頃から一人で独立国を守っているようなしのぎ方を続けてきて、そのためどこにも無駄な敵をつくらず、どの方角とも相和すような構えで生きてきた。そうしているうちに、本当に人間同士が睦み合うことがどういうことだか、忘れかけてしまっていた。」阿佐田哲也『夢ぼん』',
    '「人生を１本の綱を渡る危険な行為にたとえることもできます。何も持たずに渡ればとたんに落ちてしまう。そんなに人間は全知全能ではない。だから１本の長い棒―平行棒、バランシングバーを持って渡る。その棒は何の変哲もない、借りた金は返そうとか、女房が病気なら看病したふりはしよう（笑）、とかなんだけど、それがなければやはり綱を渡れない、そうなぞらえることができる。なおかつ前進しなければ平行棒を持っていても転落する、これは大袈裟にいえばミリタント、戦士としての気構えみたいなものでもって闘い、歩を進めていくことだと思います。」西部邁　小林よしのり『新ゴーマニズム宣言』第１１巻より',
    '「あらゆる重要なデザイン活動の過程で、人は空っぽになり、自分自身の思考や世界観や精神に対する自信を喪失し、どこへいけばよいのかもわからないまま、ツンドラのなかにおきざりにされたような気分になることがある。巨大なプレッシャーのもとで、消耗し、意気消沈し、つぎになにをすべきかわからないどころか、新しいアイディアを得る望みすら失ってしまった瞬間、ときとして自我が弛緩し、数秒のあいだ、じぶんの目のまえにあるものを、ありのままに観察する余裕が生まれることがある。」フレッド・ハプグッド『マサチューセッツ工科大学』',
    '「『いや、お若いの、ご自分を責めてはいけません。人は人生の大事にはほとんど影響を及ぼせないものだということが、私ぐらいの年になればあなたにもおわかりになりますよ。』」ドナルド・Ｃ・ゴース、ジェラルド・Ｍ・ワインバーグ『ライト、ついてますか』',
    '「自分がどんな状態でも、チームがどんな状況でも、モティベーションが落ちることはなかったですね。」イチロー',
    '「〈人間の精神を発達させて、憎悪や殺戮のような精神の病に対する抵抗力をもたせることはできないでしょうか〉とアインシュタインが問いかける。フロイトは、人間の攻撃的本性を矯正することは困難だ、としながらも、なお平和主義者である以外の道はない、と答えた。」天声人語 96/9/23',
    '「人を叱る以上は恥じない努力を続けなければならない。」',
    '「確かに、多くの人、特に欧米人は、日本を過去の国だとみなしている。しかし、アジアは、日本を、過去の産物とも、沈んでいく太陽とも思っていない。確かに途方もない問題を抱えているが、もう一度奇跡を起こす力があるはずだ」ノルディン・ソピー氏（マレーシア戦略国際問題研究所長）',
    '「「志士は溝壑に在るを忘れず、勇士はこの元を喪うことを忘れず。」維新の男子は縛られてはならん。故に藩を捨て、家を捨て、命を捨てて後顧の憂いを絶つ。」坂本竜馬',
    '「『あのとき外側でなく、内側によろけていたら、私は罪人です。』」天声人語 97/4/16',
    '「〈市場での競争を、疑うことなく善とした社会は、働く者たちに、人間的な弱さや精神の起伏を否定した働き方を、しばしば強要する。人間が働いているのだということを、構造のなかに組み込む余裕を失った職場が、よい職場であるはずはないのに〉。哲学者内山節（たかし）さんの文章＝東京新聞。あなたの職場はどうですか。」天声人語 97/4/29',
    '「老いの日には若いときにおとらずチャンスが待っている。黄昏（たそがれ）が終わると、空は星で満たされる。昼には決して見ることができない星で」１９世紀の米国の詩人ロングフェロー。',
    '”Kilby\'s inspiration was to find a way to build all the circuit components out of the same material. By connecting the components within the same substrate, not only would soldering be eliminated, but the resulting component would be even more rugged and reliable.” EETimes 97/9/25',
    '「囲碁の趙治勲名人は石川啄木や中原中也が好きだ。『碁に負けたときなんかね、悲しい詩を読んで涙を流すと、すっきりするんです。逆にしっかりしようとするとよくないんですね』」天声人語 97/9/30',
    '”In one way or another, your language differs from that of anybody else.  It\'s part of your own unique personality.  It has traces of the family you grew up in, the place where you came from, the people you have associated with, the jobs you have had, the school you went to, the books you have read, your hobbies, your sports, your philosophy, your religion, your politics, your prejudices, your memories, your ambitions, your dreams and your love life.  The way you form your sentences shows your outlook on life; the words you choose show your temperament and your aspiration.” Rudolph Flesch, ``The Art of Readable Writing\'\'',
    '”Indeed, the conventional superscalar RISC engine is approaching the point where no one will be able to tell whether it is designed correctly.” EETimes 97/10/20',
    '「碁は勝負でもあるんだが、勝ち負けにこだわってもね。絵や小説と同じなんです。感情の発露なんだから」藤沢秀行',
    '”``One thing I learned at Dell is you have to be fast to market.\'\' said Henry who was formerly CTO at Dell Computer Corp.” EETimes 97/11/18',
    '「『毎日、顔をつきあわせる相手と戦うために、自分を奮い立たさなければならない』。神経の細やかさは、ここ一番の弱さにもつながった。」小錦引退 朝日新聞 97/11/22',
    '”I\'d like to start a family, but you have to have a date first.” Larry David',
    '「周囲の人を見て、携帯電話が人間を駄目にする、とつくづく思う。人間には、独りで考え、自分の判断で行動し、自分で責任を負うことが必要である。…人間は独りでいて孤独に耐え、自分のこと、人生、世界のことをじっくり考えるのが、精神的に成長するために非常に大切である。」ピーター・フランクル 『よいニッポンだめなニッポン』',
    '「技を磨き合うより、身内のコミュミケーションを円滑にする方が優先される。こんな日常からは今回見せた程度のプレーしか生まれない。」日経新聞98/6/28',
    '「『どんな分野でもそうだと思うのですがとりつかれたり、狂ったりするのは三年ぐらいがいいところじゃないですか。あとは惰性で勉強して充分だと思うんです』」団鬼六『真剣師 小池重明』',
    '「…自分が必要とするときだけ、愛する人を受け入れられるが、自分がわずらわしいときは口もききたくないとか……。自分のつまらない冗談が相手を怒らせても、それは相手が悪いのだって言うくせに、相手の冗談で自分が傷ついたら、劣化のごとく怒るとか……。俺は、そんな人間だったよ。つまり、すなおじゃなくて、謙虚でもないんだ。こういう人間は、いつも、つっぱってて、ちょっとしたことで、しょっちゅう頭に血がのぼって、より良くするための妥協がなくて、公私を混同して、臨機応変に気持の切り換えができなくて、人を許せなくて、自分はいつも、おお、よしよしって頭を撫でてもらいたくて、身びいきで、気位と誇りは高いくせに、自分の実際の生活は何程のものでもないどころか、まっとうな人生からちょっと外れたところで生きてる……。」宮本輝『朝の喜び』',
    '「人間はただ無為に生きるだけでも大変なことなのです。一生に誇るべきことをなしとげた人は、謙虚に感謝すればよい。もしできなくても恥じることはない。生きることそのものが大変なことです。」五木寛之『他力』',
    '”Pre-1994, Bill Joy presented a proposal to Sun Labs where he presented three main concepts: 1) a language that would run on all platforms, 2) a virtual machine to run this language, and 3) a networked system to allow the distributed virtual machines to work as a singular system. In 1995, the language and virtual machine were introduced to the market as the Java Programming language and Java Virtual Machine. The system context, however, weas kept in the Sun R&D for continued research and development. This system context is Jini.” Jini write paper',
    '「こんなときは、清高の機嫌が悪く、もう最近では殆どなくなった粗相を、突然思い出したようにしてしまうのです。…でも私の息子は、たったそれだけのことで、もう目も当てられない程にうちひしがれて、何日も誰とも口をきかなくなってしまいます。」宮本輝『錦繍』',
    '「『中国人はリラックスしているからね。』私は横できいていて、ひさしぶりで大笑いした。たしかに日本人はつねに緊張している。ときに暗鬱でさえある。理由は、いつもさまざまの公意識を背負っているため、と断定していい。」司馬遼太郎『この国のかたち一』',
    '「それはわりと説明が可能なんです、人生が長くなったこととか、社会の変動が速くなったことで。つまり自分の獲得したパターンというのが、意味を持たなくなることが多いんですね。たとえば、私が算盤のすごい名人になったとします。算盤さえあれば、と思っているときにコンピューターが出てきますね。そこで自分の持っていたシステムそのものが、まさに行き詰まるわけです。そうすると、これはもう抑鬱症になりますね。」河合隼雄『マザーネイチャーズ・トーク』の立花隆との対談の中で',
    '「どうしてＫは病気のことを報せてくれなかったのだろうか？私はつまらない男になってしまったのだろうか？」伊集院静『半人前が残されて』',
    '「遂二江南ノ野水ニ留ラズ。高ク翔ブ、天地一閑鴎」塙団右衛門',
    '「世の中の人は何んとも言わば言え 我が為する事我のみぞ知る」坂本竜馬',
    '「志は塩のように溶けやすい。男子の生涯の苦汁というものはその志の高さをいかにまもりぬくかというところにあり、それをまもりぬく工夫は格別なものではなく、日常茶飯の自己規律にある、という。箸のあげおろしにも自分の仕方がなければならぬ。物の言いかた、人とのつきあいかた、息の吸い方、息の吐き方、酒ののみ方、あそび方、ふざけ方、すべてがその志をまもるがための工夫によってつらぬかれておらねばならぬ、というのが、継之助の考えかたであった。」司馬遼太郎『峠』',
    '「人の一生はみじかいのだ。おのれの好まざることを我慢して下手に地を這いずりまわるよりも、おのれの好むところを磨き、のばす、そのことのほうがはるかに大事だ。」司馬遼太郎『峠』',
    '「要するに人間には精気というものがある。人それぞれに精気の量はきまっている。松蔭によればよろしくこの精気なるものは抑圧すべきである。抑圧すればやがて溢出する力が大きく、ついに人間、狂にいたる。松蔭は、この狂を愛し、みずから狂夫たろうとしていた。それが、おのれの欲望を解放することによって固有の気が衰え、ついに惰になり、物事を常識で考える人間になってしまう。自分は本来愚鈍である。しかしながら非常の人になりたい、非常の人とは、狂夫である、何人でも狂夫になり得ると思う。欲望さえおさえれば、だが。」司馬遼太郎『世に棲む日日』',
    '「自分はいくら形勢が苦しくなっても決して勝負を投げたりしない、苦しさの中に身を置き、その状況でいかにして最善を打ち続けることができるかを己に課しているのだ。」趙治勲',
    '”Noblesse oblige”島朗『純粋なるもの』',
    '「結局、”後ろめたいことがない”点が大事なのではないか、と森下は思う。例えば十秒で指せる手があっても、二十分、三十分と見て、考え続けることによって、その指し手の本質が見えてくる時がよくある。確か、羽生も似たことを言っていた記憶がある。結果としては同じでも、プロセスの蓄積の差で後ろめたさの割合が違うのだ。人まねと自分で考えたことの価値が同じではないように。」島朗『純粋なるもの』',
    '「君に勧む  金屈し／満酌  辞するを須いず／花発いて風雨多く／人生  別離足る」干武陵',
    '「人は泣きながら生まれてくる」シェークスピア『リア王』',
    '「諸行無常、一切行苦(いっさいぎょうく)、諸法無我(しょほうむが)、涅槃寂静(ねはんじゃくじょう)」仏教',
    '「それはひとつの境を越えるということに、強い不安をもっているとしか言いようがない。境を越えない範囲で何やかやと目まぐるしく動くので、大活躍をしているように見えるが、ほんとうの仕事はしていない。境を越えるためには、どうしても傷つかねばならないし、バルズールの話でロキが必要であったように、何らかの意味で悪ということが関与してくることもある。」河合隼雄『青春の夢と遊び』',
    '「今生にいかに、いとをし不便とおもふとも、存知のごとくたすけがたければ、この慈悲始終なし。しかれば、念佛まふすのみぞ、すゑとをりたる大慈大非心にてさふらうべき、と。云々。」『歎異鈔』',
    '「人生を生き抜くたった一つの方法は、自分の持っているものの価値を見直し、自分がいまできることを見直すことだとわかってきたんです。私の場合、幸い脳には損傷を受けていなかったから、まだ自由に使える精神をもっている」クリストファー・リーブ『こころの育て方』の中の引用',
    '「遺伝子とは運命そのものであり、当該の遺伝子が特定できれば、がんから同性愛にいたるありとあらゆる現象をあますところなく説明できるという発想は、いまなお健在である。だが一連の科学論文の中でフォン・サールは、胎生期には、性別を問わず個体を決定づける遺伝子以外の強力な力がたしかにはたらいでいることを突き止めた。」シーア・コルボーン他『奪われし未来』',
    '「生ぜしもひとりなり、死するも独りなり。されば人と共に住するも独りなり、添い果つべき人なき故なり。」一遍『一遍上人語録』',
    '「生きるものすべては苦を背負って生まれる。それは自分の手の届かないところにあるので、生きるものは他のものの苦を支えることでしか楽になれない。」',
    '”Nothing comes easy.” Kane Kosugi',
    '「ぼくは病気になる前よりも今の方が幸せだと思う。病気になる前、ぼくは人生にうんざりしていた。かなり飲んだくれていたと思う。仕事など全然しなかった。希望がゼロに近づいてこそ、人間は持っているすべてを本当に味わえるのだ。」Steven Hawking',
    '「内的な見地からすると我々はいったい何であり、人はその本質的な性質において何のように思われるかを我々は神話を通してのみ語ることができる。神話はより個人的なものであり、科学よりももっと的確に一生を語る。科学は平均的な概念をもって研究するものであり、個人の一生の主観的な多様性を正当に扱うにはあまりにも一般的すぎる。」ユング『ユング自伝』',
    '「舞台での＜集中＞を得るためには、＜リラックス＞が必要になり、＜リラックス＞を助長するためには、精神的か肉体的な課題に、集中しなければならない」Ｅ．Ｄ．イースティ『メソード演技』',
    '「壊れた心も、やがて癒える。」ショッピング・ニュース',
    '「生きてるだけで、まるもうけ。」明石家さんま',
    '「それ（ユーモア）は誇大妄想から人を解き放ち、自己反省を促し、また自分を過大評価することから救い出してくれる。」ジェイムズ・ヒルマン『魂のコード』',
    '”Nobody is perfect.”Billy Wilder ``Some like it hot.\'\'',
    '「原始地球上のヌクレオチドはめったにない物質であり、合成するは難く、分解するは易い。できあがったヌクレオチドが加水分解する前に相手を見つけ、結合して安定ならせんを形成するのに十分な速さで、部品からヌクレオチドを合成する方法を発見した者はまだだれもいない。」Freeman J. Dyson 『生命の起源』',
    '「昔は、トラウマを抱えた人間をそのまま周りが容認してくれたということがあったと思うんです。本人が不幸せなら不幸せなりに容認されているということは、根本的には幸せな状態なんです。その上で、治りたければ治せばいいと。昔の社会は、そんな感じでトラウマを一緒に抱え込んでくれた社会だったような気がします。」養老孟司『学問の挌闘』',
    '「金庫に閉じ込められた宝石たちを救い出し、無理やり花嫁にされようとしている女の子は緑の野に放してあげる、これみな泥棒の仕事なんです。」宮崎駿『ルパン３世カリオストロの城』',
    '「日本は、家族をもたない文明である。」Samuel P. Huntington『文明の衝突と２１世紀の日本』',
    '「アイザック・ニュートンのような超越的な才能であっても、その時代から逃れるものではなく、「遠くを見ようとするときは、巨人の肩の上に立つことです」と書いています。」ジョセフ・Ｈ・シルヴァーマン『はじめての数論』',
    '「家族のあいだでは漱石は、時として人が変ったようにすさまじい激怒や乱暴を働く『頭の悪い』人であったのだ。」加賀乙彦『漱石と私』',
    '「（『行人』の）一郎は、『針鼠の様に尖つてゐる』人である。『段々生物から孤立して書物の中に引き摺り込まれて行く』人である。家族や友人から離れ、孤独地獄に堕ちていく。人を世間を避けて暮らしながら、不安と焦燥のため一刻も落ち着いていられない。碁を打ち出せば、碁なんぞ打っていられないとやめてしまうが、また打たずにはおれない。いたたまれぬ苦痛にあえぎながら経験する一郎の不安は尋常の不安ではない。『人間全体の不安を、自分一人に集めて、そのまた不安を、一刻一分の短時間に煮詰めた恐ろしさ』なのである。」加賀乙彦『漱石と私』',
    '「精神衰弱者は時とすると常人より正義感も強まるし、物事の論理を通そうとし、他人の言行の非論理的な矛盾に我慢ならないものである。」中村真一郎『漱石の病理報告』',
    '「それと、どの世界にもいえることだと思うんですが、新しいものを発想するより、それへの対策を考える方が楽なんですね。だから、パソコンが普及したことによって、早く公平に情報が行き渡るようになったのはたしかに進歩なんですが、「創造型」の人にとっては大変な時代でもあるんです。」羽生善治『簡単に、単純に考える』',
    '「きっと着手が終わった瞬間に、盤面を見る目が変わるのだと思うのです。」羽生善治『簡単に、単純に考える』',
    '「対局では、たとえば今までこういう流れでやってきた、『次にはこの手が成立しないとおかしいはずだ』というのがあります。一局の将棋が始めから終わりまで一本の線になっているのが理想なのです。」羽生善治『簡単に、単純に考える』',
    '「将棋の歴史に残るような名局、新手が生まれたとしたら、勝ったほうも、負けたほうも、棋士として幸せというものではないか。」米長邦雄『ふたたび運を育てる』',
    '「ですから、日本人の没落というときに、何が一番気になるかといったら、今後右肩上がりの経済成長が続くとか、マルチメディアがどうしたとかいうことよりも、この国にいる子供たちが元気なのかどうかということが、僕は一番気になります。つまり人が健やかに生きていれば、国は貧乏でもいいんですよね。」宮崎駿『出発点１９７９〜１９９６』',
    '「小学校五年ぐらいになって、自分が主人公で物語を考えるその時期に、オデコにペケってペケ印を捺されると、それはもう回復しないです。」宮崎駿『出発点１９７９〜１９９６』',
    '「結局、練習の積み重ねしかなくて、その中から本能的にチョイスしているだけ。あそこにスペースがあるからとか、たぶんあそこのディフェンダーがきて、四秒後に追いつくかな、みたいなことをいちいち考えているわけじゃない。それは瞬間的な判断としか言いようがないし、そのための反復練習なんですよ。」中田英寿『文体とパスの精度』',
    '"The problem is that whether it be phonograph or computer, the technology is the easy part to change. The difficult aspects are social, organizational, and cultural." Donald A. Norman ``THE INVISIBLE COMPUTER\'\'',
    '「僕が今こうして作っているウィスキーが世の中に出ていくとき、あるいは僕はもうこの世にいないかもしれない。しかしそれは僕が造ったものなんだ。そういうのって素敵なことだと思わないか？」ジム・マッキュエン　村上春樹『もし僕らのことばがウィスキーであったなら』',
    '「夢に耽ったり、生きることを忘れてしまうのはよくない。それをよく覚えておきなさい。」Ｊ．Ｋ．ローリング『ハリー・ポッターと賢者の石』',
    '「努力する能力は選ばれた人にしか与えられない才能だが、反復は誰にでもできる。」',
    '「神が私を通して、人はどんなことも可能なんだと示したかったのかも。きっと、だれにも２度目のチャンスが訪れる。その時は、希望を持って夢を追いませんか。それが伝われば、幸せです。」Jim Morris映画『オールド・ルーキー』の実在モデル',
    '「テストの点を取ることに意味はない、学校の勉強自体も役に立つことばかりじゃない。だけど、それをこなしていこうとする自分がいなきゃいけないんです。」イチロー',
    '「それは、自分でやること、やろうと決めたことに対しては、手抜きはしないことです。」イチロー',
    '「今日転職というような言葉がもはや陳腐に聞こえるのは、今日ではさまざまな事情から、人が自分の一切の喜びや悲しみを託して悔いぬ職業を見つけることがたいへん困難になったので、多くの人が職業のなかに人間の目的を発見することを諦めてしまったからです。」小林秀雄『私の人生観』',
    '「革新者となる人たちは、主流になる前にトレンドを取り入れる十代の若者であり、一般人が本や映画や雑誌から情報を得るはるか前からアイディアを育む芸術家や知識人である。」Ａ．バラバシ『新ネットワーク思考』',
    '「まじめに形勢判断をはじめると、心理的精神的にうまくいかないのに気がついた。対局中にもまじまじと味わうのですが、これをやると私という人間がおかしくなってしまうのですね。簡単にいってしまうと、人間が「凡」になる。「貧」になる。対局者として、凡庸かつ貧困、貧弱なレベルに堕していくのを感じてしまいます。」趙治勲『地と模様を超えるもの』',
    '「天才という生まれつきの才能はない。天才とは、そのように育てられた人間に対する尊称である。」鈴木鎮一『愛に生きる』',
    '「碁をたくさん勝とうとするのは、どこかに無理が生じる、１目半〜２目半勝つのが理想。」依田紀基',
    '「将棋の新手というのは、すごく地味なんです。端歩を突くのが三手早いとか、金が上がるのが五手早いとか、普通の人が見てもよく分からないような、たいして変わらないような手だったりするんですね。王様を囲う一手を遅らせるとか、矢倉だと飛車先の歩を突かないだけで画期的だったりするわけです。これは、序盤だけ見ていてもなかなか説明しにくくて、先に突いた場合の変化を何十手先まで図面にして比較してみないと、どこが優れているのか説明しにくいんですね。それに、斬新な発想をした人は、発想した時点では評価されないんです。」羽生善治『簡単に、単純に考える』',
    '「『でも、コードはそうするように言っているみたいですよ。やってみましょう。』」ケント・ベック『Smalltalkベストプラクティス・パターン』',
    '「今春の名人戦では、羽生の挑戦に対し４連敗で初タイトルの名人位を奪われたが、ショックはなかった。むしろ、『羽生さんと長時間の将棋を指したことで、自分の中で眠っていた力が呼び起こされた』と感じた。」森内俊之　読売新聞',
    '人生の真実とか、目的とか、人類の理想とか何だとか、そういうおおぎょうなアイデアにはどこかうそがあり、そんなフィクションからできれば避けて通りたいという思いは、子供のころからいまに変わりません。それよりも、世間がつまらないと見捨てるもの、具体的に見映えがしなくて、見向きもされないもの。彼らの命の方が私にとってずっと大事でした。」趙治勲『地と模様を超えるもの』',
    '「ウェブには、誰も訪れたことのない、ロボットでさえも見たことのない大陸が存在するのである。」Ａ．バラバシ『新ネットワーク思考』',
    '「あの男の罪は、おのれの足もとから世のさきざきのことまで考えすぎている。それがあの男の悪徳になっている。あの男がそのあたりをうろつくかぎり、家族をも、人をも、世をも、不幸にするだろう」司馬遼太郎『峠』',
    '「あの店のセールはすごかったですよ。この美術館の展示はなかなかいいです。その先の映画館で始まったばかりの映画の評判、聞きましたか？ニューヨークの街の魅力を楽しげに語る運転手の明るさが、乗客のあいだに広がっていった。バスを降りる頃には、乗客は乗ってきたときの不機嫌なカラを脱ぎすてて、『さよなら！いい一日を！」という運転手の元気な別れの挨拶に笑顔で応えていた。」ダニエル・ゴールマン『ＥＱ　こころの知能指数』',
    '「素敵な過去だけが蘇る。永遠なる愛など今は夢なのか」桑田佳祐『ＣＨＲＩＳＴＭＡＳ　ＴＩＭＥ　ＦＯＲＥＶＥＲ』',
    '「長い眼で見ると、最後に残るのは名声でも仕事でなく、家族なんだよ」グレゴリー・ペック',
    '「中原の心の中には、実に深い悲しみがあつて、それは彼自身の手にも余るものであつたと私は思つてゐる。彼の驚くべき詩人たる天資も、これを手なづけるに足りなかつた」小林秀雄',
    '「Ｑ　どうして『感じない』のですか。　Ａ　ふたつ原因が考えられる。ひとつは『情報不足』、もうひとつは『感度が悪い』。ただ『感度が悪い』と気づいたところで事態が前に進まないから、対局者は『情報不足』のほうに原因を求める。つまり、読むのだ。読んですこしでも新しい情報を手に入れることができれば、新しい見方が可能になる、そうすれば『感じる』ことができるかもしれない。」王銘エン『ゾーンプレス　パーク』',
    '「人の心の弱みを敏感に嗅ぎつけ、そこにつけこみ、おもねり、時には脅し、人の心のすきを見すましては、すばやくそのすき間にもぐりこみ、小ずるく立ち廻らなければ、他の階級の人々に虫けらのように踏みにじられてしまうだけなのですもの。」瀬戸内寂聴『釈迦』',
    '「その拘束のなかで人間は懸命に可能性を見出し、見出すために周囲と血みどろになってたたかわねばならない、とおもっている。」司馬遼太郎『峠』',
    '「『ストレスは人を馬鹿にする。』」ダニエル・ゴールドマン『ＥＱ 心の知能指数』',
    '「もう１つ当惑したのは、生徒たちが徐々に技能を身につけるのではなく、むしろ突然、描き方を“ものにする”ことが珍しくないことです。」Ｂ．エドワーズ『脳の右側で描け』第３版',
    '「カウンセリングに関心をもつ人は、何とかして人の役に立とうと焦るので、相手の気持ちを受け入れる以前に、何とか自分の知識や能力で『救おう』とする。そのために困難が生じてくる。」河合隼雄『カウンセリング入門』',
    '「人間というのは、よくなりたいという気持ちがあると同時に、そう簡単によくなりたくないんですね。そこが大事です。」河合隼雄『カウンセリング入門』',
    '「人間というのは、相当な悪環境に放り込まれて、相当な悩みがあり、相当に嫌なことがあっても、自分で立ち上がってくる、そういう力を持っているということですね。」河合隼雄『カウンセリング入門』',
    '「どうしてかと言うと、自分一人だけで考えているのと、生きた人間が真剣に相手になって聴いてくれて、真剣に質問されながら一緒にやるのとでは、天と地ほどの差があるからです。」河合隼雄『カウンセリング入門』',
    '「コーディングとは、あいまいで理想的なアイデアが現実の厳しい夜明けの中で目覚めるための場所なのです。」ケント・ベック『Smalltalkベストプラクティスパターン』',
    '「真中に一つの光を置いてそしてその四方にたくさんの鏡を置くというと、その真中の光が周囲の鏡に一々映る、のみならず、一々の鏡に映った光はまた他の鏡に映る、互いに照らし合う、互いに光が照合する」鈴木大拙『禅とは何か』',
    '「滄浪の水清まば　以って吾が纓（えい）を濯う可（べ）し　滄浪の水濁らば　以って吾が足を濯う可（べ）し」『大河の一滴』五木寛之',
    '「本当に集中している状態というのは、雑念が一切消え去って、澄み切った深い海の中の沈黙の世界にいる感じなのです。あと一つは、集中する時には、ぱっと、すぐに深く集中できるのではなく、海に潜っていくようにちょっとずつ、ちょっとずつ潜っていかないと深く集中できないし、長く続かない、そういう感じでもあるのです。」羽生善治『定跡からビジョンへ』',
    '「だが上場後しばらくして、再び縦割り機能別部署制度へ戻すことになる。理由は簡単だ。とびっきり優秀なマネージャーが入ってきたからである。」堀江貴文『儲かる会社のつくり方』',
    '「だからこそ人は人生を途中で放棄しては駄目なのです。どうあっても生きねばならないのです。」衛藤信之『心時代の夜明け』',
    '「青春の神聖な魔法の放棄は、しばしば、中年期の入口での危機というかたちで出現する。人はある朝、憂鬱な認識とともに目覚めるのだ。『わたしはそろそろ四十なのに、まだ何ひとつやり遂げていない！世界に自分の足跡を残していないんだ！』」アラン・Ｂ・チネン『大人のための心理童話』',
    '「20代は、建築に限らずどのような職業を選択するにせよ、その人間の生き方を左右する重要な時期です。多感な20代を緊張感をもって生きていけるかどうかが、それ以降、とりわけ40代-50代に自分らしい生き方を貫けるかどうかの分かれ目になります。」安藤忠雄『建築を語る』',
    '「すごいアドバイスは誰にでもできる。知識があればいいから。変わったことを始めることは大勢の人ができる。好奇心があればいいから。つまらないことでも最後までやり遂げることは容易ではない。そこには誠意が必要だから。」',
    '「宇宙のほとんどは暗黒である。にもかかわらず、空は星で満ちている。何もないところを見てはいけない。星を見なさい。」',
    '「ハプスブルク家の解剖を請け負っていた人たちが歴史に残らないのと同様に、杉田玄白の名は残るが、実際に技術を持っていた人たちの存在は消されてしまったのです。」養老孟司『死の壁』',
    '「科学と文学。どちらにも、現状では何か肝心なものが欠けている。一見相容れないもののように見える両者をつなぐ道の『補助線』の中に、世界の見え方を変える鍵がある。」茂木健一郎『クオリア降臨』',
    '「行者宿報ありて、たとい女犯すとも、われ玉女の身となりて犯され　一生の間よく荘厳して　臨終に引導して極楽に生ぜしめん」覚如『親鸞伝絵』',
    '「日本には守りきる文化がないからね」三浦知良（カズ）',
    '「人間が非常に強い怒りや憎悪の力でおかしくなるのと同じで、情熱や欲望の力でおかしくなることも当然ありうることです。」ダライ･ラマ『こころの育て方』',
    '「もしも問題がやさしく感じられたら、それをどうやって一般化するか考えてみてください。問題が難しく感じられたら、あなたの解ける特別な場合や類似の問題について考えてください．」ジョセフ・Ｈ・シルヴァーマン『はじめての数論』',
    '「記号が物の性質を正しく簡潔に表現し、あるがままの姿を描写している時、人はそれを発見したことに最高の喜びを見い出す。そして、それを生み出した苦しみは嘘のように消えていく。」ライプニツ',
    '「私も以前には、有限である、不完全であると云ひながら、其有限不完全なる人智を以て、完全なる標準や、無限なる實在を研究せんとする迷妄を脱却し難いことであつた。私も以前には、眞理の標準や善惡の標準が分らなくなつては、天地も崩れ社會も治まらぬ樣に思うたることであるが、今は眞理の標準や善惡の標準が、人智で定まる筈がないと決着して居りまする。」清澤滿之',
    '「言葉を愼まねばならぬ、行を正しくせねばならぬ、法律を犯してはならぬ、道徳を壞りてはならぬ、禮儀に違うてはならぬ、作法を亂してはならぬ、自己に對する義務、他人に對する義務、家庭に於ける義務、社會に於ける義務、親に對する義務、君に對する義務、夫に對する義務、妻に對する義務、兄弟に對する義務、朋友に對する義務、善人に對する義務、惡人に對する義務、長者に對する義務、幼者に對する義務等、所謂人倫道徳の教より出づる所の義務のみにても、之を實行することは決して容易のことでない。若し眞面目に之を遂行せんとせば、終に『不可能』の歎に歸するより外なきことである。私は此『不可能』に衝き當りて、非常なる苦みを致しました。若し此の如き『不可能』のことの爲に、どこ迄も苦まねばならぬならば、私はとつくに自殺も遂げたでありませう。然るに、私は宗教により、此苦みを脱し、今に自殺の必要を感じませぬ、即ち、私は無限大悲の如來を信ずることによりて、今日の安樂と平穩とを得て居ることであります。」清澤滿之',
    '「竹は節目で伸びていく。」大沢啓二',
    '「血と格言で書く者は、読まれることではなく、暗記されることを望んでいる。」ニーチェ『ツァラトゥストラ』',
    '「フォートランを勉強したことはあるけれど、自分がすぐれたプログラマーになれるとは思えなかった。プログラムを開発したところで、十年先でもつかわれるようなものはとてもつくれないだろう。できるならば、ながくに渡って意義をもつことをやりたい。血と格言で書く者は、読まれることではなく、暗記されることを望んでいる。」マイケル・ハート『グーテンベルグ計画の理想と現実』',
    '「将棋そのものは乱反射していて、いかようにも見ることが出来るし、いつまでも全部を見尽くせません」朝吹真理子『人間の理を越えて』',
    '「そんなとき、本当にこんなことをやっていていいのかとか、こんなことをしていたら人生なんてあっという間に終わるんじゃないかとか、思ってしまうことがあるんですが、それも永遠のひとつではないでしょうか(笑)。」羽生善治『人間の理を越えて』',
    '「時間の経過とはこの発展に伴う統一的中心点が変じてゆくのである、この中心点がいつでも「今」である。」西田幾多郎『善の研究』',
    '「いつか、科学者や意思決定をする人が、大昔の人たちがずっと知っていたことを再発見してくれればと、私は本当に願っている。つまり、私たちにとって一番価値があるのは敬意だということだ。ナシーム・ニコラス・タレブ『ブラック・スワン』',
    '「問題は、私たちの思いつきはまとわりつくということだ。」ナシーム・ニコラス・タレブ『ブラック・スワン』',
    '「失ひし一万枚の草稿の女となりて来りなげく夜」与謝野晶子',
    '「人生は積み重ねだと誰でも思っているようだ。ぼくは逆に、積みへらすべきだと思う。財産も知識も、蓄えれば蓄えるほど、かえって人間は自在さを失ってしまう。過去の蓄積にこだわると、いつの間にか蓄積物に埋もれて身動きができなくなる。」岡本太郎『自分の中に毒を持て』',
    '「人間本来の生き方は無目的、無条件であるべきだ。それが誇りだ。死ぬのもよし、いきるもよし。ただし、その瞬間にベストをつくすことだ。現在に、強烈にひらくべきだ。」岡本太郎『自分の中に毒を持て』',
    '「狩りよりも季節を読むのが得意な人は何週間も太陽や月や星を見つめ、仕事をさぼっているように見えただろうが、実は一年のうち、狩りや種蒔き、刈り穫りに良い時期をどう予測するかを研究していた。」ドナルド・ノーマン『人を賢くする道具』',
    '「われわれは、あまりにも速く読み、著者の考えに疑問を抱くことも反論することもなくなった。」ドナルド・ノーマン『人を賢くする道具』',
    '「つまり案内記に丁寧に浴室とか通路とか書き込んでいたのを、いろはの符号にしたのが悪いので、兵卒の教育程度では、符号と解説とを照らし合わせて合点するということができない。」後藤新平『後藤新平』',
    '「映画は何十年にも渡って見られるものだ。見ている人がピクサーのすばらしい映像と、ストーリーの世界に浸っているところを、ただ海藻のために現実に引き戻して本当に後悔しないのか。お金や公開時期はそれに比べれば重要な問題ではない」ステーブ・ジョブズ',
    '「だれも選択した者はない。われわれは、はじめはみんな子供だったからだ。だれも選択はしなかった。しかしみんなまず行動した。こうして、天職は自然と環境とから生じる。…だれも選択などしない。みんな歩いているのだし、どの道もまちがっていない。…この無愛想な男(ミケランジェロ)は、なにかを学ぼうとして学校へ行ったときには、すでに髪が真白だったといわれる。このことは優柔普段の人たちに対して、いつでも発奮するのにおそすぎることはないと教える。」アラン『幸福論』',
    '「どんなにガチガチに管理しようと思っても、やはり人間はそこから逸脱しようと志向してしまう気がするんです。」茂木健一郎『自分の頭で考えるということ』',
    '「『貿易なんですか？金将、銀将が？』『そうです。その金銀で、桂、香は香辛料。』」羽生善治『自分の頭で考えるということ』',
    '「『僕、何をしてましたか』『何をしておられたかというのは、すごくむずかしいんだけれども、あえていうなら、もし人間に『魂』というものがあるとしたら、そこだけ見ておられました……」河合隼雄『こころと脳の対話』',
    '「自分のしていることに愛情を注いで初めて、隣に座っている人よりも実際によい仕事をより多くこなせるのだ。もし愛情がないなら、そのときは、愛情のある別の人を探すことになる。」ラリー・ボシディ『ビジョナリー・ピープル』',
    '「立派な業績を上げている人たちは本能的、直観的に言語を使う。その対象は自分が達成しようとしているものに絞られている。」『ビジョナリー・ピープル』',
    '「ビジョナリーな人というのは、その人生のある時点で、われわれはみな、ひとりで生きている、という固定観念を克服してきた。」『ビジョナリー・ピープル』',
    '"Be careful of your thoughts, for your thoughts become your words;\nBe careful of your words, for you words become your deeds;\nBe careful of your deeds, for your deeds become your habits;\nBe careful of your habits; for your habits become your character;\nBe careful of your character; for your character becomes your destiny." Mother Teresa',
    '「アメリカ大陸には、先住民を悩ませている病気がわずかながらあった。そのひとつが梅毒だ。もっとも、このころにはまだおそろしい病気ではなかったらしい。…梅毒はスペインに渡り、スペインと緊密な関係にあったイタリアのナポリへと広がった。そこで梅毒の性質が変わり、ときとして死にいたる恐ろしい病となった。」ジェイムズ C. ディヴィス『人間ものがたり』',
    '「真のリッチマンというのは、精神的にも、時間的にも、空間的にも、自由な人間であると思う。俺はすべて対極にあった。寝る間もないまま働き続け、どこにも移動できず、精神は仕事に拘束され、つくったビルも全部なくなった。本当に貧しい人生だったと思うよ」佐佐木吉之助',
    '「人が前向きに生きるためには２つの条件がある。１つは働く場があること、もう１つは愛する人がいることである。」フロイト',
    '「聖人は生きているときには天地自然の運行に身をまかせ、死ぬときにはものの変化に未をまかせる。無心に陰陽の二気に調和してゆくのである。」荘子『北斎の謎を解く』',
    '「禍福をも心にとめず、物が心に感じてのちに反応し、物が身にせまってのちにうごき、事がやむをえなくなってのちにこれにあたる。知恵や作為をはなれて天の理にしたがう。」荘子『北斎の謎を解く』',
    '「このゆえに聖人は天のわざわいをうけず、物のわざわいをこうむらない。生きているときには流れに浮かびただようように、死ぬのはちょうど休息するようである。」荘子『北斎の謎を解く』',
    '「あれこれ思慮することもなく、知謀をもちいることもなく、ひらめきがあっても外にあらわさず、まことがあっても応報を期待しない。」荘子『北斎の謎を解く』',
    '「ねむるときには夢をみず、さめているときには憂いがない。その心は自然のままに純粋で、魂はつかれることがない。」荘子『北斎の謎を解く』',
    '「至人無己、神人無功、聖人無名」荘子『逍遥遊第一』',
    '「まことに芸術はいつでもゆきづまっている。ゆきづまっているからこそ、ひらける。そして逆に、ひらけたと思うときにまたゆきづまっているのです。そういう危機に芸術の表情がある。」岡本太郎『対極と爆発』',
    '「十八世紀ごろまでは、絵かきは芸術家ではなかった。家具屋や大工や石工や織工と同じように画工、つまり職人だったのです。」岡本太郎『対極と爆発』',
    '「人間はすべてその姿のままで宇宙にみち、無邪気に輝いているものなのだ。」岡本太郎『万国博に賭けたもの』',
    '「今まで人種とか国家、貧富などによってまったく異質な動物のような別々の生き方を背負わされてきた人間たちだが、今やわれわれの状況は世界の隅々まで同質である。同質の困難、同質の恐れ、同質の嘆きにゆさぶられている。」岡本太郎『万国博に賭けたもの』',
    '「エリートがなぜあれを否定したかというと、どこにもなくて、基準になるものがないからだ。が、ピーブルは、平気でそういう知識なんかなくても、自分でピンとくればよろこぶし、面白ければ面白いという。」岡本太郎『縄文の文化こそ、日本人の心のふるさとだ』',
    '「大阪万博は明らかにヘンなのである。すべて太陽の塔のせいだ。歴史の中でひとり浮いている。万博史に刻まれた唯一の異物。後にも先にもこれひとつ。」平野暁臣『岡本太郎』',
    '「パブリックアートはいいよ。見たくなったら、そこに行きさえすれば、いつでも誰でも、タダで観られるんだからね。それを観て『ああ、いいなぁ』と思ってもいい。だけど『なんだ、こんなものつくりやがって！』と悪口言ったっていいんだぞ。あるいは無視して通り過ぎたっていい。芸術とはそういうものなんだ。なんでもないもの、道端の石ころと一緒なんだよ」岡本太郎',
    '「同じ友人といつも一緒にいると、友人が自分の人生の一部となってしまう。すると、友人は彼を変えたいと思い始める。そして、彼が自分たちの望み通りの人間にならないと、起こりだすのだ。」パウロ・コエーリョ『アルケミスト 夢を旅した少年』'
];

document.write('<blockquote>' + word[Math.floor(Math.random()*word.length)] + '</blockquote><p></p>');
