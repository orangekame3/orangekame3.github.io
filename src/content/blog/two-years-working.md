---
title_ja: 量子計算機システムソフトウェアに携わってからの2年
title_en: Two Years Working on Quantum Computer System Software
desc_ja: QIQBに転職してからの2年の振り返り
desc_en: Reflecting on two years since joining QIQB
date: 2025-12-28
---

::ja
## 前置き

この記事では、量子計算機のシステムソフトウェアに携わるようになってからの2年間を振り返って、これまでの経緯や考えてきたことをまとめる。
## 経歴

私は現在(2025年12月時点)30歳で大阪大学の[量子情報・量子生命研究センター](https://qiqb.osaka-u.ac.jp/en/home)という研究機関に勤めている。

主に取り組んでいることは量子計算機実現に向けたシステムソフトウェアの構築である。

>ここではシステムとわざわざ言及している気持ちとしては、量子計算上で実行するソフトウェアであるいわゆるアプリケーションソフトウェアと区別するためである。

学歴は東京理科大学の理学研究科物理学専攻を修士で卒業しており、蔡先生のもとで超伝導量子エレクトロニクスを学んだ。研究内容は超伝導共振器間の可変型超強結合であり、もっぱら回路設計をしていた。

大学院卒業後は[フューチャーアーキテクト](https://www.future.co.jp/en/)にてシステム開発をしていた。フューチャーアーキテクトという会社は業種としては日系ITコンサルティング企業に分類されるが、社員にはシステム開発も要求されるといった少し変わった会社である。

キャリアの初期はソフトウェア開発を担当することが多いが、戦略立案や要件定義などバラエティに富んだキャリアを進めるためとても良い環境であった。

私はこの企業で2年半エネルギー会社向けのバックエンドシステムの運用保守を担当していた。運用保守といっても新機能の開発は続けていたのでコーディングもかなり経験した。

開発環境もかなりモダンであり、Go言語を使ってAWS上でサーバーレスアーキテクチャでシステムを構築していた。ソフトウェアエンジニアとして非常に恵まれた環境だったと思っている。

その後2023年に現在の所属に転職して今に至る。

## 転職の経緯

契機となったのは理化学研究所が2023年3月に発表した[こちら](https://www.riken.jp/pr/news/2023/20230324_1/)のプレスリリースである。

理研、産総研、NICT、大阪大学、富士通、NEC、NTTが共同で国産初のクラウド量子コンピュータを構築したという内容である。

このニュースについては量子計算機から一旦身を引いて、企業勤めをしていた私の耳にも自然と入ってきたものであり、企業内Slackでもこのニュースが流れてくるのを目にした。このとき大阪大学が量子計算機の開発をしていることを始めて意識したと記憶している。

その後Xにて大阪大学で上記のシステム開発に関連した人材を募集しているという投稿を目にした。当時転職するつもりはなかったが、どういった様子でシステムを構築しているのか興味があり、投稿者にDMを送って話を聞いてみた。

その時初めて量子情報・量子生命研究センターという組織を知った。この組織は発足したばかりでソフトウェアのメンテナンスをしているチームも非常に小さい。特徴的だったのはソフトウェアの開発・運用をしているメンバーが全員ソフトウェア会社出身であったということだった。うがった見方かもしれないが、話を聞くまではいわゆるPoC的にとりあえず動くシステムを構築して運用しているのが実態なのではと疑っていたのだが、そういった懸念はすぐに払拭された。

面談では開発環境やどういった人材を求めているのか、どういった雇用条件がありうるのかなどを根掘り葉掘り聞いた。全く転職など考えていなかったのだが、面談を終えた後はかなり転職に対して気持ちが動いていた。正直前職での開発環境にも満足していたし、人間関係もかなり良好であった。今後のキャリアについてもある程度自分の中の方針が定まっていたのでかなり悩んだが、最終的には1週間悩んだ末に転職することを決意した。

まだ誰もなし得たことのない未知の技術領域にコントリビュートしたいというのが転職を決心した一番の理由である。転職を決意した2021年当時（そして2025年現在も）いわゆる実用的な量子計算機というのは実現していない。そのソフトウェア構成もアーキテクチャも技術セットも何も定まっていない。ソフトウェアエンジニアのキャリアを歩んでいると、例えばプログラミング言語やOSなどを自分でつくりたいと思ったことはあると思うが、現代のソフトウェア開発人口の広がりやエコシステムの習熟度を考えるとレッドオーシャンであることは明らかである。多くの場合、新しい開発といっても既存システムの性能向上が主目的となる。  それは当時の私の興味とはやや異なっていた。

今の量子計算機の開発状況を眺めるとインターネットやOSが勃興してきた時代に近しいものがあるのではないかと漠然と考えていた（私自身はそういった時代を経験していないが、ネットの情報などを漁るにそういう所感を抱いた）。そういった時代に巡り会えている自分の環境は非常に幸運なのでは？と思うところもあり、上記の未知の技術領域にコントリビュートしたいとう思いから転職を決めた。この選択が良い方向に傾くのか悪い方向（業界自体が沈んでしまうのか）は答えは数年後(もしくは数十年）になりそうだが、今はこの選択は良かったと思っている。

## 現在の業務

大阪大学では私の転職後すぐにクラウド量子計算機を国内3号機として立ち上げることとなった。

>思えば、この立ち上げのためのメンバー募集だったのだとは思うが当時の私は露知らず、この立ち上げに関わることとなった。

大学時代の量子回路設計の知見もあり、ハードウェアに近い領域での運用とソフトウェア開発、そしてクラウドレイヤのソフトウェアの開発などに携わっている。

2025年には開発成果である[OQTOPUS](https://oqtopus-team.github.io/)をOSSで公開し、[IEEE Quantum Week](https://ieeexplore.ieee.org/document/11250353)で発表するなどの経験も積んでいる。
こうした経験は前職のままではおそらく詰めなかったものであると思うし、成果についても一定満足している。今後は開発した成果を日本国内だけでなく海外にも認知してもらえるように継続した機能拡張とアウトリーチを続けていく。

>OQTOPUSについては[こちら](https://zenn.dev/qsrh/articles/oqtopus-20251222)の記事に詳細をまとめている。

::en

<!-- draft:

## Preface

In this article, I wrote down the over two years, after I involved quantum computer system software.

## Career

I worked at the Quantum Information and Quantum Biology research center at The University of Osaka.

My main mission is implementation of system software for quantum computing.

> In this sentence, i refer to "system" - it means that to emphasize of difference with application software it worked on quantum computer

I studied quantum electronics under Prof. Tsai, and I graduate master degree at Tokyo University of Scienece. My research theme is Ultrastrong tunable coupler between superconducting resonators. I mainly desinged quantum electronics circuit.

After graduation, I worked at the Future corp and develop the system software. Future corp is classified IT japanese consulting company, however, employee is required software engineering skill, - it is a unique company.

At, the first few years, employee mainly develop software, however, after that they can choose their carreer in strategy consultant, software architect and software engineering specialist. it is good environment as a software enginneer.

I worked this company during two years and maintanence the backend sytem the area of energy industory client.  Not only maintenance, I also develop software.

software development environment is also, modern architecture set - using Golang and system is hosted on the AWS serverless architecture. It is good envrionment as a software engineer.

After that, in 2023, I joined current posision.

## Background my working change

The important event is this press-release reported at March 2023.

RIKEN, AIST, NICT, The Univerisity of Osaka, Fujitsu, NEC, NTT group implemented the first japanese cloud based quantum computer.

I heard of this news in my slack group under corporation. At this timing I recognized that The University of Osaka involved implementing quantum computer.

After that, on X, I found that carreer requirement about this system.
At that time, I have no idea to change my job. I am interested in this system so, I DMed  this posted owner and hear about this system.

In this timming, firstrly recognized Quantum Informatin and Quantum Biology Research Center. This center is established recently, and sotware team - maintanence cloud system - is also small. The unique point is the member who develop and maintanence that system - all from the software company. It is doughteful idea, I considered that software system is PoC like software, but that idea is removed.

In the discussion, I heared about the requirement of poeploe and software development environment and what contraction is valid. I have no idea about job change, but after discussion, my idea is tend to the job changing. Honestrly, I satisfied my job enbrionment and relationship with team menmver. And also my carreer in this company is designe on my self. so I thinking this about one week and I changed my thoght.

The main idea of this thought is my motivation, I want to contribute the system no one yet have implement. At the time 2021, (and of course current 2025) as so called effective quantum computer system is not yet implemented. the software architecture,　and thechnology set is not yet decised. Any one consider about create the programming language or Operating system own selfe, but current human resource at the software development and level of ecosystem , this is red ocean area. and also almost these is enhancement of exisiting system. this is not my curiosity/

current development stage of quantum computing is like the early stage of internet and operating system. (I havent experinenced these age, but i think so form Internet knwoledge). this is good luck , I front these age, so my motivation - I want to contribute these area. I decise change my job/ this decistion is good or bad is resulting in after few yeasr ( or few ten ten years), I think this was good decision , at now.

## Current work

At the Universy of Osaka, Cloud-based quantum computer as third machine in japan was launched after my job change.

> Overlook about this, recruitment of staff is for this launch, but I totaly didnt know about that.

My experience of designing of quantum circuit, I involved the software near by hard ware and cloud layer software development.

At 2025 we published OQTOPUT as open-source, and the contribution is reported IEEE Quantum Week. These experience is only one at current position. I satisfied our contribution/ After now, I enhance that system and outrreach our contribution/

-->


<!-- review:
## 全体
- 時制の統一: 過去形と現在形が混在 → 経歴は過去形、現在の状況は現在形に統一
- 冠詞 (a/the) の欠落が多数
- 文構造の崩れを修正

## Preface
- "I wrote down the over two years" → "I reflect on my two years" (振り返るニュアンス)

## Career
- "The University of Osaka" → "Osaka University" (正式英語名)
- "I worked at" → "I currently work at" (現在形)
- 年齢30歳の情報が欠落 → 追加
- "i refer to" → "I refer to" (大文字)
- "it worked on" → "that runs on" (より自然)
- "I graduate master degree" → "I completed my master's degree"
- "Ultrastrong tunable coupler" → そのままでOK（専門用語）
- "I mainly desinged" → "I mainly designed" (typo)
- "Future corp" → "Future Architect" (正式名称)
- "It japanese consulting company" → "a Japanese IT consulting company"
- "maintanence" → "maintenance" (typo多数)
- "the area of energy industory client" → "for energy industry clients"
- "software development environment is also, modern" → "The development environment was quite modern"

## Background
- "The important event is this press-release" → "The catalyst was a press release" (契機のニュアンス)
- "I heard of this news in my slack group under corporation" → "I came across this news in my company's Slack"
- "carreer requirement" → "job posting"
- "I have no idea to change my job" → "I had no intention of changing jobs"
- "I DMed this posted owner" → "I sent a DM to the person who posted it"
- "firstrly recognized" → "first learned about"
- "It is doughteful idea" → 削除（うがった見方の謙遜は英語で不自然）
- "PoC like software" → "just a PoC-level system"
- "my idea is tend to" → "I found myself leaning toward"
- "Honestrly" → "Honestly" (typo)
- "I satisfied my job enbrionment" → "I was satisfied with my work environment"
- "I thinking this about one week" → "After about a week of deliberation"
- "no one yet have implement" → "no one has yet achieved"
- "red ocean area" → "clearly a red ocean"
- "my curiosity" → "what I was looking for" (興味とはやや異なっていた)
- 2021年 → 2023年に修正（転職決意時期）

## Current work
- "as third machine in japan" → "as the third such system in Japan"
- "Overlook about this" → "Looking back"
- "I totaly didnt know" → "I had no idea at the time"
- "OQTOPUT" → "OQTOPUS" (typo)
- "only one at current position" → "something I likely couldn't have done at my previous job"
- リンクを保持
-->

## Preface

In this article, I reflect on my two years working on quantum computer system software—the journey so far and the thoughts I've had along the way.

## Career

I'm currently 30 years old (as of December 2025) and work at the [Center for Quantum Information and Quantum Biology (QIQB)](https://qiqb.osaka-u.ac.jp/en/home) at Osaka University.

My main focus is building system software for quantum computing.

> I specifically say "system" software here to distinguish it from application software—programs that run on quantum computers.

I completed my master's degree in physics at the Graduate School of Science, Tokyo University of Science, where I studied superconducting quantum electronics under Professor Tsai. My research focused on ultrastrong tunable coupling between superconducting resonators, and I mainly worked on circuit design.

After graduating, I worked at [Future Architect](https://www.future.co.jp/en/), developing system software. Future Architect is categorized as a Japanese IT consulting company, but it's somewhat unique in that employees are also expected to do hands-on system development.

In the early stages of your career there, you mostly work on software development, but you can later branch out into strategy consulting, requirements definition, and other areas—it was a great environment for building a diverse career.

I spent two and a half years there maintaining backend systems for an energy company client. Though it was maintenance work, we were continuously developing new features, so I gained substantial coding experience.

The development environment was quite modern—we used Go and built serverless architectures on AWS. I consider myself fortunate to have worked in such a great environment as a software engineer.

In 2023, I joined my current position.

## Why I Changed Jobs

The catalyst was [this press release](https://www.riken.jp/pr/news/2023/20230324_1/) from RIKEN in March 2023.

It announced that RIKEN, AIST, NICT, Osaka University, Fujitsu, NEC, and NTT had jointly built Japan's first domestic cloud-based quantum computer.

This news reached me naturally, even though I had stepped away from quantum computing and was working in industry. I saw it circulating in our company Slack. That was when I first became aware that Osaka University was involved in quantum computer development.

Later, I came across a post on X about a job opening related to this system at Osaka University. I had no intention of changing jobs at the time, but I was curious about how they were building the system, so I sent a DM to the person who posted it to learn more.

That was when I first learned about the Center for Quantum Information and Quantum Biology. The organization had just been established, and the team maintaining the software was quite small. What stood out was that everyone on the software development and operations team came from software companies. I'll admit I had initially suspected they might just be running a PoC-level system that barely worked—but that concern was quickly dispelled.

During our conversation, I asked detailed questions about the development environment, what kind of people they were looking for, and what employment terms were possible. I hadn't been thinking about changing jobs at all, but after the meeting, I found myself leaning toward it. Honestly, I was satisfied with my work environment at my previous job, had good relationships with my colleagues, and had a clear direction for my career there. I agonized over it, but after about a week of deliberation, I decided to make the switch.

The main reason was my desire to contribute to an uncharted technological frontier that no one has yet achieved. When I decided to change jobs in 2023 (and still in 2025), there was no such thing as a practical quantum computer. The software architecture, technology stack—nothing was established yet. As a software engineer, you've probably thought about creating your own programming language or operating system at some point, but given the size of today's developer population and the maturity of existing ecosystems, it's clearly a red ocean. Most "new" development work ends up being performance improvements to existing systems—and that wasn't quite what I was looking for.

Looking at the current state of quantum computing development, I had a vague sense that it might be similar to the early days of the internet and operating systems. (I didn't live through that era myself, but that's the impression I got from reading about it online.) I felt fortunate to be living in such a time, and that feeling—combined with my desire to contribute to uncharted territory—led me to change jobs. Whether this decision will turn out well or poorly (or whether the whole field will collapse) remains to be seen in the coming years or decades, but for now, I believe it was the right choice.

## Current Work

Shortly after I joined Osaka University, we launched a cloud-based quantum computer as Japan's third such system.

> Looking back, I realize the recruitment was probably for this launch—but I had no idea at the time, and I ended up being part of it.

Drawing on my experience with quantum circuit design from my university days, I've been involved in operations close to the hardware layer, software development at that level, and cloud-layer software development.

In 2025, we released [OQTOPUS](https://oqtopus-team.github.io/) as open source and presented our work at [IEEE Quantum Week](https://ieeexplore.ieee.org/document/11250353). These are experiences I likely couldn't have had if I'd stayed at my previous job, and I'm quite satisfied with what we've accomplished. Going forward, I'll continue to expand the system's features and do outreach to raise awareness not just in Japan but internationally.

> For more details about OQTOPUS, see [this article](https://zenn.dev/qsrh/articles/oqtopus-20251222).
