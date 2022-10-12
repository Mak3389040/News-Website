const express = require("express");
const newsRouter = express.Router();
const axios = require('axios');

newsRouter.get("", async(req,res)=>{
  try {
    const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`);
    // console.log(newsAPI.data[0].yoast_head_json.og_image[0].url);

     res.render("news",{articles: newsAPI.data});
  } catch (err) {
    if (err.response) {

      console.log(err.response.data);
      console.log(rr.response.status);
      console.log(err.response.headers);


    } else if(err.requeist) {
      res.render("news",{articles: null});


      console.log(err.requeist);

    }
    else{


      console.error('Error', err.message);
    }
  } finally {

  }
});

newsRouter.get("/:id", async(req,res)=>{
  let articleID = req.params.id;
  try {
    const newsAPI2 = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}`);
    // console.log(newsAPI.data[0].yoast_head_json.og_image[0].url);

     res.render("newsData",{article: newsAPI2.data});
  } catch (err) {
    if (err.response) {
console.log("Some problem")
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);


    } else if(err.requeist) {
      res.render("newsData",{article: null});


      console.log(err.requeist);

    }
    else{


      console.error('Error', err.message);
    }
  } finally {

  }
});

newsRouter.post("", async(req,res)=>{
  var texT = req.body.search;
  try {
    const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/?search=${texT}`);
    // console.log(newsAPI.data[0].yoast_head_json.og_image[0].url);
     res.render("news",{articles: newsAPI.data});
     console.log(newsAPI.data);
  } catch (err) {
    if (err.response) {
      res.render("news",{articles: null});

      console.log(err.response.data);
      console.log(rr.response.status);
      console.log(err.response.headers);


    } else if(err.requeist) {
      res.render("news",{articles: null});


      console.log(err.requeist);

    }
    else{
      res.render("news",{articles: null});


      console.error('Error', err.message);
    }
  } finally {

  }
});

module.exports = newsRouter;
