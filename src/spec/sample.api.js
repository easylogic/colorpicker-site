export default {
  host: "https://api.bitbox.me",
  title: "Market API",
  description: "Market, Coin, Coin Pair, Price, Transactions",
  opened: true,
  request: [{
      method: 'get',    // post, delete or put 
      description: "Retrieve Coin Information List.",
      url: "/trade/public/v1/market/coin/list",
      // headers: [{
      //   key: "Authorization",
      //   description: "Bearer {{access_token}}"
      // }],
      // path: [{
      //     key: "id",
      //     items: ["happydeveloper", "dkyoo"],
      //     description: "개발자 아이디를 적어주세요"
      //   },
      //   {
      //     key: "name",
      //     description: "개발자 이름을 적어주세요."
      //   }
      // ],
      // params: [{
      //   key: "name",
      //   type: "string",
      //   description: "이름입니다.",
      //   required: true
      // }],
      // body: {
      //   required: true,
      //   contentType: "application/json",
      //   "data": {

      //     "petId": 0,
      //     "quantity": 0,
      //     "shipDate": "2018-07-14T14:10:33.646Z",
      //     "status": "placed",
      //     "complete": false
      //   }
      // }

    }
  ]
}