import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description,imageUrl , newsUrl,author,date ,source} = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                <div  style={ {
                    display:'flex',
                    justifyContent:'felx-end',
                    position:'absolute',
                    right:'0'
                }

                }
                >
                <span class=" badge rounded-pill bg-danger" >{source}
                            
                 </span>
                 </div>
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
