module.exports = {
    "up": "CREATE TABLE coaches(" +
    "coach_id int NOT NULL AUTO_INCREMENT PRIMARY KEY," +
    "email VARCHAR(255), password VARCHAR(255)," +
    "fname VARCHAR(255), lname VARCHAR(255), phone_number VARCHAR(255)," +
    "bio VARCHAR(8000), photo VARBINARY(8000))",
    "down": "DROP TABLE coaches"
}
