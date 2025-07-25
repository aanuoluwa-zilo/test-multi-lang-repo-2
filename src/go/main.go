package main

import (
	"fmt"
	"log"
)

func main() {
	fmt.Println("Hello from Go!")
	
	result := add(5, 3)
	fmt.Printf("5 + 3 = %d\n", result)
}

func add(a, b int) int {
	return a + b
}