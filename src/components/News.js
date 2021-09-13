import React, { useEffect , useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";







const News =(props)=> {


   /* articles = [
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
    */
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)    
    const [page, setPage]= useState(1)
    const [totalResults,setTotalResults] = useState(0)

    //document.title = `${this.capitalizeFirstLetter(props.category)} - NewsApp`
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }






    

    

const updateNews=async()=>{
    props.setProgress(10);
    const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    //this.setState({loading:true});
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    //console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.articles);
    setLoading(false)
    
    props.setProgress(100);

}
useEffect (()=>{
    updateNews();
},[])


const handlePreviousClick =async () => {
    //console.log("previous");
    //console.log("Next");

    //console.log("cdm");
    //let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.country}&apiKey=1b1c0528481a4e9785788e102c6374b3&page=${this.state.page -1}&pageSize=${props.pageSize}`;
    //this.setState({loading:true});
   // let data =await fetch(url);
   // let parsedData = await data.json()
   // console.log(parsedData);
    //this.setState({articles: parsedData.articles})

    //this.setState({
    //    page: this.state.page -1,
    //    articles: parsedData.articles,
    //    loading :false
    //})
   // this.setState({page:this.state.page - 1});
   setPage(page-1);
    updateNews();
}

const handleNextClick = async () => {
    //console.log("Next");

    //console.log("cdm");
    //if(!this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))

    //{
    //let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=1b1c0528481a4e9785788e102c6374b3&page=${this.state.page +1}&pageSize=${props.pageSize}`;
    //this.setState({loading:true});
    //let data =await fetch(url);
    //let parsedData = await data.json()
    //console.log(parsedData);
    //--this.setState({loading:false});

    //this.setState({articles: parsedData.articles})

    //this.setState({
    //    page: this.state.page +1,
    //    articles: parsedData.articles,
     //   loading : false,
        
    //})
    //this.setState({page:this.state.page +1});
    setPage(page+1)
    updateNews();


}
const fetchMoreData = async () => {   
        setPage(page+1) 
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };




        return (
            <>
                <h2 className="text-center" style={{margin:'40px 0px'}}>Top headlines from {capitalizeFirstLetter(props.category)} </h2>
                {loading && <Spinner/>}
                <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length!==totalResults}
                loader={<Spinner/>}
                >
               <div className="container">
                <div className="row">
                    { articles.map((element)=>{
                       return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
                        </div>
                })}
                </div>
                </div>
                </InfiniteScroll>
               
                
                
         </>       
            
        )
    }



//disabled={this.state.page + 1  > Math.ceil(this.state.totalResults/props.pageSize)}
/*
 <div className="contianer d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
*/


News.defaultProps = {
    country : 'in',
    pageSize :8 ,
    category :'general',
}

News.propTypes = {
 country :PropTypes.string,
 pageSize :PropTypes.number,
 category :PropTypes.string,
 }
 export default News