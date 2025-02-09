use city_taxi;

CREATE TABLE Drivers (
    DriverID INT PRIMARY KEY,
    DriverName VARCHAR(50) NOT NULL,
    DriverSurname VARCHAR(50) NOT NULL,
    DriverPassport VARCHAR(20) NOT NULL,
    isDriverWorking BIT NOT NULL,
    DriverRating DECIMAL(3,2) NOT NULL
);


CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    UserName VARCHAR(50) NOT NULL,
    UserSurname VARCHAR(50) NOT NULL,
    UserPhone VARCHAR(20) NOT NULL
);


CREATE TABLE Cars (
    CarID INT PRIMARY KEY,
    CarModel VARCHAR(50) NOT NULL,
    CarClass VARCHAR(50) NOT NULL,
    DriverID INT,
    CONSTRAINT fk_driver
      FOREIGN KEY (DriverID)
      REFERENCES Drivers(DriverID)
);


CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CarID INT NULL,
    UserID INT NOT NULL,
    CONSTRAINT fk_car
      FOREIGN KEY (CarID)
      REFERENCES Cars(CarID),
    CONSTRAINT fk_user
      FOREIGN KEY (UserID)
      REFERENCES Users(UserID)
);

INSERT INTO Drivers (DriverID, DriverName, DriverSurname, DriverPassport, isDriverWorking, DriverRating)
VALUES
  (1, 'Иван', 'Иванов', 'AA123456', 1, 4.9),
  (2, 'Пётр', 'Петров', 'BB987654', 1, 4.7),
  (3, 'Сергей', 'Сергеев', 'CC246810', 0, 5.0),
  (4, 'Алексей', 'Алексеев', 'DD135792', 1, 4.8);

INSERT INTO Users (UserID, UserName, UserSurname, UserPhone)
VALUES
  (1, 'Паша',  'Deathbox',  '+79997845321'),
  (2, 'Денис', 'Алексеевич', '+79997234562');

INSERT INTO Cars (CarID, CarModel, CarClass, DriverID)
VALUES
  (1, 'Toyota Camry', 'комфорт', 1),
  (2, 'Honda Accord', 'комфорт', 2),
  (3, 'BMW 5 Series', 'бизнес',  3),
  (4, 'Audi A6', 'комфорт', 4);

INSERT INTO Orders (OrderID, CarID, UserID)
VALUES
  (1, 1, 1),
  (2, 3, 2);


SELECT 
    c.CarID,
    c.CarModel,
    d.DriverName,
    d.DriverSurname,
    d.DriverRating
FROM Cars c
JOIN Drivers d 
    ON c.DriverID = d.DriverID
LEFT JOIN Orders o 
    ON c.CarID = o.CarID
WHERE c.CarClass = 'комфорт'
  AND d.DriverRating >= 4.8
  AND d.isDriverWorking = 1
  AND o.OrderID IS NULL
ORDER BY d.DriverRating DESC;

