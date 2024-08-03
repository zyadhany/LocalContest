import React from 'react'
import './Contest.css'
import { /*useLocation,*/ useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contest = () => {
    // const location = useLocation();
    // const user = location.state?.user;
    const [showTimer, setShowTimer] = useState(true);
    const [problems, setProblems] = useState([]);
    useEffect(() => {
      const data = [
            {
                index: "book1",
                name: "name1",
                number_solved: "category1",
                problem_statue: false
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: false
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: true
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: false
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: true
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: false
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: true
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: true
            }
            ,
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: true
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: true
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: true
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: true
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: true
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: true
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: true
            },
            {
                index: "book2",
                name: "name2",
                number_solved: "category2",
                problem_statue: true
            }
        ];
        setProblems(data);
    }, []);

    //console.log(problems);

    // console.log(user);
    // console.log(user.state);


    const [timeLeft, setTimeLeft] = useState({});
    const [targetDate, setTargetDate] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      // Function to fetch the target date from the backend
      /*
      const fetchTargetDate = async () => {
        try {
          const response = await fetch('');
          const data = await response.json();
          setTargetDate(new Date(data.targetDate));
        } catch (error) {
          console.error('Error fetching target date:', error);
        }
      };*/

      // fetchTargetDate();
      setTargetDate(new Date('2024-08-02T20:34:50'));
    }, []);

    useEffect(() => {
      if (!targetDate) return;

      const interval = setInterval(() => {
        const now = new Date();////////////////////////////important
        const difference = targetDate - now;
        //console.log(difference);
        //console.log(targetDate);
        //console.log(now);
        
        if (difference <= 0) {
          clearInterval(interval);
          setShowTimer(false);
          // console.log(url);
          // navigate('/contest/${id}/problems' , {state : 'hi'}); // قم بتعديل المسار وفقًا للصفحة التي تريد الانتقال إليها
        } else {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          setTimeLeft({ days, hours, minutes, seconds });
        }
      }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, navigate, id]);

  return (
    <>
        <section>
          {(showTimer) ? (
            <div className='contest-parent'>
                {targetDate ? (
                  <div>
                    {/* <h1>Countdown Timer</h1> */}
                    <p>{timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds} </p>
                  </div>
                  ) : (
                  <p>Loading...</p>
                )}
            </div>
          ) : (
            <div className='problems-parent'>
                <div className='problems-main-row'>
                    <span className='problems-main-cell'>Index</span>
                    <span className='problems-main-cell' id='border'>Name</span>
                    <span className='problems-main-cell'>Number Solved</span>
                </div>
                {problems.map((problem, index) => (
                  <div key={index} className={problem.problem_statue ? 'solved' : 'row'}>
                      <span className='cell'>{problem.index}</span>
                      <span className='cell'>{problem.name}</span>
                      <span className='cell'>{problem.number_solved}</span>
                  </div>
                ))}
          </div>)}
        </section>
    </>
  )
}

export default Contest
