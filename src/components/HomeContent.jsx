import React, { useState, useEffect } from 'react';
import "./home.css";
import { Hero } from './Hero';
import { LottieComponent } from "./LottieComponent"

export const HomeContent = () => {
    const [peopleInSpace, setPeopleInSpace] = useState([]);
    const [numberOfPeople, setNumberOfPeople] = useState(0);

    useEffect(() => {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                setPeopleInSpace(data.people);
                setNumberOfPeople(data.number);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Hero />
            <div className='home-div'>
                <h2>Humans in space right now</h2>
                <p>Number of people: {numberOfPeople}</p>
                <ul>
                    {peopleInSpace.map(person => (
                        <li key={person.name}>
                            {person.name} - {person.craft}
                        </li>
                    ))}
                </ul>
                <LottieComponent />
            </div>
        </div>
    );
};
