FROM amazoncorretto:11-alpine-jdk

LABEL key="daniela_morandin" 

COPY portfolio-frontend/yoProgramo-0.0.1-SNAPSHOT.jar yoProgramo-0.0.1-SNAPSHOT.jar 
ENTRYPOINT ["java","-jar","/yoProgramo-0.0.1-SNAPSHOT.jar"]