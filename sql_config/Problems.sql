CREATE TABLE Problems (
    problem_Id INT PRIMARY KEY,
    Rate INT,
    problem_name VARCHAR(64),
    contest_id INT,
    package_url VARCHAR(128),
    problem_INDEX VARCHAR(8),
    FOREIGN KEY (contest_id) REFERENCES Contest(Id),
    UNIQUE(problem_INDEX, contest_id)
);
