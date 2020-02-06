FROM mcr.microsoft.com/dotnet
EXPOSE 8089
WORKDIR /app
ENV ASPNETCORE_URLS http://*:6000
COPY ./publish .
ENTRYPOINT ["dotnet", "CompassTutor.dll"]
