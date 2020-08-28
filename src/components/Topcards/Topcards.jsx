import React from 'react'

const data = [
    {
      title: "First Title",
      text: "First Text",
     
    },
    {
      title: "second Title",
      text: "second Text",
      
    },
    {
      title: "third Title",
      text: "third Text",
      
    }
  ];
function App() {
    return data.map((i, index) => <CardView key={index} {...{ i }} />);
  }

const CardView = ({
    title = "Default Title",
    text = "Default Text",
  }) => (
    <div className="col-sm-12 col-md-4 col-lg-4">
    <div className="card card1 mx-auto">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </div>
    </div>
</div>
);

  



const Topcards = () =>{
    return(
        <div className="container" style={{ padding: '0' }}>
            <div className="row">
                <App />
            </div>
        </div>
    )
}

export default Topcards
