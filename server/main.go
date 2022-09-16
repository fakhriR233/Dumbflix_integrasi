package main

import (
	"dumbflix_be/database"
	"dumbflix_be/pkg/mysql"
	"dumbflix_be/routes"
	"fmt"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {

	// env
	errEnv := godotenv.Load()
	if errEnv != nil {
		panic("Failed to load env file")
	}

	var AllowedHeaders = handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	var AllowedMethods = handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS", "PATCH", "DELETE"})
	var AllowedOrigins = handlers.AllowedOrigins([]string{"*"})

	var port = "5000"
	// initial DB
	mysql.DatabaseInit()
	
	// run migration
	database.RunMigration()
	
	r := mux.NewRouter()
	
	routes.RouteInit(r.PathPrefix("/api/v1").Subrouter())
	
	r.PathPrefix("/uploads").Handler(http.StripPrefix("/uploads/", http.FileServer(http.Dir("./uploads"))))
	
	fmt.Println("server running localhost:"+port)
	http.ListenAndServe("localhost:"+port,handlers.CORS(AllowedHeaders,AllowedMethods,AllowedOrigins)(r))
}