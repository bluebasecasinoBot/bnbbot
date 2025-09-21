import { $, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.community = function()
{
    return $(
        "div",
        {
            id:"community",
            style:"display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:20px;width:100%;padding:15px;padding-bottom:50px;padding-top:80px;font-family:font1;position:relative;min-height:100vh;width:100vw;position:relative;background-color:transparent;",
            id:'community'
        },
        [
            $(
                "div",
                {
                    style:SYD_VAR.page2Text2.get() + "padding:15px 20px;border-radius:10px 25px;color: #f4c13f ;background-color:#1e1e1e;"+__sC["thinBorder"]()
                },
                [
                    $(
                        "p",
                        {},["Bnbbot Community"]
                    )
                ]
            ),
            __SYD.p5_text()
        ],{
            createState:{
                stateName:'community',
                state:{__size:'50px',__flex:'row',__font:{1:'50px',2:'20px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'30px',__flex:'column-reverse',__font:{1:'30px',2:'17px'}}}],
                defState:{__size:'50px',__flex:'row',__font:{1:'50px',2:'20px'}}
            },
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.p5_text = () =>{
    return $('p',{style:`height:fit-content;border-right:5px solid #000000;border-bottom:5px solid #000000;font-size:${__p(['community' , '__font'],{2:'20px'})['2']};line-height: unset;width:100%;max-width:800px;text-align:center;font-weight:100;padding:${__p(["community" , "__flex"],"row") === "row" ? "50px" : "20px"};background-color:${"#1e1e1e"};background-image:url(./assets/p1_bg.png);border-radius:30px;color:${"#ffffff"};display:flex;flex-direction:column;gap:15px;`},[
        $("p" , {style:`text-align:left;font-size:${"16px"};`} , [
            `Trading is better together. With bnbbot, you’re not just using a powerful Telegram trading bot — you’re joining a fast-growing community of traders who learn, share, and win together. Stay ahead of the market with real-time updates, strategies, and tips from experienced users. Your voice matters here: suggest new features, share feedback, and help shape the future of bnbbot. Whether you’re a beginner taking your first steps or a seasoned trader looking for an edge, our community is built to support you. Join us today and be part of a movement that’s redefining how traders connect, trade, and grow.`
        ]),

        $(
            "div",
            {style:"align-self:center;margin-top:20px;"},
            [
                $(
                    "p",
                    {
                        style:SYD_VAR.buttonStyle1.get() + "margin-bottom:20px;font-family:font1;font-size:18px;"+__sC["thinBorder"]({method:"add",style:{border:"2px solid #0b0b0b"}}),
                        class:"clickButton"
                    },
                    ["Join the Community"]
                ),
            ]
        ),
    ],{genericStyle:["bg_cover"]})
}