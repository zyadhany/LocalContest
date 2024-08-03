import React from 'react'
// import 'prismjs/themes/prism.css';
// import 'prismjs/components/prism-core';
// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-javascript';
// import Editor from 'react-simple-code-editor';
// import Prism from 'prismjs';
import { useState } from 'react';
import { useEffect } from 'react';

import './Submit.css';


const Submit = () => {

    const [language, setLanguage] = useState('JavaScript');
    const [code, setCode] = useState('');
    const [problems, setProblems] = useState([]);
    const [problem, setProblem] = useState(1);

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleProblemChange = (e) => {
        setProblem(e.target.value);
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // هنا يمكنك إضافة منطق إرسال النموذج، مثل إرسال البيانات إلى الخادم
        console.log("Submitting solution:", { language, code, problem });
    };

    useEffect(() => {
        const data = [
              {
                  index: "a",
                  name: "name1",
                  id: 1
              },
              {
                  index: "b",
                  name: "name2",
                  id: 2
              },
              {
                index: "a",
                name: "name1",
                id: 1
                },
                {
                    index: "b",
                    name: "name2",
                    id: 2
                },{
                    index: "a",
                    name: "name1",
                    id: 1
                },
                {
                    index: "b",
                    name: "name2",
                    id: 2
                },{
                    index: "a",
                    name: "name1",
                    id: 1
                },
                {
                    index: "b",
                    name: "name2",
                    id: 2
                },{
                    index: "a",
                    name: "name1",
                    id: 1
                },
                {
                    index: "b",
                    name: "name2",
                    id: 2
                },
          ];
          setProblems(data);
      }, []);
  
    //   console.log(problems);

  return (
    <>
      <section>
        <div className='submit-body'>
          <h2>Submit solution</h2>
          <div className='submit-parent'>
            <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='language'>Problem:</label>
                        <select
                            id='problem'
                            value={language}
                            onChange={handleProblemChange}
                        >
                            {problems.map((problem, index) => (
                            <option key={index} value={problem.id}>{problem.index} - {problem.name}</option>
                             ))}

                            {/* أضف لغات برمجة أخرى حسب الحاجة */}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='language'>Language:</label>
                        <select
                            id='language'
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            {/* <option value='JavaScript'>JavaScript</option> */}
                            {/* <option value='Python'>Python</option> */}
                            {/* <option value='Java'>Java</option> */}
                            <option value='C++'>C++</option>
                            {/* <option value='C#'>C#</option> */}
                            {/* <option value='Ruby'>Ruby</option> */}
                            {/* أضف لغات برمجة أخرى حسب الحاجة */}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='code'>Code Solution:</label>
                        <textarea
                            id='code'
                            rows='10'
                            cols='50'
                            value={code}
                            onChange={handleCodeChange}
                            placeholder='Write your code here...'
                            required
                        />
                    </div>
                    <div className='button-parent'>
                    <button type='submit'>Submit</button>
                    </div>
                </form>
          </div>
          </div>
      </section>
    </>
  )
}

export default Submit
