CREATE TABLE IF NOT EXISTS clarification (
    clarification_Id INT PRIMARY KEY,
    user_name VARCHAR(255),
    problem_id INT,
    time_submitted DATETIME,
    question VARCHAR(4096),
    reply VARCHAR(4096),
    FOREIGN KEY (user_name) REFERENCES users(handle),
    FOREIGN KEY (problem_id) REFERENCES Problems(Id)
);