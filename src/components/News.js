import React, { Component } from 'react'
import NewsItem from './NewsItem'





export default class News extends Component {


    articles = [
        {
        "source": { "id": "engadget","name": "Engadget"},
        
        "author": "null",
        "title": "Apple faces probe from US labor board over complaints of hostile working conditions",
        "description": "Apple has been under fire lately after current and former employees shared stories of harassment, retaliation and sexism in the company. Now, the US National Labor Relations Board is looking into cases filed against the tech giant by two of the main voices ac…",
        "url": "https://www.engadget.com/apple-faces-us-labor-board-investigation-083212877.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/19807c70-0c84-11ec-9cef-236fae6f5a32",
        "publishedAt": "2021-09-03T08:32:12Z",
        "content": "Apple has been under fire lately after current and former employees shared stories of harassment, retaliation and sexism in the company. Now, the US National Labor Relations Board is looking into cas… [+2738 chars]"
        },
        
      
        {
        "source":  {"id": "techcrunch", "name": "TechCrunch"},
        "author": "Tage Kene-Okafor",
        "title": "Zip acquisition of Payflex means Africa is ripe for BNPL disruption",
        "description": "Australian buy now, pay later (BNPL) company Zip this week acquired South Africa-based BNPL player Payflex for an undisclosed amount. It’s a piece of news that once again highlights the hype around BNPL services and the quest for global dominance among the le…",
        "url": "http://techcrunch.com/2021/09/03/zip-acquisition-of-payflex-means-africa-is-ripe-for-bnpl-disruption/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1234719010.jpg?w=600",
        "publishedAt": "2021-09-03T07:26:30Z",
        "content": "Australian buy now, pay later (BNPL) company Zip this week acquired South Africa-based BNPL player Payflex for an undisclosed amount.\r\nIt’s a piece of news that once again highlights the hype around … [+3843 chars]"
        }
    ]




    constructor(){
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false
        }

    }
async omponentDidMount() {
    console.log("cdm");
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1b1c0528481a4e9785788e102c6374b3"
    let data =await fetch(url);
    let parseData = await data.json()
    console.log(data);
    this.setState({articles: parseData.articles});
}

    render() {
        return (
            <div className="container my-3">
                <h2>Top headlines </h2>
               
                <div className="row"></div>
                    {this.state.articles.map((element)=>{
                       return <div className="col-md-4" key={element.url}>
                        <NewsItem title={!element.title?element.title.slice(0, 45):""} description={!element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
                        </div>
                })}
                
                
                
                
            </div>
        )
    }

}