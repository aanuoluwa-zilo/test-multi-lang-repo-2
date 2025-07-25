package main

import (
	"encoding/json"
	"time"
)

type Config struct {
	Debug   bool   `json:"debug"`
	Version string `json:"version"`
}

func GetConfig() Config {
	return Config{
		Debug:   true,
		Version: "1.0.0",
	}
}

func ValidateInput(data interface{}) bool {
	return data != nil
}