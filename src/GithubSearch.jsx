
import React, { useState,useEffect } from "react";
import axios from "axios"

const Styles={
  searchBtn:{
    border:"0.8px solid black",
padding:"10px 12px",
backgroundColor:"white",
borderRadius:6,
fontSize:18,
margin:10
  },
inputSearch:{
border:"2px solid #7405FA",
padding:"10px 12px",
backgroundColor:"white",
borderRadius:6,
fontSize:24,
margin:"auto",
},
counterContainer:{
  position:"relative",
  // border:"0.5px solid gray",
  borderRadius:5,
  padding:20
}
}

const GithubSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)


  useEffect(()=>{
      console.log("inside useeffect")
      setLoading(false)
      axios.get("https://api.github.com/search/users?q=google")
      .then(data=>setData(data.data.items),setLoading(false))
      .catch(error=>console.log("error",error),setLoading(false))
  },[])

  const handleClick = ()=>{
      setLoading(false)
      axios.get("https://api.github.com/search/users",{
        params:{
          q: query
        }
      }).then(data=>setData(data.data.items),setLoading(false))
      .catch(error=>console.log("error",error),setLoading(false))
  }



  console.log(data, "render",loading)
  return (
    <>
      <h1>Github User Search</h1>
      <div style={Styles.counterContainer}>
        
      <input value={query} onChange={(e)=>setQuery(e.target.value)} style={Styles.inputSearch}/>
      <button style={Styles.searchBtn} onClick={handleClick}>Search</button>
      </div>

      <div style={Styles.counterContainer}>
        {loading && "loading"}
        
        <div>
          <div className="row text-center"style={{margin:"auto"}}>
          {!loading && data && data.map(ele=>
            <div className="card m-2" style={{width: "10rem"}} key={ele.id}>
              <img src={ele.avatar_url} className="card-img-top" alt={ele.login}/>
              <div className="card-body" style={{backgroundColor:"#F5F1A3"}}>
                <h5 className="card-text">{ele.login}</h5>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default GithubSearch
