import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  state ={
    articles: null
  }
    async componentDidMount(){
        let url= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1bd875446ca54b2d8f0a57532457cbf1"
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        console.log(" async parsedData");
        this.setState({articles: parsedData.articles})
    }
    render() {
        if (this.state.articles === null) {
            return <div>Loading...</div>;
        }else{
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>
{        console.log(" render parsedData")}

                <div className="row">
                {this.state.articles.map((element)=>{

                    return <div className="col-md-3" key = {element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl = {element.url}/>
                    
                    </div>
                })}
                  
                </div>
           
            </div>
        )
    }//else
    }
}

export default News


// ----------------------------The following code doesnot have the loading ... buffering ...........and the above code has the loading buffering.
// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export class News extends Component {

//  constructor(){
//     super();
//     this.state = {
//         articles : [],
//         loading: false
//     }
//  }
//     async componentDidMount(){
//         let url= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1bd875446ca54b2d8f0a57532457cbf1"
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         console.log(parsedData);
//         console.log(" async parsedData");
//         this.setState({articles: parsedData.articles})
//     }
//     render() {
      
//         return (
//             <div className='container my-3'>
//                 <h2>Top Headlines</h2>
// {        console.log(" render parsedData")}

//                 <div className="row">
//                 {this.state.articles.map((element)=>{

//                     return <div className="col-md-3" key = {element.url}>
//                         <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl = {element.url}/>
                    
//                     </div>
//                 })}
                  
//                 </div>
           
//             </div>
//         )

//     }
// }

// export default News
