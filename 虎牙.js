var rule = {
    title: "虎牙直播",
    host: "https://www.huya.com",
    homeUrl: "/cache.php?m=LiveList&do=getLiveListByPage&gameId=2168&tagAll=0&page=1",
    url: "/cache.php?m=LiveList&do=getLiveListByPage&gameId=fyfilter&tagAll=0&page=fypage",
    class_name: "网游",
    class_url: "1",
    detailUrl: "https://m.huya.com/fyid",
    filterable: 1,
    filter_url: "{{fl.cateId}}",
    filter_def: {
        1: {
            cateId: "1"
        }
    },
    filter: {
        1: [{
            key: "cateId",
            name: "分类",
            value: [{
                n: "第五人格",
                v: "100032"
            }, {
                n: "DOTA2",
                v: "7"
            }, {
                n: "魔兽世界",
                v: "8"
            }]
        }]
    }
};
