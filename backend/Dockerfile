# dans le pom.xml c'est indiqué java 11
FROM maven:3.8.6-openjdk-11 AS builder

WORKDIR /app

COPY pom.xml ./
RUN mvn dependency:go-offline

COPY src ./src

RUN mvn package -DskipTests

FROM openjdk:11-jre-slim

WORKDIR /app

COPY --from=builder /app/target/employee-management-app-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]