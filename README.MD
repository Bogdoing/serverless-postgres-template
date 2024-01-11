DB Script:
CREATE TABLE books {
    book_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    prise INT NOT NULL
}