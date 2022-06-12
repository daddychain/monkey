<template>
  <div class="container">
    <div v-if="!$utils.isMobile()" class="header_top big_header">
      <div class="header_wrap clearfix">
        <a href="javascript:;" class="header_logo router-link-active"><img src="../assets/img/logo.png" alt=""></a>
        <div class="header_navs">
          <div class="header_big header_right">
            <div class="navs_list_wrap">
              <div class="navs_list clearfix">
                <div class="navs clarfix">
                  <a href="/index" aria-current="page" class="tit router-link-exact-active router-link-active"><p>
                    HOME</p></a><a href="/javascript:;" class="tit"><p>MAXIVERSE</p>
                </a><a href="/javascript:;" class="tit"><p>AIRDROP</p></a><a href="/javascript:;" class="tit"><p>
                  REWARD</p></a></div>
                <div class="navs_relate">
                  <div class="relate_list clearfix">
                    <a href="https://twitter.com/maxiapeclub" target="_blank" class="relate"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMA/QEE+Av67ubblhIHysZtMKVeVjnx4MCejU5EPg/169e7tncpG9KRfGgkIKuGgnNHNReIhx5FRmt9AAABv0lEQVRIx82W2ZaCMAxAG1r2fVEQxH13Vmem//9pM0dBqwTovHkfG26a5AQO5Mk47reZtRwr/3Ho2GPAOQdt6KvVSUSroJq35FIsxmvAW/8dFCl7q6ORtqWYpabABaZvCx24cX10zmGHeDQE3oDF11IGnMOoWWeMWJqvrPaXLu1z02H5qJmIFVomq25YwbnlzeHeCpDLADhP1Uv8VMUnO0fULI4BLq17Y/XR7EMQPdRKbVIzE3LFSp3MxKxQmPgOhIBhFWqVrIkWkBs/+n3MmC8/T6XXpxEfmiMbMERjK2GHbGQfcJh905JhmLzIeQNhl9bAgclpZqVUOynLggjMZS3wRS0HSU37FDXHk9SGJRFZ63I1ZuQOZSzlQUAeCDYgPX4RxzcZSM1RJHLn7qRHM+yGVkB/Z3ukxkWvtlFJk3XfhrGEYBR6h4N+SOv3p6s/VyUtON9Gq2iUpBXF/hiZqDkNSBd0yzBLT7ok9X2KL/6hvcAysaZogeAdsUHkcR4tM69tHOyLotfkJkDrBMENFIJjv+rQIs0i2jXACFl/0Be9vxXO6j3VWVUsgDYxXuIjJTLQQ7wcWVlmvfqFTZ6IX1JB902RYXmBAAAAAElFTkSuQmCC" alt="" class="one"><img src="data:image/png;base64,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" alt="" class="two"></a><a href="https://discord.com/invite/hb6xA4Bjcv" target="_blank" class="relate"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAoCAMAAACGsik5AAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA/AoC+fHOBgT79ffCpZLq5t1Z7tk2JR4N4dLGuXtJIRgU45+DQigR1b2PdW5kLyyYaWBRrYZUP0VfnUUAAAIQSURBVEjHlZXpeqowEIYnhH0HRVRkczvuVm1Pc/9XVqkBBqQtvj8H3szkmQ+FFmr2OQIEXQc5hd/4F9gbSZsLqBQ64kBensfQjRpYLmF3yJ4qwgNF2LECzbPXaodyHBLGkeS5ZIiaqA8mss44muy3NbpjfyLGrcsFBvubwQkwSsT6MFOwdCW9JOM/bjRh/ZiiVgfWE/FYOYLL+jKsWl1Zb0S/3KvM+mPyDY/IC5LO42yzFyAfUDD22CvI34E/kcZJkqQ1ry7pjRekdSHFuOReRqkvozOiJDzHDj51X0gRdtLvb9GsClsVAOhqgANYvIGOIXzhZ72cJXtsf4kkbwxwElH2+b7HZtkIHpyk5qVuOCRlrha8YPPCCCVaTADiLsnihUUpuegOBwALrzvkv0qbcilcWhlIegMwkURsCnfoTStHWUFBbjHEO8CGIQxfoFQI6mEm63sh34sMYQJ4zf2/X/03CRWcnX+Z8cb1zPN2Ikm78PTNc6kPWJq8LMkAw5elCED+8T4/PZg1lkuWh6nRoejRZcEqNBsgW+h1Fq1k9SE7BiFVB8M145W/Nep37BwAlJtH6kMtVU2T2DKnnjecmtY+CWm4Fes9yonKo7YbVJopQJvzsJrfXaK/xHTBNT2AJ5Sj9lAcOwMMDe25ViSYwjPZrBjMW2bPD/ND5GzG0EUwcWZ+Dp0IoxA6oWmqAOILYfYjFc+CNmgAAAAASUVORK5CYII=" alt="" class="one"><img src="data:image/png;base64,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" alt="" class="two"></a><a href="https://www.instagram.com/maxiapeofficial/" target="_blank" class="relate"><img src="data:image/png;base64,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" alt="" class="one"><img src="data:image/png;base64,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" alt="" class="two"></a>
                  </div>
                </div>
                <div class="wallet_button">
                  <!----><a href="javascript:;" class="connect_bt"><em></em><span>0x35 ... be56</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div  v-if="$utils.isMobile()" class="header_top small_header">
      <div class="header_wrap clearfix small">
        <a href="javascript:;" class="header_logo router-link-active"><img src="@/assets/img/logo.png" alt=""></a>
        <div class="header_navs">
          <div class="header_small header_right" :class="{'on': showMobileMenu}">
            <div class="nav_wrap_box">
              <div class="nav_wrap"  @click="hideMenu">
                <div class="span_box"><span></span><span></span><span></span></div>
              </div>
            </div>
            <div class="navs_list_wrap" v-show="showMobileMenu">
              <div class="navs_list clearfix">
                <div class="navs clarfix">
                  <a href="/index" aria-current="page" class="tit router-link-exact-active router-link-active"><p>
                    HOME</p></a><a href="/javascript:;" class="tit"><p>MAXIVERSE</p>
                </a><a href="/javascript:;" class="tit"><p>AIRDROP</p></a><a href="/javascript:;" class="tit"><p>
                  REWARD</p></a></div>
                <div class="navs_relate">
                  <div class="relate_list clearfix">
                    <a href="https://twitter.com/maxiapeclub" target="_blank" class="relate"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMA/QEE+Av67ubblhIHysZtMKVeVjnx4MCejU5EPg/169e7tncpG9KRfGgkIKuGgnNHNReIhx5FRmt9AAABv0lEQVRIx82W2ZaCMAxAG1r2fVEQxH13Vmem//9pM0dBqwTovHkfG26a5AQO5Mk47reZtRwr/3Ho2GPAOQdt6KvVSUSroJq35FIsxmvAW/8dFCl7q6ORtqWYpabABaZvCx24cX10zmGHeDQE3oDF11IGnMOoWWeMWJqvrPaXLu1z02H5qJmIFVomq25YwbnlzeHeCpDLADhP1Uv8VMUnO0fULI4BLq17Y/XR7EMQPdRKbVIzE3LFSp3MxKxQmPgOhIBhFWqVrIkWkBs/+n3MmC8/T6XXpxEfmiMbMERjK2GHbGQfcJh905JhmLzIeQNhl9bAgclpZqVUOynLggjMZS3wRS0HSU37FDXHk9SGJRFZ63I1ZuQOZSzlQUAeCDYgPX4RxzcZSM1RJHLn7qRHM+yGVkB/Z3ukxkWvtlFJk3XfhrGEYBR6h4N+SOv3p6s/VyUtON9Gq2iUpBXF/hiZqDkNSBd0yzBLT7ok9X2KL/6hvcAysaZogeAdsUHkcR4tM69tHOyLotfkJkDrBMENFIJjv+rQIs0i2jXACFl/0Be9vxXO6j3VWVUsgDYxXuIjJTLQQ7wcWVlmvfqFTZ6IX1JB902RYXmBAAAAAElFTkSuQmCC" alt="" class="one"><img src="data:image/png;base64,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" alt="" class="two"></a><a href="https://discord.com/invite/hb6xA4Bjcv" target="_blank" class="relate"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAoCAMAAACGsik5AAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA/AoC+fHOBgT79ffCpZLq5t1Z7tk2JR4N4dLGuXtJIRgU45+DQigR1b2PdW5kLyyYaWBRrYZUP0VfnUUAAAIQSURBVEjHlZXpeqowEIYnhH0HRVRkczvuVm1Pc/9XVqkBBqQtvj8H3szkmQ+FFmr2OQIEXQc5hd/4F9gbSZsLqBQ64kBensfQjRpYLmF3yJ4qwgNF2LECzbPXaodyHBLGkeS5ZIiaqA8mss44muy3NbpjfyLGrcsFBvubwQkwSsT6MFOwdCW9JOM/bjRh/ZiiVgfWE/FYOYLL+jKsWl1Zb0S/3KvM+mPyDY/IC5LO42yzFyAfUDD22CvI34E/kcZJkqQ1ry7pjRekdSHFuOReRqkvozOiJDzHDj51X0gRdtLvb9GsClsVAOhqgANYvIGOIXzhZ72cJXtsf4kkbwxwElH2+b7HZtkIHpyk5qVuOCRlrha8YPPCCCVaTADiLsnihUUpuegOBwALrzvkv0qbcilcWhlIegMwkURsCnfoTStHWUFBbjHEO8CGIQxfoFQI6mEm63sh34sMYQJ4zf2/X/03CRWcnX+Z8cb1zPN2Ikm78PTNc6kPWJq8LMkAw5elCED+8T4/PZg1lkuWh6nRoejRZcEqNBsgW+h1Fq1k9SE7BiFVB8M145W/Nep37BwAlJtH6kMtVU2T2DKnnjecmtY+CWm4Fes9yonKo7YbVJopQJvzsJrfXaK/xHTBNT2AJ5Sj9lAcOwMMDe25ViSYwjPZrBjMW2bPD/ND5GzG0EUwcWZ+Dp0IoxA6oWmqAOILYfYjFc+CNmgAAAAASUVORK5CYII=" alt="" class="one"><img src="data:image/png;base64,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" alt="" class="two"></a><a href="https://www.instagram.com/maxiapeofficial/" target="_blank" class="relate"><img src="data:image/png;base64,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" alt="" class="one"><img src="data:image/png;base64,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" alt="" class="two"></a>
                  </div>
                </div>
                <div class="wallet_button">
                  <!----><a href="javascript:;" class="connect_bt"><em></em><span>0x35 ... be56</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inner_home inner_content">
      <div class="banner_wrap">
        <div class="banner_padd">
          <div class="banner_video"></div>
          <div class="banner_box">
            <h1><p class="bannerTitle0 hide">M</p>
              <p class="bannerTitle1 hide">A</p>
              <p class="bannerTitle2 hide">C</p>
              <p class="bannerTitle3 hide">C</p>
              <p class="bannerTitle4 hide">&nbsp;</p>
              <p class="bannerTitle5 hide">P</p>
              <p class="bannerTitle6 hide">A</p>
              <p class="bannerTitle7 hide">S</p>
              <p class="bannerTitle8 hide">S</p></h1>
            <h2 class="hide in-viewport" data-in-viewport="i0">Launch on June 15th @8PM UTC-7</h2>
            <div class="macc_time hide in-viewport" data-in-viewport="i1">
              <div class="date_time"> Starts in</div>
              <p style="display: none;"></p>
              <div class="down_time">
                <div class="donate_time">
                  <div class="times"><span class="clearfix">03 <em>:</em></span>
                    <p>DAYS</p></div>
                  <div class="times"><span class="clearfix">12 <em>:</em></span>
                    <p>HRS</p></div>
                  <div class="times"><span class="clearfix">27 <em>:</em></span>
                    <p>MINS</p></div>
                  <div class="times"><span class="clearfix">12 <em>:</em></span>
                    <p>SECR</p></div>
                </div>
              </div>
            </div>
          </div>
          <div class="banner_a hide below-viewport in-viewport" data-in-viewport="i2">
            <span>Mint Price: FREE</span><span>Minted:<em> 0 / 2000</em></span><a href="javascript:;">MINT 1 PASS</a>
          </div>
        </div>
      </div>
      <div class="who_we_are">
        <h2 class="who_we_anim common_title"><span class="tit"><div class="hide l_icon icons"><em></em><em></em><em></em></div><p class="hide txt">WHO WE ARE</p><div class="hide r_icon icons"><em></em><em></em><em></em></div></span>
        </h2>
        <div class="page_view">
          <div class="who_text hide below-viewport in-viewport" data-in-viewport="i3"><p> MACC is a collection of 11,111
            Maxi Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Maxi Ape doubles as your
            Maxi Ape Country Club membership card, and grants you access to members-only benefits. </p>
            <p> MACC aims to build a Music / Entertainment / Fashion metaverse called “Maxiverse” by providing more
              utilities to bluechip NFT IPs in the metaverse. By holding the 2D Maxiape NFT access to the game, you can
              generate 3D Maxiape characters, and attend to virtual concert of EDM festivals Top100 DJ / Superstar
              vitrtual performances by MACC hosted. You can also play Texas Hold’em 3D games, as well as enjoy MoMA NFT
              crypto art virtual galleries. </p></div>
        </div>
        <div class="who_bg_box hide below-viewport in-viewport" data-in-viewport="i4">
          <div class="who_bg"><img src="../assets/img/who_bg.png" alt=""></div>
        </div>
      </div>
      <div class="inner_index_con">
        <div class="pageShow our_version_box">
          <div class="page_view">
            <div class="our_version clearfix">
              <div class="our_text"><h2>
                <em class="our_em hide below-viewport in-viewport" data-in-viewport="i5"></em><span class="our_title hide below-viewport in-viewport" data-in-viewport="i6">OUR VISION</span>
              </h2>
                <div class="img_tit hide below-viewport in-viewport" data-in-viewport="i7">
                  <img src="../assets/img/our_tit.png" alt=""></div>
                <div class="txt hide below-viewport in-viewport" data-in-viewport="i8"><p> MACC’s vision is to build a
                  decentralized metaverse game creation ecosystem — Maxiverse. Creators can customize their own
                  Play-to-Earn or Win-to-Earn economic models and create their own metaverse games, similar to those in
                  Decentraland or Sandbox. </p></div>
              </div>
              <div id="our_img_box" class="our_img_box hide below-viewport in-viewport" data-in-viewport="i9">
                <video id="ourVideo" x5-video-player-type="h5" controlslist="nofullscreen" playsinline="" autoplay="autoplay" controls="controls" loop="loop">
                  <source src="../assets/media/our_img.mp4" type="video/mp4">
                </video>
              </div>
            </div>
          </div>
        </div>
        <div class="macc_benefits_box">
          <h2 class="who_we_anim common_title"><span class="tit"><div class="hide l_icon icons"><em></em><em></em><em></em></div><p class="hide txt">MACC BENEFITS</p><div class="hide r_icon icons"><em></em><em></em><em></em></div></span>
          </h2>
          <div class="page_view">
            <div class="macc_benefits">
              <div class="benefit0 benefit_list hide">
                <div class="benefit_wrap">
                  <div class="benefit">
                    <div class="b_img"><img src="../assets/img/macc_icon_01.png" alt=""></div>
                    <span>Access to MACC metaverse private club, gallery, and exclusive texas poker tables</span></div>
                </div>
              </div>
              <div class="benefit1 benefit_list hide">
                <div class="benefit_wrap">
                  <div class="benefit">
                    <div class="b_img"><img src="../assets/img/macc_icon_02.png" alt=""></div>
                    <span>Get a 3D ape avatar in the metaverse game</span></div>
                </div>
              </div>
              <div class="benefit2 benefit_list hide">
                <div class="benefit_wrap">
                  <div class="benefit">
                    <div class="b_img"><img src="../assets/img/macc_icon_03.png" alt=""></div>
                    <span>Invitation to MACC’s  concerts or DJ parties in metaverse</span></div>
                </div>
              </div>
              <div class="benefit3 benefit_list hide">
                <div class="benefit_wrap">
                  <div class="benefit">
                    <div class="b_img"><img src="../assets/img/macc_icon_04.png" alt=""></div>
                    <span>Tokens will be airdropped to MACC NFT holders, when the play-to-earn 3D game launches</span>
                  </div>
                </div>
              </div>
              <div class="benefit4 benefit_list hide">
                <div class="benefit_wrap">
                  <div class="benefit">
                    <div class="b_img"><img src="../assets/img/macc_icon_05.png" alt=""></div>
                    <span>Exclusive metaverse games or parties that only MACC members can RSVP</span></div>
                </div>
              </div>
              <div class="benefit5 benefit_list hide">
                <div class="benefit_wrap">
                  <div class="benefit">
                    <div class="b_img"><img src="../assets/img/macc_icon_06.png" alt=""></div>
                    <span>Lifetime tickets to virtual concerts hosted by MACC</span></div>
                </div>
              </div>
              <div class="benefit6 benefit_list hide">
                <div class="benefit_wrap">
                  <div class="benefit">
                    <div class="b_img">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACeCAMAAACsJNBQAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAK5QTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LYr0KgAAADp0Uk5TAAQRODwYB17d+//UWatMUcHz53F3vPfvDmPhVQqxRRUz2ZhAjuvNhSkd0ZMtiDC3pSVqyyLGgJ58425kHwEAAAnfSURBVHic7Vx5u7lMGD6TRCItWpCtbElaKd//i73URAhN5/qp817uP88x5u7pmWcfPz9/AgCr4XVQNgs0EI0m2aJwomweCMDaVOuMDl02k9yodxmWjEhzfNlccqLeEzixFUPqlc0mF+R+Z8C2EgjDsvnkgNIYNcULZVIYT8pm9BbEtCdcpdyaqcPKcwZ1bb64UpaWq3XVDZ6ia/PBVTGkjbEtm9I7AEwzqauUxcFoXDalt1B2RkoxRM6iq++/J6bUSnG2aaVsRm+B9dKUSbtWfSnr/ExMcR7V5MpzdlxPIq+KwdCTylP2e2n/J3q9rVw2pXfQ+Wtg1Gqx+8MUK5vSO8j03Lu6bHJmNLZV1wzC745S50/yzMq7bMKn7RRl9uSyK095Ukv7P5IbVd4yA4UOuJRhlvbtqlP++cE7qYj5dADd6rvsdSft/kimXy+b0TsAZ55yf63WvlH5YgxRmzfTmtF0/Yprhj521WX6/C3mtSrnf8AZhp397JiOPzl7rJfN6xkA5oz7oWpt2LQqtxZMOK6mZgBM32rtsLNJm4vI/1G2W0HNOPFd1+hesL+xFVDKVKBVjTJQ5Im+a5ijwQPds12WBoFWtZCZkJ3hShg8yjdiLEpe6JdN8R5gZzaz+Z4hzg7Tshk+AOtvnhIml0bXr57zq/ctMVPKpMQYDV9Wqkf5B7e4e8t2wtEyeM2vY5W0yYTLsHdilrwg7OJrv15JwidMjJvzJzYts4FvfazKGZR+uHImm4x9cLu7qrmP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" alt="">
                    </div>
                    <span>The rights and votes to govern MaccDAO</span></div>
                </div>
              </div>
              <div class="benefit7 benefit_list hide">
                <div class="benefit_wrap">
                  <div class="benefit">
                    <div class="b_img"><img src="../assets/img/macc_icon_08.png" alt=""></div>
                    <span>MACC members can apply to host online metaverse events</span></div>
                </div>
              </div>
              <div class="benefit8 benefit_list hide">
                <div class="benefit_wrap">
                  <div class="benefit">
                    <div class="b_img"><img src="../assets/img/macc_icon_09.png" alt=""></div>
                    <span>Exclusive NFT airdrops</span></div>
                </div>
              </div>
              <div class="benefit9 benefit_list hide">
                <div class="benefit_wrap">
                  <div class="benefit">
                    <div class="b_img"><img src="../assets/img/macc_icon_10.png" alt=""></div>
                    <span>Your Maxiape’s commercial usage rights</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="coming_soon_box">
          <div class="page_view">
            <div class="coming_soon clearfix">
              <div class="img_box hide below-viewport in-viewport" data-in-viewport="i10">
                <img src="../assets/img/3Dgif.gif" alt=""></div>
              <div class="text_box hide below-viewport in-viewport" data-in-viewport="i11">
                <div class="text_nav"><a href="javascript:;" class="on nav_0"><em></em>
                  <p>NFT ECONOMICS</p></a><a href="javascript:;" class="nav_1"><em></em>
                  <p>NFT ALLOCATION</p></a></div>
                <div class="text_list_wrapper">
                  <div class="text_list_wrap">
                    <div class="text-list">
                      <div class="txt_box textScroll on">
                        <div class="txt_layer">
                          <div class="economic"><span>Reward</span>
                            <p>40% of royalties will be distributed to NFT stakers every 15 days. NFT staking will be
                              unlocked after 21 days.</p></div>
                          <div class="economic"><span>Repurchase</span>
                            <p>20% royalty and 50% of casual game ad revenues will be used to buy back Maxiape NFTs on
                              the market, which will be deposited in treasury and be used to award exceptional ecosystem
                              contributors. This will be decided by Maxiape NFT holders via vote.</p></div>
                          <div class="economic"><span>Creation</span>
                            <p>MACC will host periodic art contests to encourage derivative arts. Winners will be
                              awarded Maxi Ape NFTs.</p></div>
                          <div class="economic"><span>MACC Grant</span>
                            <p>MACC will establish a Contributor Grant to reward exceptional Maxiverse community
                              contributors.</p></div>
                          <div class="economic"><span>IP Branding</span>
                            <p>MACC will publish multiple casual games based on the Maxiape IP in App Store, offering a
                              channel for traditional casual gamers to customize their own Maxiape avatars, and thereby
                              add value to the overall MACC NFT collections.</p></div>
                        </div>
                      </div>
                      <div class="txt_box textScroll">
                        <div class="txt_layer">
                          <div class="allocation_wrap">
                            <div class="allocation"><span>Public Sale</span>
                              <p>TBA</p></div>
                            <div class="allocation"><span>WhiteList Mint</span>
                              <p>TBA</p></div>
                            <div class="allocation"><span>Max Supply</span>
                              <p>11,111</p></div>
                            <div class="allocation"><span>Team Reserved</span>
                              <p>200</p></div>
                            <div class="allocation"><span>Treasury Reserved</span>
                              <p>200</p></div>
                            <div class="allocation"><span>Airdrop to BAYC</span>
                              <p>300</p></div>
                            <div class="allocation"><span>Airdrop to MAYC</span>
                              <p>150</p></div>
                            <div class="allocation"><span>Airdrop to Azuki</span>
                              <p>150</p></div>
                            <div class="allocation"><span>Airdrop to Collaborating NFT Influencers</span>
                              <p>60</p></div>
                            <div class="allocation"><span>Airdrop to Collaborative NFT Projects</span>
                              <p>51</p></div>
                          </div>
                          <span class="each">Each Maxiape NFT is an ERC-721 non-fungible token that grants the holder MACC membership.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text_bottom"><h3>VERIFIED SMART CONTRACT ADDRESS</h3><span>coming soon </span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="utility_roadmap_box">
          <h2 class="who_we_anim common_title"><span class="tit"><div class="hide l_icon icons"><em></em><em></em><em></em></div><p class="hide txt">UTILITY ROADMAP</p><div class="hide r_icon icons"><em></em><em></em><em></em></div></span>
          </h2>
          <div class="page_view">
            <div class="utility_roadmap clearfix">
              <div class="utility-box utility_list clearfix utility_left">
                <div class="utility_title xs_block"><em class="bg_move"></em><span>PHASE 1 </span></div>
                <div class="utility_box"><h4>MACC Launch</h4>
                  <div class="txt"><p>Initiate MACC community</p></div>
                  <div class="txt"><p>Public sale of Maxi Ape NFTs</p></div>
                  <div class="txt"><p>Publish Maxiverse themed game to Roblox, including MACC Metaverse Night Club, MACC
                    Gallery, and Exclusive Texas Poker Room</p></div>
                  <div class="step_box xs_none xxl">
                    <div class="circle_box"></div>
                    <div class="curve"></div>
                  </div>
                </div>
                <div class="utility_title xs_none"><em class="bg_move"></em><span>PHASE 1 </span></div><!----></div>
              <div class="utility-box utility_list clearfix utility_right"><!---->
                <div class="utility_title"><em class="bg_move"></em><span>PHASE 2 </span></div>
                <div class="utility_box"><h4>Access to Maxiverse</h4>
                  <div class="txt"><p>Publish Maxiverse games to App Store and Play</p></div>
                  <div class="txt"><p>Maxiverse grand opening, Host periodic EDM festivals with Global Top 100 DJs and
                    well-known bands</p></div>
                  <div class="txt"><p>Host galleries IRL in Palo Alto, LA, NYC</p></div>
                  <div class="step_box xs_none xxl">
                    <div class="circle_box"></div>
                    <div class="curve"></div>
                  </div>
                </div>
              </div>
              <div class="utility-box utility_list clearfix utility_left">
                <div class="utility_title xs_block"><em class="bg_move"></em><span>PHASE 3 </span></div>
                <div class="utility_box"><h4>Maxiape IP Branding</h4>
                  <div class="txt"><p>Host a virtual concert with top stars in the maxiverse</p></div>
                  <div class="txt"><p>Invest in an NFT x DeFi project, solving the NFT liquidity issue</p></div>
                  <div class="txt"><p>Collaborations with various blue-chip NFT projects and well-known brands to host
                    metaverse events in maxiverse</p></div>
                  <div class="step_box xs_none xxl">
                    <div class="circle_box"></div>
                    <div class="curve"></div>
                  </div>
                </div>
                <div class="utility_title xs_none"><em class="bg_move"></em><span>PHASE 3 </span></div><!----></div>
              <div class="utility-box utility_list clearfix utility_right"><!---->
                <div class="utility_title"><em class="bg_move"></em><span>PHASE 4 </span></div>
                <div class="utility_box"><h4>MACC Long Term Develop</h4>
                  <div class="txt"><p>Maxiverse Land NFTs public sale, and build decentralized metaverse creation
                    platform-Maxiverse, similar to those in Decentraland or Sandbox.</p></div>
                  <div class="txt"><p>Assist Web2 / Web3 well-known companies to build Metaverse brands in the
                    maxiverse</p></div>
                  <div class="step_box xs_none xxl">
                    <div class="circle_box"></div>
                    <div class="curve"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pageShow the_team"><h2 class="who_we_anim common_title"><span class="team_title hide">THE TEAM</span>
      </h2>
        <div class="page_view">
          <div class="team_text hide"><p> MACC was created by a metaverse game studio with 10+ years of development
            experience. The team has created over 50 large-scale games. includina one AAA game, with genres ranging from
            MMORPG to MOBA, ACT , RAC, RTS and SLG. With the advent of Roblox, Fortnite and Minecraft, the studio began
            to develop in the metaverse. lt now has more than 10 games on the Roblox platform, amassing 350,000 Daily
            Active Users. The studio was rated one of the Top 10 Game Studios by Roblox. </p></div>
        </div>
        <div class="team_bg_box hide">
          <div class="team_bg"><img src="../assets/img/team_img.png"></div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="footer_box clearfix">
        <div class="logo_text">
          <div class="logo_img"><img src="../assets/img/logo_bottom.png" alt=""></div>
        </div>
        <div class="center_text"><h2>JOIN MAXI APE COUNTRY CLUB</h2>
          <div class="join_a"><a href="javascript:;">JOIN DISCORD </a></div>
        </div>
        <div class="relate_text">
          <div class="relate_box">
            <div class="relate_list clearfix">
              <a href="https://medium.com/@maxiapeclub" target="_blank" class="relate"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAqCAMAAADLeogyAAAAllBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AJcWoAAAAMXRSTlMATYgoGuJb/AnsmMVp7wLz3NfJr6KBYVJINCUUDwzPjnRBLSIHAfe4k3E758AeqHt5OsA0AwAAAaFJREFUSMedldmSgjAQRRs3QBRFERBwxYXR2fr/f24qAuEiVEjNfaK6OSHVdULof0mHjVyoIzG+ERNRxI1sOpgtY1aiNGCMbbWhKUP2iSi56wY1azG7BbSdtCx6CC3dd2gG3c9dVc1spMJ3aA97g82fTNyAYgwDbPwyZNsaQzeUIfTdGkM3NELIzLAVsBbEObZWKghmsUjqzhk6bWgMS/40xnBXQGHde0ptrTkvJgrIXdbNAMbgGwoIdfGuZcNhfighC2yK5Bg8UkK0ATGLes587IGSG7hUjsFMeiDUzBflCfOa+qAhuPRVjCHqhQgO8eG1xtjthx7gUkoH5g31Q+SwzNGyxSY1IHBpHDDfSQdCl+bMoRaELjHbFy1IuIQT1IPQJR5qQuiSQ5oQuhSooYzZlveKWU3PUkPiRJ/FA7o0JSU0eop7RyyMLm2V0GUlTwO4tCcl5Fe2UZEQLqrmrXeXzIc8QxHVLt1S6nAkL/84kVnbFtfv+bAkZPqi4jmUvFS6dCqYIxJyph5j1pVLy2vrOyCk0Ui5/s44l3fkpBWD/gAO58K079AuYQAAAABJRU5ErkJggg==" alt="" class="one"><img src="data:image/png;base64,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" alt="" class="two"></a><a href="https://twitter.com/maxiapeclub" target="_blank" class="relate"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAuCAMAAABUHhoZAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMA/QEE+Av67ubblhIHysZtMKVeVjnx4MCejU5EPg/169e7tncpG9KRfGgkIKuGgnNHNReIhx5FRmt9AAABv0lEQVRIx82W2ZaCMAxAG1r2fVEQxH13Vmem//9pM0dBqwTovHkfG26a5AQO5Mk47reZtRwr/3Ho2GPAOQdt6KvVSUSroJq35FIsxmvAW/8dFCl7q6ORtqWYpabABaZvCx24cX10zmGHeDQE3oDF11IGnMOoWWeMWJqvrPaXLu1z02H5qJmIFVomq25YwbnlzeHeCpDLADhP1Uv8VMUnO0fULI4BLq17Y/XR7EMQPdRKbVIzE3LFSp3MxKxQmPgOhIBhFWqVrIkWkBs/+n3MmC8/T6XXpxEfmiMbMERjK2GHbGQfcJh905JhmLzIeQNhl9bAgclpZqVUOynLggjMZS3wRS0HSU37FDXHk9SGJRFZ63I1ZuQOZSzlQUAeCDYgPX4RxzcZSM1RJHLn7qRHM+yGVkB/Z3ukxkWvtlFJk3XfhrGEYBR6h4N+SOv3p6s/VyUtON9Gq2iUpBXF/hiZqDkNSBd0yzBLT7ok9X2KL/6hvcAysaZogeAdsUHkcR4tM69tHOyLotfkJkDrBMENFIJjv+rQIs0i2jXACFl/0Be9vxXO6j3VWVUsgDYxXuIjJTLQQ7wcWVlmvfqFTZ6IX1JB902RYXmBAAAAAElFTkSuQmCC" alt="" class="one"><img src="data:image/png;base64,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" alt="" class="two"></a><a href="https://discord.com/invite/hb6xA4Bjcv" target="_blank" class="relate"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAoCAMAAACGsik5AAAAq1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Nr6iZAAAAOHRSTlMA/AoC+fHOBgT79ffCpZLq5t1Z7tk2JR4N4dLGuXtJIRgU45+DQigR1b2PdW5kLyyYaWBRrYZUP0VfnUUAAAIQSURBVEjHlZXpeqowEIYnhH0HRVRkczvuVm1Pc/9XVqkBBqQtvj8H3szkmQ+FFmr2OQIEXQc5hd/4F9gbSZsLqBQ64kBensfQjRpYLmF3yJ4qwgNF2LECzbPXaodyHBLGkeS5ZIiaqA8mss44muy3NbpjfyLGrcsFBvubwQkwSsT6MFOwdCW9JOM/bjRh/ZiiVgfWE/FYOYLL+jKsWl1Zb0S/3KvM+mPyDY/IC5LO42yzFyAfUDD22CvI34E/kcZJkqQ1ry7pjRekdSHFuOReRqkvozOiJDzHDj51X0gRdtLvb9GsClsVAOhqgANYvIGOIXzhZ72cJXtsf4kkbwxwElH2+b7HZtkIHpyk5qVuOCRlrha8YPPCCCVaTADiLsnihUUpuegOBwALrzvkv0qbcilcWhlIegMwkURsCnfoTStHWUFBbjHEO8CGIQxfoFQI6mEm63sh34sMYQJ4zf2/X/03CRWcnX+Z8cb1zPN2Ikm78PTNc6kPWJq8LMkAw5elCED+8T4/PZg1lkuWh6nRoejRZcEqNBsgW+h1Fq1k9SE7BiFVB8M145W/Nep37BwAlJtH6kMtVU2T2DKnnjecmtY+CWm4Fes9yonKo7YbVJopQJvzsJrfXaK/xHTBNT2AJ5Sj9lAcOwMMDe25ViSYwjPZrBjMW2bPD/ND5GzG0EUwcWZ+Dp0IoxA6oWmqAOILYfYjFc+CNmgAAAAASUVORK5CYII=" alt="" class="one"><img src="data:image/png;base64,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" alt="" class="two"></a><a href="https://www.instagram.com/maxiapeofficial/" target="_blank" class="relate"><img src="data:image/png;base64,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" alt="" class="one"><img src="data:image/png;base64,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" alt="" class="two"></a><a href="javascript:;" target="_self" class="relate"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAyCAMAAAA+w+hKAAABCFBMVEUAAAD////////P+fzz9vn+///w9/38/v7+///m+Pr0+f3s9/jv9/79/v/8/v7Q3fL4+/7v9//+///7/f75/f7////9/v/9///5/P7w9/rw+Pzn8/nr9fz8/v/6/f76/f75/f32+v3y+v7t9vzy+P3s8/r2+Pz5/f74/P75/P72+/33/P72+v7w+P3u+Pvt+P7p8vv5/P/4/P/1+/33+/71+v71+/70+v30+v30+v/p9/38/v78/v/4/P76/P74/P/4/P/3+/3y+P3y+v7z/f/o9Pzs8v7m7/n7/v7z+P34/f7y+Pz1+//2+f3v+fv2+f3t9fz8///c7PTh8Pr8/v/5/P/////+//9Qa7PSAAAAVnRSTlMA/vwEAvqcBfgJHVoL8e8myhP35df79fPTTisRDufe2bWuaUY9JCDb0biYjYhbOTYXvruinpGLf3tlQ+rizMbDsqWHdT8zMBrf1KeXgnBtYFUlIBnrVOs7ywYAAALYSURBVEjHlZUJd6IwEMeZAIu4yoo3WG29j3rUq1Z7393ex274/t9kkxUxpKDwf8/HSOaXmUkmQfBT7Lp4fKQKoSVWshgir+HB2B5gDOdhkHpVl1ZgIgx42ywmru4K4UHlzLIyuaYWGhTeZUwYoOBpKFDKA14K5PKBFJQiv4WMV0KtqhKI+1pQMo8dQckIQiqXaZM8KsCQJ3NxO7hA6Ik8ClnMkNr71jp38gB5kpl6jlkyVd1CSmOEcXxBjDfgyM2gQTNEXYl0Tw67yDN9E3fQ+h9nWCBFDt2g3FX9OWWWwVTFGjlUU3CTxxvKvEktneQ5+fOSwW7ycseP0/fsINY+mbwX58D4nQ8nziPYVll1wjPkkU+uZtHxaZOs+iUebCneAcvgAgffQC3mCdbIYrCp1k54MOm5Oo00doRoNX/jPBj3ihi7ZLYtRfZROkI8mFc9erSXZDwmxGOnbXEgmnms6n1rHdDSSEBhoPEBjz32UewicIQuFPLmCfiAHY9Mo6OIo2Tplq7Vt4DNgef5/eXoU6Q1T4Ff0p4U5KIb5DhO7oiu2mJ6zPNcngPHtevMtPqH8fz4SgyRkURHnjNuDpXvV5Ci141xXpPhtyBUfzIy6RWXR1RgUYgY8uhzianRfmVcyiEyQMGczGgkkfHK4eH+/jQFZPwPsSqNZQH9WSInI7CTEARXPSWR1q4QFdoUPCWWSDHJvMgCWHbuWudLEGQWjNjV8B9WsZ9wAkB2UqeTxVkQprroAar9BFrvqX3jpVnQikyMRpTKHFKwRc2GWTldc8mZPfULcE3ysEvVzAL1ShPtppJrHzS2OaFexG5ZsBS1l5bFNq3TC0oX4cCC5LppJTMNgUF0oTMt+6YFJeHhRmJvnKskBONy14r79u/EIQgnTw4Et9TrFIKtXObsQ+ClGiMtA9ZGLjKsiR6nPmo8nmRlBD5CcrHTkHw+rIXB/OqHjw57Ue6j8w/tiV9RSiM7IwAAAABJRU5ErkJggg==" alt="" class="one"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAyCAYAAAAJHRh4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOKADAAQAAAABAAAAMgAAAABH53DyAAAME0lEQVRoBc1aCXBbxRn+d9/TZcmWb/mM4wOfuYhNLhpICCRmmnAZlwmUQGkbOpAhQKAznU6HZDhahiOUhnaG6XAUOkACaQtN6UACTmiAQOLExA4k8RHbsR1bsuRL53tvt7tWZEm25Dz5aNkZ+e3b9///7vf2v/Z/RjDLbVUtNaWY5S2dHcJWWaZiQRHsfPcMfh7qkGeWp5598ZWbj2o2bqH3lS6jLpRMKCRRUrCYeG/Z7Hlw9mf3z4Bnc6KlCyt1AsjrrTaqpxTxqZDdgTRU0tXM5ryhsmcE4F2P0sLqO+k6yKYpcBFJYBJKCBsK3AEoCgBTVX1wZHZ74kyIH/RKiRoq7FpdhUzGTaTD/IDySY8d7+k+O9BqIPE0FODofJTMxLSqZMwIwL8f0JysWUr7jp1ART4JZ6SmoMVJSXC/PGTuHR6iKW73qHqqWtBME80IQGhCPnQVfSEliV7R1o4058+D2NUF8aII8QCYShI3wCBIQnHwZqYRzZo8ZnvX30ZOatKZ/iUxpYz+I9kVVLr5J/Le/DUjFthOZ8QPRMM1PeGhi0OIpuWihyzplLmRSRvq6gbx0CF8U7Yx7t/XnJWvhQqqnZRjGg+nDLBspTNzvRVWh3rNvzyL9ldU0NNq1tNvR+irI2ihxyH8aXW5Ul25mWrU8MVKMzWAlVSTk6l7zt1H/rjmx76y0Enn5MMugwFCAkPo0/C+zwfo6DGUP2zHf8h0w92wmwrhFNO/mxLAmiXeqxubhB+dPoWKctLELaHLaGzBu7OzqTt0bLI+B3m8AeX2dNFnNh701cy0TcYM8Po7aIKjT7uzp5sKNqZmQ0OwMtSGEjPAWZgP9ZOBGv+MBX/UeAoldHaIOzd0wLVQu3vGdjI2gMyp6PXkpeP1qJy7fa8XUHcXyru6Qr4ysOgPXwRfSoL8WlycOjUN8HFZ9fU4c8hGXrnTcsO1gfHpXmMCWN3mWn+yAdc4BmCUj2co7R3IaNSJ1405G+ZNiaipLyigzlgX53IBOtmIszxu7W8qV9HUWPkj0asGmL+UWmSn/vHuHgjLI61WwG4nXWFeAImBCU62QXtuVmxqGuC1Oyj66ihamppFHoHl1BAYn+pVHUDuNbPIvadP43L+lkMn48nz8BAqrloozwuMNyXAoDEe1et0sampnx9B53kQ+nrwPdcVyCvHNCMgPMarKoDLC2DFoB1t5gE6kvzeXkhN1IvBcLEHKRoM7akpMKWsmh1A0NlmSBUp3lTyAzBFmlPt2CUBZi+hKfFY+WVLC8piE0dsVhtoWHZZEurifQR6zYnUFZFBxSDTFOjpwhvK8qRCFeRRSSYHWEuFhaXKzW0twhqnM1w1QyUyDwiKrOTDn0EXGGea2xNnQMOB+1ivfBfPtbOE3SRsmI6aTgpwQ5yvtK8LP9HWHlx4pIVyb6oQwZhkgbGc0uOTvTodnVbdZYT54X4rurViB0w5jYsOkO2e7BGeqD+B0mU5EqxxY+OSMxmz4wWdipMJyuUmYe2DOSzIRrT9IGX0XlSANyTLVx75Gm/gqhKd3f8EMylYhEFHPzBl9bdEQBpZCe5oYDyWKwc4NAwG2QVTzmwivpllN9G59h542e5QJzg5CYhOR05AG2b5iB8CEkWL0wUJsQAaT4uYLKMJfAC28Y9U30/YwQpWx0yOI09+cwKK1Ujhi7isCHoVhA8By2JGeVhKp8ikuM86PRcvsH3LsqBzrXGpkpq1RKIJB8jMpjxdurmtDd8yPBLYi0hswTG2e9RsJvv2fARfB0ZTPwajT6FX2frVaUCAb/zVZAQaHy/vrQO+i1NrYQArqyHDOShsY5mEbkIlLIJ8bnvFl5Ehrxu/Bs1ozP7WVEFpZwdepqhxThHk8iEmmxYW0X5ZFP8G21GUCByFOWQ4CHAVFdlubP2mAc9jMY83rm6T/lKSgczJR4c+7YKvRjn4HyZHckk/PXMWTcv+zAlAM7Ppe//8BFRVCMbmH9cZczIVImTJHqjSakCeO2ccVYRbJADNy6M9EpIfh2PaMRv5xTLIOXxYvM3tVqfiEUSDyQS0Yh5tkbX4FTg3vW8YYwCb9qOOtLsdtxZnChYsXzp+GUxE7jebO/Zu1wYVkTkXexd5+LvT2Bxp4WrGeIJeUQZDyWlkx/vZwjE1PJPRXDLGTcYc9ow5qJt+Blec+RYOnPp2at6TeU1aVADyihXk1VdP4PvZF6jgywubLMoNS05q08CQZAB9VjG4tt+LXGM7GIVF9fDS2yHdQ+jO5hZkVM0UQsjCDc3JBmXRQvrJkMu5E+oS1IFjWrPNBMkjA5A06FLKyIhQdcEGRR4kfc7E7xIvngCCziZk0qjdx4BVUS7GPE7Edq9kG9xftx8t5UWkqHxRH1CwpCNSXq588PkpYUvn4YTu6KSswPxAszY3pShe1EGivc8932o33DgySKtsNpxzoQ+M7HQjrF4tzGcydom1ffJaQUOSQeXRTWDVCvKwtuEtgKbAIiqq2dvLpDVeL4KkxKAgHmq8DPB4h8PtLC6ktGg0AlkwH+p6vNJDnYfFiODWPnLBWGaypAxuk7IkIa9yuE9ZbrfhFVabIY0BMtjtSOBHLD4nDzGS7H/RYlOD8J7HJarO1hHba6ZGB9kno3UI+eOTLb3XW5WctuuaVTRfAXYypEw4++txK3q7Hd/Cap+ZHo9/Qg5ufgX0Z80hr+sFIiARKwqGVpcX7Tv+lqE98NIC161PUovPJeU7nUJ1czP94YUesdTeD3qnGzCr6GEmN6xxO2YhhuiNqIU/ENvOIYN7XBkijCPCTW4OFNbV1XG1Hg3AvW9kOF+vpS9Dq78YFWBZt8gZn5ebUMicDgc42rRaAIuFtr//Df4Ve9f+wQImh1UBAnyjV+YwHqr0lfe2w1P1x8U13d1Iz7QBJJkioky0Ag4s0Qwkw0JH5hbQt4d0eAeXI5oTqOJ2oZicTWsbyv7rwQUZjP/86GL4H/8CwxZZeA/1DTUB4flqaOMqBMfQWOyE8cGAgdtUJC9pbtT8vu4QVA0Ph0oYJ4wJ1utZ1lNAPSzpeNsn+X63z6trgRf8LwynpEDMZYWeC6Dx9ic+unEzK+2xxYQuPqxv9adCYWPshmkwz5AitqwNNG59vLxk8Ly488sjHJxftSMSs0Gu8qUldOTyRfTFD/8D9x14R38mVBvEtDTgRh1TWsXV5MgX+N4F84n5jhT6bubj7iaTRs92j+uhv6roZn1MfCarpIkLVSnuBNj3Qu2vn6O5Go0/oZAkBsLtwTan3jjggJV9vcLPT52ii6220J2bCNEfWqivdB565s1e9BTLesI0iHOIcQb5ZVO85rmRS7ypMPHse+bZVtD1O/Cm4kJSMzCgs4oiZSrHSzKBzdEBoRR3dEI2OxeONW6LHZ2oJE5PPmKU/PM2c0hM7YgOM29r7OqhqayYrB1RcZoxm4EWl5F33m4UfsuSggng+KRo+TpPkden/YyVJrhNxdz4iYL7YFEIAAuK8O8W/6eDcLsRGK1eH66mDCnySQjkoGUGBUXo8d2//HLaGpfgq67bo2+OQDI6hL84r+vISFfe4KfyaESTjfOygo8dlFwuNOHHv82PB8dlKcwL8ipd6I/zqwXHRPCsx2vJJDvqdjOHMknD0AiSWxZfLymlp5kLn7gNkzD/vx7xQ3ZpKf3obKfwr7CMKsKCMCf4FMN3yano6eLL6ND3HST/alVcQs+LovL8dyvBEQFT2JA/0rIYtm8/7MnMoi8VF4GHu94wqu/JjSgCnZsHI0np6MUP6sUv1Jz0L6YSDEE3cn18Dj+/YBF5rawYhmP9vjfb78AfEkDOmaPs7XQ43+T/uqJmznD3xjlyqGHtSthit8KDbW1gGWT5Hiv8TqRTI32GaDi4rExQ2Cn/aK8N3dVwAJ1RKzrywouo7sblsNbpolvZ97/FF/pQ/MAACPxk8L9WXh4OcrKpVF6GPvMheOxjH3wZmqlcCmhkgJyLxaWrNkJOgsa7SFHE2x39wgqHA1KZa9e43CD4WPYxW4bK476W2RurzchpqeDIziX/UCTp6X3FunNq7C4UdHSAIVS126k2YXDIlJQVVxKvwwtkiRQQgnnkDNpwCP10uzzoa3SCnRClwWn3HezUGHr3bFdnc+Pn/i882PHMYA1kGQAAAABJRU5ErkJggg==" alt="" class="two"></a><a href="https://looksrare.org/" target="_blank" class="relate"><img src="data:image/png;base64,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" alt="" class="one">
              <img src="../assets/img/eyes2.png" alt="" class="two"></a>
            </div>
            <span>© 2022 MAXI APE ALL RIGHTS RESERVED </span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {connectNetwork} from '@/utils/getWeb3'
import {getBalance} from "@/utils/common"
import countTo from 'vue-count-to'
import config from '../service/index'
import Web3 from 'web3'

export default {
  name: 'Home',
  components: {
    countTo
  },
  filters: {
    timeValue (val) {
      if (val < 10) return '0' + val;
      return val;
    }
  },
  data () {
    return {
      showMobileMenu: false
    }
  },
  destroyed () {
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  computed: {
    web3Register () {
      return this.$store.state.web3Register
    },
    ...mapState({
      balance: state => state.balance
    }),
  },
  watch: {
    web3Register (newval, old) {
      if (newval.accounts) {
        this.$utils.getBalance(newval.accounts)
      }
    }
  },
  mounted () {
    this.getAllowance()
    this.fnCountdown()
    const _this = this
    this.interval = setInterval(() => {
      _this.fnCountdown()
    }, 1000)
  },
  methods: {
    hideMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    approve () {
      const {contract, symbol_abi} = this.$config
      const _contract = new this.$metaMaSKWeb3.eth.Contract(symbol_abi, contract.symbol_contract)
      return new Promise((resolve, reject) => {
        const sum = this.$metaMaSKWeb3.utils.toWei(String(10000000000), 'ether')
        this.overlay = true
        _contract.methods.approve(contract.swap_contract, sum).send({
          from: this.web3Register.accounts,
        }).then(res => {
          this.overlay = false
          if (res.status) {
            this.isApprove = true
            this.$msg({message: 'Authorization Succeeded', type: 'success', customClass: 'msg'})
          }
        }).catch((err) => {
          this.overlay = false
          this.$msg({message: 'Cancel Authorization', type: 'error', customClass: 'msg'})
        })
      })
    },
    getAllowance (item) {
      if (this.web3Register.accounts) {
        const {contract, symbol_abi} = this.$config
        const _contract = new this.$metaMaSKWeb3.eth.Contract(symbol_abi, contract.symbol_contract)
        _contract.methods.allowance(this.web3Register.accounts, contract.swap_contract).call((err, result) => {
          if (err) return
          if (Number(this.$metaMaSKWeb3.utils.fromWei(result, 'ether')) > 0) {
            this.isApprove = true
          }
        })
      }
    },
    fnCountdown () {
      const _this = this
      let currentTime = this.$moment().valueOf();
      if (currentTime < this.startTime) {
        let t = this.startTime - currentTime;
        _this.showtime = t
      } else {
        this.isStart = true
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
