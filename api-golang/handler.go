package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/Azure/azure-sdk-for-go/sdk/data/aztables"
	"github.com/joho/godotenv"
)

const (
	tableName        = "pageviewcount"
	partitionKey     = "PageViewCount"
	rowKey           = "R1"
	connectionString = "COSMOS_DB_TABLE_CONNECTION_STRING"
)

type PageViewCountEntity struct {
	aztables.Entity
	Count int32 `json:"count"`
}

func UpdatePageCountHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	// message := "This HTTP triggered function executed successfully. Pass a name in the query string for a personalized response.\n"
	// name := r.URL.Query().Get("name")
	// if name != "" {
	// 	message = fmt.Sprintf("Hello, %s. This HTTP triggered function executed successfully.\n", name)
	// }
	// fmt.Fprint(w, message)

	serviceClient, err := aztables.NewServiceClientFromConnectionString(os.Getenv(connectionString), nil)
	if err != nil {
		log.Fatalf("Failed to create service client: %v", err)
	}

	tableClient := serviceClient.NewClient(os.Getenv("COSMOS_DB_TABLE_NAME"))

	// Retrieve the current page view count
	entity := PageViewCountEntity{
		Entity: aztables.Entity{
			PartitionKey: partitionKey,
			RowKey:       rowKey,
		},
	}

	getResp, err := tableClient.GetEntity(context.TODO(), partitionKey, rowKey, nil)
	if err != nil {
		log.Printf("Failed to get entity: %v", err)
	} else {
		err = json.Unmarshal(getResp.Value, &entity)
		if err != nil {
			log.Printf("Failed to unmarshal entity: %v", err)
		}
	}

	// Increment the page view count
	entity.Count++

	e, err := json.Marshal(entity)
	if err != nil {
		log.Fatalf("Failed to marshal entity: %v", err)
	}

	// Upsert the updated entity
	_, err = tableClient.UpsertEntity(context.TODO(), e, nil)
	if err != nil {
		log.Printf("Failed to upsert entity: %v", err)
	}

	json.NewEncoder(w).Encode(map[string]interface{}{
		"count": entity.Count,
	})
}

func HealthCheckHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprint(w, `{"status": "Healthy"}`)
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	fmt.Println("COSMOS_DB_TABLE_CONNECTION_STRING: ", os.Getenv("COSMOS_DB_TABLE_CONNECTION_STRING"))

	listenAddr := ":8080"
	if val, ok := os.LookupEnv("FUNCTIONS_CUSTOMHANDLER_PORT"); ok {
		listenAddr = ":" + val
	}
	http.HandleFunc("/api/updatePageCount", UpdatePageCountHandler)
	http.HandleFunc("/api/health", HealthCheckHandler)
	log.Printf("About to listen on %s. Go to http://127.0.0.1%s/", listenAddr, listenAddr)
	log.Fatal(http.ListenAndServe(listenAddr, nil))
}
