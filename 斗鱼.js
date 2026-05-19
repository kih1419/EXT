var rule = {
    title: "斗鱼直播",
    host: "https://m.douyu.com",
    homeUrl: "/api/home/mix",
    url: "/api/room/list?page=fypage&type=fyfilter",
    filterable: 1,
    filter_url: "{{fl.cateId}}",
    filter: {
        PCgame: [{
            key: "cateId",
            name: "分类",
            value: [{
                n: "第五人格",
                v: "dwrg"
            }, {
                n: "DOTA2",
                v: "DOTA2"
            }, {
                n: "魔兽世界",
                v: "WOW"
            }]
        }]
    }
};
