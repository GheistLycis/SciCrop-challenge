import axios from "axios"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import styles from "../styles/Register.module.css"

//obs: mds que sono vontade de morrer xande vc me paga
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
        <main className={styles.container}>
            <div className={styles.overlay}>
                <h1>New Location</h1>

                <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}> 
                    <input id="name" required placeholder="Name" onChange={e => handleChange(e)} className={styles.input} />
                    <input id="latitude" required placeholder="Latitude" onChange={e => handleChange(e)} className={styles.input} />
                    <input id="longitude" required placeholder="Longitude" onChange={e => handleChange(e)} className={styles.input} />

                    <button className={styles.btnRegister}>Register Location</button>
                </form>
            </div>

            <button><Link to="/">Go to Map</Link></button>
        </main>
    )
}