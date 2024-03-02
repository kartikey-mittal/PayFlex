import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

function CardDetail() {
        const [state, setState] = useState({
                number: "",
                expiry: "",
                cvc: "",
                name: "",
                focus: "",
        });

        const handleInputChange = (evt) => {
                const { name, value } = evt.target;

                setState((prev) => ({ ...prev, [name]: value }));
        };

        const handleInputFocus = (evt) => {
                setState((prev) => ({ ...prev, focus: evt.target.name }));
        };

        const maincontainer = {
                width: "95%",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px",
                marginLeft: 20,
                display: "flex",
                flexDirection: "column",
        };

        const maincontainertext = {
                marginLeft: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
        };
        const secondmain = {
                height: "34vw",
                marginTop: "30px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: "50px",
                
        };
        const secondmainone = {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "70%",
                height: 100,

        };
        const secondmaintwo = {
                width: "30%",
                display: "flex",
                flexDirection: "column",
        };

        return (
                <div style={maincontainer}>
                <div style={maincontainertext}>
                  <h2 style={{color:"black"}}>Account Details</h2>
                  <button
                    style={{
                        padding: "7px", 
                      borderRadius: 10,
                      height: 40,
                      width: 70,
                      marginTop: 10,
                    }}
                  >
                    Visa ^
                  </button>
                </div>
                <div
    style={{
      border: "1px dashed grey",
      marginTop: "20px",
      marginBottom: "20px",
    }}
  ></div>
                <div style={secondmain}>
                  <div style={secondmainone}>
                               <Cards
                      number={state.number}
                      expiry={state.expiry}
                      cvc={state.cvc}
                      name={state.name}
                      focused={state.focus}
                    
                      
                    />
                    
                    <div
                      style={{
                        borderRight: "2px dashed grey",
                        height: "250px", // Adjust the height as needed
                        margin: "0 80px", // Adjust the margin as needed
                      }}
                    />
                    <form
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "100px",
                        marginLeft: "0px",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        
                        <input
                          type="tel"
                          name="number"
                          placeholder="Card Number"
                          value={state.number}
                          onChange={handleInputChange}
                          onFocus={handleInputFocus}
                          style={{
                            marginBottom: "20px",
                            padding: 9,
                            borderRadius: 10,
                            borderwidth: "none",
                            fontSize:"15px"
                          }}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={state.name}
                          onChange={handleInputChange}
                          onFocus={handleInputFocus}
                          style={{
                            marginBottom: "20px",
                            padding: 9,
                            borderRadius: 10,
                            borderwidth: "none",
                            fontSize:"15px"
                          }}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                       
                        <input
                          type="tel"
                          name="expiry"
                          placeholder="MM/YY Expiry"
                          value={state.expiry}
                          onChange={handleInputChange}
                          onFocus={handleInputFocus}
                          style={{
                            marginBottom: "20px",
                            padding: 9,
                            borderRadius: 10,
                            borderwidth: "none",
                            fontSize:"15px"
                          }}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                       
                        <input
                          type="tel"
                          name="cvc"
                          placeholder="CVC"
                          value={state.cvc}
                          onChange={handleInputChange}
                          onFocus={handleInputFocus}
                          style={{
                            marginBottom: "20px",
                            padding: 9,
                            borderRadius: 10,
                            borderwidth: "none",
                            fontSize:"15px"
                          }}
                        />
                      </div>
                    </form>
                  </div>
                  <div style={secondmaintwo}>
                    <h3 style={{ color: "grey" }}>Active Card</h3>
                    <div
                      style={{
                        width: "300px",
                        height: "100px",
                        backgroundColor: "#F4FAF6",
                        display: "flex",
                        flexDirection: "row",
                        paddingLeft: "30px",
                        alignItems: "center",
                        borderRadius: "10px",
                        border: "3px dashed blue",
                      }}
                    >
                      <img
                        src="https://www.cardexpert.in/wp-content/uploads/2015/07/visa_signature_credit_card.png"
                        alt="card"
                        style={{
                          height: "50px",
                          width: "70px",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          paddingLeft: "20px",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            color: "black",
                            fontSize: "15px",
                            fontWeight: "bold",
                          }}
                        >
                          John-Snow Metal
                        </p>
                        <p
                          style={{
                            margin: "0",
                            color: "black",
                          }}
                        >
                          **4291 - Exp: 12/26
                        </p>
                        
                      </div>
                    </div>
                    <h3 style={{color:"green",marginTop:"50px"}}>More Card ➡</h3>
                    <div style={{borderBottom:"2px dashed grey",width:"100%",marginTop:"30px"}}></div>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"40px"}}>
                        <button style={{padding:"10px 40px",borderRadius:"20px",backgroundColor:"#20B756",color:"white",border:"none",cursor:"pointer",fontSize:"16px"}}>Pay Debt</button>
                        <button style={{padding:"10px 40px",borderRadius:"20px",borderColor:"green",color:"green" ,backgroundColor:"white" ,cursor:"pointer",fontSize:"16px"  }}>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
              

        );
}

export default CardDetail;
