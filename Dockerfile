FROM jenkins/ssh-slave
EXPOSE 8089
WORKDIR /app
ENV ASPNETCORE_URLS http://*:5000
COPY ./publish .
ENTRYPOINT ["dotnet", "CompassTutor.dll"]
