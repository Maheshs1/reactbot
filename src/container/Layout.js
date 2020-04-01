import React from "react";

import ChatUI from "./ChatUI";

class Layout extends React.Component {
  //QUESTIONTYPE 1 STANDS FOR YES/NO QUESTION, 0 STANDS FOR CUSTOM INPUT
  /*IF IT IS CUSTOM INPUT THEN IT MUST MENTION THE INPUT TAG: BUTTON, INPUT, ALONG WITH ITS PROPERTIES.
  PROPERTIES SHOULD BE MENTIONED IN THE 'typeProp' property.
  */
  allQuestions = [
    {
      msg: "Which Restaurant You Like?",
      questionType: 0,
      type: "carousel",
      options: [
        {
          imgSrc:
            "https://www.biggerbolderbaking.com/wp-content/uploads/2015/05/BBB71-Homemade-Ice-Cream-Milkshakes-Thumbnail-v.1.jpg",
          title: "Varieties MilkShake",
          desc: "Delightful And Tasty"
        },
        {
          imgSrc:
            "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/milkshake.jpg?itok=n_3au7e1",
          title: "Chocolate MilkShake",
          desc: "Delightful And Tasty"
        },
        {
          imgSrc:
            "https://www.twopeasandtheirpod.com/wp-content/uploads/2013/03/Chocolate-Mint-Brownie-Milkshake-4-480x500.jpg",
          title: "Icecream MilkShake",
          desc: "Delightful And Tasty"
        },
        {
          imgSrc:
            "https://www.queensleeappetit.com/wp-content/uploads/2018/09/Brownie-Milkshake.jpg",
          title: "Creamy MilkShake",
          desc: "Delightful And Tasty"
        }
      ],
      ans: null
    },
    {
      msg: "Do You Know The Purchase Date?",
      questionType: 1,
      buttons: [
        { text: "Yes", value: "geeg", acceptance: true },
        { text: "No", value: "Sdgjlk;", acceptance: false }
      ],

      ans: null
    },
    {
      msg: [
        "We Get To Know You Have Manufactured This Device",
        "And Also Received Recommendations to Appoint You",
        "How Good You Are in In This Field? "
      ],
      questionType: 0,
      type: "select",
      options: ["Good", "Average", "Bad", "Better", "Best"],
      ans: null
    },
    {
      msg: "Do You Know The Model Of The Device?",
      questionType: 1,
      type: "radio",
      radioButtons: [
        {
          text: "Of Course",
          value: "Of Course",
          acceptance: true
        },
        { text: "I dont Know It", value: "I dont Know It", acceptance: false }
      ],
      ans: null
    },
    {
      msg: "What Is The Model Of The Device?",
      questionType: 0,
      ans: null
    }
  ];

  render() {
    return <ChatUI allQuestions={this.allQuestions} />;
  }
}

export default Layout;
