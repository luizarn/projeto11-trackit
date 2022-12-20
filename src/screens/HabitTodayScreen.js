import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/NavBar"
import { useState, useContext, useEffect } from "react";
import AuthorizationContext from '../contexts/AuthorizationContext'
import axios from 'axios'
import dayjs from 'dayjs'
import RenderHabit from "../components/RenderHabit";

export default function HabitTodayScreen(){

let days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const [todayHabit, setTodayHabit] = useState(undefined)
const [token] = useContext(AuthorizationContext)
let day = dayjs().day()
const [concluded, setConcluded] = useState([])



    useEffect(() => {

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const promise = axios.get(URL, 
            {headers: 
                {Authorization : `Bearer ${token}`}
            })
        promise.then(res => {
            console.log(res.data)
            setTodayHabit(res.data)})     
    
        promise.catch(err => console.log(err.response.data)) 
        
    }, [])

    if (todayHabit === undefined) {
        return <div>Carregando...</div>
    }

    function changeCheck(habit){
        console.log(concluded)
       const isSelected = concluded.some((s) => s === habit)
        if (isSelected) {
                    const newList = concluded.filter((s) => s !== habit)
                    setConcluded(newList)
                    
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`
            const promise = axios.post(URL, {}, {headers: {Authorization : `Bearer ${token}`}})
            promise.then(res => {
                console.log(res.data)
                })     
        
            promise.catch(err => {
                alert(err.response.data.message)
                })         
        }    
        else{
            setConcluded([...concluded, habit])
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`
            const promise = axios.post(URL, {}, {headers: {Authorization : `Bearer ${token}`}})
            promise.then(res => {
                console.log(res.data)
                })     
        
            promise.catch(err => {
                alert(err.response.data.message)
                }) 
        }
        }  
    

    return(
        <>
               <Navbar/>
        <Container>
            <DayHabit>
                <h1 data-test="today">{days[day]}, {dayjs().format('DD/MM')}</h1>
                {(concluded.length === 0) ? (<h2 data-test="today-counter">Nenhum hábito concluído ainda</h2>) :
                (<h2 data-test="today-counter">{(concluded.length/todayHabit.lenght)*100}% dos hábitos concluídos</h2>)}
            </DayHabit>
            
        {todayHabit.map((habit) => (
                 <RenderHabit
                 key={habit.id}
                changeCheck={changeCheck}
                isSelected={concluded.some((s) => s === habit)}
                 habit={habit}
                 />
        ))}
        </Container>
        <Footer/>
        </>
    )
}


const DayHabit = styled.div`
   display:flex;
   flex-direction:column;
    margin-top:22px;
    margin-bottom:28px;
    h1{
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    h2{
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA; 
    }
`

const Container = styled.div`
background: #E5E5E5;
display:flex;
flex-direction:column;
padding:0 18px;
background-color:#E5E5E5;
height: 100vh;
width:100%;
margin-top: 70px;
span{
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
}
`
