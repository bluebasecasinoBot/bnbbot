import { __c, __g, __p, __sC, __SYD, __u, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p7 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;background-color:#1e1e1e;border-radius:20px;margin-bottom:30px;` + __sC['pages']() + __sC["thinBorder"]() + "paddingBottom:unset;",
            id:"p7"
        },
        [
            __SYD.p7SubHeader()
        ],{genericStyle:["bg_cover"]}
    )
}

__SYD.p7SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p7SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            // __SYD.p7_text1(),
            __SYD.p7_text2(),
            __SYD.p7_text3(),
            __c(
                "div",
                {
                    style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:20px;padding:0 ${__p(["p7SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p7SubHeader" , "breakVal"],false) ? "column" : "row"}`
                },
                [
                    __c(
                        "div",
                        {
                            style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p7SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/main_think.png")`
                        },[],{genericStyle:["bg_fit"]}
                    ),
                    __c(
                        "div",
                        {
                            style:`height:fit-content;width:${__p(["p7SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;`
                        },
                        [
                            __SYD.faqsQuestionaire()
                        ]
                    ),
                ]
            )
        ],
        {
            createState:{
                stateName:"p7SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    resize:false,
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<1000px" , prop:{breakVal:true}},
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}},
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false , breakVal:false}
            }
        }
    )
}

__SYD.p7_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["frequently asked questions"]
            )
        ]
    )
}


__SYD.p7_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "padding:15px 20px;border-radius:10px 25px;color: #f4c13f ;background-color:#0b0b0b;"+__sC["thinBorder"]()
        },
        [
            __c(
                "p",
                {},["frequently asked questions"]
            )
        ]
    )
}


__SYD.p7_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;color:#ffffff;`},["Got questions about bnbbot? We’ve put together answers to the most common things people ask so you can get started trading with confidence."])
        ]
    )
}

__SYD.p7_text4 = (textContent) =>{
    return __c(
        "p",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} padding:10px 20px;color:#ffffff;font-weight:100;`},[textContent])
        ]
    )
}

__SYD.faqsQuestionaire = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:700px;display:flex;flex-direction:column;row-gap:10px;padding-top:50px;"
        },
        [
            __SYD.questionTab({
                question:"What is Bnbbot?",
                answer:"Bnbbot is a fast, secure, and easy-to-use trading bot that runs directly in Telegram, allowing you to trade tokens, track your portfolio, and snipe launches without leaving the app.",
                index:0
            }),
            __SYD.questionTab({
                question:"Which blockchains does bnbbot support?",
                answer:"We currently support Ethereum and Binance Smart Chain (BSC), with more networks being added soon.",
                index:1
            }),
            __SYD.questionTab({
                question:"Is there a fee to use bnbbot?",
                answer:"Basic trading is free aside from blockchain gas fees. Premium features like sniping and advanced alerts may have small subscription fees.",
                index:2
            }),
            __SYD.questionTab({
                question:"Can beginners use bnbbot?",
                answer:"Absolutely. bnbbot is designed to be user-friendly. Even if you’re new to trading, the bot walks you through every step.",
                index:3
            })

        ],
        {
            createState:{
                stateName:"faqsQuestionaire",
                state:{
                    currentOpen:-1,
                    height:"0px"
                }
            }
        }
    )
}

__SYD.questionTab = ({
    question = "hello world",
    answer = "answer to hello world",
    index = 0
} = {}) =>{
    return __c(
        "div",
        {
            style:"display:flex;flex-direction:column;width:100%;color:#000;font-size:18px;"
        },
        [
            __c(
                "div",
                {
                    style:"height:60px;width:100%;cursor:pointer;padding:10px 20px;align-items:center;display:flex;position:relative;font-weight:300;border:3px solid transparent;border-radius:15px;color:#0b0b0b;background:#f4c13f;font-size:16px;"+__sC["thinBorder"]()
                },
                [
                    question,
                    __c(
                        "i",
                        {
                            style:`position:absolute;top:50%;transform:translateY(-50%) rotate(${__p(["faqsQuestionaire" , "currentOpen"],-1) === index ? "180deg" : "0deg"});right:15px;pointer-events:none;transition:transform linear .3s;`,
                            class:"fa-solid fa-chevron-down"
                        }
                    )

                ],
                {
                    events:{
                        onclick:e =>{
                            let update__;
                            if(__p(["faqsQuestionaire" , "currentOpen"]) !== index)
                            {
                                update__ = index
                            }else update__ = -1;

                            const state = __g("faqsQuestionaire");
                            state.currentOpen = update__;
                            state.height = getComputedStyle(e.target.parentElement.querySelector(".foldTab p")).height
                            __u("faqsQuestionaire" , {type:"a" , value:state});
                        }
                    }
                }
            ),
            __c(
                "div",
                {
                    style:`height:${__p(["faqsQuestionaire" , "currentOpen"],-1) === index ? __p(["faqsQuestionaire" , "height"],"0px") : "0px"};width:100%;transition:all linear .3s;overflow:hidden;`,
                    class:"foldTab"
                },
                [
                    __SYD.p7_text4(answer)
                ]
            )
        ]
    )
}
