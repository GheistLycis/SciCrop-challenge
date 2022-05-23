import axios from "axios"
import { useState, useEffect } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

import "../styles/Register.css"

//obs: mds que sono vontade de morrer
export default function Register() {
    //SAVING INPUTS
    const [values, setValues] = useState({})
    function handleChange(e) {
        const input = e.target.id === "name" ? e.target.value : parseFloat(e.target.value.replace(",", "."))
        setValues({ ...values, [e.target.id]: input })
    }
    useEffect(() => {
        handleCoords()
    }, [values])

    //VALIDATING FORM
    const [validation, setValidation] = useState({ 
        validLat: false, 
        validLon: false 
    }) 

    function handleCoords() {
        const { latitude="", longitude="" } = values
        
        setValidation({ 
            validLat: !isNaN(latitude), 
            validLon: !isNaN(longitude)
        })
    }

    //SUBMITING
    function handleSubmit(e) {
        e.preventDefault()

        for(let check in validation){
            if(!validation[check]){
                switch(check){
                    case "validLat":
                        alert("Insert a valid latitude!")
                        break
                    case "validLon":
                        alert("Insert a valid longitude!")
                        break
                    default:
                        break
                }
                return
            }
        }
 
        axios({
            method: "post",
            url: "http://localhost:8080/register",
            data: values
        })
            .then(res => alert(`${res.data} Go check the map!`))
            .catch(err => console.error(err))
    }
        
    return (
        <>
            <Header btnLink="/" btnText="Go to Map" />
            <main className="container">
                <div className="overlay">
                    <h1>New Location</h1>

                    <form autoComplete="off" onSubmit={handleSubmit} className="form"> 
                        <input id="name" required placeholder="Name" onChange={e => handleChange(e)} className="input" />
                        <input id="latitude" required placeholder="Latitude" onChange={e => handleChange(e)} className="input" />
                        <input id="longitude" required placeholder="Longitude" onChange={e => handleChange(e)} className="input" />

                        <button className="btnRegister">Register Location</button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}