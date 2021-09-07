import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description,imageUrl , newsUrl,author,date ,source} = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90px',zIndex:'1'}}>{source}
                            
                 </span>
                <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1234719010.jpg?w=600":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title} 
                    </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted"> By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Go somewhere</a>
                </div>
                </div>
                
            </div>
        )
    }
}
//export default NewsItem
