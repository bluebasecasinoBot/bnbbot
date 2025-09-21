import { __c, __g, __p, __sC, __SYD, __u, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p3 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background-color:#1E1E1E;border-radius:20px;margin-bottom:30px;" + __sC['pages']()+__sC["thinBorder"](),
            id:"p3"
        },
        [
            __SYD.p3SubHeader()
        ]
    )
}

__SYD.p3SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p3SubHeader" , "mobilePadState"],false) ? "10px" : "10px"};`
        },
        [
            // __SYD.p3_text1(),
            __SYD.p3_text2(),
            __SYD.p3_text3(),
            __SYD.p3_tabs()
        ],
        {
            createState:{
                stateName:"p3SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row'
                    // breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column'}}
                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row'}//breakVal:false
            }
        }
    )
}


__SYD.p3_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["Buy $Alita"]
            )
        ]
    )
}


__SYD.p3_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "padding:15px 20px;border-radius:10px 25px;color: #f4c13f ;background-color:#0b0b0b;"+__sC["thinBorder"]()
        },
        [
            __c(
                "p",
                {},["bnbbot Features"]
            )
        ]
    )
}


__SYD.p3_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;color:#ffffff;`},["Why choose bnbbot? Packed with powerful tools and designed for traders of all levels, here’s what makes our Telegram bot stand out:"])
        ]
    )
}

__SYD.p3_text4 = (textContent) =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page3Text4.get() + "text-align:center;color:#f4c13f;",
            class:"subtle-hover"
        },
        [
            __c(
                "p",
                {},[`${textContent}`]
            )
        ]
    )
}


__SYD.p3_text5 = (textContent) =>{
    return __c(
        "div",
        {
            style:SYD_VAR.pag1SubText.get() + "text-align:center;"
        },
        [
            __c(
                "p",
                {},[`${textContent}`]
            )
        ]
    )
}

__SYD.p3_tabs = () =>{
    return  __c(
        "div",
        {
            style:"display:flex;gap:50px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;margin-top:15px;"
        },
        [
             __SYD.p3_tab(
                {content:` Download a Solana-compatible wallet like Phantom or Solflare to hold your $ALITA tokens.` ,title:`Tax Tracker` , img:"" , index:0}
            ),
            __SYD.p3_tab(
                {content:` Download a Solana-compatible wallet like Phantom or Solflare to hold your $ALITA tokens.` ,title:`AI-Powered Trade Automation` , img:"trade_auto.jpg" , index:1}
            ),
            __SYD.p3_tab({
                content:`Buy SOL on a centralized exchange (like Binance or Coinbase), then transfer it to your Solana wallet.`,title:`Telegram Bot Integration` , img:"bot_int.jpg" , index:2
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`Smart Market Insights` , img:"market_insight.jpg" , index:3
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`Custom Strategy Builder` , img:"strategy_builder.jpg" , index:4
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`Backtesting Engine` , img:"backtesting.jpg" , index:5
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:` Multi-Exchange Support` , img:"multi_swap.jpg" , index:6
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`24/7 Autonomous Operation` , img:"autonomy.jpg" , index:7
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`Risk Management Tools` , img:"risk_manage.jpg" , index:8
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`Plug & Play Templates` , img:"plug_play.jpg" , index:9
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`Web + Mobile Access` , img:"web_mobile.jpg" , index:10
            })
        ]
    )
}


__SYD.p3_tab = ({title = '' , content = '' , img = "main" , index = 0}) =>{
    return __c(
        'div',
        {
            style:`width:calc(100% - 20px);max-width:${__p(["p3SubHeader" , "__flex_child"],"row") === "row" ? "280px" : "450px"};height:fit-content;border-radius:10px;padding:30px 0;cursor:pointer;position:relative;`+__sC["thinBorder"](),
            class:"buy_tabs"
        },
        [
            __c(
                'div',
                {
                    style:`height:fit-content;padding:10px 20px;width:100%;background:unset;display:flex;align-items:center;column-gap:20px;row-gap:20px;flex-direction:column;`
                },
                [
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;flex-direction:column;gap:10px;'
                        },
                        [
                            __SYD.p3_text4(title),
                            // __SYD.p3_text5(content)
                        ]
                    ),
                    // __c(
                    //     "div",
                    //     {
                    //         style:"height:250px;width:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;",
                    //         // class:"p3_tab"
                    //     },
                    //     [
                    //         __c(
                    //             "div",
                    //             {
                    //                 style:`width:100%;height:100%;background-color:rgba(255 , 255 , 255 , .3);background-image:url(./assets/${img});transition:all linear .3s;`,
                    //                 class:`img_holder_${img.split(".").join("")}`
                    //             },[],{genericStyle:["bg_cover"]}
                    //         ),
                    //     ]
                    // )
                ]
            ),
            __c(
                "span",
                {
                    style:"height:15px;width:15px;position:absolute;top:10px;right:10px;background-image:url(./assets/tab_link.png);"
                },[],{genericStyle:["bg_fit"]}
            )
        ],
        {
            events:{
                onmouseover:e =>{
                    // const el = document.querySelector(`.img_holder_${img.split(".").join("")}`);
                    // el.style.transform = "scale(1.3)";
                },
                onmouseout:e =>{
                    // const el = document.querySelector(`.img_holder_${img.split(".").join("")}`);
                    // el.style.transform = "scale(1)";
                },
                onclick:e =>{
                    const state = __g('main_pop_tab');
                    state.display = true;
                    state.type = index;
                    __u("main_pop_tab" , {type:"a" , value:state});

                    __p(["main_pop_tab" , "updateContent"],()=>{})();
                }
            }
        }
    )
}