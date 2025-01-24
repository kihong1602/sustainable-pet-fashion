# Build Application
FROM eclipse-temurin:17-jdk AS build

# Set working Directory
WORKDIR /app

# Copy gradle wrapper & source code
COPY backend/gradlew .
COPY backend/gradle ./gradle
COPY backend/build.gradle .
COPY backend/settings.gradle .
COPY backend/src ./src

# Make gradlew executable and build application
RUN chmod +x ./gradlew
RUN ./gradlew build --info -x test

# Create image
FROM eclipse-temurin:17-jdk-alpine

# Copy Jar file from the builder stage
COPY --from=build /app/build/libs/*.jar app.jar

# Expose Application Port
EXPOSE 8080

# Run Application
ENTRYPOINT ["java","-jar","/app.jar"]