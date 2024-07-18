CREATE TABLE submissions (
    Submition_Id INT PRIMARY KEY,
    user_name VARCHAR(255),
    problem_id INT,
    time_submitted DATETIME,
    programing_lang VARCHAR(255),
    Code VARCHAR(4096),
    execution_time INT,
    memory INT,
    Status VARCHAR(255),
    score FLOAT,
    FOREIGN KEY (handle) REFERENCES users(handle),
    FOREIGN KEY (problem_id) REFERENCES Problems(Id)
);
