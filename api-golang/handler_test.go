package main

import (
	"log"
	"net/http"
	"net/http/httptest"
	"regexp"
	"testing"

	"github.com/joho/godotenv"
)

func Test_UpdatePageCountHandler(t *testing.T) {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	req, err := http.NewRequest("GET", "/api/updatePageCount", nil)
	if err != nil {
		t.Fatal(err)
	}

	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(UpdatePageCountHandler)

	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v", status, http.StatusOK)
	}

	expectedPattern := `{"count":\s*\d+}`
	matched, err := regexp.MatchString(expectedPattern, rr.Body.String())
	if err != nil {
		t.Fatal(err)
	}
	if !matched {
		t.Errorf("handler returned unexpected body: got %v want pattern %v", rr.Body.String(), expectedPattern)
	}
}
